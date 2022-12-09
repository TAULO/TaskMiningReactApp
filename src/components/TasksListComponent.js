import React, { useRef, useState } from 'react'
import { useNavigate } from "react-router-dom";
import ButtonComponent from './ButtonComponent'
import TaskListItem from './TaskListItem'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faSignature } from '@fortawesome/free-solid-svg-icons'

export default function TasksListComponent({ tasksList, orderName, orderSteps, orderLongestTask, search, getTask }) {
    const [isOrderVisible, setIsOrderVisible] = useState(false)
    const [selectedTasks, setSelectedTasks] = useState([])
    const inputRef = useRef(null)
    const navigate = useNavigate()

   
    function analyseSelected() {
        if (inputRef.current.value.length <= 0) {
            alert("Please give task a name")
        } else {
            navigate("/analyse/selected", {state: {
                name: inputRef.current.value,
                tasks: selectedTasks
            }})
        }
    }

    function analyseAll() {
        if (inputRef.current.value.length <= 0) {
            alert("Please give task a name")
        } else {
            navigate("/analyse/all", {state: {
                name: inputRef.current.value,   
                tasks: tasksList
            }})
        }
    }

    return (
        <div className='max-w-md border-b'>
            <div className='bg-white shadow-md rounded-lg px-2 py-2 mb-4'>
                <div className='block text-gray-700 text-lg font-semibold py-2 px-2'>Total tasks ({tasksList.length || 0})</div>
                <div className='flex items-center bg-gray-200 rounded-md'>
                    <FontAwesomeIcon className='fill-current text-gray-500 w-4 h-4 ml-3 pr-2' icon={faMagnifyingGlass}></FontAwesomeIcon>
                    <input className='w-full rounded-md bg-gray-200 text-gray-700 leading-tight focus:outline-none py-2 px-2' onChange={(e) => search(e)} placeholder='search'></input>
                    <div  onMouseEnter={() => {setIsOrderVisible(true)}} onMouseLeave={() => {setIsOrderVisible(false)}}>
                        <ButtonComponent text={"Sort"}></ButtonComponent>
                        <div style={{display: isOrderVisible ? "flex" : "none"}} className="z-10 absolute flex-col">
                            <ButtonComponent text="Name" onClick={orderName}></ButtonComponent>
                            <ButtonComponent text="Steps" onClick={orderSteps}></ButtonComponent>
                            <ButtonComponent text="Longest" onClick={orderLongestTask}></ButtonComponent>
                        </div>
                    </div>
                </div>
                <div className="flex-grow border-t border-gray-400 mt-4"></div>
                <div className='py-3 text-sm'>
                    <div className='flex flex-col justify-start text-gray-700 rounded-md px-2 py-2 my-2 max-h-96 overflow-auto'>
                        {tasksList.map((task, index) => {
                            return (
                            <div key={index} className='hover:bg-gray-200 hover:cursor-pointer' onClick={(e) => getTask(e)}> 
                                {<TaskListItem index={index} task={task} selectedTasks={selectedTasks} setSelectedTasks={setSelectedTasks}></TaskListItem>}
                            </div>
                            )
                        })}
                    </div>
                </div>
                <div className='class="flex bg-gray-200 text-sm text-right py-2 px-3 -mx-2 -mb-2 rounded-b-lg'>
                    <div className='flex items-center'>
                        <FontAwesomeIcon className='fill-current text-gray-500 w-4 h-4 ml-3 pr-2' icon={faSignature}></FontAwesomeIcon>
                        <input className='w-72 rounded-md bg-gray-200 text-gray-700 leading-tight focus:outline-none py-2 px-2' ref={inputRef} placeholder='name'></input>
                        <div className='mr-2'>
                            <ButtonComponent text={"Analyse Selected"} onClick={analyseSelected}></ButtonComponent>
                        </div>
                        <ButtonComponent text={"Analyse All"} onClick={analyseAll}></ButtonComponent>
                    </div>
                </div>
            </div>
        </div>
    )
}
