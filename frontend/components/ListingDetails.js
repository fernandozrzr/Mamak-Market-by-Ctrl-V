import React from 'react';
import { Text, TouchableOpacity, Image } from 'react-native';

const ListingDetails = ({ listing, navigation }) => {
    return (
        <TouchableOpacity
            onPress={() => navigation.navigate('ShopPage', { user: listing.user })}
            style={{
                width: '48%',
                backgroundColor: "white",
                borderRadius: 10,
                marginBottom: 20,
                padding: 10,
            }}
        >

            <Image
                source={require('../assets/ShopImage/QiongProvisionIcon.jpg')}
                resizeMode='cover'
                style={{
                    width: '140',
                    height: 140,
                    borderRadius: 10, // Half of the height
                    marginBottom: 10,
                    borderWidth: 1,
                    borderColor: "#000000",
                }}
            />
            <Text
                style={{
                    color: "#000000",
                    fontSize: 14,
                    textAlign: 'center',
                }}
            >
                {listing.user}
            </Text>
        </TouchableOpacity >
    );
}

export default ListingDetails;