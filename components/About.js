import Image from 'next/image';
import AboutParallax from "./AboutParallax";
import styles from '../styles/About.module.css';

const About = () => {
  return (
    <section className={styles.aboutSection} id="about">
      <AboutParallax />
      <div className={styles.aboutInner}>
        <h1>About Me</h1>
        <div className={styles.aboutContent}>
          <div className={styles.aboutText}>
            <p>
              Hello! I&apos;m Dennis, a passionate software engineer with a knack for creating elegant solutions to complex problems. My journey in tech has been driven by curiosity and a desire to make a positive impact through code.
            </p>
            <p>
              What excites me most about software development is the constant opportunity to learn and grow. Every project is a new adventure, challenging me to think creatively and push the boundaries of what&apos;s possible.            
            </p>
           <h2>What I Bring to a Team</h2>
            <ul>
              <li>Strong problem-solving skills and attention to detail</li>
              <li>Enthusiasm for collaborative work and knowledge sharing</li>
              <li>Adaptability to new technologies and methodologies</li>
              <li>A positive attitude and willingness to take on challenges</li>
            </ul>
            <h2>Beyond Coding</h2>
            <p>
              When I&apos;m not immersed in code, you can find me:
            </p>
            <ul>
              <li>Exploring nature trails and capturing landscapes through photography</li>
              <li>Experimenting with new recipes in the kitchen</li>
              <li>Engaging in community tech meetups and hackathons</li>
              <li>Reading sci-fi novels and training in the gym</li>
            </ul>
            <p>
              I&apos;m always excited to connect with fellow tech enthusiasts and potential collaborators. Whether it&apos;s discussing the latest tech trends or exploring new project opportunities, I&apos;m just an email away!
            </p>
          </div>
          <div className={styles.aboutImage}>
            <Image
              src="/about.JPG" 
              alt="Dennis Baksheev"
              width={300}
              height={300}
              objectFit="cover"
              className={styles.profileImage}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;