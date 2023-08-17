import Image from "next/image";
import { Inter } from "next/font/google";
import Logo from "../public/assets/logo.png";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      <Image src={Logo} alt="Miao grafismi itineranti" width={500} />
      <p className="text-3xl mt-10">work in progress...</p>
    </div>
  );
}
