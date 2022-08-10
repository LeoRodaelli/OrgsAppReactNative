import { StyleSheet, TouchableOpacity, Button } from "react-native";
import mock from '../mocks/cesta'
import Texto from "./Texto";

export default function Botao() {

    return <>
        <TouchableOpacity style={styles.botao}>
            <Texto style={styles.botaoTexto}>{mock.detalhes.botao}</Texto>
        </TouchableOpacity>
    </>

}

const styles = StyleSheet.create({
    botao: {
        marginTop: 16,
        backgroundColor: "#2A9F85",
        paddingVertical: 16,
        borderRadius: 7,
    },
    botaoTexto: {
        textAlign: "center",
        color: "#FFFFFF",
        fontSize: 16,
        lineHeight: 26,
        fontWeight: "bold",
    },
});