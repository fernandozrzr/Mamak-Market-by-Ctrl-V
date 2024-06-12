import React from 'react';
import { Text, TouchableOpacity, Image } from 'react-native';

const ListingDetails = ({ listing, navigation }) => {
    return (
        <TouchableOpacity
            onPress={() => navigation.navigate('ShopPage', { user: listing.user })}
            style={{
                width: '48%',
                backgroundColor: "white",
                borderRadius: 5,
                marginBottom: 20,
                padding: 5,
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >

            <Image
                source={require('../assets/ShopImage/QiongProvisionIcon.jpg')}
                resizeMode='cover'
                style={{
                    width: 160,
                    height: 160,
                    borderRadius: 5, // Half of the height
                    marginVertical: 10,
                }}
            />
            <Text
                style={{
                    color: "#000000",
                    fontSize: 15,
                    fontWeight: 'bold',
                }}
            >
                {listing.user}
            </Text>
        </TouchableOpacity >
    );
}

export default ListingDetails;