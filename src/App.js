import React, { Suspense } from "react";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { Navbar } from "./components";
import LandingPage from "./pages/Home/LandingPage";
import Dashboard from "./pages/Home/students/Dashboard";
import { Login, Signup } from "./pages/Home/students/forms";
import SupervisorDashboard from "./pages/Home/supervisors/Dashboard";
import { SupervisorLogin, SupervisorSignup } from "./pages/Home/supervisors/forms";
import Supervisors from "./pages/Home/supervisors/Supervisors";


function App() {
  const Home = React.lazy(() => import('./pages/Home/Home.jsx'));
  const Students = React.lazy(() => import('./pages/Home/students/Students'));

  return (
    <BrowserRouter>
    <Suspense fallback={<p>Loading...</p>}>
      <Routes>
          <Route exact path='/' element={ <Home/>}>
            <Route index element={<LandingPage/>}/>
            <Route  path='/students' element={<Students/>}>
              <Route index  element={<Login/>}/>
              <Route path='/students/signin' element={<Login/>}/>
              <Route path='/students/signup' element={<Signup/>}/>
              <Route path='/students/dashboard' element={<Dashboard/>}/>
            </Route>
            <Route  path='/supervisors' element={<Supervisors/>}>
              <Route index  element={<SupervisorLogin/>}/>
              <Route path='/supervisors/signin' element={<SupervisorLogin/>}/>
              <Route path='/supervisors/signup' element={<SupervisorSignup/>}/>
              <Route path='/supervisors/dashboard' element={<SupervisorDashboard/>}/>
            </Route>
          </Route>
          <Route path='*' element={
            <div className='flex flex-col text-center place-items-center place-content-center h-full w-screen min-w-max '>
              <Navbar fullWidth/>
                <h1 className='text-3xl text-bg font-bold m-6'> PAGE NOT FOUND</h1>
            </div>
          }/>
      </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
