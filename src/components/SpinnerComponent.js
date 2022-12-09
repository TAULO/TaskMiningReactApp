import React from 'react'

export default function SpinnerComponent() {
  return (
    <div className='absolute right-1/2 bottom-1/2  transform translate-x-1/2 translate-y-1/2 '>
        <div className='border-t-transparent border-solid animate-spin rounded-full border-orange-500 border-8 h-12 w-12'></div>
    </div>
  )
}
  