import React from 'react';
import TitleHeader from '../component/TitleHeader';

const About = () => {
  return (
    <section id="about" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="About Me"
          sub="👋 Get to know me"
        />

        <div className="mt-10 max-w-4xl mx-auto text-center">
          <p className="text-white-50 text-lg leading-8">
  Hi, I'm Rakesh, a passionate Full Stack Developer with a strong interest
  in building modern, responsive, and user-focused web applications. I
  enjoy working across both frontend and backend development using React.js,
  JavaScript, Node.js, Express.js, Python, and database technologies. I
  continuously strengthen my problem-solving skills through coding
  challenges and practical projects while exploring new technologies and
  turning ideas into meaningful digital solutions.
</p>
        </div>
      </div>
    </section>
  );
};

export default About;