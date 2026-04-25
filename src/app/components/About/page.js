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
    const sectionRef = useRef(null);
    const aboutRef = useRef(null)
    useEffect(() => {
        const ctx = gsap.context(() => {
            const about = aboutRef.current.querySelector("span");

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "50% 80%",
                    // end:"50% 80%",
                    markers: true,
                    toggleAttributes: "play reverse play reverse",
                }
            })

            gsap.from(about, {
                y: 100,
                opacity: 0,
                duration: 0.6,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                    markers: true,
                    toggleActions: "play reset play reset",
                }
            })
        })
        return () => ctx.revert();
    }, [])
    return (
        <section className='bg-grid min-h-screen' ref={sectionRef}>
            <h1 ref={aboutRef} className={` overflow-hidden text-center text-7xl ${rubik.className} pt-10 font-bold`} >
                <span className='block'> About</span>
            </h1>
            <div className='flex justify-between items-start px-30 mt-25'>
                <div className='flex-1'>
                    <h1 className="text-6xl md:text-7xl font-bold leading-tight">
                        <span className="block">Building</span>
                        <span className="block text-gray-500 italic font-medium">
                            things that
                        </span>
                        <span className="block">matter.</span>
                    </h1>
                </div>
                <div className="w-px  bg-white/40 self-stretch"></div>

                <div className='flex-1 max-w-md pl-10'>
                    <div className="h-px mt-10 bg-white/45 mb-6"></div>
                    <p className="text-lg  text-gray-300 leading-relaxed">
                        I’m a CS student with a deep focus on full-stack development —
                        crafting performant UIs, robust backends, and experiences that feel intentional.
                        Currently sharpening my edge with MERN, Next.js, and modern animation tooling.
                    </p>
                    <div className="h-px mt-4 bg-white/45 mb-6"></div>
                    <div className="flex flex-wrap gap-3">
                        {skills.map((skill, ind) => (
                            <p
                                key={ind}
                                className="border border-white/20 px-4 py-1 text-sm text-gray-400 rounded-full hover:border-white/40 transition-colors duration-300 cursor-pointer"
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