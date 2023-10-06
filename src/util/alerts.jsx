import QRCode from "qrcode.react";
import { Alert } from "../config/constants";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { QRCodeDocument } from "../reports/request/PdfRequest";
import { Statuses } from "../containers/request/Statuses";
import { GeneralInformation } from "../containers/request/GeneralInformation";

export const displayCustomerInformation = (data) => {
  Alert.fire({
    title: "Información del Contribuyente!",
    confirmButtonText: `Aceptar`,
    confirmButtonColor: "#1D4ED8",
    icon: "info",
    html: (
      <section>
        <li className="text-start">
          <span className="font-bold">Nombre: </span> {data.customerFirstName}{" "}
          {data.customerLastName}
        </li>
        <li className="text-start">
          <span className="font-bold">Nit: </span> {data.customerNit}
        </li>
      </section>
    ),
  });
};

export const displayExpedientInformation = (data) => {
  Alert.fire({
    title: "Expediente!",
    confirmButtonText: `Aceptar`,
    confirmButtonColor: "#1D4ED8",
    icon: "info",
    html: (
      <section>
        <li className="text-start">
          <span className="font-bold">No. Expediente: </span>{" "}
          {data.customerExpedientNumber}
        </li>
        <li className="text-start">
          <span className="font-bold">Estado: </span> {data.status}
        </li>
      </section>
    ),
  });
};

export const displayQRCode = (data) => {
  Alert.fire({
    title: "Codigo QR!",
    confirmButtonText: `Aceptar`,
    confirmButtonColor: "#1D4ED8",
    icon: "info",
    html: (
      <section className="flex flex-col items-center">
        <QRCode
          size={220}
          id="RequestQRCode"
          value={JSON.stringify(data, null, 2)}
        />
        <PDFDownloadLink
          document={<QRCodeDocument id={"RequestQRCode"} data={data} />}
          fileName="qrcode.pdf"
        >
          {({ loading }) =>
            loading ? (
              "Loading..."
            ) : (
              <span className="text-cyan-500 hover:text-cyan-700 focus:text-cyan-900">
                Download PDF
              </span>
            )
          }
        </PDFDownloadLink>
      </section>
    ),
  });
};

export const displayRequestStatuses = (data) => {
  Alert.fire({
    title: "Trazabilidad!",
    confirmButtonText: `Aceptar`,
    confirmButtonColor: "#1D4ED8",
    icon: "info",
    html: <Statuses data={data} />,
  });
};

export const displayRequestGeneralInformation = (data) => {
  Alert.fire({
    title: "Información General!",
    confirmButtonText: `Aceptar`,
    confirmButtonColor: "#1D4ED8",
    icon: "info",
    html: (
      <GeneralInformation data={data} />
    ),
  });
};
