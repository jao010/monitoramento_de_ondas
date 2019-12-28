import React, { Component } from 'react';
import {
    Text,
    View,
    Picker
} from 'react-native';

import SoapRequest from 'react-native-soap-request';
import Estado from '../../Models/estado';
import CardOndas from './cardOndas';

export default class ViewOndas extends Component {
    static navigationOptions = {
        title: 'MostrarOndas'
    };

    constructor(props) {
        super(props);

        this.state = {
            estado: {},
            regiao: 2380,
            regiaoNome: String
        };
    }

    componentDidMount() {
        this.chamarEstado(this.state.regiao);
    }
    

    async chamarEstado(id) {
        const soapRequest = new SoapRequest({
            requestURL: `http://servicos.cptec.inpe.br/XML/cidade/${id}/dia/0/ondas.xml`
        });
        soapRequest.createRequest({
            'soap:ProductRegistrationRequest': {
                attributes: {
                    'xmlns:soap': 'http://soap.acme.com/2.0/soap-access-services',
                    'xmlns:cmn': 'http://soap.acme.com/2.0/soap-common-types'
                }
            }
        });
        const response = await soapRequest.sendRequest();
        console.log(response.cidade);
        this.montarClasseEstados(response);
    }

    montarClasseEstados(response) {
        const nome = response.cidade.nome[0];
        const uf = response.cidade.uf[0];
        const atualizacao = response.cidade.atualizacao[0];
        const manha = response.cidade.manha[0].agitacao;
        const tarde = response.cidade.tarde[0].agitacao;
        const noite = response.cidade.noite[0].agitacao;
        const estado = new Estado(nome, uf, atualizacao, manha, tarde, noite);
        this.setState({
            estado
        });
    }

    ViewInfo(regiao) {
        if (regiao === null) {
            return (<Text>Escolha uma opção de Região</Text>);
        }
        return (
            <CardOndas item={this.state.estado} />
        );
    }

    render() {
        return (
            <View>
                <Picker
                    selectedValue={this.state.regiao}
                    style={{ height: 50, width: 200 }}
                    onValueChange={(value) => {
                        this.setState({ regiao: value, regiaoNome: value });
                        this.chamarEstado(value);
                    }
                    }
                >
                    <Picker.Item label="Ilhabela" value="2380" />
                    <Picker.Item label="Florianópolis" value="228" />
                    <Picker.Item label="Maraú" value="3127" />
                    <Picker.Item label="Ilha Grande" value="5821" />
                    <Picker.Item label="São Miguel dos Milagres" value="5016" />
                    <Picker.Item label="Porto Seguro" value="4154" />
                    <Picker.Item label="Fernando de Noronha" value="1991" />
                </Picker>

                {this.ViewInfo(this.state.regiao)}
            </View>
        );
    }
}
