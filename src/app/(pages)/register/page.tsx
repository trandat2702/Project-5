import { Metadata } from "next";
import { Title } from "../../../../components/title/Title";
import { FormRegister } from "./FormRegister";

export const metadata: Metadata = {
  title: "Trang Đăng Ký",
  description: "Project nghe nhạc trực tuyến ",
};
export default function RegisterPage() {
 return (
   <>
   <div className="w-[500px] mx-auto">
   <div className="mt-[60px] text-center mb-[20px]">
    <Title text="Đăng Ký Tài Khoản"/>
    </div>
       <FormRegister/>
     </div>
   </>
  );
} 