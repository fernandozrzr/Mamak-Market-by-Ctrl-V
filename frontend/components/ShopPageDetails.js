import React from 'react';
import { Text, TouchableOpacity, Image, View } from 'react-native';

const ShopPageDetails = ({ item, navigation }) => {
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
                <Text style={{ textDecorationLine: 'line-through', fontSize: 15 }}>${item.cost.toFixed(2)}</Text>
                <Text style={{ marginLeft: 5, fontSize: 15, color: 'green' }}>${(item.cost * 0.7).toFixed(2)}</Text>
            </View>
        </TouchableOpacity>
    );
}

export default ShopPageDetails;