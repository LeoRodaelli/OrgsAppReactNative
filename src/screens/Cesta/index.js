import React from "react";
import { Image, StyleSheet, Dimensions, Text, View, FlatList } from 'react-native';

import Topo from "./components/Topo";
import Detalhes from "./components/Detalhes";
import Item from "./components/Item";
import Texto from "../../components/Texto";

export default function Cesta({ topo, detalhes, itens }) {
    return <>
        <FlatList
            data={itens.lista}
            renderItem={Item}
            keyExtractor={({ nome }) => nome }
            ListHeaderComponent={() => {
                return <>
                    <Topo {...topo} />
                    <View style={styles.cesta}>
                        <Detalhes {...detalhes} />
                        <Texto style={styles.title}>{ itens.title }</Texto>
                    </View>
                </>
            }}
        /> 
    </>
}

const styles = StyleSheet.create({
    title: {
        color: "#464646",
        fontWeight: "bold",
        marginTop: 32,
        marginBottom: 8,
        fontSize: 20,
        lineHeight: 32,
    },
    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
});