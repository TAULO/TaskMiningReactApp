import React, { useEffect, useState } from 'react'
import TaskHeaderComponent from './TaskHeaderComponent';
import TaskFlowComponent from './TaskFlowComponent';
import StatsComponent from './StatsComponent';
import TasksListComponent from './TasksListComponent';
import UIStatsComponent from './UIStatsComponent';
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashArrowUp } from '@fortawesome/free-solid-svg-icons';



export default function TaskListComponent({ tasksList }) {
    const [indvTasks, setIndvTasks] = useState({})
    const [tasks, setTasks] = useState([])
    const navigate = useNavigate()

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

    function getTask(task) {
        const value = task.target.textContent
        setIndvTasks(tasksList.find(task => task.name === value))
    }

    function orderName() {
        const sortArr = tasksList.sort((a, b) => {  
            if (a.name < b.name) {
              return -1;
            }
            if (a.name > b.name) {
              return 1;
            }
            return 0;
          })
        setTasks(sortArr)
    }

    function orderSteps() {
        setTasks(tasksList.sort((a, b) => parseInt(a.tasksCount) - parseInt(b.tasksCount)).reverse())
    }

    function orderLongestTask() {
        setTasks(tasksList.sort((a, b) => parseInt(a.taskCompletionTimeSeconds) - parseInt(b.taskCompletionTimeSeconds)).reverse())
    }

    function deleteAll() {
        fetch("http://localhost:5104/api/tasks/reset")
        .then(navigate("/"))
    }

    return (
        <div className='flex'>
            <div>
                <TasksListComponent tasksList={tasks} orderName={orderName} orderSteps={orderSteps} orderLongestTask={orderLongestTask} search={search} getTask={getTask}></TasksListComponent>
                <FontAwesomeIcon icon={faTrashArrowUp} className="w-full h-10 text-orange-500 hover:opacity-50 hover:cursor-pointer" onClick={deleteAll}></FontAwesomeIcon>
            </div>
            <div>
                <TaskHeaderComponent indvTask={indvTasks || {}}></TaskHeaderComponent>
                <TaskFlowComponent indvTask={indvTasks || {}}></TaskFlowComponent>
            </div>
            <div className='flex flex-col flex-1 border-b'>
                <StatsComponent object={indvTasks?.timeSpentPrApplication} unit="sec" taskCompletionTime={indvTasks?.taskCompletionTimeSeconds} title="Time spent per application"></StatsComponent>
                <StatsComponent object={indvTasks?.individualTaskUserCount} unit="steps" taskCompletionTime={indvTasks?.tasksCount} title="User total individual steps"></StatsComponent>
                <UIStatsComponent object={indvTasks?.individualTaskUserInteractionsCount} indvTask={indvTasks}></UIStatsComponent>
            </div>
        </div>
    )
}
