import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import ButtonComponent from './ButtonComponent'
import FileItem from './FileItem'


export default function FileTasksList({ tasksList, deleteFile, previewFile, deleteAll, analyseAll }) {
    const [tasks, setTasks] = useState([])

    useEffect(() => {
        setTasks(tasksList)
    }, [tasksList])

    function search(task) {
        const value = task.target.value.trim()

        setTasks(tasksList)
        for (let i = 0; i < tasks.length; i++) {
            if (tasks[i].name === value) {
                setTasks(tasks.filter(task => task.name.trim() === value))
            }
        }
    }

    return (
        <div className='w-full max-w-sm'>
            {console.log("adad")}
            <div className='bg-white shadow-md rounded-lg px-2 py-2 mb-4 border-1'>
                <div className='block text-gray-700 text-lg font-semibold py-2 px-2'>Total files ({tasksList.length || 0})</div>
                <div className='flex items-center bg-gray-200 rounded-md'>
                    <FontAwesomeIcon className='fill-current text-gray-500 w-4 h-4 ml-3 pr-2' icon={faMagnifyingGlass}></FontAwesomeIcon>
                    <input className='w-full rounded-md bg-gray-200 text-gray-700 leading-tight focus:outline-none py-2 px-2' onChange={(e) => search(e)} placeholder='search'></input>
                </div>
                <div className="flex-grow border-t border-gray-400 mt-4"></div>
                <div className='py-3 text-sm'>
                    <div className='flex flex-col justify-start text-gray-700 rounded-md px-2 py-2 my-2 max-h-96 overflow-auto'>
                        {tasks.map((task, index) => {
                            return (
                            <div key={index} className='hover:bg-gray-200 hover:cursor-pointer'> 
                                {<FileItem index={index} name={task.name} size={task.size} deleteFile={deleteFile} previewFile={previewFile}></FileItem>}
                            </div>
                            )
                        })}
                    </div>
                </div>
                <div className='flex bg-gray-200 text-sm text-right py-2 px-3 -mx-2 -mb-2 rounded-b-lg place-content-end space-x-2'>
                    <ButtonComponent text={"Delete all"} onClick={deleteAll}></ButtonComponent>
                    <ButtonComponent text={"Analyse"} onClick={analyseAll}></ButtonComponent>
                </div>
            </div>
        </div>
    )
}
