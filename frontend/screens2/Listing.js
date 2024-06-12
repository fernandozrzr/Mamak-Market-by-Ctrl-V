import React, { useEffect, useState } from 'react';

import { Text, View, Image, TextInput, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';


import OrdersList from '../screens (modals)/ordersList';
import ChatsList from '../screens (modals)/chatsList';


import ListingDetails from '../components/ListingDetails';
import { useListsContext } from "../hooks/useFeedsContext";

export default function Listing({ navigation }) {



    const [feeds, setFeeds] = useState()
    useEffect(() => {
        const fetchListings = async () => {
            try {
                const response = await fetch('http://192.168.18.17:4000/api/listing/');
                const json = await response.json();
                uniqueListings = Array.from(new Map(json.map(item => [item.user, item])).values());
                // dispatch({type: 'SET_LISTS', payload: json})
                setFeeds(uniqueListings)

            } catch (error) {
                console.error('Error fetching listings:', error);
            }
        }

        fetchListings();
    }, []);



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
                <AntDesign name="shoppingcart" size={24} color="black" style={{ marginRight: 5 }} onPress={() => { navigation.navigate(OrdersList) }} />
                <AntDesign name="message1" size={20} color="black" style={{ marginLeft: 10 }} onPress={() => { navigation.navigate(ChatsList) }} />
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
                    {feeds ? (
                        feeds.map((feed) => (
                            < ListingDetails key={feed._id} listing={feed} navigation={navigation} />
                        ))
                    ) : (
                        <Text>No shops available</Text>
                    )}

                </View>

            </ScrollView>



        </SafeAreaView >
    );
}
