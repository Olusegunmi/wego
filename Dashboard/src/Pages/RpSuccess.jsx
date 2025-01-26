import React from 'react'
import Wego from '../Images/Wego.png'
import Work2 from '../Images/Work2.png'
import { Link } from 'react-router-dom'

const RpSuccess = () => {
  return (
    <div className="w-[428px] h-[689px] relative bg-white mx-auto justify-center grid">
       <img src={Wego} className="w-[87px] h-7 left-[172px] top-[97px] absolute" />
       <img src={Work2} className='w-[334px] h-[217px] absolute left-[47px] top-[166px]' alt="" />
       
       <div className="w-[304px] h-[81.35px] left-[77px] top-[420px] absolute">
        <div className="w-[304px] h-7 left-0 top-0 absolute text-center text-black text-2xl font-medium font-['HK Grotesk'] tracking-tight">Reset Password Successful</div>
        <div className="w-[268px] h-[15px] left-[17px] top-[30px] absolute text-center text-black text-xs font-normal font-['HK Grotesk'] tracking-tight">Your password has been reset successfully.</div>
    <div className="w-[123.29px] h-[21.71px] left-[69.69px] top-[59.64px] absolute justify-start items-start gap-2.5 inline-flex">
      <div className="px-7 py-[7.20px] rounded border-2 border-black justify-start items-start gap-2.5 flex">
        <button className="text-black text-[8px] font-normal font-['Poppins'] tracking-tight"><Link to='/ResetPassword'>Cancel</Link></button>
      </div>
      <div className="px-7 py-[7.20px] bg-[#521292] rounded border-2 border-black justify-start w-[68px] h-[30px] items-start gap-2.5 flex">
        <button className="text-[#fefefe] text-[8px] font-semibold font-['Poppins'] tracking-tight"><Link to='/SignUp'>OK</Link></button>
      </div>
    </div>
  </div>
</div>
  )
}

export default RpSuccess