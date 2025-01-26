import React, { useState } from 'react'
import Wego from '../Images/Wego.png'
import eye from '../Images/eye.png'
import { FiEye } from "react-icons/fi"
import { Link } from 'react-router-dom'


const ResetPassword = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [confirmPass, setConfirmPass] = useState(false)
 
    const showPass = () => {
        setShowPassword(!showPassword)
    }

    const confirmPassword = () => {
        setConfirmPass(!confirmPass)
    }

return (
    
    <div className="w-[428px] h-[689px] relative bg-white mx-auto justify-center grid">
      <img src={Wego} className="w-[87px] h-7 left-[170px] top-[97px] absolute" />
      <div className="w-[440px] h-[191px] left-[10px] top-[508px] absolute" />
      <div className="w-[364px] h-[307px] left-[33px] top-[190px] absolute">
    <div className="w-[364px] h-[307px] left-0 top-0 absolute">
      <div className="w-[364px] h-[63.11px] left-0 top-[84px] absolute">
      <input type={showPassword ? "text" : "password"}  className="w-[364px] h-[45.71px] p-[8px] left-0 top-[17.40px] absolute rounded-[3px] border border-[#bdbdbd]" />
      <div className="w-[79px] h-[17px] left-0 top-0 absolute text-[#3d4b55] text-base font-bold font-['HK Grotesk'] leading-tight mt-[-5px]">Password</div>
      <button className='w-[19.19px] h-[19.19px] absolute left-[330px]  top-[33px]' style={{zIndex:1}} onClick ={showPass} >{showPassword ? <img src={eye}  className="w-[19px] h-[19px] left-0 top-0 absolute"/> : <FiEye  className='text-[#521292] text-[20px]' /> }</button>
      </div>

     
      <button className='w-[19.19px] h-[19.19px] absolute left-[329px] top-[190px]' style={{zIndex:1}} onClick ={confirmPassword} >{confirmPass ? <img src={eye} className="w-[19px] h-[19px] left-0 top-0 absolute" /> : <FiEye className='text-[#521292] text-[20px]' /> }</button>
      <div className="w-[364px] h-[45.71px] left-0 top-[231.76px] absolute">
      <div className="w-[364px] h-[45.71px] left-0 top-0 absolute bg-[#521292] rounded" />
      <Link to='/RpSuccess'><button className="w-[59px] h-[18px] left-[160px] top-[11.24px] absolute text-center text-[#fefefe] text-base font-medium font-['HK Grotesk'] capitalize">Update</button></Link>
    </div>
    <div className="w-[163px] h-[18px] left-[201px] top-[289px] absolute text-[#1b1b1b] text-xs font-normal font-['HK Grotesk']">Oops, I remember my details!</div>
      <div className="w-[322px] h-[30px] left-0 top-0 absolute text-[#161616] text-2xl md:text-[32px] font-bold font-['HK Grotesk'] leading-9 md:w-[324px]">Reset your password</div>
      <div className="w-[259.88px] h-[17.78px] left-0 top-[48.07px] absolute text-black text-base font-normal font-['HK Grotesk']">Reset your password</div>
      <div className="w-[364px] h-[64.60px] left-0 top-[157px] absolute">
        <input type={confirmPass ? "text" : "password"} className="w-[364px] p-[8px] h-[45.71px] left-0 top-[18.89px] absolute rounded-[3px] border border-[#bdbdbd]" />
        <div className="w-[150px] h-[17px] left-0 top-0 absolute text-[#3d4b55] text-base font-bold font-['HK Grotesk'] leading-tight">Confirm Password</div>
      </div>
      </div>
      <div className="w-[19.91px] h-[19.91px] left-[331.77px] top-[114.51px] absolute">
      <div className="w-[19.91px] h-[19.91px] left-0 top-0 absolute">
      </div>
      </div>
        <div className="w-[19.91px] h-[20.85px] left-[331.77px] top-[188.45px] absolute">
      <div className="w-[19.91px] h-[20.85px] left-0 top-0 absolute">
      </div>
    </div>
  </div>
</div>
  )
}

export default ResetPassword