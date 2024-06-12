import React, { useState } from "react";
import { SafeAreaView, View, ScrollView, Image, Text, TextInput, TouchableOpacity, StyleSheet, Platform } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker'; // Import DateTimePicker\
import { useListsContext } from "../hooks/useListsContext";
import * as ImagePicker from "expo-image-picker";

const formatDate = (date) => {
    const formattedDate = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
    return formattedDate;
};

export default function ShopPageItem({ navigation, route }) {

    const item = route.params.item;
    const [description, setDescription] = useState(item.description);
    const [expiryDate, setExpiryDate] = useState(new Date(item.expirydate)); // Convert to Date object
    const [cost, setCost] = useState(item.cost);
    const [qty, setQty] = useState(item.quantity);
    const [showDatePicker, setShowDatePicker] = useState(false); // State for datepicker visibility
    const [dateText, setDateText] = useState(formatDate(expiryDate)); // Initial date text
    const [itemName, setItemName] = useState(item.item);
    const { dispatch } = useListsContext()
    const [image, setImage] = useState(item.img);
    
    const handleAdd = () => {
        setQty(qty + 1);
    };

    const handleSubtract = () => {
        if (qty > 1) {
            setQty(qty - 1);
        }
    };

    const changeImage = async () => {
        try {
          const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
          if (status !== 'granted') {
            alert('Sorry, we need camera roll permissions to make this work!');
            return;
          }
          let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
          });
          if (!result.canceled) {
            setImage(result.assets[0].uri.toString());
          }
        } catch (error) {
          alert("Error changing image: " + error.message);
        }
      };



    const saveEdit = async () => {
        try {
            const response = await fetch(`http://192.168.10.71:4000/api/listing/${item._id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    item: itemName,
                    description: description,
                    expirydate: expiryDate.toISOString(), // Convert to ISO string
                    cost: parseFloat(cost),
                    quantity: qty,
                    img: image
                }),
            });
            const json = await response.json();
            if (response.ok) {
                console.log(json._id);
                setItemName('');
                setDescription('');
                setCost('');
                setQty(1);
                
                dispatch({ type: 'PATCH_LIST', payload: json })
                console.log('Item updated successfully');

                navigation.navigate('SellerProfile');

            } else {
                console.error('Error updating item:', response.statusText);
            }
        } catch (error) {
            console.error('Error updating item:', error);
        }
    };

    const deleteItem = async () => {
        try {
            const response = await fetch(`http://192.168.10.71:4000/api/listing/${item._id}`, {
                method: 'DELETE',
            });
            const json = await response.json();
            if (response.ok) {
                console.log(json)
                console.log('Item deleted successfully', json.deletedListing);
                dispatch({ type: 'DELETE_LIST', payload: json.deletedListing })

                navigation.navigate('SellerProfile');
            } else {
                console.error('Error deleting item:', response.statusText);
            }
        } catch (error) {
            console.error('Error deleting item:', error);
        }
    };



    const handleDateChange = (event, selectedDate) => {
        const currentDate = selectedDate || expiryDate;
        setShowDatePicker(Platform.OS === 'ios');
        setExpiryDate(currentDate);
        setDateText(formatDate(currentDate));
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView
                style={{ flex: 1, backgroundColor: "#DEC7B3" }}
                contentContainerStyle={{ paddingBottom: 20 }}
            >
                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 80 }}>
                    <View style={styles.container}>
                        <Image source={{uri:image}} style={styles.image} />
                        <TouchableOpacity style={styles.iconContainer}>
                            <FontAwesome onPress={changeImage} name="edit" size={24} color="black" />
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: "row", backgroundColor: "#D9D9D9", borderRadius: 8, paddingVertical: 6, paddingHorizontal: 12, marginHorizontal: 20, marginTop: 10, width: "80%", justifyContent: 'space-between' }}>
                        <TextInput
                            selectionColor="black"
                            style={{ color: "black", fontSize: 15, fontWeight: "bold" }}
                            value={itemName}
                            onChangeText={setItemName}
                        />
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", marginTop: 20, marginBottom: 5, marginHorizontal: 47 }}>
                        <Text style={{ color: "black", fontSize: 24, fontWeight: "bold" }}>
                            {"Description"}
                        </Text>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", marginBottom: 10, marginHorizontal: 23 }}>
                        <View style={{ width: 159, height: 1, backgroundColor: "black" }} />
                    </View>
                    <View style={{ flexDirection: "row", backgroundColor: "#D9D9D9", borderRadius: 10, paddingVertical: 6, paddingHorizontal: 12, marginHorizontal: 20, marginBottom: 10, width: "80%", justifyContent: 'space-between', height: 150, alignItems: 'flex-start' }}>
                        <TextInput
                            selectionColor="black"
                            style={{ color: "black", fontSize: 18, fontWeight: "bold", padding: 10 }}
                            value={description}
                            onChangeText={setDescription}
                        />
                    </View>
                    <View style={{ alignItems: 'flex-start', flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20 }}>
                        <Text style={{ color: "black", fontSize: 15, fontWeight: "bold" }}>Expiry Date</Text>

                    </View>
                    <View style={{ flexDirection: "row", backgroundColor: "#D9D9D9", borderRadius: 8, paddingVertical: 6, paddingHorizontal: 12, marginHorizontal: 20, marginBottom: 10, width: "80%", justifyContent: 'space-between' }}>
                        <Text style={{ color: "black", fontSize: 15, fontWeight: "bold" }}>{dateText}</Text>
                        {showDatePicker && (
                            <DateTimePicker
                                value={expiryDate} // Use expiryDate as value
                                mode="date"
                                display="spinner"
                                onChange={handleDateChange}
                                minimumDate={new Date()}
                            />
                        )}
                        <TouchableOpacity onPress={() => setShowDatePicker(true)}>
                            <Image source={require('../assets/Date_range.png')} resizeMode="cover" style={{ width: 20, height: 20 }} />
                        </TouchableOpacity>
                    </View>
                    <Text style={{ color: "black", fontSize: 15, fontWeight: "bold" }}>Price ($)</Text>
                    <View style={{ flexDirection: "row", backgroundColor: "#D9D9D9", borderRadius: 8, paddingVertical: 6, paddingHorizontal: 12, marginHorizontal: 20, marginBottom: 10, width: "80%", justifyContent: 'space-between' }}>
                        <TextInput
                            selectionColor="black"
                            style={{ color: "black", fontSize: 15, fontWeight: "bold" }}
                            value={cost.toString()}
                            onChangeText={setCost}
                        />
                    </View>
                    <View style={{ marginTop: 20, flexDirection: 'row' }}>
                        <View style={{ marginLeft: 10, height: 40, width: 200, backgroundColor: 'white', borderRadius: 10, justifyContent: 'center', alignItems: 'center' }} >
                            <Text style={styles.font}>Qty: {qty}</Text>
                        </View>
                        <TouchableOpacity
                            onPress={handleAdd}
                            style={{ marginLeft: 10, height: 40, width: 40, backgroundColor: '#5DDD21', borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                            <FontAwesome name="plus-square-o" size={24} color="black" />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={handleSubtract}
                            style={{ marginLeft: 10, height: 40, width: 40, backgroundColor: 'red', borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                            <FontAwesome name="minus-square-o" size={24} color="black" />
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity
                        onPress={saveEdit}
                        style={{ marginTop: 20, height: 40, width: 280, backgroundColor: 'blue', borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>Save Edits</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={deleteItem}
                        style={{ marginTop: 20, height: 40, width: 280, backgroundColor: 'red', borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>Delete item</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    font: {
        color: "black",
        fontSize: 20,
        fontWeight: "bold",
    },
    container: {
        position: 'relative',
        width: 230,  // Adjust based on your image size
        height: 230, // Adjust based on your image size
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 10,
    },
    iconContainer: {
        position: 'absolute',
        top: 10,
        right: 10,
    },
});
