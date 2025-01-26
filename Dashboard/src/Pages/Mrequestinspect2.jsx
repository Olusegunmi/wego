import React from 'react'
import Wego2 from '../Images/Wego2.png'
import BgWego from '../Images/BgWego.png'
import Calls from '../Images/Calls.svg'
import { Link } from 'react-router-dom'
import Ard from '../Images/Ard.png'


const Mrequestinspect2 = () => {
  return (
    <div className=" hidden w-[1440px] h-[1053px] relative bg-[#f1eff5] mx-auto  overflow-hidden md:block">
  <div className="w-[1579px] h-[216px] left-[-69px] top-[-89px] absolute bg-[#521292]" />
  <img src={Wego2} alt="" />
  <img src={Wego2} className="w-[185px] h-[59px] left-[71px] top-[44px] absolute  overflow-hidden" />
  <img src={BgWego} className="w-[1065px] h-[461px] left-[387px] top-[592px] absolute  overflow-hidden" />
  <div className="w-[934px] h-[688px] left-[243px] top-[220px] absolute bg-white rounded-[10px]" />
  <div className="w-[142px] h-[37px] px-[27px] py-[17px] left-[993px] top-[832px] absolute bg-[#521292] rounded-sm justify-center items-center gap-2.5 inline-flex">
    <div className="text-[#fefefe] text-xs font-medium font-['HK Grotesk'] capitalize"><Link to='/ReInspection'>Proceed</Link></div>
  </div>
  <div className="w-[142px] h-[37px] px-[27px] py-[17px] left-[837px] top-[832px] absolute rounded-sm border border-[#6c6969] justify-center items-center gap-2.5 inline-flex">
    <div className="text-[#6c6969] text-xs font-medium font-['HK Grotesk'] capitalize"><Link to='/RequestFS'>Back</Link></div>
  </div>
  <div className="w-[262px] left-[579px] top-[271px] absolute text-[#171725] text-2xl font-bold font-['HK Grotesk']">Request For Inspection</div>
  <div className="w-[590px] h-[74.75px] left-[425px] top-[443px] absolute">
    <div className="w-[227px] h-[21px] left-[0.48px] top-[-0px] absolute text-[#3d4b55] text-sm font-bold font-['HK Grotesk'] leading-tight">Mode of Response</div>
    <div className="w-[590px] h-[54px] left-0 top-[20.75px] absolute">
      <img src={Calls} className="w-6 h-[23px] left-[9.40px] top-[12.25px] absolute" />
      <input type='text'  className="w-[590px] h-[58px] left-0 top-0 pl-12 absolute rounded-md border border-[#bdbdbd]" placeholder="Contact number" />
    </div>
  </div>
  <div className="w-[590px] h-[74.75px] left-[425px] top-[547px] absolute">
    <div className="w-[227px] h-[21px] left-[0.48px] top-[-0px] absolute text-[#3d4b55] text-sm font-bold font-['HK Grotesk'] leading-tight">Contact Number</div>
    <div className="w-[590px] h-[54px] left-0 top-[20.75px] absolute">
      <div className="w-6 h-[23px] left-[9.40px] top-[12.25px] absolute" />
      <input type="text" className="w-[590px] h-[54px] left-0 top-0 absolute rounded-md border pl-3 border-[#bdbdbd]" placeholder="Enter your Contact number" />
    </div>
  </div>
  <div className="w-[590px] h-[74.75px] left-[425px] top-[339px] absolute">
    <div className="w-[227px] h-[21px] left-[0.48px] top-[-0px] absolute text-[#3d4b55] text-sm font-bold font-['HK Grotesk'] leading-tight">Name</div>
    <div className="w-[590px] h-[54px] left-0 top-[20.75px] absolute">
      <div className="w-6 h-[23px] left-[9.40px] top-[12.25px] absolute" />
      <input type='text' className="w-[590px] h-[54px] left-0 top-0 absolute pl-3 rounded-md border border-[#bdbdbd]" placeholder="Enter your Name" />
    </div>
  </div>
  <div className="w-[590px] h-[148px] left-[425px] top-[651px] absolute">
    <div className="w-[227px] h-[21px] left-[0.48px] top-[-0px] absolute text-[#3d4b55] text-sm font-bold font-['HK Grotesk']  leading-tight">Property Description</div>
    <div className="w-[590px] h-[127.25px] left-0 top-[20.75px] absolute">
      <div className="w-6 h-[54.20px] left-[9.40px] top-[28.87px] absolute" />
      <input type='text' className="w-[590px] h-[127.25px] left-0 top-0 pl-3 absolute rounded-md pb-[60px] border border-[#bdbdbd]" placeholder='Enter  Property description / URL' />
    </div>
  </div>
  <div className="w-[30px] h-[30px] left-[968px] top-[477px] absolute">
    <div className="w-[30px] h-[30px] left-0 top-0 absolute">
    </div>
  </div>
  <div className="w-[52px] h-[0px] left-[952px] top-[466px] absolute origin-top-left rotate-90 border border-[#c5c5c5]"></div>
  <div className="p-[5px] left-[434px] top-[474px] absolute justify-start items-center gap-[5px] inline-flex">
   <div className="w-6 h-6 mt-[4px] relative">
      <img src={Calls} alt="" />
    </div> 
  </div>
  <img src={Ard} className=' absolute left-[966px] top-[480px]  text-black' alt="" />
</div>
  )
}

export default Mrequestinspect2