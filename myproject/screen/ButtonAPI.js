import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function ButtonAPI() {
	return (
		<View style={styles.container}>
			<Button
				color="tomato"
				title="Click me"
				onPress={() => alert("Click")}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});
