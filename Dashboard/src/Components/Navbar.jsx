import React from 'react'
import Frame63 from '../Images/Frame63.png'
import Wego from '../Images/Wego.png'
import Bg18 from '../Images/Bg18.png'
import Ellipse20 from '../Images/Ellipse20.png'
import Ellipse21 from '../Images/Ellipse21.png'
import Tiny from '../Images/Tiny.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  
return (
  <div className="w-[428px] h-[689px] md:w-[599px] md:h-[967px] md:relative  relative bg-white grid mx-auto lg:ml-[380px] ">
    <img src={Wego} className="w-[87px] h-7 left-[172px] top-[97px] absolute md:w-[122.62px] md:h-10 md:left-[244px] md:top-[54px] md:absolute" />
    <img src={Frame63} className="hidden md:block md:w-[328px] md:h-[142px] md:left-[1px] md:top-[168px] md:absolute" />
    <img src={Ellipse21} className="hidden md:block md:w-[104.99px] md:h-[ 55.63px] md:left-[339.74px;] md:top-[190px] md:absolute" />
    <img src={Tiny} className='hidden md:block absolute md:w-[377px] md:h-[271px] md:left-[140px] md:top-[190px]'  />
    <img src={Ellipse20} className="hidden md:block md:w-[120px] md:h-[120px] md:left-[230px] md:top-[320px] md:absolute" />
    <div className="w-[66px] h-[37px] left-[44px] top-[211px] absolute text-center text-black text-2xl font-bold font-['HK Grotesk'] capitalize md:left-[82px] md:top-[525px] md:text-black md:text-4xl md:font-extrabold">hello</div>
    <div className="w-[158px] h-[38px] left-[19px] top-[350px] font-extrabold absolute text-center md:left-[82px] md:top-[727px] md:text-black md:font-extrabold"><h3 className='ml-[2px] md:text-4xl md:flex  md:gap-2  '>Already<span className='ml-[3px]'>a</span><span className='ml-[3px]'>user</span></h3></div>
    <div className="w-[149px] h-[27px] left-[47px] top-[248px] absolute text-black text-sm font-extrabold font-['HK Grotesk'] md:left-[85px] md:top-[572px] md:text-[20px]">i’m new here </div>
    <div className="w-[247px] h-[26px] left-[47px] top-[388px] absolute text-black font-extrabold text-sm  font-['HK Grotesk'] md:left-[85px] md:top-[774px] md:text-black md:text-[20px]">I have an account</div>
   
    <div className="w-[340px] h-[42.70px] left-[44px] top-[288.14px] absolute md:w-[430px] md:h-[54px] md:left-[85px] md:top-[623px] ">
      <div className="w-[340px] h-[42.70px] left-0 top-0 absolute bg-[#521292] rounded md:w-[430px] md:h-[54px] md:left-0 md:top-0 " />
      <Link  to='/SignUp'><button className="w-[80px] h-[15.02px] left-[130.12px] top-[11px] md:w-[67px] md:h-[19px] md:left-[181px] md:top-[17px] absolute text-white text-base font-semibold font-['HK Grotesk'] capitalize">SIGN UP</button></Link>
    </div>

    <div className="w-[340px] h-[52px] left-[44px] top-[431px] absolute ">
      <div className="w-[340px] h-[52px] left-0 top-0 absolute bg-[#521292] rounded md:w-[430px] md:h-[54px] md:left-0 md:top-0 md:mt-[400px] md:ml-[40px] md:bg-[#521292]" />
      <div className="w-[80px] h-[15.02px] left-[135px] top-[14.53px] absolute text-white text-base font-semibold font-['HK Grotesk'] capitalize md:w-[53px] md:h-[19px] md:left-[230px] md:top-[418px]"><Link to='/MainLogin'>LOG IN</Link></div>
    </div>
    
    <div className='absolute top-[500px]  md:hidden'>
      <img src={Bg18} alt="" />
    </div>
  </div>
  )
}

export default Navbar