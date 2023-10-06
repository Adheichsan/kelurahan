import React from "react";
import DeadLink from "@/pages/views/exiting/DeadLink";
import MetaHead from "@/components/MetaHead";

function page404() {
  return (
    <>
      <MetaHead
        title="smarteye.id"
      />
      <div>
        <DeadLink />
      </div>
    </>
  );
}

export default page404;
