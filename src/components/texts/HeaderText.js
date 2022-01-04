import React from 'react'
import { Divider } from '..'

function HeaderText({children}) {
    return (
        <span className='text-3xl text-black font-bold'>
            {children}
            <Divider/>
        </span>
    )
}

export default HeaderText
