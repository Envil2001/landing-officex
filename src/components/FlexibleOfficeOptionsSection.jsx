import { AiOutlineLeft } from 'react-icons/ai'
import { AiOutlineRight } from 'react-icons/ai'
import Button from '../ui/Button/button';
import { useEffect, useRef, useState } from 'react';
import { officeOptions } from '../data';


const FlexibleOfficeOptionsSection = () => {
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
            <div className="container">
                <div className="grid gap-5 md:grid-cols-[repeat(5,1fr)]">
                    <span className="text-xs text-black -leading-3">We are the next gen coworking platform</span>
                    <div className="col-start-1 col-end-6 md:col-start-3 md:col-end-6">
                        <h4 className="text-4xl text-black">Premier provider of office rental solutions for businesses of all sizes flexible plans and competitive rates.</h4>
                    </div>
                </div>


                <div className="relative group">
                    <div className="z-10 absolute w-full h-full flex items-center justify-between invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-500">
                        <div className="p-5 flex items-center justify-center border border-white rounded-full cursor-pointer bg-black/50 transition-all duration-500 hover:scale-110" onClick={scrollLeft}>
                            <AiOutlineLeft color="white" />
                        </div>
                        <div className="p-5 flex items-center justify-center border border-white rounded-full cursor-pointer bg-black/50 transition-all duration-500 hover:scale-110" onClick={scrollRight}>
                            <AiOutlineRight color="white" />
                        </div>
                    </div>
                    <div className="flex gap-5 transition-all duration-500 mt-20" ref={sliderRef}>
                        {officeOptions.map((card, index) => (
                            <div key={index} className="flex-none md:w-[calc(40%-0.5rem)] w-[calc(100%-0.5rem)] slide">
                                <div
                                    style={{ backgroundImage: `url(${card.photo})` }}
                                    className="bg-no-repeat bg-cover bg-center pb-52 rounded-2xl"
                                ></div>
                                <div className="mt-5">
                                    <h2 className="text-black text-lg font-bold">{card.title}</h2>
                                    <p className="text-black opacity-60 text-xs">{card.city}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="h-[2px] bg-[#b2b2b2] w-full relative mt-5" ref={trackRef}>
                    <div className="absolute left-0 top-0 bg-[#2f2f2f] h-full transition-all duration-500" style={{ width: trackWidth + 'px', transform: `translateX(${(currentSlide * trackWidth)}px)` }}></div>
                </div>
                <div className="text-center mt-20">
                    <Button classes="bg-black text-white">Browse All</Button>
                </div>

            </div>
        </section>
    )
}


export default FlexibleOfficeOptionsSection;