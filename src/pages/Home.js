import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import Logo from "./../assets/logo.png";
import TeamItem from "../components/TeamItem";
import { TeamList } from "../helpers/TeamList";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2>Olá, Nós somos a PandaWeb</h2>
        <div className="prompt">
          <p>A PandaWeb é uma startup com foco no desenvolvimento de soluções web e mobile. Trabalhamos de forma engajada e usando metodologias que aceleram a entrega de resultados, oferecendo aos nossos clientes soluções intuitivas e que agregam valor ao negócio. </p>
          <img src={Logo} alt="logo" />
        </div>
      </div>
      <div className="skills">
        <div className="projects">
          <h1>Nosso Time</h1>
          <div className="projectList">
            {TeamList.map((project, idx) => {
              return (
                <TeamItem id={idx} name={project.name} image={project.image} skills={project.skills} />
              );
            })}
          </div>
        </div>
        <h1>Papéis e Responsabilidades</h1>
        <ol className="list">
          <li className="item">
            <h2>Project Manager / Scrum Master</h2>
            <span>
              Planejar e coordenar o projeto para que atenda ao cronograma estabelecido, designar atribuições da equipe de acordo com a hardskill de cada membro, controlar o fluxo com o Scrum, para um andamento produtivo,
              planeja e prioriza atividades nas sprints.
            </span>
          </li>
          <li className="item">
            <h2>Product Owner</h2>
            <span>
              Ter contato com os Stakeholders, identificando suas necessidades,
              mapear as regras de negócio a serem trabalhadas no projeto,
              levantar os requisitos funcionais e não funcionais,
              fazer a ponte entre o cliente e o time do projeto.
            </span>
          </li>
          <li className="item">
            <h2>Designer de UX / UI</h2>
            <span>
              Criação de Wireframes,
              criação do protótipo de alta fidelidade,
              análise e validação de usabilidade e responsividade.
            </span>
          </li>
          <li className="item">
            <h2>Software Engineer</h2>
            <span>
              Front-End - Criar e manter o código fonte relativo ao lado do cliente,
              Back-End - Criar e manter o código fonte relativo ao lado do servidor,
              realização de testes unitários,
              integrar os componentes de software desenvolvidos.
            </span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
