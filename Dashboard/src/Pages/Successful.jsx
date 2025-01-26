import React from 'react'
import Wego from '../Images/Wego.png'
import Work2 from '../Images/Work2.png'
import Ellipse22 from '../Images/Ellipse22.png'
import Rect79 from '../Images/Rect79.png'
import { Link } from 'react-router-dom'

const Successful = () => {
  return (
    <div className="w-[428px] h-[689px] ml-[-10px] sm:mx-auto relative bg-white mx-auto grid md:w-[600px] md:h-[742px] md:justify-center md:mx-auto md:mt-[-35px]">
        <img src={Wego} className="w-[87px] h-7 left-[171px] top-[97px] absolute md:w-[112.62px] md:h-9 md:left-[244px] md:top-[54px]" />

        <div className='hidden  md:block'>
           <img src={Ellipse22} className="absolute w-[44px] h-[44px] left-[120px] top-[126px]"  alt="" />
           <img src={Rect79} alt="" className='absolute w-[116px] h-[5px] left-[169px] top-[146px]' />
           <img src={Ellipse22} alt="" className="absolute w-[44px] h-[44px] left-[290px] top-[126px]"  />
           <img src={Rect79} alt="" className='absolute w-[116px] h-[5px] left-[338px] top-[146px]' />
           <img src={Ellipse22} alt="" className="absolute w-[44px] h-[44px] left-[458px] top-[126px] border-[1px] rounded-full"  />
        </div>
      
        <div className='w-[280px] h-[217px] left-[85px] top-[186px] absolute md:block md:w-[397px] md:h-[258px] md:left-[120px] md:absolute md:top-[249px] '>
          <img src={Work2} alt="" />
        </div>

        <div className="w-[115px] h-[27px] left-[177px] top-[436px] absolute text-black text-2xl font-bold font-['HK Grotesk'] leading-9 md:w-[150px] md:h-[36px] md:absolute md:left-[255px] md:top-[530px] font-normal md:leding-[35px] md:text-[32px] md:font-bold md:text-[#000000]">Successful</div>
        <div className="w-[277px] h-[13px] left-[100px] top-[466px] absolute text-black text-sm font-normal font-['HK Grotesk'] md:w-[309px] md:h-[18px] md:left-[176px] md:top-[570px] md:font-normal md:leding-[21px] md:text-[16px] md:absolute">Yes! your email verification was successful</div>

        <div className="w-80 h-[40.19px] left-[65px] top-[503.81px] absolute md:left-[85px] md:top-[639px]">
          <div className="w-80 h-[40.19px] left-0 top-0 absolute bg-[#521292] rounded md:w-[430px] md:h-[54px] md:absolute md:left-[30px] " />
          <div className="w-[82px] h-3.5 left-[128px] top-[9.19px] absolute text-white text-base font-semibold font-['HK Grotesk'] capitalize md:w-[75px] md:h-[19px] md:left-[215px] md:mt-[7px] md:text-[16px] md:leading-[21px] md:font-semibold md:capitalize"><Link to='/Wegopage'>PROCEED</Link></div>
        </div>

    </div>
  )
}

export default Successful