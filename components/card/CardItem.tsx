import Link from "next/link";

export const CardItem =(props:{item:any})=> {
 
  const {item}=props;
     
  return(
     <>
     <div className="">
       <Link href={item.link}>
            <div className="mb-[10px] truncate aspect-square rounded-[15px]">
               <img src={item.image} 
               alt={item.title}
               className="w-full h-full object-cover"
               />
            </div>
            <h3 className="text-[14px] font-[700] text-white">{item.title}</h3>
            <p className="text-[#FFFFFF80] text-[12px] font-[400] line-clamp-1 ">{item.description}</p>
        </Link>
        </div>
     </>
  );
}