import React from "react";
import Scrum from "../assets/scrum.png"
import Ciclo from "../assets/ciclo.png"

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";
import { Autorenew, EventNote, Group } from "@material-ui/icons";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#14213dff">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          iconStyle={{ background: "#14213dff", color: "#fff" }}
          icon={<Group />}
        >
          <h3 className="vertical-timeline-element-title">
            Metodologia
          </h3>
          <p>Após reunião prévia, a equipe optou por fazer o gerenciamento do projeto utilizando o SCRUM, por já ser uma metodologia ágil consolidada e que permite que um produto agregador de valor seja entregue no intervalo de tempo programado.</p>
          <p>SOMMERVILLE, Ian. cita que: “Os métodos de desenvolvimento de software ágeis são abordagens iterativas nas quais o software é desenvolvido e entregue aos clientes em incrementos. Ao contrário das abordagens dirigidas por plano, a funcionalidade desses incrementos não é planejada de antemão, mas decidida durante o desenvolvimento. A decisão sobre o que incluir em um incremento depende do progresso e das prioridades do cliente. O argumento para essa abordagem é que as prioridades do cliente e os seus requisitos mudam, então faz sentido ter um plano flexível que possa acomodar essas mudanças.”</p>
          <p>Também executaremos ações de Extreme Programming com o intuito de realizar entregas rápidas e que permitam a conclusão do projeto sem se prender a documentações excessivas que desviam possibilidades de ações práticas em processos puramente teóricos.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          iconStyle={{ background: "#14213dff", color: "#fff" }}
          icon={<Autorenew />}
        >
          
          <h3 className="vertical-timeline-element-title">
            Scrum
          </h3>
          <img src={Scrum} alt="scrum" style={{ width: '470px' }} />
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          iconStyle={{ background: "#14213dff", color: "#fff" }}
          icon={<Autorenew />}
        >
          <h3 className="vertical-timeline-element-title">
            Ciclo de Vida do Projeto
          </h3>
          <img src={Ciclo} alt="ciclo de vida do projeto" style={{ width: '470px' }} />
          <h4 className="vertical-timeline-element-subtitle">
            Iteração da Sprint
          </h4>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          iconStyle={{ background: "#14213dff", color: "#fff" }}
          icon={<EventNote />}
        >
          <p>
            <strong>Ideação:</strong> Processo de definição do problema do cliente, formulação das soluções necessárias e definição das primeiras atividades.
          </p>
          <p>
            <strong>Planejamento:</strong> Planejar os requisitos prioritários a serem implementados.
          </p>
          <p>
            <strong>Planejamento:</strong> planejar os requisitos prioritários a serem implementados.
          </p>
          <p>
            <strong>Execução:</strong> Execução das atividades da sprint planejada.
          </p>
          <p>
            <strong>Monitoramento e Controle:</strong> Processo de acompanhamento e revisão da sprint, se cumprida as metas começar um novo ciclo.
          </p>
          <p>
            <strong>Encerramento:</strong> Conclusão do projeto com a entrega das funcionalidades restantes.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
