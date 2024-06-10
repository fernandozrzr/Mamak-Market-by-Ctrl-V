import {StyleSheet, Text, TouchableOpacity, View, Image, KeyboardAvoidingView, Platform } from 'react-native'
import { useEffect, useState, useRef, createRef } from 'react'
import Constants from 'expo-constants'
import BottomSheet, { BottomSheetView, BottomSheetFlatList } from '@gorhom/bottom-sheet';
import { ScrollView, FlatList, TouchableWithoutFeedback, TextInput } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context';
import chatsData from './chats'
import { AntDesign } from '@expo/vector-icons'

export default function ChatScreen( {route, navigation} ) {
    
    // message properties: userID (to retrieve username and profile_pic), message, timestamp
    const [messages, setMessages] = useState([]);
    const [text, setText] = useState('');
    const [sellerID, username, profile_pic] = route.params;

    // useEffect() for loading in messages
    useEffect(() => {
        if (chatsData[sellerID]) {
            setMessages(chatsData[sellerID].messages);
        } else {
            console.error('Invalid sellerID: ', sellerID);
        }
    }, [sellerID]) 

    // for rendering each message
    function renderMsg({item}) {
        // if userID = self, else if userID = seller
        let msgSender = item.userID.includes('u');
        return (
            <View style={[styles.messageBox, msgSender ? styles.messageUser : styles.messageSeller]}>
                <Text>{ item.msg }</Text>
                <Text style={{ fontSize: 10, alignSelf: 'flex-end' }}>{ item.timestamp }</Text>
            </View>
        )
    }

    // for sending a new message
    function sendMsg() {
        if (text != '') {
            setMessages([...messages, {
                userID: 'u1',
                msg: text,
                timestamp: '12:59'
            }])
            this.myTextInput.current.clear();
            setText('');
        }
    }

    // for scrolling flatlist to start from latest message
    const flatListRef = useRef();
    flatListRef?.current?.scrollToEnd();

    // reference for clearing text input once entered
    this.myTextInput = createRef();

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView behavior="height">
                <View style={styles.profileBox}>
                    <TouchableOpacity>
                        <Image source={profile_pic} style={styles.sellerPic} />
                    </TouchableOpacity>
                    <Text style={{ fontWeight: 'bold', fontSize: 15, padding: 5,}}>{username}</Text>
                </View>
                <View style={{ height: '80%', }}>
                    <FlatList
                        data={messages} 
                        renderItem={renderMsg}
                        inverted
                        ref={flatListRef}
                        contentContainerStyle={{ paddingBottom: 10, flexDirection: 'column-reverse' }}
                    />
                </View>
                <View style={styles.textBox}>
                    <TextInput 
                        style={{ color: "#727272", fontSize: 12, }}
                        placeholder='Type message here...'
                        placeholderTextColor="#727272"
                        onChangeText={newText => setText(newText)}
                        onSubmitEditing={sendMsg}
                        ref={this.myTextInput}
                    />
                    <AntDesign 
                        name="rightsquare" size={20} color="gray" 
                        style={{ marginLeft: '63%', alignItems: 'flex-start' }}
                        onPress={sendMsg}/>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )

}

// stylesheet
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F3F3F3',
    },
    profileBox: {
        flexDirection: 'row',
        backgroundColor: '#DEC7B3',
        alignItems: 'center',
        padding: 10,
    },
    textBox: {
        backgroundColor: '#D9D9D9',
        height: '5%',
        padding: 10,
        margin: 15,
        flexDirection: 'row',
    },
    messageBox: {
        borderRadius: 5,
        padding: 8,
        margin: 5,
        maxWidth: '75%',
        minWidth: '15%',
    },
    messageSeller: {
        borderBottomLeftRadius: 0,
        backgroundColor: '#D9D9D9',
        alignItems: 'flex-start',
        alignSelf: 'flex-start',
        marginLeft: 15,
    },
    messageUser: {
        borderBottomRightRadius: 0,
        backgroundColor: '#BDECB5',
        alignItems: 'flex-start',
        alignSelf: 'flex-end',
        marginRight: 15,
    },
    sellerPic: {
        width: 50,
        height: 50,
        borderRadius: 50 / 2,
        overflow: 'hidden',
    }
})