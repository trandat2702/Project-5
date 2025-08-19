
import { PlayInfo } from "./PlayInfo";
import { PlayAction } from "./PlayAction";
import { PlayTime } from "./PlayTime";
import { PlayVolume } from "./PlayVolume";
export const Play=()=>{
   return(
     <>
     <div className="border-t border-[#494949] fixed bottom-0 left-0 w-full bg-[#212121] z-[999] py-[20px] hidden  play-audio">
      <audio className="inner-audio">
           <source src="/" />
      </audio>
        <div className="container mx-auto flex items-center justify-between">
            <PlayInfo/>
          <div className="flex-1 mx-[66px]">
            <PlayAction/>
             <PlayTime/>
          </div>
         <PlayVolume/>
        </div>
     </div>
     </>
   );
}