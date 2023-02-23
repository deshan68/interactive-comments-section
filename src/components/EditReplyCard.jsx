import React from "react";
import rplyIcon from "../assets/images/icon-reply.svg";
import plus from "../assets/images/icon-plus.svg";
import minus from "../assets/images/icon-minus.svg";
import deletei from "../assets/images/icon-delete.svg";

function EditReplyCard() {
  const author = "juliusomo";
  const imageUrl =
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80";

  return (
    <div className=" flex items-center justify-end">
      <section className="bg-White flex items-center justify-center flex-col max-w-2xl mt-3  w-11/12 rounded-xl p-7">
        <div className=" flex items-start justify-evenly w-full ">
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
                  <img className="h-8 w-8 rounded-full" src={imageUrl} alt="" />
                </div>
                <div className="font-bold text-Darkblue">{author}</div>
                {author == "juliusomo" && (
                  <span className="text-White bg-ModerateBlue pr-1 pl-1  font-semibold rounded-sm pb-1">
                    you
                  </span>
                )}
                <span className="text-GrayishBlue">1 week ago</span>
              </div>
              <div className=" flex items-center justify-center gap-8">
                <button className="flex items-center justify-center gap-2">
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
            </div>
            <div>
              <textarea
                id="message"
                rows="4"
                value={
                  "@amyrobson If you are still new.lorem Ipsum is simplown printer took a galley of type and scrambled it to make a type specimen book."
                }
                class="block p-2.5 w-700 text-sm text-Darkblue outline-none bg-White rounded-lg border border-ModerateBlue "
                placeholder="Write your thoughts here........"
              ></textarea>
            </div>
          </div>
        </div>
        <div className="mt-3 w-full  flex items-center justify-end">
          <button className="bg-ModerateBlue font-bold h-12 w-28 rounded-lg hover:bg-Lightgrayishblue ">
            UPDATE
          </button>
        </div>
      </section>
    </div>
  );
}

export default EditReplyCard;
