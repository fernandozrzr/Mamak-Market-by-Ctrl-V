import React from "react";
import { SafeAreaView, View, ScrollView, Text, Image, ImageBackground, TouchableOpacity, TextInput } from "react-native";
import { useState } from "react";
export default function LoginBusinessOwner({ navigation }) {

    const [username, onChangeUsername] = useState("");
    const [password, onChangePassword] = useState("");

    return (
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: "#FFFFFF",
            }}>
            <ScrollView
                style={{
                    flex: 1,
                    backgroundColor: "#DEC7B2",
                    paddingTop: 162,
                    paddingBottom: 183,
                }}>
                <View
                    style={{
                        height: 156,
                        // borderColor: "#5E27FD",
                        // borderWidth: 1,
                        marginBottom: 20,
                        marginHorizontal: 117,
                        justifyContent: 'center', // Align image and text in the center vertically
                        alignItems: 'center', // Align image and text in the center horizontally
                    }}>
                    <Image
                        source={require('../assets/AppIcon.jpg')}
                        style={{
                            width: 100, // Adjust width as needed
                            height: 100, // Adjust height as needed
                        }}
                        resizeMode="cover" // or any other resize mode you prefer
                    />
                </View>
                <Text
                    style={{
                        color: "#6155AA",
                        fontSize: 36,
                        marginBottom: 32,
                        marginLeft: 75,
                    }}>
                    {"Mamak Market"}
                </Text>
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginBottom: 5,
                        marginHorizontal: 88,
                    }}>
                    <TouchableOpacity onPress={() => navigation.navigate('loginUser')}>
                        <Text style={{ color: '#000000', fontSize: 20 }}>User</Text>
                    </TouchableOpacity>
                    <Text
                        style={{
                            color: "#FF0000",
                            fontSize: 20,
                        }}>
                        {"Seller"}
                    </Text>
                </View>
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginBottom: 19,
                        marginHorizontal: 34,
                    }}>
                    <View
                        style={{
                            width: 159,
                            height: 1,
                            backgroundColor: "#000000",
                        }}>
                    </View>
                    <View
                        style={{
                            width: 159,
                            height: 1,
                            backgroundColor: "#FF0000",
                        }}>
                    </View>
                </View>
                <View
                    style={{
                        height: 44,
                        backgroundColor: "#F5F5F5",
                        borderRadius: 8,
                        paddingVertical: 13,
                        paddingHorizontal: 15,
                        marginBottom: 9,
                        marginHorizontal: 17,
                    }}>
                    <TextInput
                        placeholder="Username"
                        value={username}
                        onChangeText={(text) => onChangeUsername(text)}
                    />
                </View>
                <View
                    style={{
                        height: 44,
                        backgroundColor: "#F5F5F5",
                        borderRadius: 8,
                        paddingVertical: 11,
                        paddingHorizontal: 16,
                        marginBottom: 22,
                        marginHorizontal: 18,
                    }}>
                    <TextInput
                        placeholder="Password"
                        value={password}
                        secureTextEntry={true}
                        onChangeText={(text) => onChangePassword(text)}
                    />
                </View>
                <TouchableOpacity
                    onPress={() => navigation.navigate('SellerFeed')} // Add the screen name for the home screen
                    style={{
                        height: 44,
                        alignItems: "center",
                        backgroundColor: "#4112FF",
                        borderRadius: 8,
                        paddingVertical: 12,
                        marginBottom: 26,
                        marginHorizontal: 18,
                    }}>
                    <Text
                        style={{
                            color: "#F5F5F5",
                            fontSize: 19,
                            marginTop: -5,
                        }}>
                        {"Login"}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate('')} // Add the screen name for the forgotten password screen
                    style={{
                        color: "#4112FF",
                        fontSize: 15,
                        marginBottom: 12,
                        marginLeft: 141,
                    }}>
                    <Text>Forgotten Password?</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('signupBusinessOwner')}>
                    <Text style={{ color: '#4112FF', fontSize: 15, marginLeft: 176 }}>Sign Up</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>


    )
}