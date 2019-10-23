import React from 'react';
import { StyleSheet, Text, View, Image, Button, Alert } from 'react-native';

export default function App() {
	return (
		// Raiz
		<View style={{ flex: 1 }}>
			{/* Container da imagem */}
			<View style={imgLoja.container}>
				{/* Imagem */}
				<Image resizeMode="contain" style={img.stretch} source={require("./assets/Love-Live.jpg")} />
			</View>
			{/* Container do meio, onde tem o nome e o botão */}
			<View style={cento.container}>
				{/* Nome e descrição da loja */}
				<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
					<Text style={{ fontWeight: 'bold', fontSize: 20 }}>Love Live</Text>
					<Text style={{ fontSize: 10 }}>Lojiha de produtos</Text>
				</View>
				{/* Botão */}
				<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          			<Button title="Comprar produtos" onPress={() => Alert.alert("NÃO, AINDA NÃO!")} />
        		</View>
			</View>
			{/* Container sobre */}
			<View style={sobre.container}>
				<View style={{ flex:1 }}></View>
				<Text style={{ flex:10, justifyContent: 'center' }} >
					Está cansado de dormir só? Enjoou de beber café em uma xicara sem graça? Você gosta de Love Live?
					Temos tudo de que precisa! Somo uma loja especializada em vender produtos relacionados a seu anime favorito!
					Venha nos cohecer!
				</Text>
				<View style={{ flex:1 }}></View>
			</View>
		</View>
	);
}

// Estilo da imagem
const img = StyleSheet.create({
	stretch: {
		width: 470,
		height: 470,
		flex: 1
	}
});
// Estilo do container da imagem
const imgLoja = StyleSheet.create({
	container: {
		flex: 2,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
// Estilo do centro (onde fica o nome e o botão)
const cento = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "row",
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
// Estilo de onde fica o toxto sobre
const sobre = StyleSheet.create({
	container: {
		flex: 2,
		flexDirection: 'row',
		backgroundColor: '#fff',
	},
});