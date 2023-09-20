import React from "react";
import ProjectCard from "../components/ProjectCard";
import Asteroids from "../images/asteroids.jpg";
import Maalem from "../images/maalem.jpg";
import Organik from "../images/organik.jpg";
import Hired from "../images/hired.jpg";
import Collatz from "../images/collatz.jpg";
import Blackout from "../images/Blackout.gif";
import styled from "styled-components";

const ProjectsContainer = styled.div`
  max-width: 90%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 2em;
  margin-top: 2em;
  margin-bottom: 2em;
  overflow: auto;
`;

const ProjectCardWithMargin = styled(ProjectCard)`
  width: calc(50% - 1em);
  max-width: calc(50% - 1em);
`;

function Projects() {
  return (
    <ProjectsContainer>
      <ProjectCardWithMargin
        image={Collatz}
        title="Collatz Conjecture Solution"
        text={
          <>
            While being more of an analysis/research type of project, I am
            attempting to solve the{" "}
            <a
              href="https://en.wikipedia.org/wiki/Collatz_conjecture"
              style={{ color: "white", textDecoration: "underline" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              Collatz Conjecture
            </a>{" "}
            by using algorithms to find patterns that appear in the recursion
            process. This has allowed me to deepen my understanding of pattern recognition methods.
          </>
        }
        isInProgress={true}
        tags={['In Progress','Data Analysis', 'Pattern Recognition', 'Algorithms']}
      />
      <ProjectCardWithMargin
        image={Blackout}
        title="Blackout Launcher"
        text="This android launcher aims to reduce people's addiction to smartphones by stripping away dopamine-inducing parts of the UI, while still providing a solid user experience."
        isInProgress={true}
        tags={['In Progress','Design Stage']}
      />
      <ProjectCardWithMargin
        image={Hired}
        title="Hired"
        text="This platform allows job seekers and employers to connect with each other, creating a seamless experience for all users. It utilizes React.JS, Express.JS, Node.JS, as well as MongoDB for the database. Not only was the work completed on this project full stack, it allowed me to act as a scrum master, where I learned how to further act as a leader."
        isInProgress={false}
        tags={['Done','React.JS', 'Express.JS', 'MongoDB']}
      />
      <ProjectCardWithMargin
        image={Maalem}
        title="Maalem"
        text="This peer-to-peer student help web app was made using React.JS, Node.JS, while utilizing the benefits of Docker, as well as the power of websockets for a custom messaging system that was reliant on the Google sign-In API."
        isInProgress={false}
        tags={['Done','React.JS', 'Node.JS', 'Docker', 'WebSockets']}
      />
      <ProjectCardWithMargin
        image={Asteroids}
        title="Asteroids"
        text="This recreation of the retro asteroids game was an introduction to game development that was done in Java, with the Slick2D library. While the library itself is outdated, it allowed for a deeper understanding of OOP concepts as well as the render/display cycle encountered in gaming environments, and how to control it."
        isInProgress={false}
        tags={['Done','Java','OOP','Slick2D']}
      />
      <ProjectCardWithMargin
        image={Organik}
        title="Organik"
        text="This grocery store webpage was made using basic web development technologies, such as JavaScript, PHP, HTML, and CSS. While not necessarily a 'stack', it allowed for a deeper understanding of web development methodologies, as well as a solid foundation of UI design."
        isInProgress={false}
        tags={['Done','JavaScript', 'PHP', 'UI Design']}
      />
    </ProjectsContainer>
  );
}

export default Projects;
