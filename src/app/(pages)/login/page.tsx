import { Metadata } from "next";
import { Title } from "../../../../components/title/Title";
import { FormLogin } from "./FormLogin";

export const metadata: Metadata = {
  title: "Trang Đăng nhập ",
  description: "Project nghe nhạc trực tuyến ",
};
export default function LoginPage() {
  return (
   <>
   <div className="w-[500px] mx-auto">
   <div className="mt-[60px] text-center mb-[20px]">
    <Title text="Đăng Nhập Tài Khoản"/>
    </div>
     <FormLogin/>
     </div>
   </>
  );
} 