
"use client"
import { useState } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const [text, setText] = useState("")

  // const router = useRouter()

  const createTree = () => {
    alert(text);
    // router.push(`/generate?handle=${text}`)

  }
  return (
    <main>
      <section className=" min-h-screen bg-[#254F1A]  grid grid-cols-2 flex justify-center align-center ">
        <div className="  flex flex-col justify-center items-center  ml-[5vw] gap-4 ">
          <p className="text-6xl font-extrabold text-[#DAEA44]">Everything you are .In one, simple link in bio.</p>
          <p className="text-xl font-semibold text-[#DAEA44]">Join 50M+ people using Linktree for their link in bio. One link to help you share everything you create, curate and sell from your Instagram, TikTok, Twitter, YouTube and other social media profiles.</p>
          <div className="btn flex  gap-2 mt-4  w-full ">
            <input className="py-4 px-4 rounded-lg"
              type="text" value={text} placeholder="linktree/yourname"
              onChange={(e) => setText(e.target.value)} />
            <button onClick={createTree}
              className="bg-[#E9C0E9] text-black font-semibold rounded-full py-4 px-8">Claim your linktree</button>
          </div>
        </div>
        <div className=" mr-[5vw] mt-32">
          <img src="/Capture.PNG" alt="img here" />
        </div>
      </section>
    </main>
  );
}
