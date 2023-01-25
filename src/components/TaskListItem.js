import React, { useState } from 'react'

export default function TaskListItem({ index, task, selectedTasks, setSelectedTasks }) {
  
  const [isChecked, setIsChecked] = useState(false)
  const [isSelected, setIsSelected] = useState(false)

  function handleCheck(cb) {
    setIsChecked(!isChecked)
    const parentNode = cb.parentElement.parentElement

    if (cb.checked) {
      parentNode.style["background-color"] = "rgba(0, 255, 0, 0.2)"
      selectedTasks.push(task)
    } else {
      parentNode.style["background-color"] = "white"
      setSelectedTasks(selectedTasks.filter(curr => curr["ID"] !== task["ID"]))
    }
  }

  function handleSelected(element) {
    setIsSelected(!isSelected)

    const parentNode = element.parentElement
    // isSelected ? parentNode.style["background-color"] = "rgba(0, 255, 0, 0.2)" : parentNode.style["background-color"] = "white"
  }

  return (
    <div key={index} className='flex flex-row m-2' onClick={(e) => handleSelected(e.target)}>
      <input className='form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-orange-500 checked:border-orange-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer' type="checkbox" onClick={(e) => handleCheck(e.target)}></input>
        <div className='flex-grow font-medium px-2'>{task.name}</div>
        <div className='opacity-60 align-middle justify-self-center'>steps: {task.tasksCount}</div>
    </div>
  )
}
