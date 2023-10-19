import QRCode from "qrcode.react";
import { Alert } from "../config/constants";
import { GeneralInformation } from "../containers/sample/GeneralInformation";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { QRCodeDocument } from "../reports/request/PdfRequest";
import { convertToGeneralInfoSample } from "./utilConvert";

export const displaySampleGeneralInformation = (data) => {
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
                    id="SampleQRCode"
                    value={JSON.stringify(convertToGeneralInfoSample(data), null, 2)}
                />
                <PDFDownloadLink
                    document={
                        <QRCodeDocument
                            id={"SampleQRCode"}
                            data={convertToGeneralInfoSample(data)}
                            title={"Muestra"}
                            field="Id"
                        />
                    }
                    fileName="qrcodesample.pdf"
                    className="mt-4"
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