import React from 'react'
import AllTaskHeaderComponent from '../components/AllTaskHeaderComponent'
import StatsComponent from "../components/StatsComponent"
import { useLocation } from 'react-router-dom'
import useAnalyse from '../hooks/useAnalyse'
import TaskFlowComponent from "../components/TaskFlowComponent"
import ErrorFetchComponent from '../components/ErrorFetchComponent'

export default function AnalyseAll() {
  const location = useLocation()
  const { totalTaskData, totalTaskUI, completionTime, stepsCount, uiCount, average } = useAnalyse()

  return (
    <div className='flex'>
        <div>
          <AllTaskHeaderComponent tasks={location.state}></AllTaskHeaderComponent>
          {/* <TaskFlowComponent allTasks={location.state.tasks}></TaskFlowComponent> */}
        </div>
        <div className='flex flex-col'>
          {completionTime?.error != null ? <ErrorFetchComponent></ErrorFetchComponent> : <StatsComponent object={completionTime?.response} title="Completion times" taskCompletionTime={average?.response} unit="sec"></StatsComponent>}
          {totalTaskData?.error != null ? <ErrorFetchComponent></ErrorFetchComponent> : <StatsComponent object={totalTaskData?.response} title="Steps count" taskCompletionTime={stepsCount?.response}></StatsComponent>}
          {totalTaskUI?.error != null ? <ErrorFetchComponent></ErrorFetchComponent> : <StatsComponent object={totalTaskUI?.response} title="User interactions count" taskCompletionTime={uiCount?.response}></StatsComponent>}
        </div>
    </div>
  )
}
