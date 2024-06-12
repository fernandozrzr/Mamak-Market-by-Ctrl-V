import React from "react";
import { SafeAreaView, View, ScrollView, Text, Image, ImageBackground, TouchableOpacity, TextInput ,Alert} from "react-native";
import { useState } from "react";
import axios from "axios";
import config from "../config"; // Import the configuration file

export default function SignUpBusinessOwner({ navigation }) {
    const [name, onChangeName] = useState("");
    const [username, onChangeUsername] = useState("");
    const [password, onChangePassword] = useState("");
    const [usergroup, onChangeUsergroup] = useState("Seller");
    const [uen, onChangeUEN] = useState("");

    function handleSubmit() {
        // Check if all mandatory fields are filled
        if (!name || !username || !password || !usergroup || !uen) {
            Alert.alert("Error", "All fields must be filled");
            return;
        }
    
        // Check for additional conditions, such as password strength
        if (password.length < 8) {
            Alert.alert("Error", "Password must be at least 8 characters long");
            return;
        }
    
        const userData = {
            name,
            username,
            password,
            usergroup,
            uen,
        };
    
        axios
            .post(`${config.API_URL}/profile/signup`, userData)
            .then(res => {
                console.log(res.data);
                if (res.data.status === "ok") {
                    Alert.alert("Success", "Registered Successfully", [
                        {
                            text: "OK",
                            onPress: () => navigation.navigate('loginBusinessOwner'),
                        },
                    ]);
                } else {
                    Alert.alert("Error", res.data.message || "Username or name already in use");
                }
            })
            .catch(error => {
                console.log('Error:', error);
                if (error.response) {
                    if (error.response.status === 400) {
                        Alert.alert("Error", error.response.data.message || "All fields must be filled");
                    } else if (error.response.status === 409) {
                        Alert.alert("Error", error.response.data.message || "Username or name already in use");
                    } else {
                        Alert.alert("Error", "Username or name already in use");
                    }
                } else {
                    Alert.alert("Error", "An unexpected error occurred");
                }
            });
    }

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
                    paddingTop: 120,
                    paddingBottom: 214,
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
                            width: 150, // Adjust width as needed
                            height: 150, // Adjust height as needed
                            marginBottom: 30,
                        }}
                        resizeMode="cover" // or any other resize mode you prefer
                    />
                </View>
                <Text
                    style={{
                        color: "#EA1B1B",
                        fontSize: 64,
                        fontWeight: "bold",
                        marginTop: -35,
                        textAlign: 'center',
                    }}>
                    {"妈妈店"}
                </Text>
                <Text
                    style={{
                        color: "#6155AA",
                        fontSize: 36,
                        marginBottom: 40,
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
                        marginTop:-35
                    }}>
                    <TouchableOpacity 
                        style={{
                            backgroundColor: usergroup === 'User',
                            alignItems: 'center',
                            padding: 10,
                            justifyContent: 'center',
                            marginVertical: 10,
                        }} 
                        onPress={() => navigation.navigate('signupUser')}>
                        <Text style={{ color: '#000000', fontSize: 20 }}>User</Text>
                        {usergroup === 'User' && (
                            <View
                                style={{
                                    width: 80,
                                    height: 2,
                                    backgroundColor: "#000000",
                                }}>
                            </View>
                        )}
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={{
                            backgroundColor: usergroup === 'Seller',
                            alignItems: 'center',
                            padding: 10,
                            justifyContent: 'center',
                            marginVertical: 10,
                        }} 
                        onPress={() => onChangeUsergroup('Seller')}>
                        <Text style={{ 
                            color: 'red', 
                            fontSize: 20 
                        }}>
                            Seller
                        </Text>
                        {usergroup === 'Seller' && (
                            <View
                                style={{
                                    width: 80,
                                    height: 1,
                                    backgroundColor: "#FF0000",
                                }}>
                            </View>
                        )}
                    </TouchableOpacity>
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
                        placeholder="Name"
                        value={name}
                        onChangeText={(text) => onChangeName(text)}
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
                        value={uen}

                        onChangeText={(text) => onChangeUEN(text)}
                    />
                </View>
                <TouchableOpacity onPress={handleSubmit}
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
                    <Text style={{ color: '#4112FF', fontSize: 15, alignSelf:"center", marginTop: 20 }}>Back to Login</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    )
}