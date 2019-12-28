import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet
} from 'react-native';

export default class CardOndas extends Component {

    render() {
        return (
            <View style={styles.viewPrincipal}>

                <Text style={{ fontSize: 18, marginLeft: 5 }}>
                    Infomações da Região selecionada:
                </Text>


                <View style={styles.viewLinha}>
                    <Text style={styles.txtTitle}>
                        Nome:
                    </Text>
                    <Text style={styles.txtDados}>
                        {this.props.item.nome}
                    </Text>
                </View>

                <View style={styles.viewLinha}>
                    <Text style={styles.txtTitle}>
                        Atualização:
                    </Text>
                    <Text style={styles.txtDados}>
                        {this.props.item.atualizacao}
                    </Text>
                </View>

                <View style={styles.viewLinha}>
                    <Text style={styles.txtTitle}>
                        UF:
                    </Text>
                    <Text style={styles.txtDados}>
                        {this.props.item.uf}
                    </Text>
                </View>

                <View style={styles.viewLinha}>
                    <Text style={styles.txtTitle}>
                        Ondas Pela Manhã:
                    </Text>
                    <Text style={styles.txtDados}>
                        {this.props.item.manha}
                    </Text>
                </View>

                <View style={styles.viewLinha}>
                    <Text style={styles.txtTitle}>
                        Ondas Pela Tarde:
                    </Text>
                    <Text style={styles.txtDados}>
                        {this.props.item.tarde}
                    </Text>
                </View>

                <View style={styles.viewLinha}>
                    <Text style={styles.txtTitle}>
                        Ondas Pela Noite:
                    </Text>
                    <Text style={styles.txtDados}>
                        {this.props.item.noite}
                    </Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    viewPrincipal: {
        margin: 10,
        borderWidth: 2,
        borderRadius: 10
    },
    viewLinha:{
        flexDirection: 'row',
        marginLeft: 10
    },
    txtDados: {
        fontSize: 22,
        color: 'black',
        marginLeft: 5,
    },
    txtTitle:{
        fontSize: 22,
        color: 'black',
        fontWeight: 'bold',
    }
});
