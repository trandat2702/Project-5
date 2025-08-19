
import { dbFirebase } from "@/app/firebaseConfig";
import { onValue, ref } from "firebase/database";

import { CardInfo } from "../../../../../components/card/CardInfo";
import { Title } from "../../../../../components/title/Title";
import { SongItem2 } from "../../../../../components/song/SongItem2";


// export const metadata: Metadata = {
//   title: "Danh sách bài hát theo danh mục",
//   description: "Project nghe nhạc trực tuyến",
// };

export default async function CategoryDetailPage(props: any) {
  const { id } = await props.params ;
  const id1=parseInt(id);
  let dataFinal: any ;


  onValue(ref(dbFirebase, '/categories/' + id1), (item) => {
    dataFinal = item.val();
  })

  const dataSection2: any[] = [];
  const songRef = ref(dbFirebase, 'songs');
  onValue(songRef, (items) => {
    items.forEach((item) => {
      const key = item.key;
      const data = item.val();
        
      if(data.categoryId === id) {
        onValue(ref(dbFirebase, '/singers/' + data.singerId[0]), (itemSinger) => {
          const dataSinger = itemSinger.val();
          dataFinal["singer"]=dataSinger.title;
          dataSection2.push(
            {
              id: key,
              image: data.image,
              title: data.title,
              singer: dataSinger.title,
              link: `/song/${key}`,
              time: "4:32",
              audio: data.audio
            }
          );
        })
      }
    })
  });

  return (
    <>
      {dataFinal && ( 
        <>
        <CardInfo
        image={dataFinal.image}
        title={dataFinal.title}
        description={dataFinal.description}/>
      <div className="mt-[30px]">
        <Title text="Danh Sách Bài Hát" />

        <div className="grid grid-cols-1 gap-[10px]">
          {dataSection2.map((item, index) => (
            <SongItem2 key={index} item={item} />
          ))}
        </div>
      </div>
      </>
    )}
    </>
  );
 
}