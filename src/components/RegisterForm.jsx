import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import {FaAddressBook, FaEnvelope, FaLock, FaPhone, FaUser} from "react-icons/fa";
import {useState} from "react";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
export const RegisterForm = () => {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    const formatCUI = (value) => {
        return value.replace(/\D/g, '').slice(0, 13).replace(/(\d{5})(\d{4})(\d{4})/, '$1-$2-$3');
    };

    const handleCUIChange = (e) => {
        e.target.value = formatCUI(e.target.value);
    };

    const formatNIT = (value) => {
        return value.replace(/\D/g, '').slice(0, 9).replace(/(\d{8})(\d{1})/, '$1-$2');
    };

    const handleNITChange = (e) => {
        e.target.value = formatNIT(e.target.value);
    };
    return (
        <>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Row className="mb-3">
                    <Form.Group as={Col} md="6" className="mb-3" controlId="cui">
                        <Form.Label>CUI (13 digitos)</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="CUI"
                            required
                            onChange={handleCUIChange}
                            pattern="\d{5}-\d{4}-\d{4}"
                            maxLength="13"
                        />
                        <Form.Control.Feedback type="invalid">
                            Por favor ingresa un CUI valido de 13 digitos.
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={Col} md="6" className="mb-3" controlId="nit">
                        <Form.Label>NIT (12345678-9)</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="NIT"
                            required
                            onChange={handleNITChange}
                            pattern="\d{8}-\d{1}"
                            maxLength="10"
                        />
                        <Form.Control.Feedback type="invalid">
                            Por favor ingresa un NIT valido 12345678-9.
                        </Form.Control.Feedback>
                    </Form.Group>

                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} md="6" controlId="validationCustom01">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Nombre"

                        />
                        <Form.Control.Feedback type="invalid" >Ingresa tu nombre</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="6" controlId="validationCustom02">
                        <Form.Label>Apellido</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Apellido"

                        />
                        <Form.Control.Feedback type="invalid" >Ingresa tus apellidos.</Form.Control.Feedback>
                    </Form.Group>
                </Row>

                <Row className="mb-3">

                    <Form.Group as={Col} md="8" className="mb-3" controlId="phoneNumber">
                        <Form.Label><FaAddressBook />    Direccion</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Direccion"
                            required
                        />
                        <Form.Control.Feedback type="invalid">
                            Por favor ingresa tu direccion.
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={Col} md="4" controlId="validationCustom03">
                        <Form.Label><FaUser />Genero</Form.Label>
                        <Form.Select required>
                            <option value="">Seleccionar</option>
                            <option value="male">Masculino</option>
                            <option value="female">Femenino</option>
                        </Form.Select>
                        <Form.Control.Feedback type="invalid">
                            Selecciona tu genero.
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>


                <Row className="mb-3">
                    <Form.Group as={Col} md="8" controlId="validationCustom04">
                        <Form.Label><FaPhone />     No. telefono (8 digitos)</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Numero de telefono"
                            required
                            pattern="[0-9]{8}"
                            maxLength="8"
                        />
                        <Form.Control.Feedback type="invalid">
                           Por favor ingresa tu numero de contacto.
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} md="6" controlId="validationCustom05">
                        <Form.Label><FaEnvelope />  Correo</Form.Label>

                        <Form.Control type="email" placeholder="Correo" required/>
                        <Form.Control.Feedback type="invalid">
                            Por favor ingresa un correo valido.
                        </Form.Control.Feedback>
                        <span className="ms-2">(Tu correo sera tu usuario)</span>
                    </Form.Group>

                    <Form.Group as={Col} md="6" controlId="validationCustom06">
                        <Form.Label><FaLock/> Contrasena</Form.Label>
                        <Form.Control type="password" placeholder="Contrasena" required/>
                        <Form.Control.Feedback type="invalid">
                            Crea una contrasena.
                        </Form.Control.Feedback>
                    </Form.Group>

                </Row>
                <Form.Group className="mb-3">
                    <Form.Check
                        required
                        label="Acepto que los datos ingresados son validos"
                        feedback="Debes aceptar las condiciones antes continuar."
                        feedbackType="invalid"
                    />
                </Form.Group>
                <Button type="submit">Registrarse</Button></Form>
        </>
    )
}