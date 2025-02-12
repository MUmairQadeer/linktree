import clientPromise from "@/lib/mongodb"
import { notFound } from "next/navigation";

export default async function Page({ params }) {

  const client = await clientPromise;
  const db =await client.db("bittree");
  const collection = db.collection("links")

  const item =await collection.findOne({handle})
  if(!item){
    return notFound
  }

  const handle = (await params).handle
  return <div className="flex min-h-screen bg-purple-400 items-center justify-center">



    <div className="photo">
      <img src="{item.pic}" alt="" />
      <span className="text-xl font-bold">@{item}</span>
      <div className="links">
        {item.links.map((item, index) => {
          { item.link }
          { item.linktext }
        })
        }
      </div>
    </div>
  </div>
}