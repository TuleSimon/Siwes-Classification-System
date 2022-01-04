import React from 'react'
import { useNavigate } from 'react-router'
import { Button, Divider } from '../../components'

function LandingPage() {
    const navigate = useNavigate()

    const navigateTo = (to) => (
        navigate(to)
    )

    return (
        <div className='landingpage flex flex-col font-mono text-shadow items-center text-center lg:p-20 p-2 justify-items-center content-center justify-center text-text'>
            <div>
                <span className='lg:text-6xl text-4xl  font-bold'> THE BEST PLATFORM FOR CONNECTING SIWES SUPERVISOR AND STUDENTS</span> <br/>
                <span className='text-xl'> Register an account today as a student and get asigned to a supervisor. <br/> Quickly and easily, Send quick messages to your supervisor, shedule supervision and much more</span>
             
            </div>
            <Divider/>
            <div className='flex gap-1 lg:gap-4 mt-8'>
                    <Button onClick={e => navigateTo('/students')}> STUDENT</Button>
                    <Button onClick={e => navigateTo('/supervisors')}> SUPERVISOR </Button>
            </div>
        </div>
    )
}

export default LandingPage
