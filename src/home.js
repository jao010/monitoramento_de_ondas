import React, { Component } from 'react';
import {
    Text,
    View,
    Button,
    StyleSheet
} from 'react-native';

export default class Home extends Component {
    static navigationOptions = {
        title: 'Home'
    };

    render() {
        const navigation = this.props.navigation;
        return (
            <View style={styles.viewMain}>
                <Text style={styles.titulo}>
                    Olympus IT
                </Text>
                <Text style={styles.descricao}>
                    O Aplicativo tem o Objetivo de Mostrar o Nível de
                    Velocidade do Vento em alguns litorais.
                    Podendo fazer um filtro para verificar melhor.
                </Text>

                <Button
                    title="Mostrar Ondas"
                    onPress={() => navigation.navigate('MostrarOndas')}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    titulo: {
        fontSize: 22,
        color: 'black',
        margin: 10
    },
    descricao: {
        fontSize: 15,
        color: 'black',
        margin: 10
    },
    viewMain: {
        width: 300,
        height: 500,
        margin: 30
    }
}); 
