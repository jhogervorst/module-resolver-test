import React from "react";
import { StyleSheet, View } from "react-native";

import Module from "test/Module";

export default function App() {
	return (
		<View style={styles.container}>
			<Module />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
