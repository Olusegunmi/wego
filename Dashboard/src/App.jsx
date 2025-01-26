import React from 'react'
// import styles from './Style';
// import Navbar from './Components/Navbar'
// import Hero from './Components/Hero'
import SignIn from './Pages/SignIn';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import VerifyEmail from './Pages/VerifyEmail';
import MainLogin from './Pages/MainLogin';
import Successful from './Pages/Successful';
import ForgotPassword from './Pages/ForgotPassword';
import Security from './Pages/Security';
import ResetPassword from './Pages/ResetPassword'
import {BrowserRouter as Router , Routes , Route , Link } from 'react-router-dom'
import RpSuccess from './Pages/RpSuccess';
import Wegopage from './Pages/Wegopage';
import Dashboard from './Pages/Dashboard';
import Profile from './Pages/Profile';
import Profile2 from './Pages/Profile2'
import PublicProfile from './Pages/PublicProfile';
import PersonalInfo from './Pages/PersonalInfo';
import PasswordChange from './Pages/PasswordChange';
import ViewProperty from './Pages/ViewProperty';
import Vap from './Pages/Vap'
import Inspection from './Pages/Inspection';
import InspectRequest from './Pages/InspectRequest';
import RequestFS from './Pages/RequestFS';
import RequestInspect2 from './Pages/RequestInspect2';
import ReInspection from './Pages/ReInspection';
import Set from './Pages/Set';
import AccountSet from './Pages/AccountSet';
import Notification from './Pages/Notification';
import Date from './Pages/Date';
import Help from './Pages/Help';
import FAQ from './Pages/FAQ';
import Feeds from './Pages/Feeds';
import ContactUs from './Pages/ContactUs';




const App = () => {
return (

  <div className='mx-auto justify-center'> 
    <Router>
      <Routes>
        

        <Route  path='/' element ={<SignIn />} />
        <Route path ='/Login' element ={<Login />} />
        <Route path ='/SignUp' element ={<SignUp />} />
        <Route path ='/VerifyEmail' element ={<VerifyEmail />} />
        <Route path ='/MainLogin' element ={<MainLogin />} />
        <Route path ='/Successful' element ={<Successful />} />
        <Route path ='/ForgotPassword' element ={<ForgotPassword />} />
        <Route path ='/Security' element ={<Security />} />
        <Route path ='/ResetPassword' element ={<ResetPassword />} />
        <Route path ='/RpSuccess' element ={<RpSuccess />} />

          {/* Pages */}

        <Route path ='/Wegopage' element ={<Wegopage />} />
        <Route path ='/Dashboard' element ={<Dashboard />} />
        <Route path ='/Profile' element ={<Profile />} />
        <Route path ='/Profile2' element ={<Profile2 />} />
        <Route path ='/Profile2' element ={<Profile2 />} />
        <Route path ='/PublicProfile' element ={<PublicProfile />} />
        <Route path ='/PersonalInfo' element ={<PersonalInfo />} />
        <Route path ='/PasswordChange' element ={<PasswordChange />} />
        <Route path ='/ViewProperty' element ={<ViewProperty />} />
        <Route path ='/Vap' element ={<Vap />} />
        <Route path ='/Inspection' element ={<Inspection />} />
        <Route path ='/InspectRequest' element ={<InspectRequest/>} />
        <Route path ='/RequestFS' element ={<RequestFS />} />
        <Route path ='/RequestInspect2' element ={<RequestInspect2 />} />
        <Route path ='/ReInspection' element ={<ReInspection />} />
        <Route path ='/Set' element ={<Set />} />
        <Route path ='/AccountSet' element ={<AccountSet />} />
        <Route path ='/Notification' element ={<Notification />} />
        <Route path ='/Date' element ={<Date />} />
        <Route path ='/Help' element ={<Help />} />
        <Route path ='/FAQ' element ={<FAQ />} />
        <Route path ='/Feeds' element ={<Feeds />} />
        <Route path ='/ContactUs' element ={<ContactUs />} />



      </Routes>
    </Router>
  </div>
   
    
  )
}

export default App