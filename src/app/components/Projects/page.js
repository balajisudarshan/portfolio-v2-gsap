"use client"
import React, { useEffect, useRef } from 'react'
import { Rubik } from 'next/font/google'
import gsap from 'gsap'
import { ScrambleTextPlugin, ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger, ScrambleTextPlugin)

const rubik = Rubik({
  subsets: ['latin'],
  weight: ['400', '500', '700']
})

const projects = [
  {
    title: "DishCoveryy",
    desc: "Recipe discovery platform where users can create, like and explore recipes with secure authentication.",
    link: "https://dishcoveryy.vercel.app",
    thumb: "/projectThumbnails/dish.png"
  },
  {
    title: "Certora",
    desc: "Certificate management system with authentication and secure handling.",
    thumb: "/projectThumbnails/certora.png"
  },
  {
    title: "Event Management",
    desc: "Event platform with admin panel and attendee management.",
  },
  {
    title: "Collaboration System",
    desc: "Full-stack system for team collaboration and project tracking.",
  },
  {
    title: "Before-I-Forget",
    desc: "Productivity mobile app built with React Native.",
  }
]

const Projects = () => {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "restart none none reverse"
        }
      })

      tl.from(".project-title span", {
        y: 50,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out"
      })

      tl.to(".project-title span", {
        duration: 1,
        scrambleText: {
          text: "Projects",
          revealDelay: 0.05,
          speed: 0.3
        }
      })

      tl.from(".h-line", {
        scaleX: 0,
        transformOrigin: "left",
        duration: 0.5,
        ease: "power2.out"
      }, "-=0.6")

      gsap.utils.toArray('.project-card').forEach((card) => {


        gsap.from(card, {
          x: -60,
          opacity: 0,
          // stagger: 0.2,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 55%",
            toggleActions: "play none none reverse"
          }
        })
      })

    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className='mt-10 min-h-screen px-4 md:px-10'>

      {/* TITLE */}
      <div className='max-w-4xl mx-auto text-center'>
        <h1 className={`project-title overflow-hidden text-3xl md:text-6xl ${rubik.className} font-bold`}>
          <span className='block'></span>
        </h1>
        <div className="h-line h-px bg-white/40 mt-4"></div>
      </div>

      {/* PROJECT GRID */}
      <div className="projects-container mt-16 grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

        {projects.map((project, ind) => (
          <div
            key={ind}
            className="project-card group flex flex-col bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-white/30 "
          >

            {/* IMAGE */}
            <div className="overflow-hidden">
              <img
                src={project.thumb || "/projectThumbnails/noimg.png"}
                className="w-full aspect-video object-cover group-hover:scale-110 transition duration-500"
              />
            </div>

            {/* CONTENT */}
            <div className="p-4 flex flex-col flex-grow">
              <h2 className="text-lg font-semibold">{project.title}</h2>

              <p className="text-sm text-gray-400 mt-2 line-clamp-3">
                {project.desc}
              </p>

              {/* BUTTON */}
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  className="mt-auto text-sm text-white/80 hover:text-white transition"
                >
                  View Project →
                </a>
              )}
            </div>

          </div>
        ))}

      </div>

    </section>
  )
}

export default Projects