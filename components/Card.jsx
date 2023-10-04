import Image from "next/image"
import {BsPeople} from 'react-icons/bs'
import {LuFuel} from 'react-icons/lu'
 import {BsSpeedometer2} from 'react-icons/bs'
import {PiSteeringWheelLight} from 'react-icons/pi'
import {AiOutlineHeart} from 'react-icons/ai'

const Card = ({image,carName,gasType,people,mileage,price,year}) => {
    
  return (
    <div className="rounded-xl p-2 bg-[#f3fbff] shadow-md border border-white">
        <Image className="rounded-lg mb-2" src={image} alt="" height={250} width={300}/>
        <div className="flex justify-between pb-2">
            <p className="text-lg">{carName}</p>
            <p className="border border-[#30A2FF] px-0.5 border-dashed rounded-lg">{year}</p>
        </div>
        <div className="grid grid-cols-2 gap-2 pb-2">
            <div className="flex gap-2"><BsPeople color="#3085C3" style={{display:'inline-block'}}/> <span style={{fontSize:'12px'}}>{people} People</span></div>
            <div className="flex gap-2"><LuFuel color="#3085C3" style={{display:'inline-block'}}/><span style={{fontSize:'12px'}}>{gasType}</span></div>
            <div className="flex gap-2"><BsSpeedometer2 color="#3085C3" style={{display:'inline-block'}}/><span style={{fontSize:'12px'}}>{mileage}-km/1-litre</span></div>
            <div className="flex gap-2"><PiSteeringWheelLight color="#3085C3" style={{display:'inline-block'}}/><span style={{fontSize:'12px'}}> Automatic</span></div>
        </div> 
        <hr />
        <div className="flex justify-between pt-2">
            <p><span style={{fontSize:24}}>${price}</span> <span style={{fontSize:12}}>/month</span></p>
            <div className="flex gap-1">
                <button className="rounded-md bg-[#AED2FF] text-white p-1"><AiOutlineHeart color="#3085C3"/></button>
                <button className="rounded-lg bg-[#30A2FF] text-white px-2 py-1">Rent now</button>
            </div>
        </div>
    </div>
  )
}

export default Card