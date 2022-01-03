import React from 'react'
import { Outlet } from 'react-router'

function Students() {

    return (
        <div className='students'>
            <Outlet/>
        </div>
    )
}

export default Students
