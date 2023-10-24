import { array, bool, string } from "prop-types";
import { LoadingComponent } from "../loading/LoadingComponent";
import { IMAGE_PREFIX } from "../../config/constants";
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import { EffectCoverflow, Pagination } from 'swiper/modules';
import { useSale } from "../../hooks/useSale";

export const Carrousel = ({ name, loading, exams }) => {
    const { addProduct } = useSale();

    return (
        <div className="m-10">
            <h3 className="my-2 ms-10 text-3xl font-bold">{name}</h3>
            {
                !loading ? (
                    <Swiper
                        effect={'coverflow'}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={1}
                        spaceBetween={30}
                        coverflowEffect={{
                            rotate: 50,
                            stretch: 0,
                            depth: 100,
                            modifier: 1,
                            slideShadows: true,
                        }}
                        loop={true}
                        pagination={true}
                        modules={[EffectCoverflow, Pagination]}
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 40,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 50,
                            },
                        }}
                    >
                        {exams.map((item, indx) => (
                            <SwiperSlide key={indx} className="z-20" onClick={() => addProduct(item)}>
                                <div className="relative rounded-2xl shadow-lg">
                                    <img
                                        src={`${IMAGE_PREFIX}items/${item.id}.jpg`}
                                        alt=""
                                        className="h-60 w-full rounded-t-2xl object-cover"
                                    />
                                    <div className="p-4">
                                        <h4 className="text-2xl font-bold">{item.name} Q{item.price.toFixed(2)}</h4>
                                        <p className="text-justify">{item.description}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                ) : (
                    <LoadingComponent />
                )
            }
        </div>
    )
};

Carrousel.propTypes = {
    loading: bool,
    exams: array,
    name: string,
};
