import React from "react";
import { SafeAreaView, View, ScrollView, Text, Image, ImageBackground, TouchableOpacity } from "react-native";
export default function SignUpUser({ navigation }) {
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
                        color: "#6155AA",
                        fontSize: 36,
                        marginBottom: 31,
                        marginLeft: 76,
                    }}>
                    {"Mamak Market"}
                </Text>
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginBottom: 6,
                        marginHorizontal: 88,
                    }}>
                    <Text
                        style={{
                            color: "#FF0000",
                            fontSize: 20,
                        }}>
                        {"User"}
                    </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('signupBusinessOwner')}>
                        <Text style={{ color: '#000000', fontSize: 20 }}>Seller</Text>
                    </TouchableOpacity>
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
                            backgroundColor: "#FF0000",
                        }}>
                    </View>
                    <View
                        style={{
                            width: 159,
                            height: 1,
                            backgroundColor: "#000000",
                        }}>
                    </View>
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
                    <Text
                        style={{
                            color: "#9D9D9D",
                            fontSize: 18,
                            marginTop: -5,
                        }}>
                        {"Username"}
                    </Text>
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
                    <Text
                        style={{
                            color: "#9D9D9D",
                            fontSize: 18,
                            marginLeft: -2.5,
                        }}>
                        {"Password"}
                    </Text>
                </View>
                <View
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
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('loginUser')}>
                    <Text style={{ color: '#4112FF', fontSize: 12, marginLeft: 158, marginTop: 20 }}>Back to Login</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    )
}