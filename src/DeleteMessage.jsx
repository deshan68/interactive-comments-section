import React from "react";

function DeleteMessage() {
  return (
    <div className="w-80 flex items-center gap-3 rounded-md justify-center p-5  flex-col bg-White  midddle-position">
      <div className="text-Black font-bold text-lg  w-full">Delete comment</div>
      <div className="text-GrayishBlue">
        Are you sure you want to delete this command? This will remove the
        comment and can't be undone
      </div>
      <div className="flex items-center justify-between w-full pt-2 pb-2">
        <button className="bg-GrayishBlue pr-5 pl-5 pt-2 pb-2 font-bold rounded-md ">
          NO, CANCEL
        </button>
        <button className="bg-SoftRed pr-5 pl-5 pt-2 pb-2 font-bold rounded-md ">
          YES, DELETE
        </button>
      </div>
    </div>
  );
}

export default DeleteMessage;
