"use client";

import React, { useState } from "react";
import { useSearchParams } from "next/navigation";

function page() {
  const searchParams = useSearchParams();
  const [links, setLinks] = useState([{ link: "", linktext: "" }]);
  const [handle, setHandle] = useState(searchParams.get("handle") ?? "");
  const [pic, setPic] = useState("");

  const handleChange = (index, key, value) => {
    setLinks((initialLinks) =>
      initialLinks.map((item, i) =>
        i === index ? { ...item, [key]: value } : item
      )
    );
  };

  const addLink = () => {
    setLinks([...links, { link: "", linktext: "" }]);
  };

  const submitLink = async () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      links: links,
      handle: handle,
      pic: pic,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    let r = await fetch("http://localhost:3000/api/add", requestOptions);
    const result = await r.json();

    if (result.success) {
      alert(result.message);
      setLinks([{ link: "", linktext: "" }]);
      setHandle("");
      setPic("");
    } else {
      alert(result.message);
    }

    console.log(result);
  };

  return (
    <div className="bg-green-800 min-h-screen grid grid-cols-2">
      <div className="col1 flex flex-col justify-center items-center">
        <h1 className="font-bold text-4xl">Create your bittree</h1>
        <div className="flex flex-col gap-5">
          <input
            onChange={(e) => setHandle(e.target.value)}
            value={handle}
            type="text"
            placeholder="Claim your handle"
          />
          {links.map((item, index) => (
            <div key={index} className="flex gap-4">
              <input
                onChange={(e) => handleChange(index, "link", e.target.value)}
                value={item.link ?? ""}
                type="text"
                placeholder="Enter Link text"
              />
              <input
                onChange={(e) => handleChange(index, "linktext", e.target.value)}
                value={item.linktext ?? ""}
                type="text"
                placeholder="Enter Link"
              />
            </div>
          ))}
          <button
            onClick={addLink}
            className="px-2 mx-2 bg-blue-700 text-white"
          >
            Add link
          </button>
          <button
            onClick={submitLink}
            className="px-2 mx-2 bg-blue-700 text-white"
          >
            Submit
          </button>
        </div>
      </div>
      <div className="col2 w-full h-screen">
        <img
          src="https://tse4.mm.bing.net/th?id=OIP.2sCQHLnz7YjsueYw8eZkVAHaHa&pid=Api&P=0&h=220"
          className="h-full object-contain"
          alt=""
        />
      </div>
    </div>
  );
}

export default page;
