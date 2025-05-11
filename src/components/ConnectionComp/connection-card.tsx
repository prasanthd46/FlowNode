import { ConnectionTypes } from "@/lib/type";
import react from "react"
import Image from "next/image"
import {Card,CardDescription,CardHeader,CardTitle} from "@/components/ui/card"
import Link from "next/link";
type Props={
    type:ConnectionTypes;
    icon:string;
    title:ConnectionTypes;
    description:string;
    callback?:()=>void;
    connected:{} & any
}
const ConnectionCard =({description,type,icon,title,connected}:Props)=>{
  
    return <Card className="flex flex-row w-full items-center justify-between px-5">
            <div className="flex items-center gap-4">
              <Image
                src={icon}
                alt={title}
                height={30}
                width={30}
                className="object-contain"
              />
              <div>
                <CardTitle className="text-lg">{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
              </div>
            </div>
            <div className="flex flex-col items-center gap-2 p-4">
                {connected[type]?(
                <div  className="border-bg-primary rounded-lg border-2 px-3 py-2 font-bold text-white">
                    Connected
                </div>)
            :(
            <Link href={
                title==='Discord'?
                process.env.NEXT_PUBLIC_DISCORD_REDIRECT! || '#':
                title==='Notion'?
                process.env.NEXT_PUBLIC_NOTION_AUTH_URL! || '#' :
                title==='Slack'?
                process.env.NEXT_PUBLIC_SLACK_REDIRECT! || '#':
                '#' 
                }  className="rounded-lg bg-white p-2 font-bold text-black">
                        Connect 
                </Link>
            )}
            </div>
        </Card>
 
}
export default ConnectionCard
