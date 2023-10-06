import { Inter } from "next/font/google";
import Homepages from "./views/homepage/Homepages";
import MetaHead from "@/components/MetaHead";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
    <MetaHead 
      title="Jasa Virtual & Augmented Reality | smarteye.id"
    />
      <div>
        <Homepages/>
      </div>
    </>
  );
}
