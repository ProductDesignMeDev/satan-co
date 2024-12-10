"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import AgeVerification from "./ageverification/page";

export default function Home() {
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsClient(true); // Asegurarse de que solo se ejecute en el cliente
    const ageVerified = localStorage.getItem('ageVerified');
    if (ageVerified !== 'true') {
      router.push('/ageverification'); // Redirigir a la verificación de edad si no está verificada
    }
  }, [router]);

  if (!isClient) {
    return null; // No renderizar nada en el servidor
  }

  return (
    <div>
      <AgeVerification />
    </div>
  );
}
