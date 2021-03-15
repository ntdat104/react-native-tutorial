import React from "react";
import {
	StyleSheet,
	Text,
	View,
	TouchableWithoutFeedback,
	TouchableOpacity,
	TouchableHighlight,
} from "react-native";

export default function TouchableAPI() {
	return (
		<View style={styles.container}>
			<TouchableWithoutFeedback>
				<Text style={{ backgroundColor: "gold", padding: 20 }}>
					TouchableWithoutFeedback
				</Text>
			</TouchableWithoutFeedback>
			<TouchableOpacity>
				<Text style={{ backgroundColor: "tomato", padding: 20 }}>
					TouchableOpacity
				</Text>
			</TouchableOpacity>
			<TouchableHighlight>
				<Text style={{ backgroundColor: "dodgerblue", padding: 20 }}>
					TouchableHighlight
				</Text>
			</TouchableHighlight>
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
