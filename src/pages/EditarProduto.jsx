// importando components do bootstrap
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Alert from "react-bootstrap/Alert";
import Image from "react-bootstrap/Image";

// Importação de componentes
import NavBarra from "../components/NavBarra";

const EditarProduto = () => {
  const cats = [
    { id: 1, nome: "Eletronicos" },
    { id: 2, nome: "Moda e Vestuário" },
    { id: 3, nome: "Alimentos e Bebidas" },
    { id: 4, nome: "Saúde e Beleza" },
    { id: 5, nome: "Esporte e Lazer" },
    { id: 6, nome: "Brinquedos e Jogos" },
    { id: 7, nome: "Livros e Papelaria" },
  ];

  // Link produto sem imagem

  const linkImagem =
    "https://www.malhariapradense.com.br/wp-content/uploads/2017/08/produto-sem-imagem.png";
  return (
    <div>
      <NavBarra />
      <Container>
        <h1>Editar Produto</h1>
        <form className="mt-3">
          <Row>
            <Col xs={6}>
              {/* Caixinha de nome */}
              <FloatingLabel
                controlId="floatingInputNome"
                label="Nome"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  placeholder="Digite o nome do produto"
                />
              </FloatingLabel>
              {/* Caixinha de descrição */}
              <FloatingLabel
                controlId="floatingInputDescricao"
                label="Descrição"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  placeholder="Digite a descrição do produto"
                />
              </FloatingLabel>

              <Form.Group
                controlId="formGridTipo"
                label="Nome"
                className="mb-3"
              >
                <Form.Label>Tipo de produto</Form.Label>
                <Form.Select>
                  {cats.map((cat) => (
                    <option key={cat.id} value={cat.nome}>
                      {cat.nome}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>
              {/* Caixinha de preço */}
              <FloatingLabel
                controlId="floatingInputPreco"
                label="Preço"
                className="mb-3"
              >
                <Form.Control
                  type="number"
                  step="0.1"
                  placeholder="Digite o preco"
                />
              </FloatingLabel>
            </Col>
            <Col xs={6}>
              {/* Caixinha de Imagem */}
              <FloatingLabel
                controlId="floatingInputImagem"
                label="Envie o link da imagem do produto"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  placeholder="Envie o link da imagem do produto"
                />
              </FloatingLabel>

              <Image src={linkImagem} rounded width={300} height={300} />
            </Col>
          </Row>

          {/* alerta caso haja erro */}
          <Alert key="danger" variant="danger">
            Há um erro!
          </Alert>
          {/* Botão pare enviar o formulário de cadastro do produto    */}
          <Button variant="primary" size="lg" type="submit">
            Editar
          </Button>
        </form>
      </Container>
    </div>
  );
};

export default EditarProduto;
