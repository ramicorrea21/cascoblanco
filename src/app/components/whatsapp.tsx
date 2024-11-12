import Image from "next/image";
import Link from "next/link";

export default function WspButton() {
  const phoneNumber = "+5493513006426";
  const message = "Hola! Visite la web de Casco Blanco Constructora y quiero más información.";

  const whatsappLink = `https://api.whatsapp.com/send?phone=${encodeURIComponent(phoneNumber)}&text=${encodeURI(message)}`;

  return (
    <>
      <div>
        <Link
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/whatsapp.webp"
            alt="whatsapp"
            width={300}
            height={150}
            className="fixed hidden md:block bottom-8 right-4 rounded-full cursor-pointer"
          />
          <Image
            src="/whatsapp.webp"
            alt="whatsapp"
            width={200}
            height={100}
            className="fixed md:hidden bottom-2 right-2 rounded-full cursor-pointer"
          />
        </Link>
      </div>
    </>
  );
}