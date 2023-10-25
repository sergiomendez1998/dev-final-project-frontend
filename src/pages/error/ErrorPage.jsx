import { useEffect, useState } from 'react';
import { Col } from '../../components/grid/Col';
import { Row } from '../../components/grid/Row';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';


const ErrorPage = () => {
    const navigate = useNavigate();
    const { state } = useLocation();
    const { logout } = useAuth();

    const [text, setText] = useState("Regresar");

    useEffect(() => {
        if (state.statusCode === '404') {
            setText("Regresar");
        } else if (state.statusCode === '500' || state.statusCode === '401') {
            setText("Cerrar Sesión");
        }
    }, [state])

    const handleClick = () => {
        if (state.statusCode === '404') {
            navigate(-1);
        } else if (state.statusCode === '500' || state.statusCode === '401') {
            logout();
        } else {
            navigate(-1);
        }
    }

    return (
        <div className="container mx-auto">
            <Row className="min-h-[60vh] items-center justify-center">
                <Col xs={12} className="text-center">
                    <span className="block text-3xl font-bold lg:text-8xl">{state.statusCode}</span>
                    <div className="mb-4 text-2xl italic md:text-3xl">{state.message}</div>
                    <span className="cursor-pointer font-bold text-sky-700 hover:text-sky-500" onClick={handleClick}>
                        {text}
                    </span>
                </Col>
            </Row>
        </div>
    );
};

export default ErrorPage;