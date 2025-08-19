import type { Metadata } from "next";
import "./globals.css";
import { Sider } from "../../components/sider/Sider";
import { Search } from "../../components/search/Search";
import { Play } from "../../components/play/Play";
import { Suspense } from "react";
export const metadata: Metadata = {
  title: "Project-5",
  description: "Project nghe nhạc trực tuyến ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body
      >
        <div className="bg-[#292929]">
         <div className="container mx-auto">
             <div className="flex items-start">
              <div className="w-[280px] mr-[20px] ">
                   <Sider/>
              </div> 
              <div className=" mt-[20px] flex-1">       
                   <Suspense>
                    <Search/> 
                    </Suspense>  
              <main className="mb-[180px] mt-[30px] h-[3000px]"> 
                <Suspense>
                {children}
                </Suspense>
              </main>
              </div>
              </div>  
         </div>
         <Play/>
        </div>
      </body>
    </html>
  );
}
