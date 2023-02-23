import React, { useState } from "react";
import rplyIcon from "../assets/images/icon-reply.svg";
import plus from "../assets/images/icon-plus.svg";
import minus from "../assets/images/icon-minus.svg";
import deletei from "../assets/images/icon-delete.svg";
import DeleteMessage from "../DeleteMessage";

function CommentRplyCard({ rplyCmmnt, mainCmmntAuthor }) {
  const [isDeleteBottnVisible, setIsdeleteButtnVisible] = useState(false);
  const author = "juliusomo";

  return (
    <div className=" flex items-center justify-end">
      <section className="bg-Lightgrayishblue flex items-start justify-start max-w-2xl mt-3  w-11/12 rounded-xl p-7">
        <button className="flex justify-center items-center flex-col p-2 mr-5 gap-4 bg-Lightgray rounded-lg">
          <div className="">
            <img className="h-3 w-3" src={plus} alt="" />
          </div>
          <div className="text-ModerateBlue font-bold">12</div>
          <div className="">
            <img className=" w-3" src={minus} alt="" />
          </div>
        </button>
        <div className="flex items-start justify-center flex-col gap-3 ">
          <div className="flex items-center justify-between w-full">
            <div className=" flex items-center justify-center gap-2">
              <div>
                <img
                  className="h-8 w-8 rounded-full"
                  src={rplyCmmnt.imgURL}
                  alt=""
                />
              </div>
              <div className="font-bold text-Darkblue">
                {rplyCmmnt.userName}
              </div>
              {author == rplyCmmnt.userName && (
                <span className="text-White bg-ModerateBlue pr-1 pl-1  font-semibold rounded-sm pb-1">
                  you
                </span>
              )}
              <span className="text-GrayishBlue">1 week ago</span>
            </div>
            {author == rplyCmmnt.userName ? (
              <div className=" flex items-center justify-center gap-8 ml-32">
                <button
                  className="flex items-center justify-center gap-2"
                  onClick={() => setIsdeleteButtnVisible(!isDeleteBottnVisible)}
                >
                  <div>
                    <img
                      className="h-3 w-3 rounded-full"
                      src={deletei}
                      alt=""
                    />
                  </div>
                  <div className="text-SoftRed font-bold">Delete</div>
                </button>
                <button className="flex items-center justify-center gap-2">
                  <div>
                    <img
                      className="h-3 w-3 rounded-full"
                      src={rplyIcon}
                      alt=""
                    />
                  </div>
                  <div className="text-ModerateBlue font-bold">Edit</div>
                </button>
              </div>
            ) : (
              <>
                <button className="flex items-center justify-center gap-2">
                  <div>
                    <img
                      className="h-3 w-3 rounded-full"
                      src={rplyIcon}
                      alt=""
                    />
                  </div>
                  <div className="text-ModerateBlue font-bold">Reply</div>
                </button>
              </>
            )}
          </div>
          <div className="text-GrayishBlue font-semibold text-left text-base">
            <span className="text-ModerateBlue font-bold">
              @{mainCmmntAuthor}
            </span>
            {rplyCmmnt.replyCmmnt}
          </div>
        </div>
        {isDeleteBottnVisible && <DeleteMessage />}
      </section>
    </div>
  );
}

export default CommentRplyCard;
