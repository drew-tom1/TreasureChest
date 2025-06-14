import Image from "next/image";
import outlinelogo_removebg_preview from "../public/outlinelogo-removebg-preview.png";
import Link from "next/link";
import "./styles/globals.css";

export default function Home() {
  return (
    <div className="grid items-center justify-items-center min-h-screen p-8 gap-16 sm:p-20 font-[family-name:var(--font-geist-mono)]">
      <div className="bg-card">
        <h1 className="text-2xl mb-2 p-3 text-center">
          Theta Tau Omega Epsilon Chapter
        </h1>
        <h3 className="text-lg p-3 text-center">
          Chapter and Financial Management Tool
        </h3>
      </div>

      <Image src={outlinelogo_removebg_preview} alt="Theta Tau Logo" width={170} height={170} />
      <Link href="/dashboard"> 
        <button className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Login
        </button>
      </Link>
    </div>
  );
}
