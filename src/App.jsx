import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import CommentCard from "./components/CommentCard";
import CommentRplyCard from "./components/CommentRplyCard";
import InputMainCommentRply from "./components/InputMainCommentRply";
import InputReply from "./components/InputReply";
import EditReplyCard from "./components/EditReplyCard";
import DeleteMessage from "./DeleteMessage";
import juliusomoPNG from "./assets/images/avatars/image-juliusomo.png";
import amyrobsonPNG from "./assets/images/avatars/image-amyrobson.png";
import maxblagunPNG from "./assets/images/avatars/image-maxblagun.png";
import ramsesmironPNG from "./assets/images/avatars/image-ramsesmiron.png";

function App() {
  const author = { name: "juliusomo", imgURL: juliusomoPNG };
  const [comments, setComments] = useState([
    {
      userName: "amyrobson",
      userID: 1,
      imgURL: amyrobsonPNG,
      commentMsg:
        "amyrobson,Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
      replyCmmnts: [],
    },
    {
      userName: "maxblagun",
      userID: 2,
      imgURL: maxblagunPNG,
      commentMsg:
        "maxblagun Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
      replyCmmnts: [
        {
          userName: "ramsesmiron",
          imgURL: ramsesmironPNG,
          replyCmmnt:
            " If you are still new to react. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        },
        {
          userName: "juliusomo",
          imgURL: juliusomoPNG,
          replyCmmnt:
            " If you are still new to react. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        },
      ],
    },
    {
      userName: "ramsesmiron",
      userID: 3,
      imgURL: ramsesmironPNG,
      commentMsg:
        "ramsesmiron Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
      replyCmmnts: [],
    },
    {
      userName: "juliusomo",
      userID: 4,
      imgURL: juliusomoPNG,
      commentMsg:
        "juliusomo Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
      replyCmmnts: [],
    },
  ]);
  return (
    <div className="App">
      <div className="w700 ">
        <CommentCard
          author={author}
          comments={comments}
          setComments={setComments}
        />
        {/* 
        <InputMainCommentRply />
        <EditReplyCard />
        <CommentRplyCard /> */}
        <InputReply />
        {/* <InputMainCommentRply /> */}
      </div>
    </div>
  );
}

export default App;
