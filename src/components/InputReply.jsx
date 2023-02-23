import React from "react";

function InputReply() {
  const imageUrl =
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80";

  return (
    <div className=" flex items-center justify-end">
      <section className="bg-White flex items-start justify-between  w-11/12  rounded-xl p-7 mt-3 ">
        <div>
          <img className="h-10 w-10 rounded-full" src={imageUrl} alt="" />
        </div>
        <div>
          <textarea
            id="message"
            rows="4"
            class="block p-2.5 w-96 text-sm text-Darkblue outline-none bg-White rounded-lg border border-ModerateBlue "
            placeholder="Write your thoughts here..."
          ></textarea>
        </div>
        <div>
          <button className="bg-ModerateBlue font-bold h-12 w-28 rounded-lg hover:bg-Lightgrayishblue ">
            REPLY
          </button>
        </div>
      </section>
    </div>
  );
}

export default InputReply;
