"use client"
import React, { useEffect, useRef } from 'react'
import { Rubik } from 'next/font/google'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger);
const rubik = Rubik({
    subsets: ['latin'],
    weight: ['400', '500', '700']
})
const skills = [
    "React",
    "Next.js",
    "Node.js",
    "Express",
    "MongoDB",
    "GSAP",
    "Tailwind CSS",
    "Unity",
    "Blender",
    "MERN"
]
const About = () => {
    // reveal - line
    const sectionRef = useRef(null);
    const aboutRef = useRef(null)
    useEffect(() => {
        const ctx = gsap.context(() => {

            const about = aboutRef.current.querySelector("span")

            gsap.from(about, {
                y: 100,
                opacity: 0,
                duration: 0.6,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: aboutRef.current,
                    start: "top 80%",
                    toggleActions: "play none none reverse",
                }
            })

            const lines = gsap.utils.toArray(".reveal-line")

            gsap.from(lines, {
                y: 120,
                opacity: 0,
                stagger: 0.15,
                duration: 0.8,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: lines[0],
                    start: "top 80%",
                    toggleActions: "play none none reverse",
                },

            })

            // VERTICAL DIVIDER
            gsap.from(".divider", {
                scaleY: 0,
                transformOrigin: "top",
                duration: 0.6,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".divider",
                    start: "top 85%",
                    toggleActions: "play none none reverse",
                }
            })

            // HORIZONTAL LINES
            gsap.from(".h-line", {
                scaleX: 0,
                transformOrigin: "left",
                duration: 0.5,
                stagger: 0.2,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: ".h-line",
                    start: "top 85%",
                    toggleActions: "play none none reverse",
                }
            })

            // PARAGRAPH
            gsap.from(".about-text", {
                y: 40,
                opacity: 0,
                duration: 0.6,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: ".about-text",
                    start: "top 85%",
                    toggleActions: "play none none reverse",
                }
            })

            // SKILLS
            gsap.from(".skill", {
                y: 20,
                opacity: 0,
                stagger: 0.05,
                duration: 0.4,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: ".skill",
                    start: "top 90%",
                    toggleActions: "play none none reverse",
                }
            })


        }, sectionRef)

        return () => ctx.revert()
    }, [])
    return (
        <section className='bg-grid min-h-screen px-6 md:px-16 py-16' ref={sectionRef}>

            <h1
                ref={aboutRef}
                className={`overflow-hidden text-center text-4xl md:text-7xl ${rubik.className} font-bold`}
            >
                <span className='block'>About</span>
            </h1>

            <div className='flex flex-col md:flex-row gap-12 md:gap-16  items-center md:items-start mt-16'>

                {/* LEFT */}
                <div className='flex-1 flex justify-center md:justify-start'>
                    <h1 className="text-6xl  md:text-7xl font-bold leading-tight text-center md:text-left">
                        <span className="block reveal-line">Building</span>
                        <span className="block reveal-line text-gray-500 italic font-medium">
                            things that
                        </span>
                        <span className="block reveal-line">matter.</span>
                    </h1>
                </div>

                {/* DIVIDER (hidden on mobile) */}
                <div className="hidden md:block divider w-px bg-white/40 self-stretch"></div>

                {/* RIGHT */}
                <div className='flex-1 max-w-full md:max-w-md md:pl-10'>

                    <div className="h-line h-px bg-white/45 mb-6"></div>

                    <p className="about-text text-base md:text-lg text-gray-300 leading-relaxed">
                        I’m a CS student with a deep focus on full-stack development —
                        crafting performant UIs, robust backends, and experiences that feel intentional.
                        Currently sharpening my edge with MERN, Next.js, and modern animation tooling.
                    </p>

                    <div className="h-line h-px mt-4 bg-white/45 mb-6"></div>

                    <div className="flex flex-wrap gap-3">
                        {skills.map((skill, ind) => (
                            <p
                                key={ind}
                                className="skill border border-white/20 px-3 md:px-4 py-1 text-xs md:text-sm text-gray-400 rounded-full hover:border-white/40 transition-colors duration-300 cursor-pointer"
                            >
                                {skill}
                            </p>
                        ))}
                    </div>

                </div>
            </div>

        </section>
    )
}

export default About