import React from 'react'
import Frame65 from '../Images/Frame65.png'
import Wego from '../Images/Wego.png'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className='w-full h-[100%] mx-auto justify-center md:mt-[5px] '>

    <div className="w-[428px] mx-auto justify-center px-4 grid h-[640px] relative bg-white md:mx-auto md:justify-center lg:justify-center lg:mx-auto lg:ml-[380px] lg:py-[200px] md:mt-[-30px] md:w-[603px] md:h-[603px] md:relative md:bg-white/5">
      <img src={Wego} className="w-[87px] h-7 left-[172px] top-[97px] absolute md:w-[122.62px] md:h-9 md:left-[238px] md:top-[60px]  " />
      <img src={Frame65} className="w-[296px] h-[207px] left-[73px] top-[164px] absolute md:w-[406px] md:h-[284px] md:left-[100px] md:top-[165px] md:absolute" />
      <div className="w-[101px] h-[54px] left-[162px] top-[420px] absolute text-center text-[#521292] text-2xl font-extrabold font-['HK Grotesk'] md:left-[244px] md:top-[505px] md:absolute md:text-center text-[#521292] md:text-5xl md:font-extrabold">FREE</div>
      <div className="w-[257px] h-[59px] left-[84px] top-[371px] absolute text-center text-black text-base font-normal font-['HK Grotesk'] md:left-[154px] md:top-[437px] md:text-[22px]">Have Access to Standard <br/>inspection Report for</div>
      <div className="w-[372px] h-[46.72px] left-[27px] top-[457.04px] absolute md:w-[430px] md:h-[54px] md:left-[88px] md:top-[585px] md:absolute md:grid md:mx-auto">
        <div className="w-[372px] h-[46.72px] left-0 top-0 absolute bg-[#521292] rounded md:w-[430px] md:h-[54px] " />
        <Link to='/Login'><button className="w-[66px] h-4 left-[157px] top-[12px] absolute md:w-[67px] md:h-[19px] md:top-[17px] md:left-[181px]  text-white text-base font-semibold font-['HK Grotesk'] capitalize ">SIGN UP</button></Link>
      </div>
    </div>
    </div>
  )
}

export default Hero