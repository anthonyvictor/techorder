import { createRef, FC, useState } from "react";

import { InputLabel } from "../../components/inputs/inputWithLabel";
import { ButtonMain } from "../../styles/buttons";
import { InitialContainer } from "../../components/containers/initialContainer";
import { LoginRegisterContainer } from "../../components/containers/loginRegisterContainer";
import enterpriseLogo from "../../assets/images/enterprise-logo.png";
import { useApi } from "../../context/api";
import { useLocal } from "../../context/local";
import { useMessage } from "../../components/message";
// import lng from './lng.json'
import { Link } from "react-router-dom";

export const Login: FC = () => {
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { api } = useApi();
  const { setToken } = useLocal();
  const { message } = useMessage();

  const usernameRef = createRef<HTMLInputElement>();

  setTimeout(() => {
    if (usernameRef.current?.matches(":-internal-autofill-selected")) {
      let interval = setInterval(() => {
        if (usernameRef.current) {
          setName(usernameRef.current.value);
          clearInterval(interval);
        }
      }, 100);
    }
  }, 500);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const newToken = await login(name, password);
    if (newToken && newToken !== "") {
      setToken(newToken);
    }
  }

  async function login(user: string, password: string): Promise<string | null> {
    try {
      const payload = { user, pwd: btoa(password) };
      const response = await api().post("auth", payload);
      if (response.status === 200) {
        const newToken = response.data;
        if (newToken && newToken !== "") {
          return newToken;
        }
      }
      return null;
    } catch (err: any) {
      if (err.response.status === 403) {
        message({ type: "error", msg: "Incorrect user/password!" });
      } else {
        message({ type: "error", msg: "Has ocurred some error!" });
      }
      return null;
    }
  }

  return (
    <LoginRegisterContainer className="view">
      <InitialContainer>
        <header>
          <h2>Sistema de pedidos</h2>
          <img src={enterpriseLogo} />
          <h4>Enviar pedidos nunca foi tão fácil!</h4>
        </header>
        <form onSubmit={handleSubmit}>
          <InputLabel
            label={'Usuário/Email'}
            type={"text"}
            autoFocus={true}
            required={true}
            state={{ get: name, set: setName }}
          />
          <InputLabel
            label="Senha"
            type={"password"}
            required={true}
            state={{ get: password, set: setPassword }}
          />
          <section id="keep-connected-section">
            <label htmlFor="keep-connected">Mantenha-me conectado</label>
            <input id="keep-connected" type={"checkbox"} />
          </section>
          <ButtonMain type="submit">LOGIN</ButtonMain>
        </form>
        <footer>
          <p>
            Novo usuário? <Link to="/register">Registre-se</Link>
          </p>
          <Link to={"/forgotpass"}>Esqueceu a senha?</Link>
        </footer>
      </InitialContainer>
    </LoginRegisterContainer>
  );
};
