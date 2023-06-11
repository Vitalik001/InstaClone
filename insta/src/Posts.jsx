import Post from "./Post/Post";
import Stories from "./Stories";
import "./index.css";
export default function Posts(){
    return (
        <div className="Posts">
            <Stories></Stories>
            <Post></Post>
            <Post></Post>
        </div>
    )
}