import "./Time.css";
import Colaborador from "../Colaborador";

const Time = (props) => {
  const css = { backgroundColor: props.corSecundaria };

  return (
    // Renderização condicional se for verdadeiro "?" monta o card, caso não retorna ":" vazio
    (props.colaboradores.length > 0) ? <section className="time" style={css}>
      <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
      <div className="colaboradores">
        {props.colaboradores.map((colaborador) => (
          <Colaborador
            nome={colaborador.nome}
            cargo={colaborador.cargo}
            imagem={colaborador.imagem}
          />
        ))}
      </div>
    </section>
    : ''
  );
};

export default Time;
