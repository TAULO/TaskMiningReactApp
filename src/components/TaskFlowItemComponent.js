import React from 'react'
import { Handle, Position } from 'reactflow';


export default function TaskFlowItemComponent({ data }) {
  return (
      <div>
        <Handle type="target" position={Position.Top}></Handle>
        <div className='bg-white shadow-2xl p-6 rounded-2xl border-2 border-gray-50'>
            <div className='flex flex-col'>
                <div className='text-gray-300'>{data.data.index}</div>
                <div className="font-bold text-gray-600 text-center">{data.data.task}</div>
                <div className='w-full border-t-2 border-gray-200 mt-2 text-gray-400 flex font-medium'>
                    <div className='mr-auto'>{data.data.time} sec</div>
                    <div className='bg-gray-400 h-2 w-2 m-2 rounded-full'></div>
                    <div className='ml-auto'>{data.data.ui.replace("_", " ").replace("_", " ")}</div>
                </div>
            </div>
        </div>
        <Handle type="source" position={Position.Bottom}/>
    </div>
  )
}