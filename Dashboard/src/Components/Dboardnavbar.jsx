import React from 'react'
import Man from '../Images/Man.png'
import notifications from '../Images/notifications.png'
import Vector1 from '../Images/vector1.png'
import Search from '../Images/Search.png'



const Dboardnavbar = () => {
  return (
    <>
    <div className="p-2 left-[287px] top-[23px] absolute justify-start items-center gap-[11px] inline-flex">
                    <div className="w-6 h-6 relative">
                      <div className="w-6 h-6 left-0 top-0 absolute">
                        <img src={Vector1} alt="" />
                      </div>
                    </div>
                    <div className="w-[152px] text-[#521292] text-base font-medium font-['HK Grotesk'] leading-tight tracking-tight">Dashborad</div>
                  </div>
              
                  <div className="w-[1197px] h-[57px] left-[259px] top-[20px] absolute">
                    <div className="w-[865px] h-11 left-[262px] top-0 absolute">
                      <input type="text" className="w-[594px] h-10 left-0 top-[2px] p-[8px] absolute bg-white" />
                      <img src={notifications} className="w-6 h-6 left-[613px] top-[9px] absolute  overflow-hidden" />
                      <div className="w-48 h-11 left-[673px] top-0 absolute">
                        <div className="w-11 h-11 left-[148px] top-0 absolute">
                          <div className="w-10 h-10 left-[2px] top-[2px] absolute">
                            <img className="w-10 h-10 left-0 top-0 absolute rounded-full" src={Man} />
                          </div>
                          <div className="w-11 h-11 left-0 top-0 absolute rounded-full border border-[#757575]" />
                        </div>
                        <div className="w-[141px] h-[18px] left-0 top-[13px] absolute text-right text-[#252733] text-base font-semibold font-['HK Grotesk'] leading-tight tracking-tight">Ada Tobi Musa</div>
                      </div>
                      <div className="w-[0px] h-8 left-[652px] top-[6px] absolute" />
                      <div className="w-4 h-4 left-[564px] top-[14px] absolute  overflow-hidden">
                        <div className="w-[15px] h-[15px] left-0 top-0 absolute">
                          <img src={Search} className="w-[13px] h-[13px] left-0 top-0 absolute" />
                        </div>
                      </div>
                    </div>
                    <div className="w-[1197px] h-[3px] left-0 top-[54px] absolute bg-[#521292]" />
                    <div className="w-[3px] h-8 absolute left-[920px] top-[6px] bg-[#521292]" />
                  </div> 
    </>
  )
}

export default Dboardnavbar