"use client"
import { FaBackwardStep, FaForwardStep, FaPause, FaPlay } from "react-icons/fa6";

export const PlayAction=()=>{
  const handPlay=()=>{
    
 const elementPlayAudio:any=document.querySelector(".play-audio");
 const elementButtonPlay=elementPlayAudio.querySelector(".inner-button-play");
  const elementAudio=elementPlayAudio.querySelector(".inner-audio");
 if(elementButtonPlay.classList.contains("play")){
 elementButtonPlay.classList.remove("play");
    elementAudio.pause();
 }
 else{
  elementButtonPlay.classList.add("play");
  elementAudio.play();
 }
  }
   const handlePrev=()=>{
    const currentSong:any=document.querySelector("[song-id].active");
    const prevSong=currentSong?.previousElementSibling;
   const buttonPlay=prevSong?.querySelector(".inner-play-song");
    buttonPlay.click();
  }
  const handleNext=()=>{
    const currentSong:any=document.querySelector("[song-id].active");
    const nextSong=currentSong?.nextElementSibling;
   const buttonPlay=nextSong?.querySelector(".inner-play-song");
    buttonPlay.click();
  }
  return(
    <>         
     <div className="flex items-center justify-center ">
                 <button className="text-[16px] text-white"
                 onClick={handlePrev}
                 >
                  <FaBackwardStep />
                 </button>
                 
                 <button className="text-[14px] text-white mx-[42px] bg-[#00ADEF] rounded-[50%] h-[32px] w-[32px] flex justify-center items-center inner-button-play"
                  onClick={handPlay}
                 >
                  <FaPlay className="inner-icon-play"/>
                  <FaPause className="inner-icon-pause"/>
                 </button>
                 <button className="text-[16px] text-white"
                 onClick={handleNext}
                 >
                  <FaForwardStep />
                 </button>
             </div>
    </>
  );
}