import React from "react";
import { View, StyleSheet } from "react-native";
import AlertAPI from "./screen/AlertAPI";
import ButtonAPI from "./screen/ButtonAPI";
import ImageAPI from "./screen/ImageAPI";
import TouchableAPI from "./screen/TouchableAPI";

export default function App() {
	return (
		<View style={styles.container}>
			<AlertAPI />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
