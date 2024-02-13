import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import LinkButton from "../../global/PrimaryButton.jsx";
import { FaPlay } from "react-icons/fa";


const MainComponent = () => {
    const buttonRef = useRef(null);
    const containerRef = useRef(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);

    useEffect(() => {
        const button = buttonRef.current;
        const container = containerRef.current;

        const handleMouseMove = (event) => {
            const { clientX, clientY } = event;
            const { left, top, width, height } = container.getBoundingClientRect();

            // Ensure mouse position is within the container
            if (clientX >= left && clientX <= left + width && clientY >= top && clientY <= top + height) {
                setMousePosition({ x: clientX - left, y: clientY - top });
            }
        };

        document.addEventListener('mousemove', handleMouseMove);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    useEffect(() => {
        const button = buttonRef.current;
        const container = containerRef.current;
        const containerRect = container.getBoundingClientRect();

        const initialX = containerRect.left + containerRect.width / 2 - button.offsetWidth / 2;
        const initialY = containerRect.top + containerRect.height / 2 - button.offsetHeight / 2;

        gsap.set(button, { x: initialX, y: initialY });

        if (isHovered) {
            gsap.to(button, { duration: 0.5, x: mousePosition.x, y: mousePosition.y, ease: 'power4.out', visibility: 'visible' });
        } else {
            gsap.to(button, { duration: 0.5, visibility: 'hidden' });
        }
    }, [isHovered, mousePosition]);

    const openLightbox = () => {
        setIsLightboxOpen(true);
    };

    const closeLightbox = () => {
        setIsLightboxOpen(false);
    };

    return (
        <div className="max-w-screen-2xl md:mx-auto mx-[5%]">
            <div className="max-w-screen-lg mx-auto pt-[10%] pb-[5%]">
                <h1 className="text-center md:text-6xl text-3xl font-semibold text-primary py-4">
                    Parish Dental: Your Trusted Partner in Oral Health
                </h1>
                <p className="text-center text-md text-paragraph py-4">At Parish Dental, our experienced oral surgeons are dedicated to providing you with the highest standard of care. Utilizing the latest techniques and technologies, we ensure a comfortable and effective treatment experience.</p>
                <div className="my-4 flex gap-4 justify-center">
                    <LinkButton target="_blank" href="https://uk.dentalhub.online/v1/view/organization/6119/index.html#/perspectives/3" variant="secondary">
                        Book an appointment
                    </LinkButton>
                    <div className="md:block hidden">
                        <LinkButton href="#body" variant="transparent">
                            Learn more
                        </LinkButton>
                    </div>
                </div>
            </div>

            <div
                ref={containerRef}
                className="md:h-[600px] h-[300px] md:mx-10 mx-0 cursor-pointer rounded-xl bg-[url('https://res.cloudinary.com/db1i46uiv/image/upload/v1706910074/dentist-hands-working-young-woman-patient-with-dental-tools_rckfpj.jpg')]"
                style={{ position: 'relative', overflow: 'hidden' }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <button className='p-10 text-white rounded-full bg-customBlack-50/70' ref={buttonRef} style={{ position: 'absolute', left: 0, top: 0, visibility: 'hidden' }}>
                    <FaPlay />
                </button>
                <button className="absolute inset-0 w-full h-full bg-transparent" onClick={openLightbox}></button>
            </div>

            {isLightboxOpen && (
                <div className="fixed top-0 left-0 w-full h-full z-[9999999999]  bg-black bg-opacity-100 flex justify-center items-center">
                    <div className="relative">
                        <button className="absolute top-[-50px] cursor-pointer m-4 right-[-50px] text-white" onClick={closeLightbox}>Close</button>
                        {/* Add your video player component here */}
                        <iframe title="video" className="md:w-[1000px] md:h-[562px] w-[300px] h-[250px]" src="https://www.youtube.com/embed/I980f_bpDMI?si=2Vt-2tzstlt8aM6S" allowFullScreen></iframe>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MainComponent;
