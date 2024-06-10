import React from "react";

import { SafeAreaView, View, ScrollView, Image, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesome } from '@expo/vector-icons';


export default function ShopPageItem() {

    return (
        <SafeAreaView
            style={{
                flex: 1,
            }}
        >
            <ScrollView
                style={{
                    flex: 1,
                    backgroundColor: "#DEC7B3",
                }}
                contentContainerStyle={{

                    paddingBottom: 20, // Adjust as needed
                }}
            >
                <View
                    style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: 80,
                    }}
                >
                    <View style={styles.container}>
                        <Image source={require('../assets/ShopImage/apple.jpg')} style={styles.image} />
                        <TouchableOpacity style={styles.iconContainer}>
                            <FontAwesome name="edit" size={24} color="black" />
                        </TouchableOpacity>
                    </View>
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "center",
                            alignItems: "center",
                            marginTop: 20,
                            marginBottom: 5,
                            marginHorizontal: 47,

                        }}
                    >
                        <Text
                            style={{
                                color: "black",
                                fontSize: 24,
                                fontStyle: "bold",
                                fontWeight: "bold",
                            }}
                        >
                            {"Description"}
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
                                backgroundColor: "black",
                            }}
                        />
                    </View>
                    <View style={{
                        flexDirection: "row",
                        backgroundColor: "#D9D9D9",
                        borderRadius: 10,
                        paddingVertical: 6,
                        paddingHorizontal: 12,
                        marginHorizontal: 20,
                        marginBottom: 10,
                        width: "80%",
                        justifyContent: 'space-between', // Aligns children to the far ends
                        height: 150,

                    }}>
                        <Text style={{
                            color: "black",
                            fontSize: 18,
                            fontStyle: "bold",
                            padding: 10,
                        }}>5pcs apple from China. Good for consumption.</Text>
                        <TouchableOpacity style={styles.iconContainer}>
                            <FontAwesome name="edit" size={24} color="black" />
                        </TouchableOpacity>
                    </View>
                    <View style={{ alignItems: 'flex-start' }}>
                        <Text
                            style={{
                                color: "black",
                                fontSize: 15,
                                fontWeight: "bold",
                            }}
                        >Expiry Date</Text>
                    </View>
                    <View
                        style={{
                            flexDirection: "row",
                            backgroundColor: "#D9D9D9",
                            borderRadius: 8,
                            paddingVertical: 6,
                            paddingHorizontal: 12,
                            marginHorizontal: 20,
                            marginBottom: 10,
                            width: "80%",
                            justifyContent: 'space-between', // Aligns children to the far ends
                        }}
                    >
                        <Text
                            style={{
                                color: "black",
                                fontSize: 15,
                                fontWeight: "bold",
                            }}
                        >11/06/2024</Text>
                        <TouchableOpacity>
                            <FontAwesome name="calendar" size={24} color="black" />
                        </TouchableOpacity>

                    </View>
                    <Text
                        style={{
                            color: "black",
                            fontSize: 15,
                            fontWeight: "bold",
                        }}
                    >Price</Text>
                    <View
                        style={{
                            flexDirection: "row",
                            backgroundColor: "#D9D9D9",
                            borderRadius: 8,
                            paddingVertical: 6,
                            paddingHorizontal: 12,
                            marginHorizontal: 20,
                            marginBottom: 10,
                            width: "80%",
                            justifyContent: 'space-between', // Aligns children to the far ends
                        }}
                    >
                        <Text
                            style={{
                                color: "black",
                                fontSize: 15,
                                fontWeight: "bold",
                            }}
                        >$2.00</Text>
                        <TouchableOpacity>
                            <FontAwesome name="edit" size={24} color="black" />
                        </TouchableOpacity>

                    </View>
                    <View style={{ marginTop: 20, flexDirection: 'row' }}>

                        <View style={{
                            marginLeft: 10, height: 40, width: 200, backgroundColor: 'white', borderRadius: 10, justifyContent: 'center', alignItems:
                                'center'
                        }} ><Text style={styles.font}>Qty: 1</Text></View>
                        <TouchableOpacity style={{
                            marginLeft: 10, height: 40, width: 40, backgroundColor: '#5DDD21', borderRadius: 10, justifyContent: 'center', alignItems:
                                'center'
                        }}><FontAwesome name="plus-square-o" size={24} color="black" /></TouchableOpacity>
                        <TouchableOpacity style={{
                            marginLeft: 10, height: 40, width: 40, backgroundColor: 'red', borderRadius: 10, justifyContent: 'center', alignItems:
                                'center'
                        }}><FontAwesome name="minus-square-o" size={24} color="black" /></TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity style={{
                            marginTop: 20, height: 40, width: 280, backgroundColor: 'blue', borderRadius: 10, justifyContent: 'center', alignItems:
                                'center'
                        }} ><Text style={{
                            color: "white",
                            fontSize: 20,
                            fontWeight: "bold",
                        }}>Save Edits</Text></TouchableOpacity>
                    </View>
                </View>


            </ScrollView >
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    font: {
        color: "black",
        fontSize: 20,
        fontWeight: "bold",
    },
    container: {
        position: 'relative',
        width: 230,  // Adjust based on your image size
        height: 230, // Adjust based on your image size
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 10,
    },
    iconContainer: {
        position: 'absolute',
        top: 10,
        right: 10,
    },
})