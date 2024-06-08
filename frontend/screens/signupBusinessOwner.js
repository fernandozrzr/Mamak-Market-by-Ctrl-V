import React from "react";
import { SafeAreaView, View, ScrollView, Text, Image, ImageBackground, TouchableOpacity, TextInput } from "react-native";
import { useState } from "react";
export default function SignUpBusinessOwner({ navigation }) {
    const [username, onChangeUsername] = useState("");
    const [password, onChangePassword] = useState("");
    const [UEN, onChangeUEN] = useState("");

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
                    paddingTop: 141,
                    paddingBottom: 214,
                }}>
                <View
                    style={{
                        height: 156,
                        // borderColor: "#5E27FD",
                        // borderWidth: 1,
                        marginBottom: 16,
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
                        marginBottom: 40,
                        marginLeft: 74,
                    }}>
                    {"Mamak Market"}
                </Text>
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginBottom: 6,
                        marginHorizontal: 83,
                    }}>
                    <TouchableOpacity onPress={() => navigation.navigate('signupUser')}>
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
                        marginHorizontal: 30,
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
                        paddingVertical: 13,
                        paddingHorizontal: 15,
                        marginBottom: 9,
                        marginHorizontal: 17,
                    }}>
                    <TextInput
                        placeholder="Password"
                        value={password}
                        secureTextEntry={true}
                        onChangeText={(text) => onChangePassword(text)}
                    />
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
                        placeholder="UEN"
                        value={UEN}

                        onChangeText={(text) => onChangeUEN(text)}
                    />
                </View>
                <TouchableOpacity
                    style={{
                        alignItems: "center",
                        backgroundColor: "#4112FF",
                        borderRadius: 8,
                        paddingVertical: 11,
                        marginHorizontal: 17,
                    }}>
                    <Text
                        style={{
                            color: "#F5F5F5",
                            fontSize: 18,
                        }}>
                        {"Register"}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('loginBusinessOwner')}>
                    <Text style={{ color: '#4112FF', fontSize: 15, marginLeft: 162, marginTop: 20 }}>Back to Login</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    )
}