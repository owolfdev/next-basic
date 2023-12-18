import Image from "next/image";

export default function Home() {
  return (
    <div className="z-10 w-full items-center justify-between text-sm lg:flex">
      <div className="w-full flex justify-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold">
          Basic Next.js app.
        </h1>
      </div>
    </div>
  );
}
