import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native'

import { carregaTopo } from '../../../services/carregaDados';
import logo from '../../../assetsHome/logo.png';

class TopoHome extends React.Component {

    state = {
        topo: {
            welcome: '',
            subtitle: '',
        }
    }

    atualizaTopo() {
        const retorno = carregaTopo();
        this.setState({ topo: retorno })      
    }

    componentDidMount() {
        this.atualizaTopo();
    }

    render() {
        return <View style={styles.topo}>
            <Image source={logo} style={styles.imagem} />
            <Text style={styles.welcome}>{ this.state.topo.welcome }</Text>
            <Text style={styles.subtitle}>{ this.state.topo.subtitle }</Text>
        </View> 
    } 
}

const styles = StyleSheet.create({
    topo: {
        backgroundColor: "#F6F6F6",
        padding: 16,
    },
    imagem: {
        width: 70,
        height: 28,
    },
    welcome: {
        marginTop: 24,
        fontSize: 26,
        lineWeight: 42,
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: 16,
        lineHeight: 26,
    }
});

export default TopoHome;