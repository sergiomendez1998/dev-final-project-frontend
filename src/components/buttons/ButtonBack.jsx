import { useNavigate } from 'react-router-dom';
import { FaBackward } from 'react-icons/fa';
import { Col } from '../grid/Col';
import { Button } from 'flowbite-react';

export const ButtonBack = () => {
  const navigate = useNavigate();

  return (
    <Col className="mb-5">
      <Button className='font-bold' color="failure"  onClick={() => navigate(-1)}>
        <FaBackward className='mr-2 h-5 w-5' /> <p>Regresar</p>
      </Button>
    </Col>
  );
};
