import "./TeamPage.css"
import { register } from 'swiper/element/bundle';
import "swiper/element/css/autoplay"
import "swiper/element/css/virtual"

import TeamCard from "../TeamCard/TeamCard"

import team from "../../data/team.json"

register();
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
                <swiper-container free-mode="true" loop="false" centered-slides="false" slides-per-view="4.5" direction="horizontal">
                    {
                        team.map(item =>
                            <swiper-slide key={item.id}>
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