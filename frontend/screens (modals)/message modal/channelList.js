import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StyleSheet, Text, TouchableOpacity, View, Image, } from 'react-native'
// for spacing from phone's status bar
import Constants from 'expo-constants'
// for bottom sheet view
import BottomSheet, { BottomSheetView, BottomSheetFlatList } from '@gorhom/bottom-sheet';
import { ScrollView, FlatList, GestureHandlerRootView } from 'react-native-gesture-handler'
// for channels list & chat
import { Chat, OverlayProvider, ChannelList, Channel, MessageList, MessageInput, } from 'stream-chat-react-native'
import { StreamChat } from 'stream-chat'
import { chatApiKey, chatUserId } from './chat client/chatConfig'
import { useChatClient } from './chat client/useChatClient'
import { ChannelProvider } from './channelContext'
import { useChannelContext } from './channelContext'

const Stack = createStackNavigator();

const filters = {
    members: {
        '$in': [chatUserId]
    },
}

const sort = {
    last_message_at: -1,
}

const ChannelScreen = props => {
    return null
}

const ChannelListScreen = props => {
    const { setChannel } = useChannelContext();
    return (
        <ChannelList filters={filters} sort={sort} 
            onSelect={ (channel) => {
                const { navigation } = props;
                setChannel(channel)
                navigation.navigate('ChannelScreen')
            }} />
    )
}

const chatClient = StreamChat.getInstance(chatApiKey)

const NavigationStack = () => {
    const { clientIsReady } = useChatClient();

    if (!clientIsReady) {
        return <Text>Loading chat...</Text>
    }
    
    return (
        <OverlayProvider>
            <Chat client={chatClient}>
                <Stack.Navigator>
                    <Stack.Screen name="ChannelList" component={ChannelListScreen} />
                    <Stack.Screen name="ChannelScreen" component={ChannelScreen} />
                </Stack.Navigator>
            </Chat>
        </OverlayProvider>
    )
}

export default function ChannelList ( {navigation} ) {

    return (
        <ChannelProvider>
            <SafeAreaView style={{flex:1}}>
                <NavigationContainer>
                    <NavigationStack />
                </NavigationContainer>
            </SafeAreaView>
        </ChannelProvider>
    )

}