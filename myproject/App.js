import React, { useState } from "react";
import {
	StyleSheet,
	Text,
	View,
	Image,
	TextInput,
	Button,
	Alert,
	ScrollView,
	SafeAreaView,
} from "react-native";
import ICON from "./assets/react-icon.png";

export default function App() {
	const [todoList, setTodoList] = useState([
		"Read books",
		"Listen to music",
		"Play the piano",
	]);
	const [todo, setTodo] = useState("");

	function onHandlePress() {
		setTodoList([...todoList, todo]);
		setTodo("");
		Alert.alert("Đã thêm " + todo);
	}

	return (
		<ScrollView style={styles.container}>
			<SafeAreaView>
				{/* Header */}
				<View style={styles.header}>
					<Image style={styles.headerLogo} source={ICON} />
					<Text style={styles.headerTitle}>React-Native</Text>
				</View>

				{/* Main */}
				<View style={styles.main}>
					<Text style={styles.mainTitle}>Todoes</Text>
					<TextInput
						style={styles.mainInput}
						placeholder="Những điều cần làm"
						value={todo}
						onChangeText={(text) => setTodo(text)}
					/>
					<Button
						title="ADD"
						color="#007AFF"
						onPress={() => onHandlePress()}
					/>
				</View>

				{/*Todoes */}
				<View style={styles.todoes}>
					{todoList.map((item, index) => (
						<Text style={styles.todoesText} key={index}>
							+ {item}
						</Text>
					))}
				</View>
			</SafeAreaView>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		paddingTop: 20,
		paddingBottom: 20,
	},
	header: {
		alignItems: "center",
	},
	headerLogo: {
		width: 70,
		height: 70,
	},
	headerTitle: {
		fontSize: 24,
		color: "#007AFF",
		textAlign: "center",
		marginBottom: 50,
	},
	main: {
		paddingLeft: 20,
		paddingRight: 20,
		marginBottom: 30,
	},
	mainTitle: {
		fontSize: 30,
		color: "red",
		textAlign: "center",
		marginBottom: 20,
	},
	mainInput: {
		height: 40,
		borderColor: "gray",
		borderWidth: 2,
		borderRadius: 30,
		paddingLeft: 10,
		paddingRight: 10,
	},
	todoes: {
		alignItems: "center",
	},
	todoesText: {
		fontSize: 24,
	},
});
