import React, { useState } from "react";
import rplyIcon from "../assets/images/icon-reply.svg";
import plus from "../assets/images/icon-plus.svg";
import minus from "../assets/images/icon-minus.svg";
import InputMainCommentRply from "./InputMainCommentRply";
import DeleteMessage from "../DeleteMessage";
import ramsesmironPNG from "../assets/images/avatars/image-ramsesmiron.png";
import CommentRplyCard from "./CommentRplyCard";

function CommentCard({ comments, setComments, author }) {
  const [msgType, setMsgType] = useState("");
  const [mainCommntRply, setMainCommntRply] = useState("");
  const [isVisibleInputMainCommntRply, setIsVisibleInputMainCommntRply] =
    useState(false);
  const [selectCmmntAuthorID, setselectCmmntAuthorID] = useState("");
  // const [info, setInfo] = useState([
  //   {
  //     userName: "amyrobson",
  //     userID: 1,
  //     imgURL: "amyrobsonPNG",
  //     commentMsg:
  //       "amyrobson,Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
  //     replyCmmnts: [
  //       {
  //         userName: "arun",
  //         imgURL: ramsesmironPNG,
  //         replyCmmnt:
  //           " If you are still new to react. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  //       },
  //     ],
  //   },
  //   {
  //     userName: "michel",
  //     userID: 2,
  //     imgURL: "amyrobsonPNG",
  //     commentMsg:
  //       "amyrobson,Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
  //     replyCmmnts: [
  //       {
  //         userName: "david",
  //         imgURL: ramsesmironPNG,
  //         replyCmmnt:
  //           " If you are still new to react. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  //       },
  //     ],
  //   },
  // ]);

  const startRplyToMainCmmnt = (authorId) => {
    setMsgType("reply");
    setselectCmmntAuthorID(authorId);
  };
  const addRplyToMainCommnt = () => {
    setComments((prev) =>
      prev.map((line) =>
        line.userID == selectCmmntAuthorID
          ? {
              ...line,
              replyCmmnts: line.replyCmmnts.concat({
                userName: author.name,
                imgURL: author.imgURL,
                replyCmmnt: ` ${mainCommntRply}`,
              }),
            }
          : line
      )
    );
    setselectCmmntAuthorID();
    setMainCommntRply("");
  };
  return (
    <>
      {comments.map((cmmnt, indx1) => (
        <div key={indx1}>
          <section className="bg-White flex items-start justify-start  w-full  rounded-xl p-7 mt-3">
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
                      src={cmmnt.imgURL}
                      alt=""
                    />
                  </div>
                  <div className="font-bold text-Darkblue">
                    {cmmnt.userName}
                  </div>
                  {author.name == cmmnt.userName && (
                    <span className="text-White bg-ModerateBlue pr-1 pl-1  font-semibold rounded-sm pb-1">
                      you
                    </span>
                  )}
                  <div className="text-GrayishBlue">1 month ago</div>
                </div>
                <button
                  className="flex items-center justify-center gap-2 ml-20"
                  onClick={() => startRplyToMainCmmnt(cmmnt.userID)}
                >
                  <div>
                    <img
                      className="h-3 w-3 rounded-full"
                      src={rplyIcon}
                      alt=""
                    />
                  </div>
                  <div className="text-ModerateBlue font-bold">Reply</div>
                </button>
              </div>
              <div className="text-GrayishBlue font-semibold text-left text-base">
                {cmmnt.commentMsg}
              </div>
            </div>
          </section>
          {selectCmmntAuthorID == cmmnt.userID && (
            <InputMainCommentRply
              addRplyToMainCommnt={addRplyToMainCommnt}
              msgType={msgType}
              author={author}
              setMainCommntRply={setMainCommntRply}
              mainCommntRply={mainCommntRply}
            />
          )}
          {cmmnt.replyCmmnts?.map((rplyCmmnt, indx2) => (
            <CommentRplyCard
              key={indx2}
              mainCmmntAuthor={cmmnt.userName}
              rplyCmmnt={rplyCmmnt}
            />
          ))}
        </div>
      ))}
      <InputMainCommentRply />
    </>
  );
}

export default CommentCard;
