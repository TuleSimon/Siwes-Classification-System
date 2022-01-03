import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, HeaderText } from '../../../../components'
import SubtitleText from '../../../../components/texts/SubtitleText'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { login, setSupervisor } from '../../../../redux/Slices'

function Login() {
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)
    const [matno, setMatNo] = useState('')
    const [password, setPassword] = useState('')

    const submitForm = (e) => {
        setLoading(true)
        e.preventDefault();
        console.log('signing in')
        axios.post('http://localhost:5000/students/signin', {"matno":matno, "password":password})
        .then((res) => {
            console.log(res)
            if(res.data[0]==null){
                alert('User Not Found')   
            }
            else{
                alert('signed in')
                dispatch(login(res.data[0]))
                if(res.data[0].supervisorID!=null)
                axios.get('http://localhost:5000/supervisors/' + res.data[0].supervisorID).then(
                    res => dispatch(setSupervisor(res.data))
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
                <HeaderText> Login </HeaderText>
                <SubtitleText>Mat No: </SubtitleText>
                <input className='inputF' name='matno' placeholder='Matno' type='text' value={matno} onChange={e => setMatNo(e.target.value)}/>
                <SubtitleText  styles='mt-2'>Password: </SubtitleText>
                <input className='inputF' name='password' placeholder='Password' type='password' value={password} onChange={e => setPassword(e.target.value)}/>
                <Button disabled={loading} type='submit' styles='lg:w-3/6 mx-auto place-self-center justify-self-center'>
                {loading && <progress class="pure-material-progress-circular"/>} Sign In</Button>
                <span className='text-black2  place-self-center '>   Dont have an account? <Link to='/students/signup' className='text-bg'> Sign Up</Link></span>
            </form>
        </div>
    )
}

export default Login
