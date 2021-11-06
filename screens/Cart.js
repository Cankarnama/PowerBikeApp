import React, { useState } from "react";
import {
	Text,
	View,
	SafeAreaView,
	Image,
	TouchableOpacity,
} from "react-native";
import tailwind from "tailwind-rn";
import IonIcon from "react-native-vector-icons/Ionicons";

const Subtotal = () => {
	return (
		<View
			style={{
				borderRadius: 20,
				backgroundColor: "#fafafa",
				marginTop: 10,
				marginBottom: 10,
				padding: 10,
				flex: 1,
				flexDirection: "column",
			}}
		>
			<View
				style={{
					flex: 1,
					flexDirection: "row",
					justifyContent: "space-between",
				}}
			>
				<Text
					style={{
						fontSize: 18,
						fontWeight: "bold",
						color: "#000",
					}}
				>
					Subtotal
				</Text>
				<View
					style={{
						flex: 1,
						flexDirection: "row",
					}}
				>
					<Text
						style={{
							fontSize: 18,
							fontWeight: "bold",
							color: "yellow",
						}}
					>
						$
					</Text>
					<Text
						style={{
							fontSize: 18,
							fontWeight: "bold",
							color: "#000",
						}}
					>
						{" "}
						3,400.00
					</Text>
				</View>
			</View>
			<View
				style={{
					flex: 1,
					flexDirection: "row",
					justifyContent: "space-between",
					marginTop: 10,
				}}
			>
				<Text
					style={{
						fontSize: 18,
						fontWeight: "bold",
						color: "#000",
					}}
				>
					Shipping
				</Text>
				<View
					style={{
						flex: 1,
						flexDirection: "row",
					}}
				>
					<Text
						style={{
							fontSize: 18,
							fontWeight: "bold",
							color: "yellow",
						}}
					>
						$
					</Text>
					<Text
						style={{
							fontSize: 18,
							fontWeight: "bold",
							color: "#000",
						}}
					>
						{" "}
						400.00
					</Text>
				</View>
			</View>
			<View
				style={[{ height: 1, overflow: "hidden", marginVertical: 15 }]}
			>
				<View
					style={[
						{
							height: 2,
							borderWidth: 1,
							borderColor: "black",
							borderStyle: "dashed",
						},
					]}
				></View>
			</View>
			<View
				style={{
					flex: 1,
					flexDirection: "row",
					justifyContent: "space-between",
				}}
			>
				<Text
					style={{
						fontSize: 18,
						fontWeight: "bold",
						color: "#000",
					}}
				>
					Total
				</Text>
				<View
					style={{
						flex: 1,
						flexDirection: "row",
					}}
				>
					<Text
						style={{
							fontSize: 18,
							fontWeight: "bold",
							color: "yellow",
						}}
					>
						$
					</Text>
					<Text
						style={{
							fontSize: 18,
							fontWeight: "bold",
							color: "#000",
						}}
					>
						{" "}
						3,800.00
					</Text>
				</View>
			</View>
		</View>
	);
};

const BicycleCard = () => {
	const [amount, setAmount] = useState(1);

	return (
		<View
			style={{
				// ...tailwind("rounded-xl flex flex-row items-center mb-4"),
				borderRadius: 20,
				backgroundColor: "#fafafa",
				marginBottom: 10,
				flex: 1,
				flexDirection: "row",
				alignItems: "center",
			}}
		>
			<View
				style={{
					flex: 1,
					flexDirection: "row",
					justifyContent: "space-between",
					alignItems: "center",
					borderRadius: 20,
					backgroundColor: "#fafafa",
				}}
			>
				<View
					style={{
						flex: 1,
						flexDirection: "row",
					}}
				>
					<View
						style={{
							borderRadius: 20,
							backgroundColor: "#fafafa",
							marginRight: 10,
						}}
					>
						<Image
							source={require("../assets/images/bicycle.png")}
							style={{
								width: 40,
								height: 40,
							}}
						/>
					</View>

					<View
						style={{
							flex: 1,
							flexDirection: "column",
							justifyContent: "space-between",
							marginLeft: 10,
						}}
					>
						<Text
							style={{
								fontSize: 18,
								fontWeight: "bold",
								color: "#000",
							}}
						>
							Pinarello Bike
						</Text>
						<Text
							style={{
								fontSize: 14,
								fontWeight: "bold",
								color: "#000",
							}}
						>
							Mountain Bike
						</Text>
						<View
							style={{
								flex: 1,
								flexDirection: "row",
							}}
						>
							<Text
								style={{
									fontSize: 18,
									fontWeight: "bold",
									color: "yellow",
								}}
							>
								$
							</Text>
							<Text
								style={{
									fontSize: 18,
									fontWeight: "bold",
									color: "#000",
								}}
							>
								{" "}
								{Number(amount * 1200).toFixed(2)}
							</Text>
						</View>
					</View>
				</View>

				<View
					style={{
						flex: 1,
						flexDirection: "column",
						justifyContent: "space-between",
						alignItems: "flex-end",
					}}
				>
					<IonIcon name="ios-trash" color="orange" size={20} />
					<View
						style={{
							flex: 1,
							flexDirection: "row",
							alignItems: "center",
						}}
					>
						<TouchableOpacity
							style={{
								width: 30,
								height: 30,
								borderRadius: "100%",
								backgroundColor: "black",
								justifyContent: "center",
								alignItems: "center",
							}}
							onPress={() => {
								if (amount > 0) setAmount(amount - 1);
							}}
						>
							<Text
								style={{
									color: "white",
									fontWeight: "bold",
								}}
							>
								-
							</Text>
						</TouchableOpacity>
						<Text
							style={{
								fontSize: 20,
								fontWeight: "bold",
								marginHorizontal: 10,
								color: "black",
							}}
						>
							{amount}
						</Text>
						<TouchableOpacity
							style={{
								borderRadius: "100%",
								borderWidth: 1,
								borderColor: "black",
								borderStyle: "solid",

								backgroundColor: "black",
								padding: 5,

								width: 30,
								height: 30,

								alignItems: "center",
								justifyContent: "center",
							}}
							onPress={() => {
								setAmount(amount + 1);
							}}
						>
							<Text
								style={{
									fontSize: 20,
									fontWeight: "bold",
									color: "white",
								}}
							>
								+
							</Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		</View>
	);
};

export default function Cart() {
	return (
		<SafeAreaView
			style={{
				height: "100%",
				width: "100%",
				backgroundColor: "#fff",
				flex: 1,
			}}
		>
			<View
				style={{
					paddingHorizontal: 20,
				}}
			>
				<View
					style={{
						flex: 1,
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center",
					}}
				>
					<IonIcon name="ios-arrow-back-outline" size={30} />
					<View
						style={{
							flex: 1,
							flexDirection: "column",
							justifyContent: "center",
						}}
					>
						<Text
							style={{
								fontSize: 30,
								fontWeight: "bold",
							}}
						>
							Cart list
						</Text>
						<Text
							style={{
								fontSize: 12,
								color: "#8E8E93",
								fontWeight: "bold",
							}}
						>
							(3 items)
						</Text>
					</View>
					<View
						style={{
							flex: 1,
							flexDirection: "row",
						}}
					>
						<Text style={tailwind("text-white")}>BLANK</Text>
					</View>
				</View>
				<View
					style={{
						flex: 1,
						flexDirection: "column",
						marginTop: 3,
					}}
				>
					<BicycleCard />
					<BicycleCard />
					<BicycleCard />
				</View>
				<Subtotal />
				<TouchableOpacity
					style={{
						backgroundColor: "#ffc107",
						borderRadius: 10,
						padding: 10,
						marginTop: 10,
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					<Text
						style={{
							color: "white",
							fontWeight: "bold",
							fontSize: 20,
						}}
					>
						Proceed to Checkout
					</Text>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	);
}
