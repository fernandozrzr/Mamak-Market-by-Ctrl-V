import React, { useEffect, useState } from 'react';
import { Text, View, Image, TextInput, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';



export default function Listing({ navigation }) {



    return (
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: "#FFFFFF",
            }}
        >
            <View
                style={{
                    height: 70,
                    backgroundColor: "#DEC7B3",
                }}
            >
            </View>
            <View
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                    backgroundColor: "#DEC7B3",
                }}

            >
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        backgroundColor: "#D9D9D9",
                        borderRadius: 8,
                        paddingVertical: 6,
                        paddingHorizontal: 12,
                        marginBottom: 20,
                        marginHorizontal: 20,
                        marginTop: 20,
                        width: "70%",
                    }}
                >
                    <View
                        style={{
                            width: 14,
                            marginRight: 15,
                        }}
                    >
                        <Image
                            source={require('../assets/ShopImage/search-icon.png')}
                            style={{
                                width: 16,
                                height: 16,
                            }}
                            resizeMode="cover"
                        />
                    </View>
                    <TextInput
                        style={{
                            color: "#727272",
                            fontSize: 15,
                            flex: 1,
                        }}
                        placeholder="Search for shops..."
                        placeholderTextColor="#727272"
                    />
                    <AntDesign name="filter" size={24} color="black" />
                </View>
                <AntDesign name="shoppingcart" size={24} color="black" style={{ marginRight: 5 }} />
                <AntDesign name="bells" size={24} color="black" style={{ marginLeft: 10 }} />
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
                        fontSize: 20,
                    }}
                >
                    {"Shops"}
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
            <ScrollView
                style={{
                    flex: 1,
                    backgroundColor: "white",
                    paddingHorizontal: 20,
                }}
            >

                <View
                    style={{
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        justifyContent: 'space-between',
                    }}
                >
                    <TouchableOpacity
                        onPress={() => navigation.navigate('ShopPage')}
                        style={{
                            width: '48%',
                            backgroundColor: "white",
                            borderRadius: 10,
                            marginBottom: 20,
                            padding: 10,
                        }}
                    >

                        <Image
                            source={require('../assets/ShopImage/QiongProvisionIcon.jpg')}
                            resizeMode='cover'
                            style={{
                                width: '140',
                                height: 140,
                                borderRadius: 10, // Half of the height
                                marginBottom: 10,
                                borderWidth: 1,
                                borderColor: "#000000",
                            }}
                        />
                        <Text
                            style={{
                                color: "#000000",
                                fontSize: 14,
                                textAlign: 'center',
                            }}
                        >
                            {"Qiong Provisions"}
                        </Text>
                    </TouchableOpacity >
                    <View
                        style={{
                            width: '48%',
                            backgroundColor: "white",
                            borderRadius: 10,
                            marginBottom: 20,
                            padding: 10,
                        }}
                    >
                        <Image
                            source={require('../assets/ShopImage/QiongProvisionsImage.jpg')}
                            resizeMode="stretch"
                            style={{
                                width: '100%',
                                height: 140,
                                borderRadius: 10,
                                marginBottom: 10,
                                borderWidth: 1,
                                borderColor: "#000000",
                            }}
                        />
                        <Text
                            style={{
                                color: "#000000",
                                fontSize: 14,
                                textAlign: 'center',
                            }}
                        >
                            {"QiJi Provisions"}
                        </Text>
                    </View>
                    <View
                        style={{
                            width: '48%',
                            backgroundColor: "white",
                            borderRadius: 10,
                            marginBottom: 20,
                            padding: 10,
                        }}
                    >
                        <Image
                            source={require('../assets/ShopImage/QiongProvisionsImage.jpg')}
                            resizeMode="stretch"
                            style={{
                                width: '100%',
                                height: 140,
                                borderRadius: 10,
                                marginBottom: 10,
                                borderWidth: 1,
                                borderColor: "#000000",
                            }}
                        />
                        <Text
                            style={{
                                color: "#000000",
                                fontSize: 14,
                                textAlign: 'center',
                            }}
                        >
                            {"MamaDian"}
                        </Text>
                    </View>
                    <View
                        style={{
                            width: '48%',
                            backgroundColor: "white",
                            borderRadius: 10,
                            marginBottom: 20,
                            padding: 10,
                        }}
                    >
                        <Image
                            source={require('../assets/ShopImage/QiongProvisionIcon.jpg')}
                            resizeMode="stretch"
                            style={{
                                width: '100%',
                                height: 140,
                                borderRadius: 10,
                                marginBottom: 10,
                                borderWidth: 1,
                                borderColor: "#000000",
                            }}
                        />
                        <Text
                            style={{
                                color: "#000000",
                                fontSize: 14,
                                textAlign: 'center',
                            }}
                        >
                            {"Choong Provisions"}
                        </Text>
                    </View>
                </View>

            </ScrollView>



        </SafeAreaView >
    );
}
