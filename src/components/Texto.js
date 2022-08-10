import { StyleSheet, Text } from "react-native";


export default function Texto({ children, style }) {
    let estilo = styles.texto;

    if (style?.fontWeight === 'bold') {
        estilo = styles.textoEmNegrito;
    }
    return <Text style={[style, estilo]}>{ children }</Text>
}

const styles = StyleSheet.create({
    texto: {
        fontFamily: "MontserratRegular",
        fontWeight: "normal",       
    },
    textoEmNegrito: {
        fontFamily: "MontserratBold",
        fontWeight: "normal",
    }
});