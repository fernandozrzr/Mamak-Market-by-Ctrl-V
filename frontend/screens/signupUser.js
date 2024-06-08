import React from "react";
import { SafeAreaView, View, ScrollView, Text, Image, ImageBackground, TouchableOpacity, TextInput } from "react-native";
import { useState } from "react";
export default function SignUpUser({ navigation }) {
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
                    paddingTop: 168,
                    paddingBottom: 235,
                }}>
                <View
                    style={{
                        height: 156,
                        // borderColor: "#5E27FD",
                        // borderWidth: 1,
                        marginBottom: 23,
                        marginHorizontal: 118,
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
                        color: "#EA1B1B",
                        fontSize: 64,
                        fontWeight: "bold",
                        marginTop: -20,
                        textAlign: 'center',
                    }}>
                    {"妈妈店"}
                </Text>
                <Text
                    style={{
                        color: "#6155AA",
                        fontSize: 36,
                        marginBottom: 31,
                        textAlign: 'center',
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
                    <TouchableOpacity style={{
                        backgroundColor: '#DEC7B2',
                        alignItems: 'center',
                        padding: 10,
                        justifyContent: 'center',
                        marginVertical: 10,
                    }} >
                        <Text style={{ color: 'red', fontSize: 20 }}>User</Text>
                        <View
                            style={{
                                width: 80,
                                height: 1,
                                backgroundColor: "#FF0000",
                            }}>
                        </View>
                    </TouchableOpacity>
                    {/* <Text 
                        style = {{
                            color: "#000000",
                            fontSize: 20,
                        }}>
                        {"Seller"}
                    </Text> */}
                    <TouchableOpacity style={{
                        backgroundColor: '#DEC7B2',
                        alignItems: 'center',
                        adding: 10,
                        justifyContent: 'center',
                        marginVertical: 10,
                    }} onPress={() => navigation.navigate('signupBusinessOwner')}>
                        <Text style={{ color: '#000000', fontSize: 20 }}>Seller</Text>
                        <View
                            style={{
                                width: 80,
                                height: 1,
                                backgroundColor: "#000000",
                            }}>
                        </View>
                    </TouchableOpacity>
                </View>

                <View
                    style={{
                        height: 44,
                        backgroundColor: "#F5F5F5",
                        borderRadius: 8,
                        paddingVertical: 14,
                        paddingHorizontal: 12,
                        marginBottom: 13,
                        marginHorizontal: 18,
                    }}>
                    <TextInput
                        placeholder="Username"
                        value={username}
                        onChangeText={(text) => onChangeUsername(text)}
                    />
                </View>
                <View
                    style={{
                        backgroundColor: "#F5F5F5",
                        borderRadius: 8,
                        paddingVertical: 10,
                        paddingHorizontal: 16,
                        marginBottom: 20,
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
                    style={{
                        alignItems: "center",
                        backgroundColor: "#4112FF",
                        borderRadius: 8,
                        paddingVertical: 11,
                        marginHorizontal: 18,
                    }}>
                    <Text
                        style={{
                            color: "#F5F5F5",
                            fontSize: 20,
                        }}>
                        {"Register"}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('loginUser')}>
                    <Text style={{ color: '#4112FF', fontSize: 15, marginLeft: 158, marginTop: 20 }}>Back to Login</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    )
}