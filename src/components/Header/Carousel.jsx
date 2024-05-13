
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import bannerImg1 from '../../assets/images/banner-1.jpg';
import bannerImg2 from '../../assets/images/banner-2.jpg';
import bannerImg3 from '../../assets/images/banner-3.jpg';


const Carousel = () => {
    return (
        <>
            <div className='container mx-auto my-20 rounded-lg'>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    loop={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                   // navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img className='lg:h-[520px] rounded-lg' src={bannerImg1} alt="" />
                    </SwiperSlide>

                    <SwiperSlide>
                        <img className='lg:h-[520px] rounded-lg'  src={bannerImg2} alt="" />
                    </SwiperSlide>

                    <SwiperSlide>
                        <img className='lg:h-[520px] rounded-lg'  src={bannerImg3} alt="" />
                    </SwiperSlide>

                </Swiper>
            </div>
        </>
    );
};

export default Carousel;