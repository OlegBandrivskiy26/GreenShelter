import "./TeamCard.css"

function TeamCard(props) {
    return (
        <div className="TeamCard">
            <img src={props.image} alt="Team member" className="TeamCard-image" />
            <div className="TeamCard-medias">
                <a href="/" className="TeamCard-media-btn"></a>
                <a href="/" className="TeamCard-media-btn"></a>
            </div>
        </div>
    )
}