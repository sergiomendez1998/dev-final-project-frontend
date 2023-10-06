import PropTypes from "prop-types";
import { useRef, useState, useEffect } from "react";
import { ListGroup } from "flowbite-react";
import Modal from "react-modal";
import { useWidth } from "../../hooks/useWidth";
import { FaEllipsisV } from "react-icons/fa";
import {
  HiLibrary,
  HiInbox,
  HiUserCircle,
  HiTrash,
  HiInformationCircle,
  HiQrcode,
  HiTrendingUp,
  HiSaveAs,
} from "react-icons/hi";
import {
  displayCustomerInformation,
  displayExpedientInformation,
  displayQRCode,
  displayRequestGeneralInformation,
  displayRequestStatuses,
} from "../../util/alerts";

Modal.setAppElement("#modal");

export const FloatContext = ({ data }) => {
  const { addEventWidth, removeEventWidth, width, scroll } = useWidth();
  const [open, setOpen] = useState(false);
  const [position, setPosition] = useState(0);
  const elementRef = useRef(null);

  useEffect(() => {
    addEventWidth();
    if (elementRef.current) {
      const position = elementRef.current.getBoundingClientRect();
      setPosition(position);
    }

    return () => {
      removeEventWidth();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [width, scroll]);

  return (
    <>
      <span ref={elementRef} onClick={() => setOpen(!open)}>
        <FaEllipsisV size={25} className="cursor-pointer" />
      </span>
      <Modal
        id="modalfjañlsdkfjañlsdkj"
        isOpen={open}
        onRequestClose={() => setOpen(!open)}
        contentLabel="Modal"
        style={{
          content: {
            top: `${
              width <= 375
                ? position.top >= 399.5
                  ? position.top - 190
                  : position.top + 215
                : position.top >= 423.5
                ? position.top - 190
                : position.top + 230
            }px`,
            left: `${width <= 375 ? width - 160 : width - 200}px`,
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
        <h2 className="text-center font-bold">Solicitud: {data.requestCode}</h2>
        <hr className="border border-black" />
        <ListGroup>
          <ListGroup.Item
            icon={HiInformationCircle}
            onClick={() => displayRequestGeneralInformation(data)}
          >
            Info. General
          </ListGroup.Item>
          <ListGroup.Item className="text-red-700" icon={HiTrash}>
            Eliminar
          </ListGroup.Item>
          <ListGroup.Item icon={HiInbox}>Muestras</ListGroup.Item>
          <ListGroup.Item
            icon={HiLibrary}
            onClick={() => displayExpedientInformation(data)}
          >
            Expediente
          </ListGroup.Item>
          <ListGroup.Item
            icon={HiUserCircle}
            onClick={() => displayCustomerInformation(data)}
          >
            Contribuyente
          </ListGroup.Item>
          <ListGroup.Item
            icon={HiTrendingUp}
            onClick={() => displayRequestStatuses(data)}
          >
            Trazabilidad
          </ListGroup.Item>
          <ListGroup.Item icon={HiSaveAs}>Estado</ListGroup.Item>
          <ListGroup.Item icon={HiQrcode} onClick={() => displayQRCode(data)}>
            Crear QR
          </ListGroup.Item>
        </ListGroup>
      </Modal>
    </>
  );
};

FloatContext.propTypes = {
  data: PropTypes.object.isRequired,
};
