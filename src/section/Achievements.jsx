import React from 'react'
import TitleHeader from '../component/TitleHeader'
import {  achievements } from '../constants/index.js'
import GlowCard from '../component/GlowCard.jsx'

const Achievements = () => {
  return (
    <section id="achievements" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader title="Skills & Achievements"
          sub="⭐ My Development Journey"
        />
        <div className="lg:columns-3 md:columns-2 columns-1 mt-16">
          {achievements.map((achievement)=>(
           <GlowCard card={achievement}>
            <div className="flex-items-center gap-3">
              test

            </div>
           </GlowCard>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Achievements