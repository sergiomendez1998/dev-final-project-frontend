import PropTypes from "prop-types";
import Modal from "react-modal";
import { FaEllipsisV } from "react-icons/fa";
import { ListGroup } from "flowbite-react";
import {
  HiInbox,
  HiInformationCircle,
  HiQrcode,
  HiTrash,
} from "react-icons/hi";
import { AnimatedLink } from "../links/AnimatedLink";
import { usePosition } from "../../hooks/usePosition";

Modal.setAppElement("#modal_float_context");

export const FloatSamples = ({ data }) => {
    const { elementRef, position, open, setOpen, width } = usePosition();

  return (
    <>
      <span ref={elementRef} onClick={() => setOpen(!open)}>
        <FaEllipsisV size={25} className="cursor-pointer" />
      </span>
      <Modal
        isOpen={open}
        onRequestClose={() => setOpen(!open)}
        contentLabel="Modal"
        style={{
          content: {
            top: `${
              width <= 375
                ? position.top >= 399.5
                  ? position.top - 115
                  : position.top + 150
                : position.top >= 423.5
                ? position.top - 120
                : position.top + 150
            }px`,
            left: `${width <= 375 ? width - 160 : width - 150}px`,
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            zIndex: "1000",
            boxShadow:
              "0px 5px 5px -3px rgba(0,0,0,0.2), 0px 8px 10px 1px rgba(0,0,0,0.14), 0px 3px 14px 2px rgba(0,0,0,0.12)",
            transition:
              "opacity 267ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, transform 178ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
            transformOrigin: "82.1875px 0px",
          },
        }}
        overlayClassName="fixed inset-0 bg-trasparent transition-opacity"
      >
        <h2 className="w-full text-center font-bold">
          Muestra: {data.sampleType.name}
        </h2>
        <hr className="border border-black" />
        <ListGroup>
          <ListGroup.Item icon={HiInformationCircle}>
            Info. General
          </ListGroup.Item>
          <ListGroup.Item className="text-red-700" icon={HiTrash}>
            Eliminar
          </ListGroup.Item>
          <AnimatedLink to={`/request/${data.id}/samples`}>
            <ListGroup.Item icon={HiInbox}>Items</ListGroup.Item>
          </AnimatedLink>
          <ListGroup.Item icon={HiQrcode}>Crear QR</ListGroup.Item>
        </ListGroup>
      </Modal>
    </>
  );
};

FloatSamples.propTypes = {
  data: PropTypes.object.isRequired,
};