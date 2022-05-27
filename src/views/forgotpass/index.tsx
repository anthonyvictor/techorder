import { FC, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { InitialContainer } from "../../components/containers/initialContainer";
import { LoginRegisterContainer } from "../../components/containers/loginRegisterContainer";
import { InputLabel } from "../../components/inputs/inputWithLabel";
import { ButtonMain } from "../../styles/buttons";

export const ForgotPass: FC = () => {
    const [name, setName] = useState<string>("");
    const navigate = useNavigate()


    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        navigate('/recoverpass/62232665sa6d5a65asdKKJdh2625sahjcija')
        // const newToken = await login(name, password);
        // if (newToken && newToken !== "") {
        //   setToken(newToken);
        // }
      }

  return (
    <LoginRegisterContainer className="view">
      <InitialContainer>
        <header>
          <h4>Identifique a conta que deseja recuperar:</h4>
        </header>
        <form onSubmit={handleSubmit}>
          <InputLabel
            label={`Usuário/Email`}
            type={"text"}
            autoFocus={true}
            required={true}
            state={{ get: name, set: setName }}
          />
          <ButtonMain type="submit">ENVIAR</ButtonMain>
        </form>
        <footer>
            <Link to={'/login'}>Voltar</Link>
        </footer>
            
      </InitialContainer>
    </LoginRegisterContainer>
  );
};
