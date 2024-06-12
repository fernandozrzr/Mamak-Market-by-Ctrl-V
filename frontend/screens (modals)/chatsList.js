import {StyleSheet, Text, TouchableOpacity, View, Image, } from 'react-native'
import { useEffect, useState, useRef, useCallback } from 'react'
import { useIsFocused } from '@react-navigation/native'
import Constants from 'expo-constants'
import BottomSheet from '@gorhom/bottom-sheet';
import { FlatList } from 'react-native-gesture-handler'
import chatsData from './chats'

export default function ChatsList( {route, navigation} ) {

    // chat properties: userID (to retreive username and profile_pic), last sent message (50 character limit), timestamp
    const [chats, setChats] = useState([
        {
            userID: 's1',
            username: 'Qiong Provisions',
            profilePic: require('../assets/ShopImage/QiongProvisionIcon.jpg'),
            lastSentMsg: chatsData.s1.messages[chatsData.s1.messages.length -1].msg,
            lastSentTimestamp: chatsData.s1.messages[chatsData.s1.messages.length -1].timestamp,
        },
        {
            userID: 's2',
            username: 'QiJi Provisions',
            profilePic: require('../assets/ShopImage/QiongProvisionsImage.jpg'),
            lastSentMsg: chatsData.s2.messages[chatsData.s2.messages.length -1].msg,
            lastSentTimestamp: chatsData.s2.messages[chatsData.s2.messages.length -1].timestamp,
        },
    ]);
    const isFocused = useIsFocused();

    // for rendering each chat element
    function renderChat({item}) {
        const userID = item.userID;
        console.log(userID)
        return (
            <TouchableOpacity style={styles.chatItem} onPress={() => {
                console.log(userID), 
                navigation.navigate('ChatScreen', [item.userID, item.username, item.profilePic])}}>

                <View style={styles.sellerDeets}>
                    <Image source={item.profilePic} style={styles.sellerPic} />
                    <View style={{flexDirection: 'column', paddingLeft: 5, flex: 1,}}>
                        <Text style={styles.sellerName}> {item.username} </Text>
                        <Text style={{width: '80%'}} numberOfLines={1}> {item.lastSentMsg} </Text>
                    </View>
                    <Text style={styles.text}> {item.lastSentTimestamp} </Text>
                </View>

            </TouchableOpacity>
        )
    }
    
    // useEffect() that listens to isFocused to refresh the page
    useEffect(() => {
        if (route.params?.msgData) {
            console.log(msgData)
            isFocused && setChats(
                {
                    userID: 's1',
                    username: 'Qiong Provisions',
                    profilePic: require('../assets/ShopImage/QiongProvisionIcon.jpg'),
                    lastSentMsg: chatsData.s1.messages[chatsData.s1.messages.length -1].msg,
                    lastSentTimestamp: chatsData.s1.messages[chatsData.s1.messages.length -1].timestamp,
                },
                {
                    userID: 's2',
                    username: 'QiJi Provisions',
                    profilePic: require('../assets/ShopImage/QiongProvisionsImage.jpg'),
                    lastSentMsg: chatsData.s2.messages[chatsData.s2.messages.length -1].msg,
                    lastSentTimestamp: chatsData.s2.messages[chatsData.s2.messages.length -1].timestamp,
                },
            )
        }
    }, [isFocused])

    // open a chat
    function openChat({item}) {
        console.log(item)
        navigation.navigate('ChatScreen', {...item,})
    }

    // for drag down bottom sheet
    const bottomSheetRef = useRef(null)

    const handleSheetChanges = useCallback((index) => {
        console.log('handleSheetChanges', index);
        if (index == -1) {
            navigation.goBack();
        }
    }, [])

    // rendering
    return (
        <BottomSheet ref={bottomSheetRef} onChange={handleSheetChanges} snapPoints={['100%']} enablePanDownToClose style={styles.container}>
            <FlatList
                data={chats} renderItem={renderChat}
                contentContainerStyle={{}}
                ListHeaderComponent={<Text style={{fontSize: 20, textAlign: 'center' }}>Chats</Text>}
                ListFooterComponent={
                    <View style={{ justifyContent: 'center', alignItems: 'center', }}>
                        <Text style={{ paddingTop: 10, textAlign: 'center' }}>You have no more chats.</Text>
                    </View>
                } ListFooterComponentStyle={styles.footerText}
                onEndReached={this._handleLoadMore}
            />
        </BottomSheet>
    )

}

// stylesheet
const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: '#F3F3F3',
        marginTop: Constants.statusBarHeight,
    },
    chatItem: {
        marginTop: 20,
        margin: 20,
        width: '90%',
    },
    sellerDeets: {
        padding: 5,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    sellerName: {
        fontSize: 15,
        fontWeight: 'bold',
    },
    sellerPic: {
        width: 50,
        height: 50,
        borderRadius: 50 / 2,
        overflow: 'hidden',
    }
})