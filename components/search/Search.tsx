"use client"
import { useRouter, useSearchParams } from "next/navigation";
import { FaMagnifyingGlass } from "react-icons/fa6";
export const Search=()=>{
          const router=useRouter();
          const searchParams=useSearchParams();
    const handleSubmit=(event:any)=>{
          event.preventDefault();
          const keyword=event.target.keyword.value;
          router.push(`/search?keyword=${keyword}`); 
    }
    const defaultKeyword=searchParams.get("keyword")||"";
   return(
     <>
        <form className="sticky top-0 bg-[#212121] py-[16px] rounded-[50px] flex items-center gap-[20px] "
        onSubmit={handleSubmit}
        >
           <input 
           defaultValue={defaultKeyword}
           name="keyword"
           placeholder="Tìm kiếm..."
           className="text-white font-[600] order-2 outline-none border-none flex-1"/>
           
           <button className="order-1 text-[22px] text-white ml-[30px]">
             <FaMagnifyingGlass/> 
           </button>
        </form> 
     </>
   );
}