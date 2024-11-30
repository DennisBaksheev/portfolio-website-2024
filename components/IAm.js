import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'


const IAm = () => {
  return (
    <section className='intro-section'>
      <article className='intro-text'>
        <p>Hello, I’m</p>
        <h1>DENNIS BAKSHEEV</h1>
      </article>
      <div className='CTAs'>
        <a 
          className='download-resume' 
          href="/dennisbaksheev_resume_softwaredeveloper.pdf" 
          download="Dennis_Baksheev_Resume.pdf"
        >
          Download My Resume
        </a>
        <div className='socials'>
          <a href={"https://www.linkedin.com/in/dennis-baksheev"} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a href={"https://github.com/DennisBaksheev"} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          <a href={"mailto:dennisbaksheev1@gmail.com"} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faEnvelope} size="2x" />
          </a>
        </div>
      </div>
      <article className='some-details'>
        <p>Skilled at bringing ideas to life with more than 4 years of experience.</p>
        <p>Constantly learning and expanding my knowledge.</p>
      </article>
    </section>
  )
}

export default IAm;