import React from 'react'
import Wego from '../Images/Wego.png'
import Bg18 from '../Images/Bg18.png'
import Ellipse22 from '../Images/Ellipse22.png'
import Ellipse25 from '../Images/Ellipse25.png'
import Rect79 from '../Images/Rect79.png'
import Rect37 from '../Images/Rect37.png'
import Img3 from '../Images/Img3.png'
import { Link } from 'react-router-dom'

const VerifyEmail = () => {
  return (
    <div className="w-[428px] h-[553px] relative bg-white mx-auto justify-center grid md:w-[600px] md:h-[462px] md:mt-[60px] md:relative bg-white/5">
  <img src={Wego} className="w-[87px] h-7 left-[169px] top-[97px] absolute md:w-[112px] md:h-[36px] md:left-[244px] md:top-[54px]" />
  <div className='hidden md:block'>
     <img src={Ellipse22} className="absolute w-[44px] h-[44px] left-[120px] top-[126px]"  alt="" />
     <img src={Rect79} alt="" className='absolute w-[116px] h-[5px] left-[169px] top-[146px]' />
     <img src={Ellipse22} alt="" className="absolute w-[44px] h-[44px] left-[290px] top-[126px]"  />
     <img src={Rect37} alt="" className='absolute w-[116px] h-[5px] left-[338px] top-[146px]' />
     <img src={Ellipse25} alt="" className="absolute w-[44px] h-[44px] left-[458px] top-[126px] border-[1px] rounded-full border-[#23BCBC]"  />
     <img src={Img3} alt="" className="absolute w-[11px] h-[18px] left-[473px] top-[139px]"  />
  </div>
  
  <div className="w-[207px] h-[31px] left-[30px] top-[194px] absolute text-[#010101] text-2xl font-bold font-['HK Grotesk'] leading-9 md:w-[260px] md:h-[36px] md:absolute md:left-[115px] md:text-[#010101] md:leading-[35px] md:font-bold md:text-[32px] md:top-[224px]">Verify your email</div>
  <div className="w-[291px] h-[15px] left-[30px] top-[233px] absolute text-black text-sm font-normal font-['HK Grotesk'] md:w-[341.11px] md:h-[17.78px] md:absolute md:left-[115px] md:text-[18px] md:mt-[5px] md:top-[269px] font-normal md:leading-[21px] md:text-[#000000]">use the linkbelow to verify your email</div>
  <div className="w-[367px] h-[46.09px] left-[30px] top-[290.91px] absolute md:w-[430px] md:h-[54px] md:top-[150.91px]  md:relative">
      <div className="w-[367px] h-[46.09px] left-0 top-0 absolute bg-[#521292] rounded md:w-[430px] md:h-[54px] md:left-0 md:top-0 md:absolute md:bg-[#521292] md:rounded" />
    <div className="w-[95px] h-4 left-[141px] top-[11.09px] absolute text-white text-base font-semibold font-['HK Grotesk'] capitalize md:w-[100px] md:h-[19px] md:left-[165px] md:absolute md:top-[14.09px] text-white text-base font-semibold font-['HK Grotesk'] cursor-pointer capitalize"><Link to='/Successful'>verify email</Link></div>
  </div>
  <img src={Bg18} className="w-[457px] h-[198px] left-[-10px] top-[360px] absolute md:hidden " />
</div>
  )
}

export default VerifyEmail