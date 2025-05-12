import Carousel from 'react-multi-carousel';
import {Container, Row , Col} from 'react-bootstrap';
import 'react-multi-carousel/lib/styles.css';
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import c from "../assets/img/c.svg";
import html from "../assets/img/html.svg";
import css from "../assets/img/css.svg";
import javascript from "../assets/img/javascript.svg";
import mysql from "../assets/img/mysql.svg";
import express from "../assets/img/express.svg";
import react from "../assets/img/react.svg";
import nodejs from "../assets/img/nodejs.svg";
import java from "../assets/img/java.svg";
import mongodb from "../assets/img/mongodb.svg";
import colorSharp from "../assets/img/color-sharp.png"
function Skills()
{
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };


      return(
        <section className="skill" id="skills" >
           <Container>
              <Row>
                <Col>
                  <div className='skill-bx'>
                       <h2>
                        Skills
                       </h2>
                       <p>These are the prior skills which I have untill now.<br></br>I worked on the following set of coding languages and still learning untill and unless i made myself comfortable in each of them.</p>
                       <Carousel responsive={responsive} infinite={true} className='skill-slider'>
                        <div className='item'>
                            <img src={c} alt="Image"/>
                            <h5>C</h5>
                        </div>
                        <div className='item'>
                            <img src={java} alt="Image"/>
                            <h5>JAVA</h5>
                        </div>
                        <div className='item'>
                            <img src={html} alt="Image"/>
                            <h5>HTML</h5>
                        </div>
                        <div className='item'>
                            <img src={css} alt="Image"/>
                            <h5>CSS</h5>
                        </div>
                        <div className='item'>
                            <img src={javascript} alt="Image"/>
                            <h5>JAVASCRIPT</h5>
                        </div>
                        <div className='item'>
                            <img src={mysql} alt="Image"/>
                            <h5>MY SQL</h5>
                        </div>
                        <div className='item'>
                            <img src={express} alt="Image"/>
                            <h5>EXPRESS</h5>
                        </div>
                        <div className='item'>
                            <img src={react} alt="Image"/>
                            <h5>REACT</h5>
                        </div>
                        <div className='item'>
                            <img src={nodejs} alt="Image"/>
                            <h5>NODE JS</h5>
                        </div>
                        <div className='item'>
                            <img src={mongodb} alt="Image"/>
                            <h5>MONGODB</h5>
                        </div>
                       </Carousel>
                  </div>
                </Col>
              </Row>
           </Container>
           <img className='background' src={colorSharp}/>
        </section>
      )
}



export default Skills;