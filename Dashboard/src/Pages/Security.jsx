import React from 'react'
import Wego from '../Images/Wego.png'
import Bg18 from '../Images/Bg18.png'

const Security = () => {
  return (
    <div className="w-[428px] h-[689px] relative bg-white mx-auto justify-around grid">
        <img src={Wego} className="w-[87px] h-7 left-[170px] top-[97px] absolute md:w-[112px] md:h-[36px] md:top-[54px] md:left-[200px]" />
        <div className="w-[440px] h-[191px] left-[10px] top-[508px] absolute" />
        <div className="w-[363px] h-[251px] left-[34px] top-[216px] absolute">
            <div className="w-[358.74px] h-[61.44px] left-[4px] top-[97px] absolute md:mt-[30px]">
              <input type='text' className="w-[358.57px] h-[45.03px] p-[8px] left-[0.17px] text-[13px] font-extrabold top-[16.41px] absolute rounded-[3px] border border-[#bdbdbd] md:w-[430px] md:h-[54px] md:text-[16px] md:font-extrabold text-[#3d4b55] " />
              <div className="w-[106px] h-4 left-0 top-0 mt-[-1px] text-[12px] absolute text-[#3d4b55] text-base font-bold font-['HK Grotesk'] leading-tight md:text-[16px] md:mt-[-5px]">Security code</div>
            </div>
          
            <div className="w-[358.57px] h-[45.03px] left-[4.17px] top-[169.28px] absolute md:mt-[45px]">
              <div className="w-[358.57px] h-[45.03px] left-0 top-0 absolute bg-[#521292] rounded md:w-[430px] md:h-[54px]" />
              <button className="w-16 h-[18px] left-[134.83px] top-[10.72px] absolute mx-auto text-[#fefefe] text-base text-[14px] font-medium font-['HK Grotesk'] capitalize md:mx-auto md:w-[59px] md:h-[21px] md:left-[179px] md:text-[16px] md:mt-[7px]">Proceed</button>
            </div>
            
            <button className="w-[202px] h-[18px] left-[167px] top-[220px] absolute text-[#1b1b1b] text-[14px] md:w-[250px] md:text-[15px] font-normal font-['HK Grotesk' md:mt-[60px] md:[450px] md:left-[206px] md:font-medium">Oops, I remember my details!</button>
            <button className="w-[150.07px] h-[17.51px] left-[-13px] top-[220.49px] absolute text-[#1b1b1b] text-[14px] font-normal md:w-[250px] md:text-[15px] font-['HK Grotesk'] md:mt-[60px] md:font-medium md:left-[-57px] ">Didn't get a code?</button>
            <div className="w-[328px] h-[30px] left-[5px] top-0 absolute text-[#161616] text-2xl font-bold font-['HK Grotesk'] leading-9 md:w-[300px] md:h-[36px] md:absolute md:leading-[35px] md:text-[32px] md:font-bold">Enter security code!</div>
            <div className="w-[250.19px] h-[35.02px] left-[5px] top-[47.53px] absolute text-[#181717] text-[12px] font-normal font-['HK Grotesk'] md:w-[330px] md:text-[16px] md:h-[35px] md:top-[60px]">Please check your emails for a message with your code. Your code is 8 numbers long.</div>
        </div>

        <div>
          <img src={Bg18} alt="" className=' absolute top-[508px] left-[1px] md:hidden'/>
        </div>
    </div>
  )
}

export default Security