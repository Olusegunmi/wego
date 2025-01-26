import React from 'react'
import Menu from '../Images/Menu.png'
import Man from '../Images/Man.png'
import Vector4 from '../Images/Vector4.png'
import Pic1 from '../Images/Pic1.png'
import Pic2 from '../Images/Pic2.png'
import Vec from '../Images/Vec.png'
import ArrowRight from '../Images/ArrowRight.png'
import ArrowSqure from '../Images/ArrowSquare.png'
import ToggleBar from '../Images/ToggleBar.png'
import ArrowLeft from '../Images/ArrowLeft.png'
import Button from '../Components/Button'




const Wegopage = () => {
  return (
    <>
    <div className="w-[428px] h-[1366px] relative mx-auto justify-center grid md:hidden">
    {/* <div className="w-[490px] h-[1327px] left-[-27px] top-[65px] absolute " /> */}
      <div className="w-[428px] h-20 left-0 top-0 absolute">
        <div className="w-[39px] h-[39px] left-[40px] top-[35px] absolute">
          <img src={Menu} alt="" />
        </div>

        

        <div className="w-11 h-11 left-[357px] top-[26px] absolute">
          <div className="w-10 h-10 left-[2px] top-[2px] absolute">
            <img className="w-10 h-10 left-0 top-0 absolute rounded-full" src={Man} />
          </div>
          <div className="w-11 h-11 left-0 top-0 absolute rounded-full border border-[#757575]" />
        </div>
      </div>


      <div className="w-[175px] left-[24px] top-[128px] absolute text-[#521292] text-base font-bold font-['HK Grotesk'] capitalize">Inspection Report </div>
      <div className="w-[428px] h-[1017px] left-0 top-[187px] absolute bg-white" />
      

      <div className="w-[108px] left-[8px] top-[208px] absolute text-center text-[#521292] text-sm font-medium font-['Montserrat'] leading-none">Property info</div>
      <div className="w-[428px] h-[0px] left-0 top-[246px] absolute border-2 border-[#bdbdbd]"></div>
       <div className="w-[22px] h-2 left-[370px] top-[208px] absolute">
         <button><img src={ToggleBar} alt="" /></button>
      </div> 
     

      <div className='mx-auto grid justify-center'>
        <div className="w-[328px] h-[225px] left-[20.14px] top-[282px] absolute">
          <img className="w-[316] h-[225px] left-0 top-0 absolute rounded-[15px]" src={Pic1} />
    
        </div>
        <img className="w-[100px] h-[181px] left-[350px] top-[304px] absolute overflow-hidden" src={Pic2} />
        <div className="w-[48.73px] h-[53.60px] left-[363px] top-[368px] absolute bg-[#22bcbc]/75 rounded-[50px]">
          <div className="w-[48.73px] h-[53.60px] left-0 top-0 absolute">
            <button><img src={Vec} className='absolute left-[34.01%] right-[30.17%] top-[13.89%] bottom-[13.87%]' alt="" /></button>
          </div>
        </div>
      </div>

    
      <div className="w-[318px] h-[62px] left-[29px] text-[13px] top-[533px] absolute">20 Flats of 5 Unit Blocks Estate
      <br/>Kotopo Along Osiele Road before, UNAB university  Junction, Abekouta
      (Block of Flats, ESTATES)</div>


    <div className="w-[246px] h-[58px] left-[91px] top-[655px] absolute bg-[#bce4eb]/25 rounded-[50px]" />
    <div className="w-4 h-4 left-[98px] top-[675px] absolute">
      <div className="w-4 h-4 left-0 top-0 absolute">
        <button><img src={ArrowRight} alt="" /></button>
      </div>
    </div>

    <div className="w-[42px] h-[29px] left-[134px] top-[675px] absolute">
      <div className="w-[42px] h-3.5 left-0 top-0 absolute text-[#521292] text-[10px] font-medium font-['HK Grotesk'] capitalize">bedroom</div>
      <div className="w-2 h-[18px] left-[17px] top-[11px] absolute text-black text-sm font-bold font-['HK Grotesk'] capitalize">6</div>
    </div>
    <div className="w-[45px] h-[29px] left-[187px] top-[675px] absolute">
      <div className="w-[45px] h-3.5 left-0 top-0 absolute text-[#521292] text-[10px] font-medium font-['HK Grotesk'] capitalize">Bathroom</div>
      <div className="w-2 h-[18px] left-[19px] top-[11px] absolute text-black text-sm font-bold font-['HK Grotesk'] capitalize">4</div>
    </div>
    

    <div className="w-[55px] h-[25px] left-[243px] top-[675px] absolute text-[#521292] text-[10px] font-medium font-['HK Grotesk'] capitalize">area safety</div>
    <div className="w-[49px] h-[3.74px] left-[243px] top-[697px] absolute">
      <div className="w-[8.17px] h-[3.74px] left-0 top-0 absolute bg-[#521292]" />
      <div className="w-[8.17px] h-[3.74px] left-[10.21px] top-0 absolute bg-[#7847aa]" />
      <div className="w-[8.17px] h-[3.74px] left-[20.42px] top-0 absolute bg-[#9f7bc2]" />
      <div className="w-[8.17px] h-[3.74px] left-[30.63px] top-0 absolute bg-[#d9cae7]" />
      <div className="w-[8.17px] h-[3.74px] left-[40.83px] top-0 absolute bg-[#e4e4e4]" />
    </div>

    <div className="w-4 h-4 left-[329px] top-[695px] absolute origin-top-left rotate-180">
      <div className="w-4 h-4 left-0 top-0 absolute">
      <button><img src={ArrowRight} alt="" /></button>
      </div>
    </div>





    <div className="w-[428px] h-[79px] left-[1px] top-[729px] absolute rounded-[5px]">
      <div className="w-[428px] h-[85px] left-0 top-0 absolute bg-[]" />
      <img className="w-[51px] h-[51px] left-[32px] top-[16px] absolute rounded-[60px]" src={Man} />
      <div className="left-[94px] top-[21px] absolute text-right text-[#cfcfcf] text-base font-bold font-['HK Grotesk'] leading-none">Agent  Profile</div>
      <div className="w-[128.55px] h-[19.02px] left-[94.10px] top-[42.71px] absolute text-[#171625] text-sm font-semibold font-['HK Grotesk'] leading-none">About the Inspector</div>
      <div className="w-6 h-6 left-[384px] top-[28px] absolute">
        <div className="w-6 h-6 left-0 top-0 absolute">
        </div>
      </div>
    </div>


    <div className='mt-[50px]'>
      <div className="w-[125px] h-[30.20px] left-[29px] top-[830px] absolute">
        <div className="w-[125px] h-[30.20px] left-0 top-0 absolute bg-[#c5b0db]" />
        <div className="w-[4.84px] h-[30.20px] left-0 top-0 absolute bg-[#521292]" />
      </div>
      <div className="w-[81px] h-[21px] left-[63px] top-[836px] absolute text-[#521292] text-sm font-medium font-['HK Grotesk'] capitalize">description</div>
      <div className="w-[22px] h-[22px] left-[37px] top-[794px] absolute">
        <div className="w-[22px] h-[22px] left-0 top-0 absolute"></div>
      </div> 
    </div>
   
   
 
    <div className="w-[375px] left-[29px] top-[875px] text-[12px] absolute dot">The property is serenely located in the most desired spot of Abeokuta, no wander tenants queue in wait for any vacancy at any time in the building.
    <br/>
    <br/>Meanwhile, the flats are housed in a very spacious compound and the whole facility is barely  24 months old which makes it relatively a new building. All the facilities are intact and in a perfect condition and below you’d learn more about the available amenities and condition.
    <br/>
    <br/> 
    <ul className='ml-[23px]'>
      <li className='list-disc'>All flats are fully occupied by tenants presently</li>
      <li className='list-disc'>All necessary documents are available except c of o</li>
      <li className='list-disc'>Located in ideal location in Abeokuta</li>
      <li className='list-disc'>The Owner needs the money urgently</li>
      <li className='list-disc'>All rooms are ensuit</li>
      <li className='list-disc'>Marble kitchen Cabinets</li>
      <li className='list-disc'>Central Borehole</li>
      <li className='list-disc'>24hours Security</li>
      <li className='list-disc'>Area has amazing gift of constant electricity</li>
      <li className='list-disc'>POP ceiling</li>
      <li className='list-disc'>Property fully fenced and gated</li>
    </ul>
    </div>
     
    
  

    <div className="w-[428px] h-[88px] top-[1280px] mx-auto grid absolute bg-[#22bcbc]/60" />
    <img src={Vector4} alt="" className='left-[5.44%] top-[1310px] absolute' />
    <div className="w-24 left-[71px] top-[1307px] absolute text-black text-sm font-semibold font-['HK Grotesk'] capitalize">View property Status</div>
    <div className="w-[75.09px] h-[32.21px] px-[27px] py-[18px] left-[310px] top-[1307px] absolute bg-[#5a7e7e] rounded-[5px] justify-center items-center gap-2.5 inline-flex">
      <div className="w-[85px] text-[rgb(254,254,254)] text-[10px] font-medium font-['HK Grotesk'] capitalize">Back to Property<span className='ml-[3px]'>info</span></div>
    </div>
    
    
   
  </div>
  <Button />
 </>
  )
}

export default Wegopage