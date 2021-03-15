import React from "react";
import { Alert, Button, StyleSheet, Text, View } from "react-native";

export default function AlertAPI() {
	return (
		<View style={styles.container}>
			<Button
				title="Alert.alert"
				onPress={() =>
					Alert.alert("My title", "My message", [
						{
							text: "Đồng ý",
							onPress: () => alert("Bạn vừa ấn đồng ý!"),
						},
						{
							text: "Hủy bỏ",
							onPress: () => alert("Bạn vừa ấn hủy bỏ!"),
						},
					])
				}
			/>
			<Button
				color="tomato"
				title="Alert.prompt"
				onPress={() =>
					Alert.prompt("My title", "My message", (text) =>
						alert(`Bạn vừa nhập ${text}`)
					)
				}
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
