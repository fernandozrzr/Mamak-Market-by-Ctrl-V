import React from "react";
import { SafeAreaView, View, ScrollView, Text, Image, TouchableOpacity, TextInput, Pressable, Button, Alert } from "react-native";
import { StyleSheet } from "react-native";
import { useState } from "react";
import Animated, { SharedTransition, withSpring } from "react-native-reanimated";
import axios from "axios";
import config from "../config"; // Import the configuration file
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function LoginUser({ navigation }) {

    const [username, onChangeUsername] = useState("");
    const [password, onChangePassword] = useState("");
    const [usergroup, onChangeUsergroup] = useState("User");

    const customTransition = SharedTransition.custom((values) => {
        'worklet';
        return {
            height: withSpring(values.targetHeight),
            width: withSpring(values.targetWidth),
            paddingTop: withSpring('25%'),
            originX: withSpring(values.targetOriginX),
            originY: withSpring(values.targetOriginY),
        };
    })

    // function handleSubmit() {
    //     const userData = {
    //         username: username,
    //         password,
    //         usergroup,
    //     };
    
    //     axios
    //         .post(`${config.API_URL}/profile/login`, userData)
    //         .then(res => {
    //             console.log(res.data);
    //             if (res.data.status === "ok") {
    //                 Alert.alert("Login Successful");
    //                  navigation.navigate("UserScreens");
    //             } else {
    //                 Alert.alert("Login Failed", res.data.message || "Unexpected error");
    //             }
    //         })
    //         .catch(error => {
    //             console.error('Error:', error);
    //             Alert.alert("Error", "An unexpected error occurred");
    //         });
    // }
    async function handleSubmit() {
        const userData = {
            username: username,
            password: password,
            usergroup: usergroup,
        };
    
        // axios
        //     .post(`${config.API_URL}/profile/login`, userData)
        //     .then(async (res) => {
        //         // console.log(res.data);
        //         if (res.data.status === "ok") {
        //             Alert.alert("Login Successful");
        //             try {
        //                 await AsyncStorage.setItem('userName', res.data.name); // Store the name in AsyncStorage
        //             } catch (error) {
        //                 console.error('AsyncStorage Error: ', error);
        //             }

        //             if (usergroup === "Seller") {
        //                 navigation.navigate("SellerScreens");
        //             } else if (usergroup === "User") {
        //                 navigation.navigate("UserScreens");
        //             } else {
        //                 Alert.alert("Login Failed", "Invalid user group");
        //             }
        //         } else {
        //             Alert.alert("Login Failed", res.data.message || "Unexpected error");
        //         }
        //     })
        //     .catch(error => {
        //         // console.error('Error:', error);
        //         Alert.alert("Error",error.message);
        //     });
        try {
            const res = await axios.post(`${config.API_URL}/profile/login`, userData);
            if (res.data.status === "ok") {
                await AsyncStorage.setItem('username', username);
                Alert.alert("Login Successful");
                if (usergroup === "Seller") {
                    navigation.navigate("SellerScreens");
                } else if (usergroup === "User") {
                    navigation.navigate("UserScreens"); // No need to pass username here if using AsyncStorage
                } else {
                    Alert.alert("Login Failed", "Invalid user group");
                }
            } else {
                Alert.alert("Login Failed", res.data.message || "Unexpected error");
            }
        } catch (error) {
            Alert.alert("Error", "An unexpected error occurred");
        }
    }

    return (
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: "#FFFFFF",
            }}>
            <Animated.ScrollView
                style={{
                    flex: 1,
                    backgroundColor: "#DEC7B2",
                    paddingTop: '25%',
                }}
                sharedTransitionTag="loginIcon"
                sharedTransitionStyle={customTransition}>
                <View
                    style={{
                        // borderColor: "#5E27FD",
                        // borderWidth: 1,
                        justifyContent: 'center', // Align image and text in the center vertically
                        alignItems: 'center', // Align image and text in the center horizontally
                    }}>
                    <Animated.Image
                        source={require('../assets/AppIcon2.png')}
                        style={{
                            flex: 1,
                            width: 250, // Adjust width as needed
                            height: 300, // Adjust height as needed
                            marginBottom: 10,
                        }}
                        resizeMode="cover" // or any other resize mode you prefer
                        sharedTransitionTag="loginIcon"
                    />
                </View>
                {/* <Text
                    style={{
                        color: "#EA1B1B",
                        fontSize: 64,
                        fontWeight: "bold",
                        marginTop: -40,
                        textAlign: 'center',
                    }}>
                    {"妈妈店"}
                </Text>
                <Text
                    style={{
                        color: "#6155AA",
                        fontSize: 36,
                        marginBottom: 32,
                        textAlign: 'center',
                    }}>
                    {"Mamak Market"}
                </Text> */}
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginBottom: 5,
                        marginHorizontal: 88,
                        marginTop: -22,
                    }}>
                    <TouchableOpacity 
                        style={{
                            backgroundColor: usergroup === 'User',
                            alignItems: 'center',
                            padding: 10,
                            justifyContent: 'center',
                            marginVertical: 10,
                        }} 
                        onPress={() => onChangeUsergroup('User')}>
                        <Text style={{ 
                            color: usergroup === 'User'? '#FF0000' : "#000000",
                            fontSize: 20 
                        }}>
                            User
                        </Text>
                        {usergroup === 'User' ? (
                            <View
                                style={{
                                    width: 80,
                                    height: 1,
                                    backgroundColor: "#FF0000",
                                }}>
                            </View>
                        ):
                            <View
                                style={{
                                    width: 80,
                                    height: 1,
                                    backgroundColor: "#000000",
                                }}>
                            </View>
                        }
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
                            color: usergroup === 'Seller' ? '#FF0000' : '#000000', 
                            fontSize: 20 
                        }}>
                            Seller
                        </Text>
                        {usergroup === 'Seller' ? (
                            <View
                                style={{
                                    width: 80,
                                    height: 1,
                                    backgroundColor: "#FF0000",
                                }}>
                            </View>
                        ):
                            <View
                                style={{
                                    width: 80,
                                    height: 1,
                                    backgroundColor: "#000000",
                                }}>
                            </View>
                        }
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
                <TouchableOpacity onPress={handleSubmit}

                    style={{
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
                            fontSize: 20,
                        }}>
                        {"Login"}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate('')} // Add the path to the forgotten password page
                    style={{
                        color: "#4112FF",
                        fontSize: 15,
                        marginBottom: 12,
                        marginLeft: 141,
                    }}>
                    <Text>Forgotten Password?</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('signupUser')}>
                    <Text style={{ color: '#4112FF', fontSize: 15, marginLeft: 176 }}>Sign Up</Text>
                </TouchableOpacity>
            </Animated.ScrollView>
        </SafeAreaView>



    )
}
