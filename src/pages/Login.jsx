// importando components do bootstrap
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

// Importar o hook useState para monitorar a mudança das variáveis
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  //Variavei para o alerta
  const [alertaClass, setAlertaClass] = useState("mb-3, d-none");
  const [alertaMensagem, setAlertaMensagem] = useState("");
  const [alertaVariant, setAlertaVariant] = useState("danger");

  return (
    <div>
      <Container
        style={{ background: "dodgerblue", height: "100vh" }}
        className="justify-content-center align-content-center"
      >
        {/* Icone de login */}
        <span
          style={{ fontSize: "200px", color: "white" }}
          className="material-symbols-outlined"
        >
          login
        </span>

        {/* Caixinha de email */}
        <FloatingLabel controlId="floatingInput" label="Email" className="mb-3">
          <Form.Control
            type="email"
            placeholder="name@example.com"
            value={email}
            // "e" signifiga event
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </FloatingLabel>

        {/* Caixinha de senha */}
        <FloatingLabel controlId="floatingPassword" label="Senha">
          <Form.Control
            type="password"
            placeholder="Password"
            value={senha}
            // "e" signifiga event
            onChange={(e) => {
              setSenha(e.target.value);
            }}
          />
        </FloatingLabel>
        {/* alerta caso haja erro */}
        <Alert variant={alertaVariant} className={alertaClass}>
          {alertaMensagem}
        </Alert>

        {/* Botao pra enviar o formulário */}
        <Button variant="light" className="mt-4" size="lg" href="/home">
          Login
        </Button>
      </Container>
    </div>
  );
};

export default Login;
