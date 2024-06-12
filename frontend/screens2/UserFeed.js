import React , { useState, useEffect } from "react";
import { SafeAreaView, View, ScrollView, Image, Text, TextInput, TouchableOpacity, ImageBackground} from "react-native";
import FeedDetails from "../components/FeedDetails";
import { useFeedsContext } from "../hooks/useFeedsContext";

export default function UserFeed({ navigation }) {
    const { feeds, dispatch } = useFeedsContext()

    useEffect(() => {
    const fetchFeeds = async () => {
      const response = await fetch('http://192.168.10.71:4000/api/feed/')
      const json = await response.json()

      if (response.ok) {
        console.log(feeds)
        dispatch({ type: 'SET_FEEDS', payload: json })
      }

    }
        fetchFeeds()
    }, [])
    return (
		<SafeAreaView 
			style = {{
				flex: 1,
				backgroundColor: "#FFFFFF",
			}}>
			<ScrollView  
				style = {{
					flex: 1,
					backgroundColor: "#DEC7B3",
				}}
                contentContainerStyle={{
                    paddingTop: 61,
                }}>
				<View 
					style = {{
						backgroundColor: "#F3F3F3",
						paddingVertical: 10,
					}}>
					<TouchableOpacity
                        onPress={() => navigation.navigate('StoreFeedPage')}
                        style={{
                            marginBottom: 7,
                            marginHorizontal: 11,
                        }}
                        >
                         {feeds && feeds.map((feed) => (
                        <FeedDetails key={feed._id} feed={feed} />
                        ))}   
                        
                        </TouchableOpacity>
                    </View>
			</ScrollView>
		</SafeAreaView>
	)
}
