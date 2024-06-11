import React, { useEffect, useState } from "react";
import { SafeAreaView, View, Image, Text, TouchableOpacity } from "react-native";
import { useFeedsContext } from "../hooks/useFeedsContext";

const FeedDetails = ({ feed }) => {
    const [timeElapsed, setTimeElapsed] = useState("");
    const [likes, setLikes] = useState(feed.likes);

    useEffect(() => {
        const updateElapsedTime = () => {
            const postTime = new Date(feed.createdAt); // Using createdAt timestamp
            const currentTime = new Date();
            const timeDiff = currentTime - postTime;

            const minutes = Math.floor(timeDiff / 60000);
            const hours = Math.floor(minutes / 60);
            const days = Math.floor(hours / 24);

            if (days > 0) {
                setTimeElapsed(`${days} day${days > 1 ? 's' : ''} ago`);
            } else if (hours > 0) {
                setTimeElapsed(`${hours} hour${hours > 1 ? 's' : ''} ago`);
            } else if (minutes > 0) {
                setTimeElapsed(`${minutes} minute${minutes > 1 ? 's' : ''} ago`);
            } else {
                setTimeElapsed("Just now");
            }
        };

        // Initial calculation
        updateElapsedTime();

        // Update every minute
        const interval = setInterval(updateElapsedTime, 60000);

        // Cleanup interval on unmount
        return () => clearInterval(interval);
    }, [feed.createdAt]);

    const {dispatch} = useFeedsContext()

    const handleLike = async () => {
        setLikes(likes + 1);
        // Update the likes count locally
        const response = await fetch('http://192.168.10.71:4000/api/feed/' + feed._id, {
            method: 'PATCH',       
            body: JSON.stringify({
                
                
                likes: likes,
            }),
            headers: {
            'Content-Type': 'application/json'
            }
        })
        const json = await response.json()
       
        if(response.ok){
            dispatch({type: 'PATCH_FEED' , payload: json})
        }
        // Optional: Update the likes count in the backend
        // fetch('/api/updateLikes', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({ id: feed.id, likes: likes + 1 }),
        // })
        // .then(response => response.json())
        // .then(data => {
        //     console.log('Success:', data);
        // })
        // .catch((error) => {
        //     console.error('Error:', error);
        // });
    };

    return (
        <SafeAreaView>
            <View style={{ backgroundColor: "#F3F3F3", paddingVertical: 10 }}>
                <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 7, marginHorizontal: 11 }}>
                    <View style={{ width: 75, height: 75, borderRadius: 75 / 2, overflow: 'hidden' }}>
                        <Image
                            source={require('../assets/FeedPageImage/Feed3ShopIcon.jpg')}
                            style={{ width: '100%', height: '100%', resizeMode: "cover" }}
                        />
                    </View>
                    <View style={{ flex: 1, marginLeft: 20 }}>
                        <Text style={{ color: "#000000", fontSize: 16, marginBottom: 6, fontWeight: "bold" }}>
                            {feed.title}
                        </Text>
                        <Text style={{ color: "#000000", fontSize: 14, width: 260 }}>
                            {feed.content}
                        </Text>
                    </View>
                </View>
                <Image
                    source={require('../assets/FeedPageImage/Feed3Shop.png')}
                    resizeMode="cover"
                    style={{ height: 150, width: 362, marginLeft: 15 }}
                />
                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginHorizontal: 15, marginTop: 6 }}>
                    <Text style={{ color: "#000000", fontSize: 14 }}>
                        {`${likes} Like${likes !== 1 ? 's' : ''}`}
                    </Text>
                    <Text style={{ color: "#000000", fontSize: 14 }}>
                        {timeElapsed}
                    </Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 15, marginTop: 6 }}>
                    <TouchableOpacity onPress={handleLike}>
                        <Image
                            source={require('../assets/FeedPageImage/likeIcon.jpg')}
                            resizeMode="cover"
                            style={{ height: 18, width: 18 }}
                        />
                    </TouchableOpacity>
                    <Image
                        source={require('../assets/FeedPageImage/shareIcon.png')}
                        resizeMode="cover"
                        style={{ height: 18, width: 18, marginLeft: 15 }}
                    />
                </View>
            </View>
        </SafeAreaView>
    );
};

export default FeedDetails;