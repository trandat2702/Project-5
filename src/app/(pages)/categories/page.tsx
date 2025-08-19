import { Metadata } from "next";
import { CardItem } from "../../../../components/card/CardItem";
import { Title } from "../../../../components/title/Title";
import { onValue, ref } from "firebase/database";
import { dbFirebase } from "@/app/firebaseConfig";

export const metadata: Metadata = {
  title: "Danh mục bài hát ",
  description: "Project nghe nhạc trực tuyến ",
};
export default function CategoryPage() {
  //Section 2
    const dataSection2:any[]=[];
      const categoryRef=ref(dbFirebase,'categories');
      onValue(categoryRef, (items)=>{
      items.forEach((item)=>{
        const key=item.key;
        const data =item.val();
            dataSection2.push(
              {
                id:key,
                image:data.image,
                title:data.title,
               description:data.description,
               link:`categories/${key}`
              }
            ) 
      })
    })
    //End Section 2
 
  return (
   <>
   <div className="mt-[30px]">
            <Title
               text={"Danh Mục Bài Hát"}
            />
            <div className="grid grid-cols-5 gap-[20px]">
               {dataSection2.map((item,index)=>(
                    <CardItem key={index}
                    item={item}
                    /> 
               ))
               }
            </div>
         </div>
   </>
  );
} 