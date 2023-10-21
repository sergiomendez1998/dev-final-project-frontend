import { object, string } from "prop-types";
import {
    Document,
    Font,
    Page,
    StyleSheet,
    Text,
    View,
} from "@react-pdf/renderer";

export const AnalysisPDF = ({ data, documento, observations }) => (
    <Document>
        <Page style={styles.body}>
            <Text style={styles.title}>Documento de Analisis</Text>
            <Text style={styles.title}>Datos Generales</Text>
            <View style={styles.items}>
                {Object.entries(data.Encabezado).map(([key, value]) => {
                    return (
                        <View key={key} style={styles.container}>
                            <Text style={styles.textBold}>{key}</Text>
                            <Text style={styles.text}>{value}</Text>
                        </View>
                    );
                })}
            </View>
            <View style={styles.content}>
                <Text style={styles.title}>Muestra</Text>
                {Object.entries(data.Muestra).map(([key, value]) => {
                    return (
                        <View key={key} style={styles.items}>
                            <Text style={styles.textBold}>{key}</Text>
                            <Text style={styles.text}>{value}</Text>
                        </View>
                    );
                })}
            </View>
            <View style={styles.content}>
                <Text style={styles.title}>Usuario</Text>
                {Object.entries(data["Usuario Externo"]).map(([key, value]) => {
                    return (
                        <View key={key} style={styles.items}>
                            <Text style={styles.textBold}>{key}</Text>
                            <Text style={styles.text}>{value}</Text>
                        </View>
                    );
                })}
            </View>
            <View style={styles.items}>
                <Text style={styles.textBold}>Tipo Documento</Text>
                <Text style={styles.text}>{documento}</Text>
            </View>
            <View>
                <Text style={styles.textBold}>Observaciones</Text>
                <Text style={styles.textjustificate}>{observations}</Text>
            </View>
            <Text
                style={styles.pageNumber}
                render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`}
                fixed
            />
        </Page>
    </Document>
);

Font.register({
    family: "Oswald",
    src: "https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf",
});

const styles = StyleSheet.create({
    body: {
        paddingTop: 35,
        paddingBottom: 65,
        paddingHorizontal: 35,
    },
    title: {
        fontSize: 24,
        textAlign: "center",
        fontFamily: "Oswald",
    },
    items: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    content: {
        flexDirection: "column",
        borderColor: "black",
        borderWidth: 2,
        borderTopLeftRadius: "25%",
        borderTopRightRadius: "25%",
        borderBottomRightRadius: "25%",
        borderBottomLeftRadius: "25%",
        paddingHorizontal: 15,
        paddingVertical: 20,
        marginVertical: 5,
    },
    container: {
        flexDirection: "column",
        justifyContent: "center",
    },
    text: {
        margin: 7,
        fontSize: 14,
        textAlign: "center",
        fontFamily: "Courier",
    },
    textBold: {
        margin: 7,
        fontSize: 14,
        textAlign: "center",
        fontFamily: "Courier-Bold",
    },
    textjustificate: {
        margin: 7,
        fontSize: 14,
        textAlign: "justify",
        fontFamily: "Courier",
    },
    pageNumber: {
        position: "absolute",
        fontSize: 12,
        bottom: 30,
        left: 0,
        right: 0,
        textAlign: "center",
        color: "grey",
    },
});

AnalysisPDF.propTypes = {
    data: object,
    documento: string.isRequired,
    observations: string.isRequired,
};
