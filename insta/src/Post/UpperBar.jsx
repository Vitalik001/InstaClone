import './post.css';

export default function UpperBar(){
    return (
        <div className="UpperBar">
            <img
                src="dog.jpg"
                alt="Dog"
                className="upper-bar-photo"
            />
            <div className="Username">
                Dog
            </div>
            <div className="Timestamp">
                51 m
            </div>
        </div>
    )
}