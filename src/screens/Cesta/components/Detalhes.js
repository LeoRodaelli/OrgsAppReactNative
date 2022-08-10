import React from "react";
import { View, Image, StyleSheet } from "react-native";
import Botao from "../../../components/Botao";

import Texto from "../../../components/Texto";


export default function Detalhes({ name, logoFazenda, nomeFazenda, descricao, preco, botao }) {
    return <>
        <Texto style={styles.name}>{ name }</Texto>
        <View style={styles.fazenda}>
            <Image source={logoFazenda} style={styles.imagemFazenda}/>
            <Texto style={styles.nomeFazenda}>{ nomeFazenda }</Texto>
        </View>
        <Texto style={styles.descricao}>{ descricao }</Texto>
        <Texto style={styles.preco}>{ preco }</Texto>

        <Botao onPress={() => {}} >
            <Texto >{ botao }</Texto> 
        </Botao> 
    </>
}

const styles = StyleSheet.create({
    name: {
        color: "#464646",
        fontSize: 26,
        lineHeight: 42,
        fontWeight: "bold"
    },
    fazenda: {
        flexDirection: "row",
        paddingVertical: 12,
    },
    imagemFazenda: {
        width: 32,
        height: 32,
    },
    nomeFazenda: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 12,
    },
    descricao: {
        color: "#A3A3A3",
        fontSize: 16,
        lineHeight: 26
    },
    preco: {
        color: "#2A9F85",
        fontWeight: "bold",
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8,
    },
});