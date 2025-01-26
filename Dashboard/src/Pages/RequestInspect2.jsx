import React from 'react'
import Wego2 from '../Images/Wego2.png'
import { Link } from 'react-router-dom'
import Mrequestinspect2 from './Mrequestinspect2'
import Calls from '../Images/Calls.svg'
import Ard from '../Images/Ard.png'

const RequestInspect2 = () => {
  return (
    <>
    <div className="w-[426px] h-[1009px] relative bg-white mx-auto justify-center ml-[1px]  grid   overflow-hidden md:hidden">
  <div className="w-[490px] h-[984px] left-[-27px] top-[25px] absolute bg-[#f8f6fc]" />
  <div className="w-[380px] h-[720px] left-[24px] top-[160px] absolute bg-white rounded-[10px]" />
  <div className="w-[251px] left-[93px] top-[217px] absolute text-[#171725] text-2xl font-bold font-['HK Grotesk']">Request For Inspection</div>

  
  <div className="w-28 h-[29px] px-[27px] py-[17px] left-[209px] top-[818px] absolute bg-[#521292] rounded-sm justify-center items-center gap-2.5 inline-flex">
    <div className="text-[#fefefe] text-xs font-medium font-['HK Grotesk'] capitalize"><Link to='/ReInspection'>Proceed</Link></div>
  </div>
  <div className="w-28 h-[29px] px-[27px] py-[17px] left-[87px] top-[818px] absolute rounded-sm border border-[#6c6969] justify-center items-center gap-2.5 inline-flex">
    <div className="text-[#6c6969] text-xs font-medium font-['HK Grotesk'] capitalize"><Link to='/RequestFS'>Back</Link> </div>
  </div>
  <div className="w-[468px] h-[216px] left-[-27px] top-[-92px] absolute bg-[#521292]" />
  <img src={Wego2} className="w-[159px] h-[51px] left-[127px] top-[40px] absolute  overflow-hidden" />
  <div className="w-[336px] h-[74.75px] left-[44px] top-[292px] absolute">
    <div className="w-[129.27px] h-[21px] left-[0.27px] top-[-0px] absolute text-[#3d4b55] text-sm font-bold font-['HK Grotesk'] leading-tight">Name</div>
    <div className="w-[336px] h-[54px] left-0 top-[20.75px] absolute">
      <div className="w-[13.68px] h-[23px] left-[5.35px] top-[12.25px] absolute" />
      <input type="text" className="w-[336px] h-[54px] left-0 top-0 absolute rounded-md border pl-3 border-[#bdbdbd]" placeholder='Enter your Name' />
      {/* <div className="w-[117px] left-[13px] top-[18.25px] absolute text-[#828282] text-sm font-medium font-['HK Grotesk']">Enter your Name</div> */}
    </div>
  </div>
  <div className="w-[336px] h-[74.75px] left-[44px] top-[506px] absolute">
    <div className="w-[129.27px] h-[21px] left-[0.27px] top-[-0px] absolute text-[#3d4b55] text-sm font-bold font-['HK Grotesk'] leading-tight">Contact Number</div>
    <div className="w-[336px] h-[54px] left-0 top-[20.75px] absolute">
      <div className="w-[13.68px] h-[23px] left-[5.35px] top-[12.25px] absolute" />
      <input type="text" className="w-[336px] h-[54px] left-0 top-0 absolute pl-3 rounded-md border border-[#bdbdbd]" placeholder='Enter your Contact Number' />
      {/* <div className="w-[190px] left-[13px] top-[18.25px] absolute text-[#828282] text-sm font-medium font-['HK Grotesk']">Enter your Contact Number</div> */}
    </div>
  </div>
  <div className="w-[336px] h-[148px] left-[44px] top-[617px] absolute">
    <div className="w-[159.73px] h-[21px] left-[0.27px] top-[-0px] absolute text-[#3d4b55] text-sm font-bold font-['HK Grotesk'] leading-tight">Property Description</div>
    <div className="w-[336px] h-[127.25px] left-0 top-[20.75px] absolute">
      <div className="w-[13.68px] h-[54.20px] left-[5.35px] top-[28.87px] absolute" />
      <input type="text" className="w-[336px] h-[127.25px] left-0 top-0 absolute pl-3 rounded-md border pb-[60px] border-[#bdbdbd]" placeholder='Enter  Property description / URL' />
    </div>
  </div>
  <div className="w-[336px] h-[74.75px] left-[44px] top-[399px] absolute">
    <div className="w-[336px] h-[74.75px] left-0 top-0 absolute">
      <div className="w-[138.73px] h-[21px] left-[0.27px] top-0 absolute text-[#3d4b55] text-sm font-bold font-['HK Grotesk'] leading-tight">Mode of Response</div>
      <div className="w-[336px] h-[57px] left-0 top-[20.75px] absolute">
        <input type="text" className="w-[336px] h-[57px] left-0 top-0  pl-11 absolute rounded-md border border-[#bdbdbd]" placeholder='Contact number' />
      </div>
    </div>
    <div className="w-[30px] h-[30px] left-[283px] top-[34px] absolute">
      <div className="w-[30px] h-[30px] left-0 top-0 absolute">
      </div>
    </div>
    <div className="w-[52px] h-[1px] left-[263px] top-[22px] absolute origin-top-left rotate-90 border border-[#c5c5c5]"></div>
  </div>
  <div className="w-[102px] p-[5px] left-[49px] top-[430px] absolute justify-start items-center gap-[5px] inline-flex">
    <div className="w-6 h-6 relative">
      <img src={Calls} alt="" />
    </div>
  </div>
  <img src={Ard} className=' absolute left-[328px] top-[438px]  text-black' alt="" />
</div>
<Mrequestinspect2 />
</>
  )
}

export default RequestInspect2