import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import Input from "./Input";
import { handlePostState, useSSRPostsState } from "../atoms/postAtom";
import Post from "./Post";

function Feed({ posts }) {
  // when the user posts, the useEffect hook will run again and fetch the new posts from the database with the latest post at the top
  const [realtimePosts, setRealtimePosts] = useState([]);
  //useRecoilState works like useState but it's a global state
  const [handlePost, setHandlePost] = useRecoilState(handlePostState);
  //useSSRPostsState is a global state that is set to true by default. This is so that when the user first loads the page, the posts are rendered on the server side. This is so that the user doesn't have to wait for the posts to load. Once the user posts, the useEffect hook will run again and fetch the new posts from the database with the latest post at the top. This is when we set the useSSRPostsState to false so that the posts are rendered on the client side.
  const [useSSRPosts, setUseSSRPosts] = useRecoilState(useSSRPostsState);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("/api/posts", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      console.log(20);
      const responseData = await response.json();
      setRealtimePosts(responseData);
      setHandlePost(false);
      //set serverside rendering to false once the users posts
      setUseSSRPosts(false);
    };
    //invoke the fetchPosts function inside useEffect
    fetchPosts();
    //set the handlePost to false so that the useEffect hook doesn't run again. This is because we only want to run the useEffect hook once when the user posts.
  }, [handlePost]);

  return (
    <div className="space-y-6 pb-24 max-w-lg">
      <Input />
      {/* Posts */}
      {!useSSRPosts
        ? realtimePosts.map((post) => <Post key={post._id} post={post} />)
        : posts.map((post) => <Post key={post._id} post={post} />)}
    </div>
  );
}

export default Feed;