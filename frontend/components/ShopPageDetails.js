import React from 'react';
import { Text, TouchableOpacity, Image, View } from 'react-native';

import { useState } from 'react';

const ShopPageDetails = ({ item, navigation }) => {

    const [condtion, setCondition] = useState(false);
    const daysPosted = diffInDays(new Date(item.createdAt), new Date(item.expirydate));
    const daysRemaining = diffInDays(new Date(), new Date(item.expirydate));

    function diffInDays(lowerdate, upperdate) {
        const lower = new Date(lowerdate);
        const upper = new Date(upperdate);

        const formattedLower = new Intl.DateTimeFormat('en-UK', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        }).format(lower);
        const formattedUpper = new Intl.DateTimeFormat('en-UK', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        }).format(upper);

        const days = Math.round((upper - lower) / (1000 * 60 * 60 * 24))
        return days;
    }

    function dynamicPricing(item, setCondition) {
        const currentDate = new Date(); // Current date
        const expiryDate = new Date(item.expirydate); // Expiry date
        const datePosted = new Date(item.createdAt); // Date item was posted

        // Format dates for display

        const daysPosted = diffInDays(datePosted, expiryDate);
        const discount = item.cost / daysPosted;
        const remainingDays = diffInDays(currentDate, expiryDate);

        const finalPrice = discount * remainingDays;
        return finalPrice.toFixed(2);
    }

    return (
        <TouchableOpacity
            style={{
                flexDirection: "row",
                backgroundColor: "#D9D9D9",
                borderRadius: 8,
                paddingVertical: 6,
                paddingHorizontal: 12,
                marginHorizontal: 20,
                marginBottom: 10,
                width: "90%",
                justifyContent: 'space-between', // Aligns children to the far ends
            }}
            onPress={() => navigation.navigate('ShopPageItem', { item: item })}

        >
            <Text
                style={{
                    color: "black",
                    fontSize: 15,
                    fontStyle: "bold",
                }}
            >{item.item}</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                {((daysPosted !== daysRemaining) || (daysRemaining > daysPosted)) && <Text style={{ textDecorationLine: 'line-through', fontSize: 15 }}>${item.cost}</Text>}
                <Text style={{ marginLeft: 5, fontSize: 15, color: 'green' }}>${dynamicPricing(item, setCondition)}</Text>
            </View>
        </TouchableOpacity>
    );
}

export default ShopPageDetails;