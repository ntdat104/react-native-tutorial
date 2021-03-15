import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default function ImageAPI() {
	return (
		<View style={styles.container}>
			<Image source={require("../assets/favicon.png")} />
			<Image
				blurRadius={0}
				source={{
					width: 200,
					height: 300,
					uri: "https://picsum.photos/200/300",
				}}
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
