import { useState } from "react";
import { LoginSection } from "./style.ts";
import axios from "axios";

const Login = () =>{
  const [ username, setUsername ] = useState("");
  const [ password, setPassword ] = useState("");
  const [ error, setError ] = useState("");

  const handlerSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");

    try{
      const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/login`, {
        username,
        password
      });

      const token = response.data.token;
      localStorage.setItem("token", token);

      window.location.href = "/dashboard";
    }catch(err: any){
      setError("Error ao realizar login. Verifique as credenciais.");
      console.error("Error ao realizar login.", err);
    }
  }

  return (
    <LoginSection>
      <form onSubmit={handlerSubmit }>
        <label htmlFor="username">Usuário</label>
        <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <label htmlFor="password">Senha</label>
        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Entrar</button>
        {error && <p style={{color: "red"}}>{error}</p>}
      </form>
    </LoginSection>
  )
}

export default Login;