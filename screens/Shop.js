import React from "react";
import {
	Text,
	View,
	SafeAreaView,
	Image,
	TouchableOpacity,
	FlatList,
} from "react-native";
import tailwind from "tailwind-rn";
import IonIcon from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import AntDesign from "react-native-vector-icons/AntDesign";

const data = [
	{ title: "All" },
	{ title: "Roadbike" },
	{ title: "Mountain" },
	{ title: "Urban" },
];

const Category = ({ item }) => {
	return (
		<TouchableOpacity
			style={{
				padding: 10,
				marginRight: 10,
				borderRadius: 10,
				padingHorizontal: 5,
				backgroundColor: "gray",
			}}
		>
			<Text>{item.title}</Text>
		</TouchableOpacity>
	);
};

const BicycleCard = () => {
	return (
		<TouchableOpacity
			style={{
				width: "48%",
				backgroundColor: "gray",
				borderRadius: 10,
				padding: 10,
				alignItems: "center",
			}}
		>
			<View
				style={{
					width: "100%",
					flex: 1,
					alignItems: "end",
				}}
			>
				<View
					style={{
						backgroundColor: "white",
						padding: 1,
						borderRadius: "100%",
					}}
				>
					<AntDesign name="hearto" color="orange" />
				</View>
			</View>
			<Image
				source={require("../assets/images/bicycle.png")}
				style={{ width: 100, height: 100 }}
			/>
			<View style={{ marginTop: 5, alignItems: "center" }}>
				<Text style={{ fontSize: 20 }}>Mountain Bike</Text>
				<View style={{ flex: 1, flexDirection: "row" }}>
					<Text style={{ fontSize: 20, fontWeight: "bold" }}>$</Text>
					<Text style={{ fontSize: 20, fontWeight: "bold" }}>
						1,200.00
					</Text>
				</View>
			</View>
		</TouchableOpacity>
	);
};

export default function Shop() {
	return (
		<SafeAreaView style={{ width: "100%", height: "100%", flex: 1 }}>
			<View style={{ paddingHorizontal: 5 }}>
				<View
					style={{
						// tailwind( "flex flex-row justify-between items-center"
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center",
					}}
				>
					<IonIcon name="ios-menu-outline" size={30} />
					<FontAwesome name="motorcycle" size={30} />
					<View
						style={{
							flex: 1,
							flexDirection: "row",
						}}
					>
						<AntDesign name="search1" size={25} color="black" />
						<IonIcon name="notifications-outline" size={25} />
					</View>
				</View>
				<View
					style={{
						// tailwind("mt-3 flex flex-row items-end")
						marginTop: 5,
						flexDirection: "row",
						alignItems: "flex-end",
					}}
				>
					<Text
						style={{
							// tailwind("text-gray-500 text-2xl")
							color: "gray",
							fontSize: 20,
						}}
					>
						The World's
					</Text>
					<Text
						style={{
							// tailwind("text-yellow-500 text-3xl font-bold")
							color: "orange",
							fontSize: 30,
							fontWeight: "bold",
						}}
					>
						{" "}
						Best Bike
					</Text>
				</View>
				<View
					style={{
						// convert this tailwind style to a stylesheet
						// tailwind("mt-3 w-full flex flex-col")
						marginTop: 3,
						width: "100%",
						flex: 1,
						flexDirection: "column",
					}}
				>
					<Text
						style={{
							fontSize: 20,
							fontWeight: "bold",
						}}
					>
						Categories
					</Text>
					<FlatList
						horizontal
						data={data}
						renderItem={Category}
						keyExtractor={(item) => item.title}
						showsHorizontalScrollIndicator={false}
						style={{
							marginTop: 2,
						}}
					/>
				</View>
				<View
					style={{
						marginTop: 3,
						width: "100%",
					}}
				>
					<FlatList
						data={data}
						renderItem={BicycleCard}
						keyExtractor={(item) => item.title}
						style={{
							marginTop: 2,
						}}
						numColumns={2}
						ItemSeparatorComponent={() => (
							<View style={{ height: 14 }} />
						)}
						columnWrapperStyle={{ justifyContent: "space-between" }}
					/>
				</View>
			</View>
		</SafeAreaView>
	);
}
