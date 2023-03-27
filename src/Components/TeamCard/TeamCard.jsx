import "./TeamCard.css"

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

import instagramIcon from "./img/instagram.svg"
import facebookIcon from "./img/facebook.svg"

function TeamCard({id, image, instagramLink, facebookLink}) {
    let card = useRef(null);
    useEffect(()=>{
        gsap.set(`#TeamCard-${id} .TeamCard-medias`, {
            yPercent: 200
        })
        card.current.addEventListener("mouseenter", (e)=>{
            let tl = gsap.timeline();
            tl.to(`#TeamCard-${id} .TeamCard-medias`, {
                yPercent: 0,
                duration: 0.6,
                ease: "back.out(1.7)"
            })
        })
        card.current.addEventListener("mouseleave", (e)=>{
            let tl = gsap.timeline();
            tl.to(`#TeamCard-${id} .TeamCard-medias`, {
                yPercent: 200,
                duration: 0.6,
                ease: "back.out(1.7)"
            })
        })
    }, [id])
    return (
        <div ref={card} id={`TeamCard-${id}`} className="TeamCard">
            <img loading="lazy" src={image} alt="Team member" className="TeamCard-image" />
            <div className="TeamCard-medias">
                <a href={instagramLink} className="TeamCard-media-btn"><img src={instagramIcon} alt="instagram" className="TeamCard-mediaIcon" /></a>
                <a href={facebookLink} className="TeamCard-media-btn"><img src={facebookIcon} alt="facebook" className="TeamCard-mediaIcon" /></a>
            </div>
        </div>
    )
}

export default TeamCard