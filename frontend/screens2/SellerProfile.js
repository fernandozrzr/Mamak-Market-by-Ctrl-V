import React, { useState, useEffect } from "react";
import { SafeAreaView, View, ScrollView, Image, Text, TextInput, TouchableOpacity } from "react-native";
import SellerProfileDetails from "../components/SellerProfileDetails";
import { useListsContext } from "../hooks/useListsContext";


export default function SellerProfile({ navigation, route }) {
	const years = [2024, 2023, 2022, 2021, 2020];
	const [selectedTab, setSelectedTab] = useState("listings");
	const [selectedYear, setSelectedYear] = useState(years[0]);

	const { lists, dispatch } = useListsContext()
	const user = 'Qiong Provisions';

	useEffect(() => {
		const fetchMyItems = async () => {
			try {
				const response = await fetch(`http://192.168.18.17:4000/api/listing/search?user=${encodeURIComponent(user)}`);
				const json = await response.json();
				if (response.ok) {

					dispatch({ type: 'SET_LISTS', payload: json })
					console.log(json)
				}

			} catch (error) {
				console.error('Error fetching listings:', error);
			}
		};

		fetchMyItems();
	}, []);


	return (
		<SafeAreaView
			style={{
				flex: 1,
				backgroundColor: "#FFFFFF",
			}}
		>
			<View
				style={{
					backgroundColor: "#F3F3F3",
					paddingBottom: 21,
				}}
			>
				<View
					style={{
						marginBottom: 5,
					}}
				>
					<Image
						source={require('../assets/ShopImage/QiongProvisionsImage.jpg')}
						resizeMode="cover"
						style={{
							height: 150,
							aspectRatio: 16 / 6,
						}}
					/>
					<TouchableOpacity onPress={() => navigation.navigate('loginBusinessOwner')}>
						<Image
							source={require('../assets/ShopImage/logoutIcon.png')}
							style={{
								width: 19,
								height: 19,
								marginTop: 10,
								marginLeft: 360
							}}
							resizeMode="cover"
						/>
					</TouchableOpacity>
					<View
						style={{
							width: 140,
							height: 140,
							borderRadius: 140 / 2,
							marginTop: -110,
							marginLeft: 125,
							overflow: 'hidden',
						}}
					>
						<Image
							source={require('../assets/ShopImage/QiongProvisionIcon.jpg')}
							style={{
								width: '100%',
								height: '100%',
								resizeMode: "cover",
							}}
						/>
					</View>

				</View>
				<View
					style={{
						flexDirection: "row",
						alignItems: "center",
						marginBottom: 11,
						marginHorizontal: 58,
						justifyContent: "center",
					}}
				>
					<Text
						style={{
							color: "#000000",
							fontSize: 23,
							textAlign: "center",
							marginRight: 20,
						}}
					>
						{"Qiong Provisions"}
					</Text>
					<Image
						source={require('../assets/ShopImage/tickIcon.png')}
						style={{
							width: 19,
							height: 19,
						}}
						resizeMode="cover"
					/>
				</View>
				<View
					style={{
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center",
						marginHorizontal: 20,
					}}
				>
					<View
						style={{
							width: 164,
							alignItems: "center",
							backgroundColor: "#D9D9D9",
							borderRadius: 15,
							paddingVertical: 3,
							paddingHorizontal: 16,
						}}
					>
						<TouchableOpacity onPress={() => navigation.navigate('AddListing')}>
							<Text
								style={{
									color: "#000000",
									fontSize: 20,
								}}
							>
								{"+  Add listing"}
							</Text>
						</TouchableOpacity>
					</View>
					<View
						style={{
							width: 164,
							flexDirection: "row",
							alignItems: "center",
							backgroundColor: "#B1D9FF",
							borderRadius: 15,
							paddingVertical: 3,
							paddingHorizontal: 16,
						}}
					>
						<Image
							source={require('../assets/ShopImage/editIcon.png')}
							style={{
								width: 19,
								height: 19,
							}}
							resizeMode="cover"
						/>
						<Text
							style={{
								color: "#000000",
								fontSize: 20,
								flex: 1,
								marginLeft: 12,
							}}
						>
							{"Edit profile"}
						</Text>
					</View>
				</View>
			</View>
			<View
				style={{
					backgroundColor: "#F3F3F3",
					paddingVertical: 3,
				}}
			>
				<View
					style={{
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center",
						marginBottom: 9,
						marginHorizontal: 47,
					}}
				>
					<TouchableOpacity onPress={() => setSelectedTab("listings")}>
						<Text
							style={{
								color: selectedTab === "listings" ? "#FF0000" : "#000000",
								fontSize: 20,
							}}
						>
							{"Your Listings"}
						</Text>
					</TouchableOpacity>
					<TouchableOpacity onPress={() => setSelectedTab("sales")}>
						<Text
							style={{
								color: selectedTab === "sales" ? "#FF0000" : "#000000",
								fontSize: 20,
							}}
						>
							{"Sales Result"}
						</Text>
					</TouchableOpacity>
				</View>
				<View
					style={{
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center",
						marginBottom: 10,
						marginHorizontal: 23,
					}}
				>
					<View
						style={{
							width: 159,
							height: 1,
							backgroundColor: selectedTab === "listings" ? "#FF0000" : "#000000",
						}}
					/>
					<View
						style={{
							width: 159,
							height: 1,
							backgroundColor: selectedTab === "sales" ? "#FF0000" : "#000000",
						}}
					/>
				</View>
				{selectedTab === "listings" && (
					<View
						style={{
							flexDirection: "row",
							alignItems: "center",
							backgroundColor: "#D9D9D9",
							borderRadius: 8,
							paddingVertical: 6,
							paddingHorizontal: 12,
							marginBottom: 20,
							marginHorizontal: 20,
						}}
					>
						<View
							style={{
								width: 14,
								marginRight: 15,
							}}
						>
							<Image
								source={require('../assets/ShopImage/search-icon.png')}
								style={{
									width: 16,
									height: 16,
								}}
								resizeMode="cover"
							/>
						</View>
						<TextInput
							style={{
								color: "#727272",
								fontSize: 15,
								flex: 1,
							}}
							placeholder="Search your listings..."
							placeholderTextColor="#727272"
						/>
					</View>
				)}
			</View>
			{/* ScrollView with conditionally rendered content */}
			<ScrollView
				style={{
					flex: 1,
					backgroundColor: "#F3F3F3",
					paddingHorizontal: 20,
				}}
			>
				{selectedTab === "listings" && (
					<View
						style={{
							flexDirection: 'row',
							flexWrap: 'wrap',
							justifyContent: 'space-between',
						}}
					>
						{lists && lists.map((item) =>
							< SellerProfileDetails key={item._id} item={item} navigation={navigation} />
						)}

					</View>
				)}
				{selectedTab === "sales" && (
					<View
						style={{
							flexDirection: "row",
							justifyContent: "space-between",
							alignItems: "center",
							marginBottom: 26,
							marginLeft: 10,
						}}
					>
						<Text
							style={{
								color: "#000000",
								fontSize: 13,
							}}
						>
							{"Year: "}
						</Text>
						{/* Year buttons */}
						{years.map((year) => (
							<TouchableOpacity
								key={year}
								onPress={() => setSelectedYear(year)}
								style={{
									width: 50,
									alignItems: "center",
									backgroundColor: selectedYear === year ? "#A52A2A" : "#D9D9D9",
									borderRadius: 10,
									paddingVertical: 7,
									marginRight: 5,
								}}
							>
								<Text
									style={{
										color: "#000000",
										fontSize: 13,
									}}
								>
									{year}
								</Text>
							</TouchableOpacity>
						))}
					</View>
				)}
				{/* Big box below */}
				{selectedTab === "sales" && (
					<View
						style={{
							flexDirection: 'row',
							flexWrap: 'wrap',
							justifyContent: 'space-between',
						}}
					>
						<View
							style={{
								width: '100%',
								height: 300,
								backgroundColor: "#D9D9D9",
								borderRadius: 10,
								marginBottom: 20,
								padding: 10,
							}}
						>
							{/* Content based on selected year */}
							<Text>{selectedYear ? `Content for ${selectedYear}` : "Please select a year"}</Text>
						</View>
					</View>
				)}
			</ScrollView>
		</SafeAreaView>
	);
};
