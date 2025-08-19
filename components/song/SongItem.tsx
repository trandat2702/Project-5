import Link from "next/link";
import { ButtonPlay } from "../button/ButtonPlay";
import { ButtonHeart } from "../button/ButtonHeart";

export const SongItem=(props:{item:any})=>{
  const {item}=props;
  return (
    <>
     {/* Item */}
            <div className="flex items-center justify-between bg-[#212121] rounded-[15px] p-[10px] " song-id={item.id}>
              <div className="flex "> 
                <div className="w-[76px] aspect-square rounded-[10px] truncate mr-[10px]">
                 <img
                 src={item.image} 
                 alt={item.title}
                 className="w-full h-full object-cover"
                 />     
                 </div>  
               <div className="flex-1">
                 <Link href={item.link} className="text-white text-[16px] font-[600] mb-[3px]">{item.title}</Link>
                 <p className="text-[#FFFFFF80] text-[12px] font-[400] mb-[5px]">{item.singer}</p>
                 <p className="text-white font-[400] text-[12px]">{item.listen.toLocaleString()} lượt nghe</p>
                 
               </div>
            </div>
            <div className="flex justify-center items-center gap-[10px]">
              <ButtonPlay 
              item={item}
              className={"text-[16px]  border-[1px] text-white h-[34px] w-[34px] flex items-center justify-center rounded-[50%] inner-play-song "} 
              />
             <ButtonHeart item={item}/>
            </div>
            </div>
           {/* End Item */}
    </>
  );
}