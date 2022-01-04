import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, HeaderText } from '../../../../components'
import SubtitleText from '../../../../components/texts/SubtitleText'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { login, loginSupervisor, setSupervisor, setSupervisorstudents } from '../../../../redux/Slices'

function Login() {
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)
    const [employeeno, setEmployeeNo] = useState('')
    const [password, setPassword] = useState('')

    const submitForm = (e) => {
        setLoading(true)
        e.preventDefault();
        console.log('signing in')
        axios.post('https://siwesclassificationsystem.herokuapp.com/supervisors/signin', {"employeeno":employeeno, "password":password})
        .then((res) => {
            console.log(res)
            if(res.data[0]==null){
                alert('User Not Found')   
            }
            else{
                alert('signed in')
                dispatch(loginSupervisor(res.data[0]))
                if(res.data[0]._id!=null)
                axios.post('https://siwesclassificationsystem.herokuapp.com/supervisors/students', {"id":res.data[0]._id}).then(
                    res => dispatch(setSupervisorstudents(res))
                ).catch(err => alert(err))
            }
            setLoading(false)
        }).catch(err => {
            setLoading(false)
            alert(err)
        })
       
    }

    return (
        <div className='flex fullH  flex-cols justify-items-center content-center justify-center items-center'>
            <form className='forms' onSubmit={e => submitForm(e)}>
                <HeaderText> Supervisor Login </HeaderText>
                <SubtitleText>Employee No: </SubtitleText>
                <input className='inputF' name='employeeno' placeholder='Employee No' type='text' value={employeeno} onChange={e => setEmployeeNo(e.target.value)}/>
                <SubtitleText  styles='mt-2'>Password: </SubtitleText>
                <input className='inputF' name='password' placeholder='Password' type='password' value={password} onChange={e => setPassword(e.target.value)}/>
                <Button disabled={loading} type='submit' styles='lg:w-3/6 mx-auto place-self-center justify-self-center'>
                {loading && <progress class="pure-material-progress-circular"/>} Sign In</Button>
                <span className='text-black2  place-self-center '>   Dont have an account? <Link to='/supervisors/signup' className='text-bg'> Sign Up</Link></span>
            </form>
        </div>
    )
}

export default Login
