import "./TeamPage.css"
import { register } from 'swiper/element/bundle';
import { useRef, useEffect } from "react";
import "swiper/element/css/autoplay"
import "swiper/element/css/virtual"

import TeamCard from "../TeamCard/TeamCard"

import team from "../../data/team.json"

register();
function TeamPage() {
    let swiperRef = useRef(null)
    useEffect(() => {
        function changeSlides() {
            if (window.innerWidth <= 454) {
                swiperRef.current.setAttribute("slides-per-view", "1")
                swiperRef.current.setAttribute("space-between", "25")
                swiperRef.current.setAttribute("centered-slides-bounds", "false")
            } else if (window.innerWidth <= 800) {
                swiperRef.current.setAttribute("slides-per-view", "1.5")
                swiperRef.current.setAttribute("space-between", "50")
                swiperRef.current.setAttribute("centered-slides-bounds", "false")
            } else if (window.innerWidth <= 1300) {
                swiperRef.current.setAttribute("slides-per-view", "3.25")
                swiperRef.current.setAttribute("space-between", "70")
                swiperRef.current.setAttribute("centered-slides-bounds", "true")
            } else {
                swiperRef.current.setAttribute("slides-per-view", "4.25")
                swiperRef.current.setAttribute("space-between", "70")
                swiperRef.current.setAttribute("centered-slides-bounds", "true")
            }
        }
        changeSlides()
        window.addEventListener("resize", changeSlides)
    }, [])
    return (
        <section className="TeamPage">
            <div className="TeamPage-heading">
                <h2 className="TeamPage-headline">Наша  <span className="TeamPage-healine-green">Команда</span></h2>
                <p className="TeamPage-description">
                    Наша команда це група інтузіастів та людей які хочуть пренести трішки тепла в наш світ, в <b className="TeamPage-description-bold">Green Shelter</b> працюють тілки експерти та вони знають як і що правильно робити. а найголовніше всі вони з добрим піклуючим сердцем.
                </p>
            </div>
            <div className="TeamPage-cards">
                <swiper-container
                    ref={swiperRef}
                    space-between="70"
                    centered-slides="true"
                    center-insufficient-slides="true"
                    centered-slides-bounds="true"
                    slides-per-view=""
                    direction="horizontal"
                    style={{
                        "padding": "0 50px"
                    }}
                    edge-swipe-detection="true"
                >
                    {
                        team.map(item =>
                            <swiper-slide style={{
                                "display": "flex",
                                "alignItems": "center",
                                "justifyContent": "center"
                            }} key={item.id}>
                                <TeamCard key={item.id} id={item.id} image={item.pic} instagramLink={item.instagram} facebookLink={item.facebook} />
                            </swiper-slide>
                        )
                    }
                </swiper-container>
            </div>
        </section>
    )
}

export default TeamPage