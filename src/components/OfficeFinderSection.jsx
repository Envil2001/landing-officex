import { useEffect, useRef, useState } from 'react'
import { AiFillStar, AiOutlineStar, AiOutlineLeft, AiOutlineRight, AiOutlineCheck } from 'react-icons/ai';
import { reviews } from '../data'


const OfficeFinderSection = () => {
    const [cardWidth, setCardWidth] = useState(0);
    const [currentTranslate, setCurrentTranslate] = useState(0);
    const [currentSlide, setCurrentSlide] = useState(0);
    useEffect(() => {
        const handleResize = () => {
            const newCardWidth = sliderRef.current?.firstChild.offsetWidth || 0;
            setCardWidth(newCardWidth);
        };

        handleResize(); // Обновить cardWidth при первом рендере

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const sliderRef = useRef(null);
    const trackRef = useRef(null);

    const trackWidth = trackRef.current?.offsetWidth / sliderRef.current?.childElementCount;
    const scrollLeft = () => {
        if (currentTranslate === 0) {
            return; // Первая карточка, не выполняем прокрутку влево
        }

        const newTranslate = currentTranslate + (cardWidth + 20);
        setCurrentTranslate(newTranslate);
        sliderRef.current.style.transform = `translateX(${newTranslate}px)`;
        setCurrentSlide(currentSlide - 1);
    };

    const scrollRight = () => {
        const maxTranslate = (sliderRef.current?.childElementCount - 1) * (cardWidth + 20);

        if (currentTranslate === -maxTranslate) {
            return; // Последняя карточка, не выполняем прокрутку вправо
        }

        const newTranslate = currentTranslate - (cardWidth + 20);
        setCurrentTranslate(newTranslate);
        sliderRef.current.style.transform = `translateX(${newTranslate}px)`;
        setCurrentSlide(currentSlide + 1);
    };



    return (
        <section className="py-20 px-10 md:px-20 lg:px-44"  >
            <div className="container ">
                <div className="grid gap-5 md:grid-cols-[repeat(5,1fr)]">
                    <span className="text-xs text-black -leading-3">What Client Say</span>
                    <div className="col-start-1 col-end-6 md:col-start-3 md:col-end-6">
                        <h2 className="text-3xl font-bold text-black">We're trusted by the most important teams</h2>

                        <div className="flex gap-10 mt-10">
                            <div className="gap-2 flex">
                                <div className="w-5 h-5 rounded-full flex items-center justify-center mr-2 bg-white">
                                    <AiOutlineCheck color="black" />
                                </div>
                                <span className="font-semibold">10K+ Customers</span>
                            </div>
                            <div className="gap-2 flex">
                                <div className="w-5 h-5 rounded-full flex items-center justify-center mr-2 bg-white">
                                    <AiOutlineCheck color="black" />
                                </div>
                                <span className="font-semibold">10K+ Customers</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="relative group ">
                    <div className="z-10 absolute w-full h-full flex items-center justify-between invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-500">
                        <div className="p-5 flex items-center justify-center border border-white rounded-full cursor-pointer bg-black/50 transition-all duration-500 hover:scale-110" onClick={scrollLeft}>
                            <AiOutlineLeft color="white" />
                        </div>
                        <div className="p-5 flex items-center justify-center border border-white rounded-full cursor-pointer bg-black/50 transition-all duration-500 hover:scale-110" onClick={scrollRight}>
                            <AiOutlineRight color="white" />
                        </div>
                    </div>
                    <div className="flex gap-5 transition-all duration-500 mt-20" ref={sliderRef}>
                        {reviews.map((review, index) => (
                            <div key={index} className="flex flex-col p-5 rounded-2xl bg-white shadow-lg flex-none md:w-[calc(40%-0.5rem)] w-[calc(100%-0.5rem)] slide">
                                <div className="flex">
                                    <img className="w-12 h-12 rounded-full object-cover mr-4 shadow" src={review.avatar} alt={review.name} />
                                    <span className="flex-1 text-end text-xs">7 days ago</span>
                                </div>
                                <div className="h-full flex flex-col">
                                    <h1 className="mt-5 font-semibold text-xl w-4/6 mb-5 flex-1">
                                        "{review.text}"
                                    </h1>
                                    <div className="flex justify-between items-end">
                                        <p className="text-xs">{review.name}</p>
                                        <div className="flex">
                                            {[...Array(review.star)].map((_, index) => (
                                                <AiFillStar key={index} />
                                            ))}
                                            {[...Array(5 - review.star)].map((_, index) => (
                                                <AiOutlineStar key={index} />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>



                    <div className="h-[2px] bg-[#b2b2b2] w-full relative mt-5 " ref={trackRef}>
                        <div className="absolute left-0 top-0 bg-[#2f2f2f] h-full transition-all duration-500" style={{ width: trackWidth + 'px', transform: `translateX(${(currentSlide * trackWidth)}px)` }}></div>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default OfficeFinderSection;