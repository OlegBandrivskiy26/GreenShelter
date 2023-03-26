import "./TeamPage.css"

import TeamCard from "../TeamCard/TeamCard"

import team from "../../data/team.json"

function TeamPage (props) {
    return (
        <section className="TeamPage">
            <div className="TeamPage-heading">
                <h2 className="TeamPage-headline">Наша  <span className="TeamPage-healine-green">Команда</span></h2>
                <p className="TeamPage-description">
                    Наша команда це група інтузіастів та людей які хочуть пренести трішки тепла в наш світ, в <b className="TeamPage-description-bold">Green Shelter</b> працюють тілки експерти та вони знають як і що правильно робити. а найголовніше всі вони з добрим піклуючим сердцем.
                </p>
            </div>
            <div className="TeamPage-cards">
                {
                    team.map(item => 
                        <TeamCard image={item.pic} instagramLink={item.instagram} facebookLink={item.facebook}/>
                    )
                }
            </div>
        </section>
    )
}

export default TeamPage