"use client"
// app/page.tsx
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import AgeVerification from "./ageverification/page";
export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const ageVerified = localStorage.getItem('ageVerified');
    if (ageVerified !== 'true') {
      router.push('/ageverification'); // Redirigir a la verificación de edad si no está verificada
    }
  }, [router]);

  return (
    <div>
      <AgeVerification />
    </div>
  );
}
