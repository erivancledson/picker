import React, { Component } from 'react';
import { View, StyleSheet, Picker, Text } from 'react-native';

export default class PrimeiroProjeto extends Component {

	constructor(props) {
		super(props);
		this.state = {
			//preco do lanche começa em zero
			lanche:0,
			lanches:[
				{nome:'Coxinha', valor:2},
				{nome:'Lasanha', valor:20},
				{nome:'x-salada', valor:4},
				{nome:'suco', valor:3}
			]
		};
	}

	render() {
          //executa uma funcao para cada itens de lanche
          //v = valor e k de key
		let lanchesItems = this.state.lanches.map((v, k) => {
			//retorna o nome do lanche e a chave
			return <Picker.Item key={k} value={k} label={v.nome} />
		});
		   //selectedValue  = armazena o valor do item que tá selecionado
		   //[this.state.lanche].valor. = lanche é o id e valor = é a descrição
		return (
			<View style={styles.body}>
				<Text style={styles.logo}>Lanchonete da Joana</Text>
				<Picker selectedValue={this.state.lanche} onValueChange={(itemValue, itemIndex) => this.setState({lanche:itemValue})}>
					{lanchesItems}
				</Picker>
				
				<Text style={styles.texto}>R$ {this.state.lanches[this.state.lanche].valor.toFixed(2)}</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	body:{
		paddingTop:20,
		backgroundColor:'#4169E1',
		flex:1
	},
	logo:{
		fontSize:30,
		textAlign:'center',
		marginBottom:20,
		color: '#FFFFFF'
	},
	texto:{
		fontSize:26,
		textAlign:'center',
		marginTop:20,
		color: '#FFFFFF'
	}
});















