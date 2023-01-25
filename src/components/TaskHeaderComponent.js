import React from 'react'
export default function TaskHeaderComponent({ indvTask }) {

  return (
    <div className="bg-white h-28 px-3 py-2 border">
      <div className='flex flex-col'>
        <div className='font-medium text-lg mt-2'>{indvTask.name}</div>
        <div className='flex mt-6 space-x-3'>
          <div className='text-gray-400'>Completion time</div>
          <div className='font-medium'> {indvTask.taskCompletionTimeSeconds} sec</div>
          <div className='bg-gray-400 h-2 w-2 m-2 rounded-full'></div>

          <div className='text-gray-400'>Users</div>
          <div className='font-medium'>{indvTask.userAmount}</div>
          <div className='bg-gray-400 h-2 w-2 m-2 rounded-full'></div>

          <div className='text-gray-400'>Steps</div>
          <div className='font-medium'>{indvTask.tasksCount}</div>
          <div className='bg-gray-400 h-2 w-2 m-2 rounded-full'></div>
          
          <div className='text-gray-400'>User interactions</div>
          <div className='font-medium'>{indvTask.userInteractionsCount}</div>
          <div className='bg-gray-400 h-2 w-2 m-2 rounded-full'></div>
          
          <div className='text-gray-400'>Apps</div>
          <div className='font-medium'>{indvTask.applicationsUsed}</div>
        </div>
      </div>
    </div>
  )
}
