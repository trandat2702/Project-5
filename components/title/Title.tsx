export const Title=(props:{text:string})=>{
   const {text}=props;
 return(
  <>
  <div className="font-[700] text-[24px] text-[#EFEEE0] mb-[18px] ">
            {text}
          </div>
  </>
 );
}