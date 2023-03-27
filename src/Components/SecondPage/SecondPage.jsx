import './SecondPage.css';

import image from './SecondImages/SeconPageImage.webp'

function SecondPage() {
    return (
        <div className='SecondPage'>


            {/* SecondPageContainer */}
            <div className="SecondPageContainer">

                <img src={image} alt="" />

                <div className="SecondPageTextContainer">
                    <p className='SecondPageTextConatiner__p green'>Green house</p>
                    <p className='SecondPageTextConatiner__p'>dogs shelter </p>

                    <div className="SeconPageContainer__p__container">
                        <p> Громадська організація, що опікується безпритульними собаками, яких евакуювали з зони бойових дій. Наша мета – надати належні умови для евакуйованих притулків та приватних собак, які шукають тимчасовий прихисток. Допомогти з підготовкою вакцин та документів для подальшого виїзду за кордон у приймаючі сім’ї чи притулки інших організацій.</p>

                    </div>
                </div>


            </div>


            {/* svg */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#428F81" fill-opacity="1" d="M0,128L120,154.7C240,181,480,235,720,256C960,277,1200,267,1320,261.3L1440,256L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg>

        </div>
    )
}
export default SecondPage;