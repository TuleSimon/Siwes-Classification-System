import axios from 'axios'
import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { Button, HeaderText } from '../../../../components'
import SubtitleText from '../../../../components/texts/SubtitleText'

function SignUp() {

    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const [employeeno, setEmployeeNo] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    

    const submitForm = (e) => {
        e.preventDefault();
        setLoading(true)
        try {
          if (
            employeeno.length > 3 &&
            name.length > 3 &&
            phone.length > 3 &&
            email.length > 3 &&
            password.length > 5
          ) {
            axios
              .post("https://siwesclassificationsystem.herokuapp.com/supervisors/signup", {
                fullname: name,
                employeeno: employeeno,
                phone: phone,
                email: email,
                password: password,
              })
              .then(() => {
                  alert('account created, now sign in')
                  setLoading(false)
                  navigate('/supervisors/signin')
              }).
              catch(err => {alert(err) 
                setLoading(false)});
          } else {
            setLoading(false)
            alert(
               
              "invalid inputs, make sure all fields are greater than 3 in length and password is greather than 5"
            );
          }
        } catch (e) {
          alert(e);
          setLoading(false)
        }
      };
    

    return (
        <div className='flex fullH flex-cols justify-items-center content-center justify-center items-center'>
            <form className='forms' onSubmit={e => submitForm(e)}>
                <HeaderText> Create An Account </HeaderText>
                
                <SubtitleText>Enter Your Full Name: </SubtitleText>
                <input className='inputF' placeholder='Enter Full name' type='text' value={name} onChange={e => setName(e.target.value)}/>

                <SubtitleText>Enter Your Employee No: </SubtitleText>
                <input className='inputF' placeholder='Enter Employee No' type='text' value={employeeno} onChange={e => setEmployeeNo(e.target.value)}/>

                <SubtitleText>Enter Your Email Address: </SubtitleText>
                <input className='inputF' placeholder='Email address' type='email' value={email} onChange={e => setEmail(e.target.value)}/>

                <SubtitleText>Enter Your phone No: </SubtitleText>
                <input className='inputF' placeholder='Phone No.' type='number' value={phone} onChange={e => setPhone(e.target.value)}/>

                <SubtitleText  styles='mt-2'>Create a Password: </SubtitleText>
                <input className='inputF' placeholder='Password' type='password' value={password} onChange={e => setPassword(e.target.value)}/>

                <Button  disabled={loading} 
          type="submit"
          styles="lg:w-3/6 mx-auto flex place-items-center place-self-center justify-self-center"
        >
              {loading && <progress class="pure-material-progress-circular"/>}
          {" "}
          Create Account
        </Button>
                <span className='text-black2  place-self-center '> Already have an account? <Link to='/supervisors/signin' className='text-bg'> Sign In</Link></span>
            </form>
        </div>
    )
}

export default SignUp
