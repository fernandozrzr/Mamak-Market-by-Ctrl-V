import React from "react";
import { SafeAreaView, View, ScrollView, Text, Image, ImageBackground, TouchableOpacity} from "react-native";
export default function SignUpBusinessOwner({ navigation }) {
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
                    paddingTop: 141,
                    paddingBottom: 214,
                }}>
                <View 
                    style = {{
                        height: 156,
                        // borderColor: "#5E27FD",
                        // borderWidth: 1,
                        marginBottom: 16,
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
                        marginBottom: 40,
                        marginLeft: 74,
                    }}>
                    {"Mamak Market"}
                </Text>
                <View 
                    style = {{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginBottom: 6,
                        marginHorizontal: 83,
                    }}>
                    <TouchableOpacity onPress={() => navigation.navigate('signupUser')}>
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
                        marginHorizontal: 30,
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
                        paddingVertical: 13,
                        paddingHorizontal: 15,
                        marginBottom: 9,
                        marginHorizontal: 17,
                    }}>
                    <Text 
                        style = {{
                            color: "#9D9D9D",
                            fontSize: 18,
                            marginLeft: -2.5,
                            marginTop: -4,
                        }}>
                        {"Password"}
                    </Text>
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
                            marginTop: -3,
                        }}>
                        {"UEN"}
                    </Text>
                </View>
                <View 
                    style = {{
                        alignItems: "center",
                        backgroundColor: "#4112FF",
                        borderRadius: 8,
                        paddingVertical: 11,
                        marginHorizontal: 17,
                    }}>
                    <Text 
                        style = {{
                            color: "#F5F5F5",
                            fontSize: 18,
                        }}>
                        {"Register"}
                    </Text>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('loginBusinessOwner')}>
                    <Text style={{ color: '#4112FF', fontSize: 12, marginLeft:162, marginTop:20}}>Back to Login</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
	)
}