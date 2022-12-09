import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function UIComponent({ title, value, icon, totalUI }) {
    return (
    <div>
        <div className="text-center md:border-r">
            <div className='flex justify-end mr-3'>
                <FontAwesomeIcon icon={icon}></FontAwesomeIcon>
            </div>
            <div className='flex flex-1 justify-center mt-2'>
                <div className="text-md font-bold lg:text-5xl xl:text-4xl">
                    { value }
                </div>
                <div className='ml-2 text-sm mt-2.5 opacity-50 pt-1.5'>({Math.round(value / totalUI?.userInteractions.length * 100)})%</div>
            </div>
            <div className="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base m-2.5">
                { title }
            </div>
        </div>
    </div>
  )
}
