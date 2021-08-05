
import Banner from './Banner'
import Swiper from 'react-id-swiper';

 
const BannerCarousel = ({ data }) => {

  const params = {
    spaceBetween: 0,
    effect: 'fade',
    autoplay: {
        delay: 2500,
        disableOnInteraction: false
      }
  }
 
    return (
            <Swiper {...params} >
                {
                    data.map((obj,id) => (
                        <div key={id}><Banner src={obj.url} text={obj.text}/></div>              
                    ))
                }
            </Swiper>
  )
}
 

export default BannerCarousel;