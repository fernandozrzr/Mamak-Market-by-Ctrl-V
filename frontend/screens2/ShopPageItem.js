import React from "react";

import { SafeAreaView, View, ScrollView, Image, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import { useState } from "react";


export default function ShopPageItem({ navigation, route }) {

    const { item } = route.params;
    const [qty, setQty] = useState(1);
    console.log(item.img)
    const handleAdd = () => {
        if (qty < item.quantity) {
            setQty(qty + 1);
        }
    }
    const handleSubtract = () => {
        if (qty > 1) {
            setQty(qty - 1);
        }
    }
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();

        return `${day}/${month}/${year}`;
    };
  
    


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
                        marginTop: 100,
                    }}
                >
                    
                    <Image
                    source={{uri:item.img}}
                    resizeMode="cover"
                    style={{ height: 150, width: 300, marginLeft: 1, borderRadius:10 }}
                />
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
                    <View
                        style={{
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

                        }}
                    >
                        <Text
                            style={{
                                color: "black",
                                fontSize: 18,
                                fontStyle: "bold",
                                padding: 10,
                            }}
                        >{item.description}</Text>
                    </View>
                    <View
                        style={{
                            flexDirection: "row",
                            backgroundColor: "#DEC7B3",
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
                        >Expiry Date</Text>
                        <Text
                            style={{
                                color: "black",
                                fontSize: 15,
                                fontWeight: "bold",
                            }}
                        >{formatDate(item.expirydate)}</Text>
                    </View>
                    <View
                        style={{
                            flexDirection: "row",
                            backgroundColor: "#DEC7B3",
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
                        >Usual Price</Text>
                        <Text
                            style={{
                                color: "black",
                                fontSize: 15,
                                fontWeight: "bold",
                            }}
                        >${item.cost.toFixed(2)}</Text>
                    </View>
                    <Text
                        style={{
                            marginTop: 10,
                            fontSize: 24,
                            color: "red",
                            fontWeight: "bold",
                        }}
                    >NOW: ${(item.cost * 0.7).toFixed(2)}</Text>
                    <View style={{ marginTop: 20, flexDirection: 'row' }}>
                        <TouchableOpacity style={{
                            height: 40, width: 40, backgroundColor: 'white', borderRadius: 10, justifyContent: 'center', alignItems:
                                'center'
                        }}><FontAwesome name="bookmark-o" size={24} color="black" /></TouchableOpacity>
                        <View style={{
                            marginLeft: 10, height: 40, width: 120, backgroundColor: 'white', borderRadius: 10, justifyContent: 'center', alignItems:
                                'center'
                        }} ><Text style={styles.font}>Qty: {qty}</Text></View>
                        <TouchableOpacity
                            onPress={handleAdd}
                            style={{
                                marginLeft: 10, height: 40, width: 40, backgroundColor: '#5DDD21', borderRadius: 10, justifyContent: 'center', alignItems:
                                    'center'
                            }}><FontAwesome name="plus-square-o" size={24} color="black" /></TouchableOpacity>
                        <TouchableOpacity
                            onPress={handleSubtract}
                            style={{
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
                        }}>Buy</Text></TouchableOpacity>
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
})