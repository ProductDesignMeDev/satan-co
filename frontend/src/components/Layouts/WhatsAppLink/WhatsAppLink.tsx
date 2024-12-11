"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import WhatsAppPopup from './WhatsAppPopup';
import { Whatsapp } from '@/public';

interface WhatsAppLinkProps {
  phoneNumber: string;
  message?: string;
  altText?: string;
}

export default function WhatsAppLink({
  phoneNumber,
  message = '',
  altText = 'WhatsApp Logo',
}: WhatsAppLinkProps) {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <>
      <a
        onClick={() => setPopupOpen(true)}
        className="fixed top-[500px] md:top-[552px] right-[5px] transform -translate-y-1/2 z-60 md:right-13 lg:right-8 cursor-pointer"
      >
        <Image src={Whatsapp} alt={altText} width={60} height={60} />
      </a>
      <WhatsAppPopup
        isOpen={isPopupOpen}
        onClose={() => setPopupOpen(false)}
        whatsappUrl={whatsappUrl}
      />
    </>
  );
}