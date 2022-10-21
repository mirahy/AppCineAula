import { Col, Form, Row, Button } from "react-bootstrap";
import { FormUserStyle } from './styled';


export function CategoryForm(){

    return(
        
<FormUserStyle>
            <Form>
                <Row>
                    <Col>
                        <h3>Cadastro Categoria</h3>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group className="mb-12" controlId="formBasicName">
                            <Form.Label>Categoria: </Form.Label>
                            <Form.Control type="text" placeholder="Digite a categoria" />
                        </Form.Group>
                    </Col>
                </Row>
                <Button variant="primary" type="submit">
                    Salvar
                </Button>
            </Form>
        </FormUserStyle>
    )

}