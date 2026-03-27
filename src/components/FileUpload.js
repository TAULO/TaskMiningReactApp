import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import UploadFilesComponent from './UploadFilesComponent';
import FileTasksList from './FileTasksList';
import SpinnerComponent from './SpinnerComponent';
import useFetch from '../Hooks/useFetch';

function FileUpload() {
    const [filesArr, setFilesArr] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState("")
    const navigate = useNavigate()
    const deleteAll = useFetch("http://localhost:5104/api/tasks/reset", { mode: "no-cors", method: "GET" })

    function readFiles(file) {
        const arr = []
        for (let i = 0; i < file.length; i++) {
            const reader = new FileReader()
            reader.addEventListener("load", (e) => {
                const index = i + 1
                const data = {
                    id: index,
                    name: file[i].name.trim(),
                    size: (file[i].size / 1000).toFixed(1),
                    data: e.target.result
                }
                arr.push(data)
            })
            reader.readAsDataURL(file[i])
            reader.addEventListener("loadend", () => { setFilesArr(arr) })
        }
    }

    function search() { }

    function previewFile(file) {
        const name = file.textContent.trim()
        const data = (filesArr.filter(files => files.name === name).map(items => items.data))[0].split(",")[1]

        const decode = atob(data)
        const w = window.open("")
        w.document.write(`<p>${decode}</p>`)
    }

    function deleteFile(file) {
        // const id = file.nextSibling.innerHTML
        // console.log(file)
        // if (id !== null) {
        //     setFilesArr(filesArr.filter(files => files.id.toString() !== id))
        // }
    }


    function deleteAllFiles() {
        //     useFetch("http://localhost:5104/api/tasks/reset", {mode: "no-cors", method: "GET"})
        //     setFilesArr([])
        // }
    }

    const promise = () => new Promise((resolve, reject) => {
        if (filesArr.length <= 0) {
            window.alert("No tasks selected")
            return
        }

        const bodyArr = []
        setIsLoading(true)
        console.log("analysing...")
        setTimeout(() => {
            for (let i = 0; i < filesArr.length; i++) {
                const index = i + 1
                const body = {
                    id: index,
                    name: filesArr[i].name.trim(),
                    data: filesArr[i].data
                }
                bodyArr.push(body)
            }
            try {
                fetch(`http://localhost:5104/api/tasks`, {
                    mode: "no-cors",
                    method: "POST",
                    headers: { "Content-Type": "Application/JSON" },
                    body: JSON.stringify(bodyArr)
                })
                    .then(res => console.log("Request: ", res))
            }
            catch (e) {
                reject(e)
            }
            resolve(bodyArr)
        }, 2000)
    })
        .then(data => console.log("data", data))
        .catch(e => setError(e.message))
        .finally(() => {
            setIsLoading(false)
            console.log("done analysing")
            navigate("/analyse")
        })

    return (
        <div className='flex flex-1 justify-center align-middle space-x-40 mt-72'>
            {console.log(filesArr.length)}
            {isLoading ? <SpinnerComponent error={error}></SpinnerComponent> : null}
            <FileTasksList tasksList={filesArr} search={search} deleteFile={(e) => deleteFile(e)} previewFile={(e) => previewFile(e.target)} deleteAll={() => deleteAll} analyseAll={promise} ></FileTasksList>
            <UploadFilesComponent readFiles={readFiles}></UploadFilesComponent>
        </div>
    )
}

export default FileUpload;
