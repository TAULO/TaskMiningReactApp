import React from 'react'
import TaskListComponent from '../components/TaskListComponent'
import SpinnerComponent from "../components/SpinnerComponent"
import useFetch from '../hooks/useFetch'

export default function Analyse({ route }) {

  console.log(route)

  const { response } = useFetch("http://localhost:5104/api/tasks")

  return (
    <div>
      <div>
        {response == null ? <SpinnerComponent></SpinnerComponent> : <TaskListComponent tasksList={response}></TaskListComponent>}
      </div>
    </div>
  )
}
