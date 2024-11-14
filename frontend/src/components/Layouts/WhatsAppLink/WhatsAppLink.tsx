import Image from 'next/image';
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
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed top-1/2 right-4 transform -translate-y-1/2 z-60 md:right-6 lg:right-8"
    >
      <Image src={Whatsapp} alt={altText} width={60} height={60} />
    </a>
  );
}