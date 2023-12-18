import ReactMarkdown from "react-markdown";

export default function Home() {
  const markdown = `
  🚀 **Next.js 14 Framework**: This is a basic template starter using Next.js 14. It offers efficient performance and fast page loading.

🌟 **Shadcn UI Elements**: The interface uses Shadcn UI components. It's designed to be responsive and user-friendly.

🔐 **Clerk Authentication**: The template includes Clerk for secure authentication. It ensures safe and reliable user sign-in experiences. Clerk authentication exists on the clerk branch only.

🎉 **Getting Started**: Begin your development with this Next.js 14 starter template. It's a foundation for creating modern web applications.

code: [https://github.com/owolfdev/next-basic](https://github.com/owolfdev/next-basic)
  `;

  return (
    <div className="max-w-xl z-10 w-full items-center justify-between text-sm lg:flex">
      <div className="w-full flex justify-center items-center flex-col gap-6">
        <h1 className="text-5xl sm:text-6xl font-bold">Basic Next.js</h1>
        <div className="flex flex-col gap-4 text-[16px]">
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
}
