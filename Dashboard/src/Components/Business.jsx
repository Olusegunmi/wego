import React from 'react'
import Frame63 from '../Images/Frame63.png'
import Ellipse20 from '../Images/Ellipse20.png'
import Ellipse21 from '../Images/Ellipse21.png'
import Wego from '../Images/Wego.png'

const Business = () => {
  return (
    <div className="w-[599px] h-[967px] relative bg-white/5">
       <img src={Ellipse21} className="md:w-[104.99px] md:h-[ 55.63px] md:left-[339.74px;] md:top-[190px] md:absolute" />
       <div className="md:left-[87px] md:top-[525px] absolute text-center md:text-black md:text-4xl md:font-extrabold font-['HK Grotesk'] capitalize">hello</div>
       <div className="md:left-[87px] md:top-[727px] absolute text-center">Already a user</div>
  <div className="md:left-[85px] md:top-[572px] absolute text-black md:text-[25.89px] font-normal font-['HK Grotesk']">i’m new here </div>
  <img src={Wego} className="md:w-[112.62px] md:h-9 md:left-[244px] md:top-[54px] md:absolute" />
  <div className="md:left-[85px] md:top-[774px] absolute md:text-black md:text-[25.89px] font-normal font-['HK Grotesk']">I have an account</div>
  <div className="md:w-[430px] md:h-[54px] md:left-[85px] md:top-[842px] absolute">
    <div className="md:w-[430px] md:h-[54px] md:left-0 md:top-0 absolute md:bg-[#521292] rounded" />
    <div className="md:w-[53px] md:h-[19px] md:left-[189px] md:top-[18px] absolute text-white text-base font-semibold font-['HK Grotesk'] capitalize">LOG IN</div>
  </div>
  <div className="md:w-[430px] md:h-[54px] md:left-[85px] md:top-[623px] absolute">
    <div className="md:w-[430px] md:h-[54px] md:left-0 md:top-0 absolute md:bg-[#521292] rounded" />
    <div className="md:w-[67px] md:h-[19px] md:left-[181px] md:top-[17px] absolute text-white text-base font-semibold font-['HK Grotesk'] capitalize">SIGN UP</div>
  </div>
  <img src={Frame63} className="md:w-[328px] md:h-[142px] md:left-[1px] md:top-[168px] md:absolute" />
  <img src={Ellipse20} className="md:w-[150px] md:h-[90px] md:left-[200px] md:top-[320px] md:absolute" />
</div>
  )
}

export default Business