import PropTypes from "prop-types";
import { Document, Page, Image, View, StyleSheet, Text } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    display: "block"
  },
  view: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%"
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
  },
  qrImage: {
    width: "50%",
    height: "50%"
  },
  text: {
    textAlign: "center",
    fontSize: 12,
    margin: 12,
    lineHeight: 1.5
  }
});

function QRCodePage({ id, data }) {
  const dataUrl = document.getElementById(id).toDataURL();
  return (
    <Page key={`page_${id}`} size="B8" style={styles.page}>
      <View style={styles.view}>
        <Text style={styles.title}>Codigo QR</Text>
        <Image allowDangerousPaths src={dataUrl} style={styles.qrImage} />
        <Text style={styles.text}>Solicitud: {data.requestCode}</Text>
      </View>
    </Page>
  );
}

QRCodePage.propTypes = {
    id: PropTypes.string.isRequired,
    data: PropTypes.object.isRequired
};



export const QRCodeDocument = ({ id, data }) => {
  return (
    <Document>
      <QRCodePage id={id} data={data} />
    </Document>
  );
}

QRCodeDocument.propTypes = {
    id: PropTypes.string.isRequired,
    data: PropTypes.object.isRequired
};

