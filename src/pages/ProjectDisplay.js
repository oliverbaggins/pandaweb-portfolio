import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import GitHubIcon from "@material-ui/icons/GitHub";
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <div className="project">
      <h1> {project.name}</h1>
      <img src={project.image} />
      <p>
        Hospes é a nossa solução para fazer reservas em hotéis. Com uma interface amigável ela possibilita que mesmo usuários leigos consigam interagir com facilidade em nossa plataforma.
      </p>
      <p>
        Nela o usuário poderá buscar entre várias opções disponíveis de hospedagem, sem a necessidade de se deslocar entre várias plataformas. 
      </p>
      <p>
        Através de filtros simples, conseguirá limitar sua busca por critérios como, capacidade de pessoas, vista para algum ponto turístico, qualidade da acomodação e características especiais, garantindo que escolham a opção que mais atendam suas necessidades.
      </p>
      <GitHubIcon />
    </div>
  );
}

export default ProjectDisplay;
