import React from 'react';
import "./TimeLine.css";
import Share from"../Share/Share";
import Post from '../Post/Post';
import{ Posts } from "../../dummyData";

export default function TimeLine() {
  return (
    <div className="timeline">
      <div className="timelineWrapper">
        <Share />
        {Posts.map((post) => (　//mapは配列の全ての要素を変換して新しい配列を返す（変える）
          <Post post={post} key={post.id} />
        ))}
      </div>
    </div>
  );
}
