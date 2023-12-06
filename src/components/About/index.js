import { useEffect, useState } from 'react'
import {
  faBootstrap,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            Hey there! I'm Taylor Swift, a frontend developer weaving code and
            creativity. Much like crafting melodies, I find harmony in designing
            seamless, user-centric experiences. With a keen eye for detail and a
            passion for innovation, I merge my love for music and technology
            into captivating digital landscapes.
          </p>
          <p align="LEFT">
            My journey as a frontend developer mirrors my songwriting
            process—meticulous, expressive, and driven by storytelling. From
            HTML and CSS to JavaScript symphonies, I compose clean, responsive,
            and intuitive interfaces that resonate with users. With a dash of
            Swift flair, I infuse projects with elegance and functionality,
            ensuring each line of code sings in perfect harmony.
          </p>
          <p>
            When I'm not coding, you might find me on stage, but my heart beats
            for the rhythm of creating intuitive designs and engaging user
            experiences. Join me on this journey where artistry meets
            technology, and let's craft digital symphonies together.
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faBootstrap} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="ball-pulse" />
    </>
  )
}

export default About
