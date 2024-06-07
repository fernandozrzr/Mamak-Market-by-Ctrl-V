import React from "react";
import { SafeAreaView, View, ScrollView, Text, Image, ImageBackground, TouchableOpacity } from "react-native";
export default function LoginBusinessOwner({ navigation }) {
	return (
		<SafeAreaView 
            style = {{
                flex: 1,
                backgroundColor: "#FFFFFF",
            }}>
            <ScrollView  
                style = {{
                    flex: 1,
                    backgroundColor: "#DEC7B2",
                    paddingTop: 162,
                    paddingBottom: 183,
                }}>
                <View 
                    style = {{
                        height: 156,
                        // borderColor: "#5E27FD",
                        // borderWidth: 1,
                        marginBottom: 20,
                        marginHorizontal: 117,
                        justifyContent: 'center', // Align image and text in the center vertically
                        alignItems: 'center', // Align image and text in the center horizontally
                    }}>
                    <Image 
                        source={require('C:/Users/ewanh/java2/Mamak-Market-by-Ctrl-V/frontend/assets/AppIcon.jpg')}
                        style={{
                            width: 100, // Adjust width as needed
                            height: 100, // Adjust height as needed
                        }}
                        resizeMode="cover" // or any other resize mode you prefer
                    />
                </View>
                <Text 
                    style = {{
                        color: "#6155AA",
                        fontSize: 36,
                        marginBottom: 32,
                        marginLeft: 75,
                    }}>
                    {"Mamak Market"}
                </Text>
                <View 
                    style = {{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginBottom: 5,
                        marginHorizontal: 88,
                    }}>
                    <TouchableOpacity onPress={() => navigation.navigate('loginUser')}>
                        <Text style={{ color: '#000000', fontSize: 20}}>User</Text>
                    </TouchableOpacity>
                    <Text 
                        style = {{
                            color: "#FF0000",
                            fontSize: 20,
                        }}>
                        {"Seller"}
                    </Text>
                </View>
                <View 
                    style = {{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginBottom: 19,
                        marginHorizontal: 34,
                    }}>
                    <View 
                        style = {{
                            width: 159,
                            height: 1,
                            backgroundColor: "#000000",
                        }}>
                    </View>
                    <View 
                        style = {{
                            width: 159,
                            height: 1,
                            backgroundColor: "#FF0000",
                        }}>
                    </View>
                </View>
                <View
                    style = {{
                        height: 44,
                        backgroundColor: "#F5F5F5",
                        borderRadius: 8,
                        paddingVertical: 13,
                        paddingHorizontal: 15,
                        marginBottom: 9,
                        marginHorizontal: 17,
                    }}>
                <Text 
                    style = {{
                        color: "#9D9D9D",
                        fontSize: 18,
                        marginTop: -4,
                    }}>
                    {"Username"}
                </Text>
                </View>
                <View 
                    style = {{
                        height: 44,
                        backgroundColor: "#F5F5F5",
                        borderRadius: 8,
                        paddingVertical: 11,
                        paddingHorizontal: 16,
                        marginBottom: 22,
                        marginHorizontal: 18,
                    }}>
                    <Text 
                        style = {{
                            color: "#9D9D9D",
                            fontSize: 18,
                            marginTop: -4,
                            marginLeft: -2.5,
                        }}>
                        {"Password"}
                    </Text>
                </View>
                <View 
                    style = {{
                        height: 44,
                        alignItems: "center",
                        backgroundColor: "#4112FF",
                        borderRadius: 8,
                        paddingVertical: 12,
                        marginBottom: 26,
                        marginHorizontal: 18,
                    }}>
                    <Text 
                        style = {{
                            color: "#F5F5F5",
                            fontSize: 19,
                            marginTop: -5,
                        }}>
                        {"Login"}
                    </Text>
                </View>
                <Text 
                    style = {{
                        color: "#4112FF",
                        fontSize: 12,
                        marginBottom: 9,
                        marginLeft: 141,
                    }}>
                    {"Forgotten Password?"}
                </Text>
                <TouchableOpacity onPress={() => navigation.navigate('signupBusinessOwner')}>
                    <Text style={{ color: '#4112FF', fontSize: 12, marginLeft:176}}>Sign Up</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>


	)
}