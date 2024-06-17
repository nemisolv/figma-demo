import { IoMdSearch } from "react-icons/io";


function InputSearch() {
    return <div className="relative">
        <input type="text" placeholder="Search" className="border border-gray-300 rounded-md px-2 py-1 text-[#333] font-normal" />  
        <IoMdSearch  className="absolute right-0 top-2/4 -translate-y-2/4" color='#000' size={20}/>

    </div>

}

export default InputSearch;