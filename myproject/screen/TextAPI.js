import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function TextAPI() {
	return (
		<View style={styles.container}>
			<Text>
				React Native Tutorial for Beginners - Learn to build an amazing
				React Native app for iOS & Android.
			</Text>
			<Text numberOfLines={1}>
				React Native Tutorial for Beginners - Learn to build an amazing
				React Native app for iOS & Android.
			</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		paddingLeft: 20,
		paddingRight: 20,
		backgroundColor: "gold",
	},
});
