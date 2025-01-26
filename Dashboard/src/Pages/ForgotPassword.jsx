import React from 'react'
import Bg18 from '../Images/Bg18.png'
import Wego from '../Images/Wego.png'
import { Link } from 'react-router-dom'

const ForgotPassword = () => {
  return (
    <div className="w-[428px] h-[689px] relative bg-white mx-auto grid justify-center">
  <img src={Wego} className="w-[87px] h-7 left-[170px] top-[91px] absolute" />
  <div className="w-[333px] h-[249.36px] left-[46px] top-[214px] absolute">
    <div className="w-[333px] h-[58px] left-0 top-[105.32px] absolute">
      <input type='text' className="w-[333px] p-[8px] h-[41.82px] left-0 top-[16.18px] absolute rounded-[3px] border border-[#b3b3b3]" />
      <div className="w-[107.56px] h-[16.35px] left-0 top-0 absolute text-[#3d4b55] text-base font-bold font-['HK Grotesk'] mt-[-5px] leading-tight">Email Address</div>
    </div>
    <div className="w-[333px] h-[41.82px] left-0 top-[172.70px] absolute">
      <div className="w-[333px] h-[41.82px] left-0 top-0 absolute bg-[#521292] rounded" />
      <div className="w-[57px] h-3.5 left-[146px] top-[8.30px] absolute text-[#fefefe] text-base font-medium font-['HK Grotesk'] capitalize"><Link to='/ResetPassword'>Sign in</Link></div>
    </div>
    <div className="w-[276px] h-7 left-0 top-0 absolute text-[#161616] text-2xl font-bold font-['HK Grotesk'] leading-9">Forgot Password?</div>
    <div className="w-[264.16px] h-[13.77px] left-0 top-[44.14px] absolute text-black text-xs font-normal font-['HK Grotesk']">Enter your Email so that we can send the password to you.</div>
    <div className="w-[225px] h-[16.26px] left-[118px] top-[233.10px] absolute text-[#1b1b1b] text-base font-normal font-['HK Grotesk']"><Link to='/Security'>Ooops, I remember my details</Link></div>
  </div>
  <div className="w-[440px] h-[191px] left-[10px] top-[508px] absolute" />

  <div  >
    <img src={Bg18} alt="" className=' absolute top-[508px] left-[10px] md:hidden'  />
  </div>
</div>
  )
}

export default ForgotPassword