
import React, { useState } from 'react'
import Group5 from '../Images/Group5.png'
import Group19 from '../Images/Group19.png'
import Apple from '../Images/Apple.png'
import eye from '../Images/eye.png'
import Wego from '../Images/Wego.png'
import { FiEye } from "react-icons/fi";
import { Link } from 'react-router-dom'
import Bg18 from '../Images/Bg18.png'

const MainLogin = () => {
  const [Showpass,setShowPass] = useState(false)
  
  const Showpassword = () => {
   setShowPass(!Showpass);
  }
  return (
    <div className="w-[428px] h-[926px] md:w-[551px] md:h-[1069px] relative bg-white mx-auto grid md:mt-[60px]">
  <img  src={Wego} className="w-[87px] h-[28px] left-[170px] top-[90px] absolute md:w-[120px] md:h-[35px] md:top-[40px] md:left-[207px]" />

  <div className="w-56 h-[29px] left-[46px] top-[163px] absolute text-neutral-800 text-2xl font-bold font-['HK Grotesk'] leading-9 md:hidden">Welcome Back!</div>
  <div className="hidden md:block md:text-black md:text-[32px] font-bold left-[46px] absolute top-[163px] text-neutral-800 font-['HK Grotesk'] text-2xl  leading-9 md:mt-[-10px]">Welcome Back!</div>
  <div className="w-[205px] h-[21px] left-[48px] top-[204px] absolute text-black text-xs font-normal font-['HK Grotesk']  md:mt-[-10px] md:w-[380px] md:text-[16px]">Please provide your personnal details</div>
    
  <div className='w-[335.97px] h-[42.19px] left-[47.56px] top-[246.11px] absolute border rounded border-[#c9c9c9] md:w-[430px] md:h-[54px] md:top-[276.11px]'>
    <div className='flex md:w-[430px] md:h-[54px] md:left-0 md:top-0 md:absolute md:rounded-[3px] md:border border-[#c9c9c9] '>
      <img src={Group5} className='w-[23.78px] h-[24.97px] left-[7.35px] top-[9.38px] absolute md:w-[36.77px] md:h-[36.77px] md:top-[7px] ' alt="" />
      <h4 className='w-[154px] h-[17px] left-[24px] top-[10px] absolute text-center text-[13px]  text-[#121212] font-semibold cursor-pointer md:w-[178px] md:h-6 md:text-[16px] md:text-[#121212] md:text-base md:font-semibold md:ml-[22.38px] md:mt-[6px]'><Link>Log In With Google</Link></h4>
    </div>
  </div>


  <div className='w-[335.97px] h-[42.19px] left-[47px] top-[297.11px] absolute border rounded border-[#c9c9c9] md:w-[430px] md:h-[54px] md:mt-[60px] '>
    <div className='flex md:w-[430px] md:h-[54px] md:left-0 md:top-0 md:absolute md:rounded-[3px] md:border border-[#c9c9c9]'>
      <img src={Apple} className='w-[23.78px] h-[24.97px] left-[7.35px] top-[9.38px] absolute  md:w-[36.77px] md:h-[36.77px]' alt="" />
      <h3 className='w-[32px] h-[18px] left-[45px] top-[10px] absolute text-center text-[13px]  flex text-[#121212] font-semibold cursor-pointer md:w-[178px] md:h-6 md:text-[16px] md:text-[#121212] md:text-base md:font-semibold md:ml-[22.38px] md:mt-[6px] '><Link>Log<span className='px-[3px]'>In</span ><span className='px-[3px]'>With</span ><span className='px-[3px]'>IOS</span></Link></h3>
    </div>
  </div>

  <div className="w-40 h-[18px] left-[75px] top-[359px] absolute text-center text-[13px]  text-[#121212] font-semibold font-['HK Grotesk'] md:w-[178px] md:h-6 md:text-[16px] md:text-[#121212] md:text-base md:font-semibold md:ml-[30px] md:mt-[93px] md:cursor-pointer"><Link>Log In With Linkedin</Link></div>
  <div className="w-[335.97px] h-[42.19px] left-[47.56px] top-[348px] absolute md:top-[439px] ">
    <div className="w-[335.97px] h-[42.19px] left-0 top-0 absolute rounded-[3px] border  border-[#c9c9c9] md:border-[#c9c9c9] md:border-2 md:w-[430px] md:h-[54px] md:absolute" />
  </div>
  
  <div className="w-7 h-7 left-[60px] top-[354.79px] absolute md:top-[444px] md:absolute">
    < img src={Group19} className="w-[23.83px] h-[24.83px] left-[-3px] top-1 absolute md:w-[36.77px] md:h-[34.77px]" />
  </div>

 <div className="w-[335.97px] h-[29px] left-[47px] top-[413px] absolute md:w-[430px] md:h-[37px] md:top-[510px]">
    <div className="w-[335.97px] h-[0px] left-0 top-[15.19px] absolute border-2 border-[#521292] md:w-[430px] md:h-[0px] md:left-0 md:top-[19px] md:absolute md:border-2 md:border-[#521292]"></div>
    <div className="w-[76px] h-[29px] left-[131px] top-0 absolute bg-[#fffdfd] md:w-24 md:h-[37px] md:left-[165px] md:top-0 md:absolute md:bg-[#fffdfd]" />
  </div>
  <div className="w-24 h-[25px] left-[179px] top-[418px] absolute text-center text-[#521292] text-[14.9px] font-bold font-['HK Grotesk']  md:h-[25px] md:left-[220px] text-[13px] md:absolute md:text-center  md:text-[#521292] md:top-[517px] md:w-[139px] md:text-[14px] md:text-base md:font-bold md:font-['HK Grotesk']"><span className='flex'>Login with</span></div>
  
 

  <div className="w-[177.36px] h-[16.41px] left-[46.56px] top-[466.38px] absolute text-[#3d4b55] text-sm font-bold mt-[-3px] font-['HK Grotesk'] leading-tight md:hidden">Valid Email</div>
  <div className="hidden md:block w-[177.36px] h-[16.41px] left-[46.56px] top-[557.38px] absolute text-[#3d4b55] text-sm font-bold font-['HK Grotesk'] leading-tight">Valid Email</div>
  <div className="w-[335.97px] h-[42.19px] left-[46.56px] top-[482.79px] absolute md:top-[578px]">
    <div className="w-[18.78px] h-[17.97px] left-[7.35px] top-[9.38px] absolute" />
    <input required className="w-[335.97px] h-[42.19px] p-[8px]  text-[10px] font-extrabold left-0 top-0 absolute rounded-[3px] border border-[#c9c9c9] md:w-[430px] md:h-[54px] md:rounded-[3px] md:text-[14px] md:font-extrabold md:border md:border-[#c9c9c9]" />
  </div>

  <div className="w-[335.97px] h-[58.60px] left-[46.56px] top-[535.92px] absolute md:top-[648px]">
    <div className="w-[99.23px] h-[16.41px] left-[0.35px] top-0 mt-[-3px] absolute text-[#3d4b55] text-sm font-bold font-['HK Grotesk'] leading-tight md:mt-[-5px]">Password</div>
    <input type={Showpass ? "text" : "password"}  className="w-[335.97px] h-[42.19px] p-[8px] text-[10px] font-extrabold left-0 top-[16.41px] absolute rounded-[3px] border border-[#c9c9c9] md:w-[430px] md:h-[54px] md:rounded-[3px] md:text-[14px] md:font-extrabold md:border md:border-[#c9c9c9]" required />
  </div>
  <div className="w-[19px] h-[19px] left-[350px] top-[564px] absolute md:top-[682px] md:left-[445px]">
   <button onClick={Showpassword}>
    {Showpass ? <img src={eye} className="w-[19px] h-[19px] left-0 top-0 absolute"/> : <FiEye className='text-[#521292] text-[20px]'  /> }
    </button>
  </div>
  
 <div className="w-[130.44px] h-[15px] left-[46.56px] top-[608px] absolute">
    <div className="w-[111px] h-[15px] left-[19.44px] top-0 absolute text-[#1b1b1b] text-sm font-normal font-['HK Grotesk'] md:hidden">Remember me</div>
    < input type="checkbox" className="w-[13.02px] h-[13.02px] left-0 top-[0.58px] mt-[2px] absolute rounded border border-[#1b1b1b] md:hidden" />
  </div>
  <div className="w-32 h-[15px] left-[255px] top-[607px] absolute opacity-60 text-center text-[#1b1b1b] text-sm font-normal font-['HK Grotesk'] underline md:hidden"><Link to='/ForgotPassword'>Forgot Password?</Link></div>

 <div className="w-[509px] h-[221px] left-[1px] top-[700px] absolute md:top-[670px]">
    <div className="w-[258px] h-[25px] left-[98px] top-[16px] font-extrabold text-[12.66px] absolute text-center  md:h-[25px] md:absolute md:text-[15px] font- md:left-[113px] md:font-extrabold md:top-[160px] md:w-[320px]">Not a User yet? <span className='text-[#521292]'><Link>Sign up now</Link></span></div>
  </div>
  
  <div  >
    <img src={Bg18} alt="" className='  absolute top-[730px] left-[48px] md:hidden'  />
  </div>
   
  <button className='w-[335px] h-[43px] left-[47px] font-bold top-[653px] rounded-[4px] absolute bg-[#521292] capitalize md:w-[430px] text-[13px] md:h-[54px] md:left-[48px] md:top-[740px] md:text-[22px] text-[white] md:font-extrabold md:absolute cursor-pointer md:cursor-pointer'><Link to='/VerifyEmail'>LOG IN</Link></button>
</div>
  )
  
}

export default MainLogin