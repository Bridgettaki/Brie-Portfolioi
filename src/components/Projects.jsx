import React from 'react';
import ProjectItem from './ProjectItem';
import image1Img from '../assets/IMG_5451.png';
import ticketImg from '../assets/IMG_5452.png';
import cartImg from '../assets/cart.jpg';
import salonImg from '../assets/salon.jpg';
import portfolioImg from '../assets/IMG_5453.png';
import quizImg from '../assets/IMG_5446.png';

const Projects = () => {
  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='text-4xl font-bold text-center text-[#001b5e]'>
        Projects
      </h1>
      <p className='text-center py-8'>
        These are the projects I have built to upSkill myself for a better future 
      </p>
      <div className='grid sm:grid-cols-2 gap-12'>
        <ProjectItem
          img={image1Img}
          title='Memory Game'
          demoLink='https://bridgettaki.github.io/Javascript-2/'
          codeLink='https://github.com/Bridgettaki/Javascript-2.git'
        />
        <ProjectItem
          img={ticketImg}
          title='E-commerce Ticket Station'
          demoLink='https://zee363.github.io/Ticket-station/'
          codeLink='https://github.com/Zee363/Ticket-station.git'
        />
        <ProjectItem
          img={cartImg}
          title='Shopping Cart'
          demoLink='https://bridgettaki.github.io/shoppingCart-/'
          codeLink='https://github.com/Bridgettaki/shoppingCart-.git'
        />
        <ProjectItem
          img={salonImg}
          title='Salon Website'
          demoLink='https://bridgettaki.github.io/K-BStudios/'
          codeLink='https://github.com/Bridgettaki/K-BStudios.git'
        />
        <ProjectItem
          img={portfolioImg}
          title='Bridgets Portfolio'
          demoLink='https://bridgettaki.github.io/BridgetsPortfolio/'
          codeLink='https://github.com/Bridgettaki/BridgetsPortfolio.git'
        />
        <ProjectItem
          img={quizImg}
          title='Quiz Game'
          demoLink='https://quiz-game-xi-smoky.vercel.app/'
          codeLink='https://github.com/Bridgettaki/QuizGame.git'
        />
      </div>
    </div>
  );
};

export default Projects;
