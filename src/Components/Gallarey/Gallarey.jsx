import './Gallarey.css'
import dog1 from '../../img/dog1.webp'
import dog2 from '../../img/dog2.webp'
import dog3 from '../../img/dog3.webp'
import dog4 from '../../img/dog4.webp'
import dog5 from '../../img/dog5.webp'
import dog6 from '../../img/dog6.webp'
import dog7 from '../../img/dog7.webp'
// let arrOfDogs=[dog1,dog2,dog3,dog4,dog5,dog6,dog7]
function Gallarey(){
    return(
<div className="gallarey">
    <div className="gallarey__text">Галерея</div>
    
    <div className="gallarey__photos">
        {/* {arrOfDogs.map(item=>{
            return(
                <img className='gallarey__photos__photo' src={item} alt="" />
            )
        }

        )} */}
        <div className="gallarey__photos__left gallarey__photos__left2">
        <img className='gallarey__photos__photo gallarey__photos__photo1' src={dog1} alt="" />
        <img className='gallarey__photos__photo' src={dog4} alt="" />
        </div>
        <div className="gallarey__photos__left">
            <div className="gallarey__photos__right__row">
            <img className='gallarey__photos__photo gallarey__photos__photo1' src={dog2} alt="" />
        <img className='gallarey__photos__photo gallarey__photos__photo3' src={dog3} alt="" />
            </div>
   
        <img className='gallarey__photos__photo' src={dog5} alt="" />
        <div style={{alignItems:'flex-start'}} className="gallarey__photos__right__row gallarey__photos__right__row2">
        <img className='gallarey__photos__photo' src={dog6} alt="" />
        <img className='gallarey__photos__photo' src={dog7} alt="" />
         </div>
        </div>
    </div>
</div>
    )
}
export default Gallarey