"use client"
import React, { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger, ScrambleTextPlugin } from 'gsap/all'

gsap.registerPlugin(ScrambleTextPlugin);
const Skills = () => {
    const skills = [
        { "name": "HTML", "level": 85 },
        { "name": "CSS", "level": 80 },
        { "name": "JavaScript", "level": 80 },
        { "name": "React", "level": 75 },
        { "name": "Tailwind CSS", "level": 75 },
        { "name": "GSAP", "level": 70 },
        { "name": "Node.js", "level": 75 },
        { "name": "Express.js", "level": 75 },
        { "name": "MongoDB", "level": 70 },
        { "name": "REST API", "level": 75 },
        { "name": "Git", "level": 65 },
        { "name": "Postman", "level": 70 }
    ]

    useEffect(() => {
        const ctx = gsap.context(() => {

            gsap.fromTo(".skills-title",
                {
                    opacity: 0,
                    y: 40
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    scrambleText: {
                        text: "Skills",
                        chars: "012312",
                        revealDelay: 0.05,
                        speed: 0.3
                    },
                    scrollTrigger: {
                        trigger: ".skills-title",
                        start: "top 85%",
                        toggleActions: "play none none reverse"
                    }
                }
            )

            gsap.utils.toArray(".skill").forEach((skill, i) => {
                const bar = skill.querySelector(".skill-bar")
                const value = skill.getAttribute("data-level")

                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: skill,
                        start: "top 90%",
                        toggleActions: "play none none reverse"
                    }
                })


                tl.from(skill, {
                    x: -100,
                    duration: 1
                })

                    .to(bar, {
                        width: value + "%",
                        duration: 1,
                        ease: "power3.out",

                    }, "-=0.3")
            })

        })

        return () => ctx.revert()
    }, [])
    return (


        < section className="skills-section py-20 px-6 max-w-4xl mx-auto" >
            <h2 className="skills-title md:text-5xl text-3xl font-bold mb-10 text-center">
                Skills
            </h2>

            <div className="space-y-6">
                {skills.map((skill, i) => (
                    <div key={i} className="skill " data-level={skill.level}>
                        <div className="flex justify-between mb-1">
                            <span>{skill.name}</span>
                            <span>{skill.level}%</span>
                        </div>

                        <div className="h-2 bg-white/10 rounded overflow-hidden">
                            <div className="skill-bar h-full bg-purple-500 w-0"></div>
                        </div>
                    </div>
                ))}
            </div>
        </section >
    )
}

export default Skills