import { Inter } from "next/font/google";
import Homepages from "../components/homepages/Homepages";
import MetaHead from "@/components/MetaHead";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
    <MetaHead 
      title="Kelurahan Patriot"
    />
      <div>
        <Homepages/>
      </div>
    </>
  );
}
