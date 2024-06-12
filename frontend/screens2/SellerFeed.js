import React, { useEffect,useState } from "react";
import { SafeAreaView, View, ScrollView, Image, Text, TextInput, TouchableOpacity, ImageBackground } from "react-native";
import FeedDetails from '../components/FeedDetails'
import { useFeedsContext } from "../hooks/useFeedsContext";

const SellerFeed = ({navigation}) => {
    const {feeds, dispatch} = useFeedsContext()

    useEffect(() => {
        const fetchFeeds = async() => {
            const response = await fetch('http://10.51.0.210:4000/api/feed/')
            const json = await response.json()

            if(response.ok){
              console.log(feeds)
                dispatch({type: 'SET_FEEDS', payload: json})
            }
            
        }
        fetchFeeds()
    }, [])
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#FFFFFF",
      }}>
        <View
            style={{
            backgroundColor: "#DEC7B3",
            paddingTop: 30,
            alignItems: "center",
            justifyContent: "center",
            height: 100,
            }}>
            <TouchableOpacity
                style={{
                    width: 164,
                    alignItems: "center",
                    backgroundColor: "#D9D9D9",
                    borderRadius: 15,
                    paddingVertical: 3,
                    paddingHorizontal: 16,
                    alignSelf: "center"
                }}
                onPress={() => navigation.navigate('postCreation')} // replace 'DesiredScreenName' with your target screen name
                >
                <Text style={{ color: "#000000", fontSize: 20 }}>
                    {"+  Add Post"}
                </Text>
            </TouchableOpacity>
        </View>
      <ScrollView
        style={{
        flex: 1,
        backgroundColor: "#F3F3F3", // You can change this as per your layout requirements
        }}>
        {feeds && feeds.map((feed) => (
            <FeedDetails key={feed._id} feed = {feed}/>
        ))}

        
      </ScrollView>
      
    </SafeAreaView>
  );
}

export default SellerFeed
