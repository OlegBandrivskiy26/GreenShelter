import "./TeamPage.css"
// import SwiperCore, { Navigation, Pagination } from "swiper";
// Import Swiper styles
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';


import TeamCard from "../TeamCard/TeamCard"


import team from "../../data/team.json"

// SwiperCore.use([Navigation, Pagination]);
function TeamPage(props) {
    return (
        <section className="TeamPage">
            <div className="TeamPage-heading">
                <h2 className="TeamPage-headline">Наша  <span className="TeamPage-healine-green">Команда</span></h2>
                <p className="TeamPage-description">
                    Наша команда це група інтузіастів та людей які хочуть пренести трішки тепла в наш світ, в <b className="TeamPage-description-bold">Green Shelter</b> працюють тілки експерти та вони знають як і що правильно робити. а найголовніше всі вони з добрим піклуючим сердцем.
                </p>
            </div>
            <div className="TeamPage-cards">
                <Swiper autoplay={{delay: 5000}} loop={false} centeredSlidesBounds={true} centeredSlides={true} centerInsufficientSlides={true} slidesPerView={4.25} direction={"horizontal"}>
                    {
                        team.map(item =>
                            <SwiperSlide key={item.id}>
                                {/* Slde */}
                                <TeamCard key={item.id} id={item.id} image={item.pic} instagramLink={item.instagram} facebookLink={item.facebook} />
                            </SwiperSlide>
                        )
                    }
                </Swiper>
            </div>
        </section>
    )
}

export default TeamPage