import React from "react";
import {
	Text,
	View,
	SafeAreaView,
	Image,
	TouchableOpacity,
} from "react-native";
import tailwind from "tailwind-rn";
import Icon from "react-native-vector-icons/AntDesign";

export default function Login() {
	return (
		<SafeAreaView
			style={{
				flex: 1,
				backgroundColor: "#fff",
				justifyContent: "center",
				alignItems: "center",
				paddingHorizontal: 20,
			}}
		>
			<View
				style={{
					flex: 1,
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<Image
					source={require("../assets/images/bicycle.jpg")}
					style={{
						height: 100,
						width: 100,
						borderRadius: 50,
						transform: [{ rotate: "45deg" }],
					}}
				/>

				<Text
					style={{
						marginTop: 20,
						fontSize: 30,
					}}
				>
					Welcome to
				</Text>

				<Text
					style={{
						marginTop: 10,
						fontSize: 40,
						fontWeight: "bold",
					}}
				>
					Power Bike Shop
				</Text>

				<View
					style={{
						flex: 1,
						flexDirection: "column",
						justifyContent: "center",
						alignItems: "center",
						marginTop: 20,
						paddingHorizontal: 20,
					}}
				>
					<TouchableOpacity
						style={{
							backgroundColor: "#f5f5f5",
							width: "100%",
							flexDirection: "row",
							justifyContent: "center",
							alignItems: "center",
							borderRadius: 20,
							paddingVertical: 10,
						}}
					>
						<View
							style={{
								flexDirection: "row",
								justifyContent: "center",
								alignItems: "center",
							}}
						>
							<Icon name="google" size={25} color="#900" />
							<Text style={tailwind("text-lg font-bold ml-2")}>
								Login with Gmail
							</Text>
						</View>
					</TouchableOpacity>
					<TouchableOpacity
						style={{
							backgroundColor: "#000",
							width: "100%",
							flexDirection: "row",
							justifyContent: "center",
							alignItems: "center",
							borderRadius: 20,
							paddingVertical: 10,
						}}
					>
						<View
							style={{
								flexDirection: "row",
								justifyContent: "center",
							}}
						>
							<Icon name="apple1" size={25} color="#FFFFFF" />
							<Text
								style={tailwind(
									"text-lg font-bold text-white ml-2"
								)}
							>
								Login with Apple
							</Text>
						</View>
					</TouchableOpacity>
					<View
						style={{
							flex: 1,
							flexDirection: "row",
							marginTop: 10,
						}}
					>
						<Text
							style={{
								color: "#8c8c8c",
							}}
						>
							Not a member?
						</Text>
						<Text
							style={{
								fontWeight: "bold",
								color: "#f5f5f5",
							}}
						>
							{" "}
							Sign Up
						</Text>
					</View>
				</View>
			</View>
		</SafeAreaView>
	);
}
