import UpperBar from './UpperBar'
import LowerBar from "./LowerBar";

export default function Post(){
    return (
        <div className="Post">
            <UpperBar></UpperBar>
            <img
                src="dog.jpg"
                alt="Dog"
                className="main-photo"
            />
            <LowerBar></LowerBar>
        </div>
    )
}