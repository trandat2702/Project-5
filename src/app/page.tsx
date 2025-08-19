
import { Metadata } from "next";
import { Title } from "../../components/title/Title";
import { SongItem } from "../../components/song/SongItem";
import { CardItem } from "../../components/card/CardItem";
import { dbFirebase } from "./firebaseConfig";
import { onValue,ref } from "firebase/database";

export const metadata: Metadata = {
  title: "Project-5",
  description: "Project nghe nhạc trực tuyến ",
};
export default function Home() {
  //Section 1
  const dataSection1:any[]=[];
  const songRef=ref(dbFirebase,'songs');
  onValue(songRef, (items)=>{
    items.forEach((item)=>{
      const key=item.key;
      const data =item.val();
      if(dataSection1.length <3){
       
        onValue(ref(dbFirebase,'/singers/' +data.singerId[0]),(itemSinger)=>{
          const dataSinger=itemSinger.val();
          
          dataSection1.push(
            {
              id:key,
              image:data.image,
              title:data.title,
              singer:dataSinger.title,
              listen:data.listen,
              link:`song/${key}`,
              audio:data.audio,
              wishlist:data.wishlist
            }
          )
        })
      }
    })
  })
//  End Section 1

//Section 2
  const dataSection2: any[]=[];
    const categoryRef=ref(dbFirebase,'categories');
    onValue(categoryRef, (items)=>{
    items.forEach((item)=>{
      const key=item.key;
      const data =item.val();
      if(dataSection2.length <5){
          dataSection2.push(
            {
              id:key,
              image:data.image,
              title:data.title,
             description:data.description,
             link:`categories/${key}`
            }
          ) 
      }
    })
  })
  //End Section 2
  

  //Section 3
  const dataSection3:any[]=[];
    const singerRef=ref(dbFirebase,'singers');
    onValue(singerRef, (items)=>{
    items.forEach((item)=>{
      const key=item.key;
      const data =item.val();
      if(dataSection3.length <5){
          dataSection3.push(
            {
              id:key,
              image:data.image,
              title:data.title,
              description:data.description,
                link:`singers/${key}`
            }
          ) 
      }
    })
  })
  //End Section 3

  return (
   <>
      
       <div className="flex items-start justify-center ">
        {/* Section-1 */}
        <div className="bg-[url(/bg_1.png)] bg-contain bg-no-repeat rouder-[15px] w-auto h-[361px] flex items-center gap-[32px] " >
          <div className="w-[232px] ml-[32px]">
              <h3 className="text-[32px] font-[700] text-white mb-[6px]">
                 Nhạc EDM
              </h3>
              <p className="font-[500] text-[14px] text-white">
                 Top 100 Nhạc Electronic/Dance Âu Mỹ là danh sách 100 ca khúc hot nhất hiện tại của thể loại Top 100 Nhạc Electronic/Dance Âu Mỹ
              </p>
          </div>
          <div className=" w-[215px] mr-[22px] mt-[43px] ">
                <img 
                src="/demo/person-1.png"
                alt="Image-Singer"
                className="w-full h-full "
                />      
               </div>
        </div>
         
        <div className="flex-1 ml-[20px] ">
          <Title
             text={"Nghe Nhiều"}
          />
          <div className="flex flex-col gap-y-[12px]">
              {dataSection1.map((item,index)=>(
                   <SongItem key={index}
                     item={item}
                  /> 
              ))
              }
          </div>
        </div>
       </div>
       {/*End-Section-1 */}
       {/* Section-2:Danh Mục Nổi Bật */}
       <div className="mt-[30px]">
          <Title
             text={"Danh Mục Nổi Bật"}
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
 {/* Section-3:Ca Sĩ Nổi Bật */}
 <div className="mt-[30px] ">
          <Title
             text={"Ca Sĩ Nổi Bật"}
          />
          <div className="grid grid-cols-5 gap-[20px]">
             {dataSection3.map((item,index)=>(
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