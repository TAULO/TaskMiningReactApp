import React from 'react'
import useAnalyse from '../hooks/useAnalyse'

export default function AllTaskHeaderComponent({ tasks }) {
    const { average, taskCount, users, uiCount, stepsCount, apps } = useAnalyse()
    return (
        <div className="bg-white h-28 px-3 py-2 border">
        <div className='flex flex-col'>
            <div className='font-medium text-lg mt-2'>{tasks.name} ({taskCount.response})</div>
            <div className='flex mt-6 space-x-3'>
                <div className='text-gray-400'>Avg. compl. time</div>
                <div className='font-medium'>{Math.round(average.response)} sec</div>
                <div className='bg-gray-400 h-2 w-2 m-2 rounded-full'></div>

                <div className='text-gray-400'>Users</div>
                <div className='font-medium'>{users.response}</div>
                <div className='bg-gray-400 h-2 w-2 m-2 rounded-full'></div>

                <div className='text-gray-400'>Steps</div>
                <div className='font-medium'>{stepsCount.response}</div>
                <div className='bg-gray-400 h-2 w-2 m-2 rounded-full'></div>
                
                <div className='text-gray-400'>User interactions</div>
                <div className='font-medium'>{uiCount.response}</div>
                <div className='bg-gray-400 h-2 w-2 m-2 rounded-full'></div>
                
                <div className='text-gray-400'>Apps</div>
                <div className='font-medium'>{apps.response}</div>
            </div>
        </div>
    </div>
  )
}
