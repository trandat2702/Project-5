import Link from "next/link";
import {  FaRegHeart } from "react-icons/fa6";
import { ButtonPlay } from "../button/ButtonPlay";

export const SongItem2=(props: {item:any})=>{
  const {item}=props;
  
  return(
    <>
      <div className="px-[18px] py-[10px] bg-[#212121] rounded-[15px] justify-between flex items-center">
       <div className="flex w-[40%] items-center">
          <ButtonPlay
          item={item}
           className={"text-white text-[18px] cursor-pointer"}/>
        <div className="ml-[12px] flex items-center gap-[12px]">
          <div className="w-[42px] truncate aspect-square rounded-[8px]">
            <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover"
            />
          </div>
          <div className="text-white text-[14px] font-[700]">
            <Link href={item.link}>
               {item.title}
            </Link>
           
          </div>
        </div>
        </div>
      
        <div className="w-[30%] text-center">
          <div className="text-white text-[14px] font-[400] ">
            {item.singer}
          </div>
        </div>


        <div className="w-[30%] flex items-center  gap-[18px] justify-end">
          <div className="text-white text-[14px] font-[400] ">
            {item.time}
          </div>
          <button className="cursor-pointer text-white text-[18px]">
            <FaRegHeart />
          </button>
        </div>
      </div>
    </>
  );
}