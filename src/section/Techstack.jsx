import React from 'react'
import TitleHeader from '../component/TitleHeader.jsx'
import { techStackIcons, techStackImgs } from '../constants'
import Techicon from '../component/Models/TechLogos/Techicon.jsx'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Techstack = () => {
    useGSAP(() => {
        gsap.fromTo('.tech-card', { y: 50, opacity: 0 }, {
           y: 0,
           opacity: 1,
           duration: 1,
           ease: 'power2.inOut',
           stagger: 0.2,
           scrollTrigger: {
            trigger: '#skills',
            start: 'top center'
           }

        })
    })

  return (
    <div id="skills" className="flex-center section-padding">
      <div className="w-full md:px-10 px-5">

        <TitleHeader
          title="My Tech Stack"
          sub="💻 Technologies I Use to Build Modern Web Applications"
        />

        <div className="tech-grid">
          {techStackIcons.map((icon) => (
            <div
              key={icon.name}
              className="card-border tech-card relative overflow-hidden group xl:rounded-full rounded-lg"
            >
              <div className="tech-card-animated-bg" />

              <div className="tech-card-content">
                <div className="tech-icon-wrapper">
                  <Techicon model={icon} />
                </div>
                <div className="padding-x w-full">
                    <p>{icon.name}</p>

                </div>

              </div>
            </div>
          ))}

          {/* {techStackImgs.map((icon) => (
            <div
              key={icon.name}
              className="card-border tech-card relative overflow-hidden group xl:rounded-full rounded-lg"
            >
              <div className="tech-card-animated-bg"/>
              <div className="tech-card-content">
                <div className="tech-icon-wrapper">
                  <img src={icon.imgPath}/>
                </div>
                <div className="padding-x w-full">
                  <p>{icon.name}</p>
                  </div>
              </div>
            </div>
            ))} */}
        </div>

      </div>
    </div>
  )
}

export default Techstack