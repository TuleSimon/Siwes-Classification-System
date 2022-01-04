import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Outlet, useNavigate } from 'react-router'
import { Footer, Navbar } from '../../components'

function Home() {
    
    const navigate = useNavigate()
    const user = useSelector((state) => state.slice.user)
    const supervisor = useSelector((state) => state.slice.supervisor)
    
    useEffect(() => {
       
        console.log('hgjh')
         if(supervisor!=null){
            navigate('/supervisors/dashboard')
        }
        else if(user!=null){
            navigate('/students/dashboard')
        }
    }, [user,supervisor])

    return (
        <div className='flex flex-col'>
           <Navbar/>
           <Outlet/>
           <Footer/>
        </div>
    )
}

export default Home
