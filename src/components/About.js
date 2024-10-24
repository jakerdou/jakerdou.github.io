import React from 'react';

const About = ({ language }) => {
    return (
        <div>
            <section>
                <h2>{language === 'es' ? 'Quién soy' : 'Who I am'}</h2>
                <p>{language === 'es' ? 'Soy un desarrollador de software con 4 años de experiencia en la industria, actualmente viviendo en la ciudad de Nueva York. Mi pasión por la tecnología y la resolución de problemas ha dado forma a mi carrera, permitiéndome colaborar con una variedad de empresas en proyectos emocionantes. Estoy impulsado por el deseo de construir soluciones eficientes y escalables que tengan un impacto real. Ahora, como consultor en Deloitte, continúo superando límites, ayudando a los clientes a transformar sus paisajes digitales.' : 'I’m a software developer with 4 years of industry experience, currently living in New York City. My passion for technology and problem-solving has shaped my career, allowing me to collaborate with a range of companies on exciting projects. I’m driven by a desire to build efficient and scalable solutions that make a real impact. Now, as a consultant at Deloitte, I continue to push boundaries, helping clients transform their digital landscapes.'}</p>
            </section>
            <section>
                <h2>{language === 'es' ? 'Qué hago' : 'What I do'}</h2>
                <p>{language === 'es' ? 'Me especializo en desarrollo web full-stack, con experiencia tanto en tecnologías frontend como backend. He tenido el privilegio de trabajar con startups, pequeñas empresas y grandes corporaciones, donde he contribuido a construir plataformas escalables y a entregar soluciones innovadoras. Desde la creación de arquitecturas backend robustas hasta el diseño de interfaces de usuario suaves e intuitivas, disfruto cerrando la brecha entre el código y la experiencia del usuario.' : 'I specialize in full-stack web development, with experience across both frontend and backend technologies. I\'ve had the privilege of working with startups, small businesses, and large corporations, where I\'ve contributed to building scalable platforms and delivering innovative solutions. From crafting robust backend architectures to designing smooth, intuitive user interfaces, I enjoy bridging the gap between code and user experience.'}</p>
            </section>
            <section>
                <h2>{language === 'es' ? 'Qué amo' : 'What I love'}</h2>
                <p>{language === 'es' ? 'Me encanta resolver problemas desafiantes y perfeccionar sistemas backend, asegurándome de que cada pieza funcione sin problemas y de manera eficiente. Igualmente, tengo una pasión por diseñar experiencias de usuario que sean simples pero impactantes. Más allá del mundo de la tecnología, me encanta viajar, explorar nuevos lugares y culturas. Cuando no estoy programando o viajando, probablemente me encontrarás produciendo música, otra salida creativa que me mantiene inspirado.' : 'I thrive on solving challenging problems and perfecting backend systems, making sure every piece runs smoothly and efficiently. Equally, I have a passion for designing user experiences that are simple yet impactful. Beyond the world of tech, I love to travel, exploring new places and cultures. When I\'m not coding or traveling, you\'ll probably find me producing music—another creative outlet that keeps me inspired.'}</p>
            </section>
        </div>
    );
};

export default About;