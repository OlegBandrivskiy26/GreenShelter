import "./TeamCard.css"
import instagramIcon from "./img/instagram.svg"
import facebookIcon from "./img/facebook.svg"

function TeamCard(props) {
    return (
        <div className="TeamCard">
            <img src={props.image} alt="Team member" className="TeamCard-image" />
            <div className="TeamCard-medias">
                <a href="/" className="TeamCard-media-btn"><img src={instagramIcon} alt="instagram" className="TeamCard-mediaIcon" /></a>
                <a href="/" className="TeamCard-media-btn"><img src={facebookIcon} alt="facebook" className="TeamCard-mediaIcon" /></a>
            </div>
        </div>
    )
}