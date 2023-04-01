import './SecondPage.css';
import { useState } from 'react';

import image from './SecondImages/SeconPageImage.webp'
import imageBiger from './SecondImages/SecondPageImageBigger.png'

function SecondPage() {

    const [isOpen, setIsOpen] = useState(false);
    const [open, setOpen] = useState(true)
    function OpenImage() {
        setIsOpen(!isOpen)
        setOpen(false)
    }
    function CloseImage() {
        setIsOpen(false)
        setOpen(!open)
    }
    return (

        <div className='SecondPage' >



            {/* SecondPageContainer */}
            {open && (



                <div className="SecondPageContainer">



                    <img src={image} alt="" onClick={OpenImage} className='SecondImage' />



                    <div className="SecondPageTextContainer">
                        <div className="SecondPageText  TextAdap">
                            <p className='SecondPageTextConatiner__p green'><span className='greenSpan'>Green</span>  house</p>
                            <p className='SecondPageTextConatiner__p contentAdaptive' >dogs shelter </p>
                        </div>

                        <div className="SeconPageContainer__p__container">
                            <p className='content contentHide'> Громадська організація, що опікується безпритульними собаками, яких евакуювали з зони бойових дій. Наша мета – надати належні умови для евакуйованих притулків та приватних собак, які шукають тимчасовий прихисток. Допомогти з підготовкою вакцин та документів для подальшого виїзду за кордон у приймаючі сім’ї чи притулки інших організацій.</p>

                        </div>
                    </div>



                    {/* BlurAdaptiveBlock */}


                </div>







            )


            }
            <div className="SecondPage__BlurAdaptive"></div>







            {/* svg */}


            {
                isOpen && (
                    <img src={imageBiger} alt="" className='ImageBigger' onClick={CloseImage} />
                )
            }

        </div >
    )
}
export default SecondPage;