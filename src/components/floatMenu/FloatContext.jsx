import PropTypes from "prop-types";
import Modal from "react-modal";
import { ListGroup } from "flowbite-react";
import { FaEllipsisV } from "react-icons/fa";
import {
  HiLibrary,
  HiInbox,
  HiUserCircle,
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
} from "../../util/alertsForRequest";
import { AnimatedLink } from "../links/AnimatedLink";
import { usePosition } from "../../hooks/usePosition";
import { ItemDeleteRequest } from "../buttons/itemDeleteRequest";
import { useContext } from "react";
import { SampleContext } from "../../context/SampleContext";

Modal.setAppElement("#modal_float_context");

export const FloatContext = ({ data }) => {
  const { setItemOpen, setSelectedSample } = useContext(SampleContext);
  const { elementRef, position, open, setOpen, width } = usePosition();


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
            top: `${width <= 375
              ? position.top >= 399.5
                ? position.top - 190
                : position.top + 215
              : position.top >= 370
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
          <ItemDeleteRequest data={data} />
          <AnimatedLink to={`/request/${data.id}/samples`}>
            <ListGroup.Item icon={HiInbox}>Muestras</ListGroup.Item>
          </AnimatedLink>
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
          <ListGroup.Item icon={HiSaveAs} onClick={() => {
            setSelectedSample(data);
            setItemOpen();
          }}>Estado</ListGroup.Item>
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
