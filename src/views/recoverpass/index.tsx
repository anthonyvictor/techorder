import { FC, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { InitialContainer } from "../../components/containers/initialContainer";
import { LoginRegisterContainer } from "../../components/containers/loginRegisterContainer";
import { InputLabel } from "../../components/inputs/inputWithLabel";
import { ButtonMain } from "../../styles/buttons";

export const RecoverPass : FC = () => {
    const [name, setName] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");

    const params = useParams()

    const [passwordInvalid, setPasswordInvalid] = useState<string>("");
    const [confirmPasswordInvalid, setConfirmPasswordInvalid] =
    useState<string>("");

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        // const newToken = await login(name, password);
        // if (newToken && newToken !== "") {
        //   setToken(newToken);
        // }
      }

      useEffect(() => {
            console.log(params['token'])
      }, [])

  return (
    <LoginRegisterContainer className="view">
      <InitialContainer>
        <header>
          <h4>Insira uma nova senha:</h4>
        </header>
        <form onSubmit={handleSubmit}>
        <InputLabel
            label="Senha"
            type="password"
            autoFocus={true}
            required={true}
            state={{ get: password, set: setPassword }}
            invalid={{ get: passwordInvalid, set: setPasswordInvalid }}
          />
          <InputLabel
            label="Confirme sua senha"
            type="password"
            required={true}
            state={{ get: confirmPassword, set: setConfirmPassword }}
            invalid={{
              get: confirmPasswordInvalid,
              set: setConfirmPasswordInvalid,
            }}
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
