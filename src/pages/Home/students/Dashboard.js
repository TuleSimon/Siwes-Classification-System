import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaPenSquare, FaPowerOff, FaWhatsappSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { login, logout, selectUser, selectUserSupervisor } from "../../../redux/Slices";
import { useNavigate } from "react-router";
import axios from "axios";
import { Button } from "../../../components";

function Dashboard() {
  const navigate = useNavigate();
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const supervisor = useSelector(selectUserSupervisor);

  const logouts = () => {
    alert('logged out')
    return dispatch(logout())
  }


  useEffect(() => {
    if (user === null || user === undefined) {
      navigate("/");
    }
  });

  const changePic = () => {
    let newurl = prompt("Please enter the New PhotoURL", user?.profilePicture);
    console.log(newurl)
    if(newurl!=null || newurl!=''){
        console.log(newurl)
        axios.post('https://siwesclassificationsystem.herokuapp.com/students/updateProfilePicture', {"id":user._id, "profilePicture":newurl})
        .then((res) => {
            console.log(res)
            if(res!=null && res.data._id!=null){
                dispatch(login(res.data))
                alert('Profile Picture Updated')
            }
        }).catch(err => alert(err))
    }
    else
        alert('Canceled')
  }

  const ContactCard = ({ children, href }) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-bg flex  text-xl font-bold w-6"
      >
        {" "}
        {children}{" "}
      </a>
    );
  };

  const FieldCard = ({ children, classes,classes2, extra, subtitle }) => {
    return (
      <div
        className={`flex-cols shadow-2xl w-11/12 md:w-9/12 md:xl text-2xl text-black font-bold rounded-xl p-6 ${classes}`}
      >
        <div className={`text-black2 px-2 md:px-6 text-lg ${classes2}`}>{subtitle}</div>

        <hr />
        <div className=" p-2 md:p-6 truncate">{children}</div>
        {extra && (
          <div className="text-xl md:lg px-2 md:px-6 text-bg truncate">{extra} </div>
        )}
      </div>
    );
  };

  return (
    <div>
      {user && (
        <div className="flex md:flex-row flex-col bg-gray-200 fullH  place-content-center gap-8 lg:px-12 px-6">
          <div className="flex flex-col bg-white w-full  pb-6 rounded-xl overflow-hidden shadow-xl place-items-center place-content-start basis-3/5">
            <div className="w-full flex place-content-center  userprofile relative px-12">
              <img
                alt="WallPaper"
                src={user.profilePicture?user.profilePicture:`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyz-77X11MoGE22xVjjPhbpW6lPj6I0SkcTQ&usqp=CAU`}
                className="rounded-full w-10/12 sm:w-6/12 lg:w-4/12 md:w-8/12 h-72  md:h-46  object-cover absolute -bottom-1/2 shadow-lg shadow-gray-600"
              />
                    <FaPenSquare onClick={changePic} className='absolute -bottom-1/2 shadow-4xl shadow-black text-text w-8 cursor-pointer hover:text-bg h-8'/>
            </div>
            <FieldCard
              classes="mt-40"
              extra={`Mat No: ${user.matno}`}
              subtitle={"Full Name"}
            >
              {user.fullname}
            </FieldCard>
            <FieldCard
              extra={`Phone No: ${user.phone}`}
              subtitle={"Email Address"}
            >
              {user.email}
            </FieldCard>
            <FieldCard extra={`State: ${user.state}`} subtitle={"Address"}>
              {user.address}
            </FieldCard>
            <FieldCard subtitle={"Institution"}>{user.institution}</FieldCard>
          </div>
          <div className="flex flex-col grow bg-white pb-6 rounded-xl overflow-hidden shadow-xl place-items-center place-content-start ">
            <div className="w-full flex flex-col place-content-center place-items-center  pt-4 relative px-2">
              <img
                alt="WallPaper"
                src={supervisor?.profilePicture?supervisor?.profilePicture:`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyz-77X11MoGE22xVjjPhbpW6lPj6I0SkcTQ&usqp=CAU`}
                className=" w-11/12  h-68  md:h-56  object-cover shadow-lg shadow-gray-600"
              />

              <div
                className={`flex w-full flex-col place-items-center place-content-center md:xl text-2xl text-black font-bold  `}
              >
                <div className="p-2 truncate">{supervisor?.fullname}</div>
                <hr />
                <div className="text-black2 px-6 text-lg">Supervisor</div>
                <div className="flex gap-6 place-items-center place-content-center text-black2 text-lg font-bold">
                  <ContactCard href={"https://wa.me/" + supervisor?.phone}>
                    <FaWhatsappSquare />{" "}
                  </ContactCard>{" "}
                  |
                  <ContactCard href={"mailto:" + supervisor?.email}>
                    <MdEmail />{" "}
                  </ContactCard>
                </div>
                <FieldCard
                  extra={`Phone No: ${supervisor?.phone}`}
                  subtitle={"Email Address"}
                  classes="w-full text-lg p-1"
                  classes2='text-lg p-1'
                >
                  {supervisor?.email}
                </FieldCard>
                <Button onClick={e => dispatch(logouts())} styles='lg:w-5/6 mt-6 mb-2 gap-4 flex mx-auto place-self-center place-items-center place-content-center justify-self-center'>
                    <FaPowerOff/> Log Out
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
