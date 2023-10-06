import MetaHead from "@/components/MetaHead";
import React from "react";
import DoneCard from "../../../components/card/DoneCard";

function finish() {
  return (
    <>
      <MetaHead title="Finish | smarteye.id" />
      <div className="py-19">
        <div className="relative">
          <div
            style={{
              backgroundImage: "url('/products/our-products.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "35vh",
              width: "100%",
            }}
          >
            <div className="py-20">
              <div className="py-5">
                <DoneCard/>
              </div>
            </div>
          </div>
        </div>
        <div className="py-20">
          <div className="py-20"></div>
        </div>
      </div>
    </>
  );
}

export default finish;
