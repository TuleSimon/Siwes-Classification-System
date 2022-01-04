import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, HeaderText } from "../../../../components";
import { RegionDropdown } from "react-country-region-selector";
import SubtitleText from "../../../../components/texts/SubtitleText";
import axios from "axios";

function SignUp() {
  const [matno, setMatNo] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(false)
  const [state, setState] = useState("");
  const [institution, setInstitution] = useState("");

  const navigate = useNavigate()
  const submitForm = (e) => {
    e.preventDefault();
    setLoading(true)
    try {
      if (
        matno.length > 3 &&
        name.length > 3 &&
        phone.length > 3 &&
        email.length > 3 &&
        address.length > 3 &&
        institution.length > 3 &&
        state.length > 3 &&
        password.length > 5
      ) {
        axios
          .post("https://siwesclassificationsystem.herokuapp.com/students/signup", {
            fullname: name,
            matno: matno,
            phone: phone,
            email: email,
            address: address,
            institution: institution,
            state: state,
            password: password,
          })
          .then((res) => {
              alert('account created, now sign in')
              setLoading(false)
              navigate('/students/signin')
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
    <div className="flex fullH flex-cols justify-items-center content-center justify-center items-center">
      <form className="forms" onSubmit={(e) => submitForm(e)}>
        <HeaderText> Create An Account </HeaderText>

        <SubtitleText>Enter Your Full Name: </SubtitleText>
        <input
          className="inputF"
          placeholder="Enter Full name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <SubtitleText>Enter Your Mat No: </SubtitleText>
        <input
          className="inputF"
          placeholder="Enter Matno"
          type="text"
          value={matno}
          onChange={(e) => setMatNo(e.target.value)}
        />

        <SubtitleText>Enter Your Email Address: </SubtitleText>
        <input
          className="inputF"
          placeholder="Email address"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <SubtitleText>Enter Your phone No: </SubtitleText>
        <input
          className="inputF"
          placeholder="Phone No."
          type="number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <SubtitleText styles="mt-2">Internship State: </SubtitleText>
        <RegionDropdown
          country={"Nigeria"}
          value={state}
          classes="inputF"
          defaultOptionLabel="Select Your IT State"
          blankOptionLabel="Select your IT state"
          onChange={(val) => setState(val)}
        />

        <SubtitleText styles="mt-2">Enter Your IT Location: </SubtitleText>
        <input
          className="inputF"
          placeholder="Enter Your IT Location"
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />

        <SubtitleText styles="mt-2">Enter Your Institution: </SubtitleText>
        <input
          className="inputF"
          placeholder="Enter Your Institution"
          type="text"
          value={institution}
          onChange={(e) => setInstitution(e.target.value)}
        />

        <SubtitleText styles="mt-2">Create a Password: </SubtitleText>
        <input
          className="inputF"
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button  disabled={loading} 
          type="submit"
          styles="lg:w-3/6 mx-auto flex place-items-center place-self-center justify-self-center"
        >
              {loading && <progress class="pure-material-progress-circular"/>}
          {" "}
          Create Account
        </Button>
        <span className="text-black2  place-self-center ">
          {" "}
          Already have an account?{" "}
          <Link to="/students/signin" className="text-bg">
            {" "}
            Sign In
          </Link>
        </span>
      </form>
    </div>
  );
}

export default SignUp;
