import React from "react";
import { SafeAreaView, View, ScrollView, Image, Text, TextInput, TouchableOpacity } from "react-native";


export default function UserpageUser({ navigation }) {
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
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<View
					style={{
						marginBottom: 5,
					}}
				>
					<Image
						source={require('../assets/ShopImage/LiuYangBackground.jpg')}
						resizeMode="cover"
						style={{
							height: 150,
							aspectRatio: 16 / 6,
						}}
					/>
					<TouchableOpacity onPress={() => navigation.navigate('loginUser')}>
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
							source={require('../assets/ShopImage/LiuYangIcon.jpg')}
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
						justifyContent: "center"
					}}
				>
					<Text
						style={{
							color: "#000000",
							fontSize: 23,
							textAlign: "center",
							marginRight: 5,
						}}
					>
						{"Liu Ying"}
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
						justifyContent: "center",
						alignItems: "center",
						marginHorizontal: 20,
					}}
				>
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
						justifyContent: "center",
						alignItems: "center",
						marginBottom: 5,
						marginHorizontal: 47,
					}}
				>
					<Text
						style={{
							color: "#FF0000",
							fontSize: 20,
						}}
					>
						{"Bookmarks"}
					</Text>
				</View>
				<View
					style={{
						flexDirection: "row",
						justifyContent: "center",
						alignItems: "center",
						marginBottom: 10,
						marginHorizontal: 23,
					}}
				>
					<View
						style={{
							width: 159,
							height: 1,
							backgroundColor: "#FF0000",
						}}
					/>
				</View>
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
						placeholder="Search your bookmarks..."
						placeholderTextColor="#727272"
					/>
				</View>
			</View>
			<ScrollView
				style={{
					flex: 1,
					backgroundColor: "#F3F3F3",
					paddingHorizontal: 20,
				}}
			>
				<View
					style={{
						flexDirection: 'row',
						flexWrap: 'wrap',
						justifyContent: 'space-between',
					}}
				>
					<TouchableOpacity
						style={{
							width: '48%',
							backgroundColor: "#D9D9D9",
							borderRadius: 10,
							marginBottom: 20,
							padding: 10,
						}}
						onPress={() => navigation.navigate('ShopPageItemTemplate')}
					>
						<Image
							source={require('../assets/ShopImage/apple.jpg')}
							resizeMode="stretch"
							style={{
								width: '100%',
								height: 140,
								borderRadius: 10,
								marginBottom: 10,
							}}
						/>
						<Text
							style={{
								color: "#000000",
								fontSize: 14,
								textAlign: 'center',
							}}
						>
							{"Apple (5pcs)"}
						</Text>
					</TouchableOpacity>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};
