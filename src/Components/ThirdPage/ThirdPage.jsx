import './ThirdPage.css'
import first from './ThirdImages/image1.png'
import second from './ThirdImages/image2.png'

import third from './ThirdImages/image3.png'
import forth from './ThirdImages/image4.png'
import fifth from './ThirdImages/image5.png'
import sixth from './ThirdImages/image6.png'



function ThirdPage() {

    const cards = [
        { id: 1, name: 'Миски', img: first },
        { id: 2, name: 'Нашийники', img: second },
        { id: 3, name: 'Корми', img: third },
        { id: 4, name: 'Припарати для обробки від кліщів', img: forth },
        { id: 5, name: 'Волонтери для догляду за собаками', img: fifth },
        { id: 6, name: 'Будки для ', second__name: 'собак', img: sixth }


    ]

    return (


        <div className="ThirdPage">

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#428F81" fill-opacity="1" d="M0,128L120,154.7C240,181,480,235,720,256C960,277,1200,267,1320,261.3L1440,256L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg>

            <div className="ThirdPage__TextContainer">
                <p className='ThirdPage__text'><span>Oкрім</span> донату для будівництва,</p>
                <p className='ThirdPage__p'> ми потребуємо</p>


            </div>

            <div className="ThirdPage__CardContainer">
                {cards.map(card =>
                    <div className="Card" key={card.id}>
                        <img src={card.img} alt="" />

                        <div className="CardTextContainer">

                            <p className='Card__p'>{card.name}</p>
                            <p className='Card__p'>{card.second__name}</p>
                        </div>

                    </div>

                )}



            </div>







        </div>
    )
}
export default ThirdPage;