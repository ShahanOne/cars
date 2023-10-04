import {RiArrowDropDownLine} from 'react-icons/ri'
import {BsSearch} from 'react-icons/bs'
const Navbar = () => {
  return (
 <div className="bg-[#f2f5fc] rounded-2xl p-4 shadow-md mx-4 flex justify-between">
        <div className="flex">
            <div className='relative'>
                <div className="px-4">
            <input type="text" placeholder="Search..." className="px-4 py-1 rounded-xl focus:outline-none "/>
             <div className="absolute inset-y-0 right-6 flex items-center">
            <BsSearch className="text-gray-400" />
          </div>
            </div>
            </div>
          
          <div className='flex  text-slate-500'>Relevance <RiArrowDropDownLine style={{marginTop:3}}/></div>
          <div className='flex  text-slate-500 '>All brands<RiArrowDropDownLine style={{marginTop:3}}/></div> 
        </div>     
      </div>  
      ) 
}

export default Navbar