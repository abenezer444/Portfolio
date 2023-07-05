import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import airbnb from "../../Assets/Projects/airbnb.png";
import askanything from "../../Assets/Projects/askanything.png";
import travel from "../../Assets/Projects/travel-app.png";
import rateTheInstructor from "../../Assets/Projects/rate-the-professor.png";
import meme from "../../Assets/Projects/meme-generator.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={airbnb}
              isBlog={false}
              title="Airbnb Clone"
              description="A clone of the Airbnb Experiances page with react.js and fully responsive uses a dummy data to dynamically render the contents on the page"
              ghLink="https://github.com/abenezer444/airbnb"
              demoLink="https://abenezer444.github.io/airbnb/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={meme}
              isBlog={false}
              title="Meme generator"
              description="A simple react app that uses api to fetch random meme image and lets the user add the meme text on the top and bottom of the image."
              ghLink="https://github.com/abenezer444/meme-generator"
              demoLink="https://abenezer444.github.io/meme-generator/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={askanything}
              isBlog={false}
              title="Ask Anything"
              description="Ask Anything is a flutter mobile application powered in the backend by Express.js. The app allows users to ask and answer questions, create and manage their profiles, with the ability to stay anonymous. The platform will allow users to group questions based on topics, making it easier for them to find and answer questions that interests them."
              ghLink="https://github.com/Merwan-J/AskAnything"
              // demoLink="https://abenezer444.github.io/meme-generator/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={travel}
              isBlog={false}
              title="Travel App"
              description="an app i built in my first learning steps of react.js. It uses a dummy data to dynamically render the contents on the page"
              ghLink="https://github.com/abenezer444/travel-app"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rateTheInstructor}
              isBlog={false}
              title="Rate The Instructor"
              description="A web app build with angular.js and nest.js that lets students rate their instructors and see the ratings of other instructors and many more features, my colligues and i built this app as a  project for our web development course."
              ghLink="https://github.com/Rate-The-Instructor/RateTheInstructor"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
