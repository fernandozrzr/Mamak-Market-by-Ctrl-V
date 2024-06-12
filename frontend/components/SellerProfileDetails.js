import React from 'react';
import { Text, TouchableOpacity, Image } from 'react-native';

const SellerProfileDetails = ({ item, navigation }) => {

    return (
        <TouchableOpacity
            onPress={() => navigation.navigate('ShopPageItemEdit', { item: item })}
            style={{
                width: '48%',
                backgroundColor: "#D9D9D9",
                borderRadius: 10,
                marginBottom: 20,
                padding: 10,
            }}
        >
            <Image
                source={require('../assets/ShopImage/apple.jpg')}
                resizeMode="stretch"
                style={{
                    width: '100%',
                    height: 140,
                    borderRadius: 10,
                    marginBottom: 10,
                }}
            />
            <Text
                style={{
                    color: "#000000",
                    fontSize: 14,
                    textAlign: 'center',
                }}
            >
                {item.item}
            </Text>
        </TouchableOpacity>
    );
}

export default SellerProfileDetails;
