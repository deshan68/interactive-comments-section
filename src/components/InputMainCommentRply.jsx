import React, { useState } from "react";
import juliusomoPNG from "../assets/images/avatars/image-juliusomo.png";

function InputMainCommentRply({
  msgType,
  addRplyToMainCommnt,
  author,
  mainCommntRply,
  setMainCommntRply,
}) {
  // console.log(mainCommntRply);
  const imageUrl =
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80";
  //   const msgType = "reply";

  return (
    <section className="bg-White flex items-start justify-between  w-full  rounded-xl p-5 mt-3 sticky bottom-0 ">
      <div>
        <img className="h-10 w-10 rounded-full" src={juliusomoPNG} alt="" />
      </div>
      <div>
        <textarea
          id="message"
          rows="4"
          value={mainCommntRply}
          onChange={
            msgType === "reply"
              ? (e) => setMainCommntRply(e.target.value)
              : () => setMainCommntRply("comment")
          }
          className="block p-2.5 w-600 text-sm text-Darkblue outline-none bg-White rounded-lg border border-ModerateBlue "
          placeholder="Write your thoughts here........"
        ></textarea>
      </div>
      <div>
        <button
          onClick={addRplyToMainCommnt}
          className="bg-ModerateBlue font-bold h-12 w-28 rounded-lg hover:bg-Lightgrayishblue "
        >
          {msgType == "reply" ? "REPLY" : "SEND"}
        </button>
      </div>
    </section>
  );
}

export default InputMainCommentRply;
