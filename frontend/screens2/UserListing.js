import * as React from 'react';
import { Text, TouchableOpacity, View, Image } from 'react-native';
import OrdersList from '../screens (modals)/ordersList';

export default function App( {navigation} ) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity onPress={() => navigation.navigate(OrdersList)}>
                <Image
                    source={require('../assets/ShopImage/shoppingCart.png')}
                    style={{
                        width: 19,
                        height: 19,
                    }}
                />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate(OrdersList)}>
                <Image
                    source={require('../assets/ShopImage/chatIcon.png')}
                    style={{
                        width: 19,
                        height: 19,
                    }}
                />
            </TouchableOpacity>
            <Text>User Listing</Text>
        </View>
    );
}
