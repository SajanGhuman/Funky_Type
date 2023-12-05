import Image from "next/image";
import Type from "./type/page";

export default function Home() {
  return (
    <main className="bg-monkey-gray scroll-smooth">
      <div className="flex justify-center items-center h-screen">
        <Type />
      </div>
    </main>
  );
}
