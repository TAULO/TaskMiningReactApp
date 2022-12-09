import React from 'react'
import AllTaskHeaderComponent from '../components/AllTaskHeaderComponent'
import { useLocation } from 'react-router-dom'

export default function AnalyseSelected() {
const location = useLocation()
console.log(location)

return (
    <div>
        <AllTaskHeaderComponent tasks={location.state}></AllTaskHeaderComponent>
    </div>
)
}
