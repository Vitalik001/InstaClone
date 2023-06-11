import "./story.css"
export default function Story(){
    return (
        <div className="Story">
            <img
                src="dog.jpg"
                alt="Dog"
                className="story-photo"
            />
            <h6 className="story-name">Dog</h6>
        </div>
    )
}