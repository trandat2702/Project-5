/* eslint-disable indent */
/* eslint-disable react-hooks/exhaustive-deps */
"use client"

import { authFirebase } from "@/app/firebaseConfig";
import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function LogoutPage() {
  const router = useRouter();

  useEffect(() => {
    signOut(authFirebase).then(() => {
      router.push("/login");
    // eslint-disable-next-line no-unused-vars
    }).catch((error) => {
       
    });
    
  }, []);

  return (
    <></>
  );
}