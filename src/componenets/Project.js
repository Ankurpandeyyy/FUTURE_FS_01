import { Container,Row,Col,Tab } from "react-bootstrap";
import projImg1 from "../assets/img/project-img1.png"
import projImg2 from "../assets/img/project-img2.png"
import projImg3 from "../assets/img/project-img3.png"
import Nav from 'react-bootstrap/Nav';
import {ProjectCard} from "../componenets/ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css'
import TrackVisibility from "react-on-screen";

function Projects()
{
    const projects = [
        {
            title : "E-Commerce Website",
            description : "Using Mern Stack",
            imgUrl : projImg1 ,
        },
        {
            title : "AI-Image Converter",
            description : "Using API in JAVASCRIPT",
            imgUrl : projImg2 ,
        },
        {
            title : "Snake-Water_Gun game",
            description : "Using HTML,CSS and JS",
            imgUrl : projImg3 ,
        },
        {
            title : "Tic-Tac_Toe Game",
            description : "Using HTML,CSS and JS",
            imgUrl : projImg3 ,
        },
    ];
  return (
    <section className="projects" id="projects">
      <Container>
        <Row>
            <Col>
              <TrackVisibility>
                       {({isVisible}) => 
                       <div className={isVisible ? "animate__animated animate__bounce" : ""}>
              <h2>Projects</h2>
              <p>These are some recent or past Projects which i have done in previous years or days or months. These all are helpful in my Journey of Learning Full Stack Developement from scratch and am also working on many more projects which will be updated here soon.</p>
              </div>}
              </TrackVisibility>
              <Tab.Container id="projects-tabs" defaultActiveKey="first">
                 <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                   <Nav.Item>
                     <Nav.Link eventKey="first">Tab One</Nav.Link>
                   </Nav.Item>
                   <Nav.Item>
                     <Nav.Link eventKey="second">Tab two</Nav.Link>
                   </Nav.Item>
                   <Nav.Item>
                     <Nav.Link eventKey="third" >
                       Tab Three
                     </Nav.Link>
                   </Nav.Item>
                 </Nav>
                 <Tab.Content>
                   <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index)=>{
                           return(
                             <ProjectCard key={index}{...project} />
                           )
                          })
                        }
                      </Row>
                   </Tab.Pane>
                   <Tab.Pane eventKey="second">Lorem Ipsum</Tab.Pane>
                   <Tab.Pane eventKey="third">Lorem Ipsum Ipsum</Tab.Pane>
                 </Tab.Content>
                 </Tab.Container>
            </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}/>
    </section>
  )

}

export default Projects;