import React from 'react'
import TaskListComponent from '../components/TaskListComponent'
import SpinnerComponent from "../components/SpinnerComponent"
import useFetch from '../Hooks/useFetch'

export default function Analyse() {
  const { response, error } = useFetch("http://localhost:5104/api/tasks")

  return (
    <div>
      <div>
        {response == null ? <SpinnerComponent error={error == null ? null : error.message + " ressources at http://localhost:5104/api/tasks"}></SpinnerComponent> : <TaskListComponent tasksList={response}></TaskListComponent>}
      </div>
    </div>
  )
}
