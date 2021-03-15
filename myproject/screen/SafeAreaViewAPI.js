import React from "react";
import { StyleSheet, Text, SafeAreaView } from "react-native";

export default function SafeAreaViewAPI() {
	return (
		<SafeAreaView style={styles.container}>
			<Text>Hello React Native</Text>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "dodgerblue",
	},
});
