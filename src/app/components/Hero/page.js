"use client"
import React, { useEffect } from 'react'
import gsap from 'gsap'
import { ScrambleTextPlugin } from 'gsap/all'
import { Trispace } from 'next/font/google';
gsap.registerPlugin(ScrambleTextPlugin);
const Hero = () => {
    useEffect(() => {
        let mm = gsap.matchMedia();

        mm.add("(min-width: 768px)", () => {

            const tl = gsap.timeline();

            // 1. TEXT REVEAL (centered)
            tl.from(".line", {
                y: 100,
                opacity: 0,
                stagger: 0.2,
                duration: 1,
                ease: "power4.out"
            })

                .to(".hero-btn", {
                    opacity: 1,
                    y: 0,
                    duration: 0.5
                }, "-=0.5")

                .to(".hero-container", {
                    justifyContent: "space-between",
                    duration: 1,
                    ease: "power3.inOut"
                })

                .to(".text-section", {
                    x: "-10%",
                    duration: 1,
                    ease: "power3.inOut"
                }, "<")


                .fromTo(".image-section img",
                    { x: 100, opacity: 0, scale: 0.95 },
                    { x: 0, opacity: 1, scale: 1, duration: 1, ease: "power3.out" },
                    "-=0.6"
                );




        });
        // gsap.to(".image-section img", {
        //     y: 10,
        //     duration: 2,
        //     repeat: -1,
        //     yoyo: true,
        //     ease: "power1.inOut"
        // })

        mm.add("(max-width: 767px)", () => {

            // reverse image position first
            gsap.set(".image-section img", {
                opacity: 0,
                y: 50
            });

            gsap.set(".hero-btn", {
                opacity: 0,
                y: 20
            });

            const tl = gsap.timeline();

            tl.from(".line", {
                y: 80,
                opacity: 0,
                stagger: 0.2,
                duration: 1,
                ease: "power3.out"
            })

                .to(".hero-btn", {
                    opacity: 1,
                    y: 0,
                    duration: 0.5
                }, "-=0.5")

                // .to(".image-section img", {
                //     opacity: 1,
                //     y: 0,
                //     duration: 0.8,
                //     ease: "power3.out"
                // }, "-=0.3");

        });
        return () => ctx.revert();

    }, []);
    return (
        <section className="min-h-screen flex items-center justify-center bg-[#0f0f0f] text-white px-6 overflow-hidden">

            <div className="hero-container flex flex-col flex-col-reverse md:flex-row items-center justify-center w-full max-w-6xl gap-10">

                {/* TEXT */}
                <div className="text-section text-center md:text-left">
                    <div className="overflow-hidden">
                        <h1 className="line text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
                            Balaji Sudarshan Reddy
                        </h1>
                    </div>

                    <div className="overflow-hidden">
                        <p className="line mt-2 text-base sm:text-lg md:text-xl text-gray-400">
                            Full Stack Developer
                        </p>
                    </div>
                    <div className='overflow-hidden'>
                        <p className='sm:text-sm md:text-lg text-gray-400 mt-4 line random'>
                            A highly motivated Computer Science student with hands-on experience <br /> in full-stack development using the MERN stack, alongside projects in web applications and game development.
                        </p>
                    </div>
                    <button className="hero-btn mt-6 px-6 py-2 bg-purple-600 rounded-lg opacity-0">
                        View Work
                    </button>
                </div>

                {/* IMAGE */}
                <div className="image-section mt-10 md:mt-0 ">
                    <img
                        src="/me.jpeg"
                        alt="Balaji"
                        className="w-48 sm:w-64 md:w-80 opacity-0"
                    />
                </div>

            </div>
        </section>
    )
}

export default Hero