import React, { useEffect, useState } from 'react';

import { Text, View, Image, TextInput, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';


import OrdersList from '../screens (modals)/ordersList';
import ChatsList from '../screens (modals)/chatsList';


import ListingDetails from '../components/ListingDetails';

import config from "../config"; // Import the configuration file
import { FlatList } from 'react-native-gesture-handler';


export default function Listing({ navigation }) {

    const [topPicks, setTopPicks] = useState([
        {
            itemID: 's1-i1',
            name: 'Apples',
            shop: 'Qiong Provisions',
            picture: require('../assets/ShopImage/apple.jpg'),
            originalPrice: '3.20',
            latestPrice: '2.50',
        },
        {
            itemID: 's2-i1',
            name: 'Oranges',
            shop: 'QiJi Provisions',
            picture: require('../assets/ShopImage/oranges.jpg'),
            originalPrice: '3.00',
            latestPrice: '2.70',
        },
        {
            itemID: 's3-i1',
            name: 'Assorted Biscuits',
            shop: 'MamaDian',
            picture: require('../assets/ShopImage/assortedbiscuit.jpg'),
            originalPrice: '3.50',
            latestPrice: '2.00',
        },
    ])

    const [categories, setCategories] = useState([
        {
            name: 'Meals',
            picture: require('../assets/ShopImage/category images/cat_meals.png'),
        },
        {
            name: 'Fruits',
            picture: require('../assets/ShopImage/category images/cat_fruit.png'),
        },
        {
            name: 'Veggies',
            picture: require('../assets/ShopImage/category images/cat_veg.png'),
        },
        {
            name: 'Dairy',
            picture: require('../assets/ShopImage/category images/cat_dairy.png'),
        },
        {
            name: 'Meat',
            picture: require('../assets/ShopImage/category images/cat_meat.png'),
        },
        {
            name: 'Snacks',
            picture: require('../assets/ShopImage/category images/cat_snack.png'),
        }
    ])

    const [feeds, setFeeds] = useState()
    useEffect(() => {
        const fetchListings = async () => {
            try {

                const response = await fetch(`${config.API_URL}/listing/`);


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


    function renderTopPicks({item}) {
        return (
            <TouchableOpacity style={{
                borderRadius: 5,
                borderBottomLeftRadius: 0,
                elevation: 1,
            }} onPress={() => {}}>

                <View style={{
                    padding: 10,
                    flexDirection: 'row'
                }}>
                    <Image source={item.picture} style={{ height: 100, width: 100, borderRadius: 5, overflow: 'hidden' }}/>
                    <View style={{ paddingLeft: '5%', flexDirection: 'column' }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 15}}>{item.name}</Text>
                        <Text style={{ fontSize: 10, }}>{item.shop}</Text>
                        <Text style={{ marginTop: 5, }}>Original price: <Text style={{ color: 'red' }}>${item.originalPrice}</Text></Text>
                        <Text style={{ marginTop: 5, fontSize: 15, fontWeight: 'bold' }}>Latest price: <Text style={{ color: 'green'}}>${item.latestPrice}</Text></Text>
                    </View>
                </View>

            </TouchableOpacity>
        )
    }

    function renderCategories({item}) {
        return (
            <View style={{ marginHorizontal: 10, }}>
                <TouchableOpacity style={{
                    borderRadius: 75/2,
                    height: 75,
                    width: 75,
                    backgroundColor: '#D9D9D9',
                }}>
                    <View style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <Image source={item.picture} style={{
                            resizeMode: 'cover',
                            height: 50,
                            width: 50,
                            overflow: 'hidden',
                        }} />
                    </View>
                </TouchableOpacity>
                <View style={{ justifyContent: 'flex-end', alignItems: 'center', }}>
                    <Text style={{ fontWeight: 'bold', }}>{item.name}</Text>
                </View>
            </View>
        )
    }



    return (
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: "#FFFFFF",
            }}
        >
            <View
                style={{
                    height: '5%',
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
                    {/* <AntDesign name="filter" size={24} color="black" /> */}
                </View>
                <AntDesign name="shoppingcart" size={24} color="black" style={{ marginRight: 5 }} onPress={() => { navigation.navigate(OrdersList) }} />
                <AntDesign name="message1" size={20} color="black" style={{ marginLeft: 10 }} onPress={() => { navigation.navigate(ChatsList) }} />
            </View>
            <ScrollView>
                <View>
                    <Text style={{
                        padding: 15,
                        fontWeight: 'bold',
                        fontSize: 20,
                    }}>Recommendations</Text>
                    <View style={{
                        paddingLeft: 15,
                        borderRadius: 5,
                        borderColor: 'black',
                    }}>
                        <FlatList
                            data={topPicks} renderItem={renderTopPicks}
                            horizontal
                            showsHorizontalScrollIndicator={false}/>
                    </View>
                </View>
                <View>
                    <Text style={{
                        padding: 15,
                        fontWeight: 'bold',
                        fontSize: 20,
                    }}>Featured</Text>
                    <FlatList
                        data={categories} renderItem={renderCategories}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{ padding: 10, paddingBottom: 0, }}
                    />
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
                    <Text style={{
                        padding: 10,
                        fontWeight: 'bold',
                        fontSize: 20,
                    }}>Shops</Text>
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
            </ScrollView>

        </SafeAreaView >
    );
}
