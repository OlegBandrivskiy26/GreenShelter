import play from '../../img/play.webp'
import './VideoPage.css'
function VideoPage(){

return(
    <div className='videoPage'>
        <div className="videoPage__left">
            <div className="videoPage__left__text1"><span className='videoPage__left__text1__green'>Наш</span> відео-блог та діяльність</div>
            <div className="videoPage__left__text2">З нашого відео блогу ви дізнаєтесь про життя притулку. Розповідаючи історії окремих песиків, ми звітуватимемо про нашу діяльність. Згадуватимемо тих, хто допоміг врятувати тварину та яка її подальша доля.</div>
            <div className="videoPage__left__button videoPage__left__button1">
                <img className='videoPage__left__button__play' src={play} alt="" />
                <div className="videoPage__left__button__text">Знайти нас</div>
            </div>
        </div>
        <div className="videoPage__right">
        <iframe className='videoPage__right__video' width="560" height="300" src="https://www.youtube.com/embed/T7Rv08hIHNI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <iframe className='videoPage__right__video' width="560" height="300" src="https://www.youtube.com/embed/T7Rv08hIHNI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <div className="videoPage__left__button videoPage__left__button2">
                <img className='videoPage__left__button__play' src={play} alt="" />
                <div  className="videoPage__left__button__text">Знайти нас</div>
            </div>
        </div>
      
    </div>
)
}
export default VideoPage