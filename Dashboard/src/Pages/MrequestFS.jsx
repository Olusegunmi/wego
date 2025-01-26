import React from 'react'
import Wego2 from '../Images/Wego2.png'
import BgWego from '../Images/BgWego.png'
import { Link } from 'react-router-dom'
import Ard from '../Images/Ard.png'
import Calls from '../Images/Calls.svg'
const MrequestFS = () => {
  return (
    <>
    <div className="hidden w-[1440px] h-[1053px] relative bg-[#f1eff5] mx-auto overflow-hidden md:block">
    <div className="w-[1579px] h-[216px] left-[-69px] top-[-89px] absolute bg-[#521292]" />
    <img src={Wego2} className="w-[185px] h-[59px] left-[71px] top-[44px] absolute  overflow-hidden" />
    <img src={BgWego} className="w-[1065px] h-[461px] left-[387px] top-[592px] absolute  overflow-hidden" />
    <div className="w-[934px] h-[626px] left-[243px] top-[232px] absolute bg-white rounded-[10px]" />
    <form>
    <div className="w-[262px] left-[579px] top-[291px] absolute text-[#171725] text-2xl font-bold font-['HK Grotesk']">Request For Inspection</div>
   
    <div className="w-[590px] h-[74.75px] left-[425px] top-[386px] absolute">
      <div className="w-[227px] h-[21px] left-[0.48px] top-[-0px] absolute text-[#3d4b55] text-sm font-bold font-['HK Grotesk'] leading-tight">Name</div>
      <div className="w-[590px] h-[54px] left-0 top-[20.75px] absolute">
        <div className="w-6 h-[23px] left-[9.40px] top-[12.25px] absolute" />
        <input type='text' className="w-[590px] h-[54px] left-0 top-0 absolute rounded-md border pl-3 border-[#bdbdbd]" placeholder="Enter your Name" />
        {/* <div className="left-[22px] top-[18.25px] absolute text-[#828282] text-sm font-medium font-['HK Grotesk']"></div> */}
      </div>
    </div>
   
    <div className="w-[590px] h-[74.75px] left-[425px] top-[493px] absolute">
      <div className="w-[227px] h-[21px] left-[0.48px] top-[-0px] absolute text-[#3d4b55] text-sm font-bold font-['HK Grotesk'] leading-tight">Mode of Response</div>
      <div className="w-[590px] h-[54px] left-0 top-[20.75px] absolute">
        <img src={Ard} className="w-[300px] h-[2300px] left-[100.40px] top-[400.25px] absolute"  />
        <input type="text" className="w-[590px] h-[57px] left-0 top-0 absolute pl-3 rounded-md border border-[#bdbdbd]" placeholder="Select  Your choice of Response" />
       
        {/* <div className="left-[22px] top-[18.25px] absolute  text-[#828282] text-sm font-medium font-['HK Grotesk']">Select  Your choice of Response</div> */} 
         {/* <select className="w-[590px] h-[57px] left-0  top-0 absolute pl-3 rounded-md border border-[#bdbdbd]">
          <option value="" className='font-semibold text-[10px] '>Select  Your choice of Response</option>
          <option value=""><img src={Ard} /></option>
          <option value="">Email Address</option>
        </select> */}
      </div>
      
    </div>
    <div className="w-[52px] h-[0px] left-[951px] top-[516px] absolute origin-top-left rotate-90 border border-[#c5c5c5]"></div>


    <div className="w-[590px] h-[148px] left-[425px] top-[601px] absolute">
      <div className="w-[227px] h-[21px] left-[0.48px] top-[-0px]  absolute text-[#3d4b55] text-sm font-bold font-['HK Grotesk'] leading-tight">Property Description</div>
      <div className="w-[590px] h-[127.25px] left-0 top-[20.75px] absolute">
        <div className="w-6 h-[54.20px] left-[9.40px] top-[28.87px] absolute" />
        <input type="text" className="w-[590px] h-[127.25px] left-0 top-0 pl-3 pb-[60px] absolute rounded-md border border-[#bdbdbd]" placeholder="Enter  Property description / URL" />
      </div>
    </div>
    <div className="w-[30px] h-[30px] left-[971px] top-[528px] absolute">
      <div className="w-[30px] h-[30px] left-0 top-0 absolute">
      </div>
    </div>
    

    <div className="w-[142px] h-[37px] px-[27px] py-[17px] left-[993px] top-[782px] absolute bg-[#521292] rounded-sm justify-center items-center gap-2.5 inline-flex">
      <div className="text-[#fefefe] text-xs font-medium font-['HK Grotesk'] capitalize"><Link to='/Requestinspect2'>Proceed</Link></div>
    </div>
    <div className="w-[142px] h-[37px] px-[27px] py-[17px] left-[837px] top-[782px] absolute rounded-sm border border-[#6c6969] justify-center items-center gap-2.5 inline-flex">
      <div className="text-[#6c6969] text-xs font-medium font-['HK Grotesk'] capitalize"><Link to='/InspectRequest'>Back</Link></div>
    </div>
    </form>
    
  </div>
  <img src={Ard} className=' absolute left-[1088px] top-[530px]  text-black' alt="" />
   

  </>
  )
}

export default MrequestFS