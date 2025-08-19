import { Metadata } from "next";
import { SongItem2 } from "../../../../components/song/SongItem2";
import { Title } from "../../../../components/title/Title";
import { WishList } from "./WishList";

export const metadata: Metadata = {
  title: "Trang bài hát yêu thích ",
  description: "Project nghe nhạc trực tuyến ",
};
export default function WishListPage() {
  return (
   <>
      
       <div className="mt-[30px]">
        <Title text={"Bài Hát Yêu Thích"} />
      </div>
    <WishList />
   </>
  );
} 