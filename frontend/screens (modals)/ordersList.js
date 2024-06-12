import {StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import { useEffect, useState, useRef, useCallback } from 'react'
import Constants from 'expo-constants'
import BottomSheet, { BottomSheetView, BottomSheetFlatList } from '@gorhom/bottom-sheet';
import { ScrollView, FlatList } from 'react-native-gesture-handler'

export default function OrdersList( {navigation} ) {

    const [orders, setOrders] = useState([
        {
            orderID: 1,
            shop: 'Qiong Provisions',
            item: 'Apples (5pc)',
            image: require('../assets/ShopImage/apple.jpg'),
            quantity: 1,
            collectionDate: '01/01/2025',
        },
        {
            orderID: 2,
            shop: 'QiJi Provisions',
            item: 'Oranges',
            image: require('../assets/ShopImage/oranges.jpg'),
            quantity: 1,
            collectionDate: '02/01/2025',
        },
    ]); // replace dummy data w/ user order records from database here

    // for rendering each order item element
    function renderOrder({item}) {
        return (
            <View style={styles.orderItem}>

                <View style={styles.sellerBox}>
                    <TouchableOpacity onPress={() => navigation.navigate()}>
                        <Image source={require('../assets/ShopImage/QiongProvisionsImage.jpg')} style={styles.sellerPic} />
                    </TouchableOpacity>
                    <Text style={styles.sellerName}> {item.shop} </Text>
                </View>

                <View style={styles.itemBox}>
                    <TouchableOpacity onPress={() => navigation.navigate()}>
                        <Image source={item.image} style={styles.itemPic} />
                    </TouchableOpacity>
                    <View style={styles.itemDetails}>
                        <Text style={styles.itemTitle}> {item.item} </Text>
                        <Text style={styles.text}> Quantity: {item.quantity} </Text>
                        <Text style={styles.text}> Collection Date: {item.collectionDate} </Text>
                    </View>
                </View>

            </View>
        )
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
                data={orders} renderItem={renderOrder}
                contentContainerStyle={{ paddingBottom: 50, }}
                ListHeaderComponent={<Text style={{fontSize: 20, textAlign: 'center' }}>Orders</Text>}
                ListFooterComponent={
                    <View style={{ justifyContent: 'center', alignItems: 'center', }}>
                        <Text style={{ paddingTop: 10, textAlign: 'center' }}>You have no more orders.</Text>
                        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.closeButton}>
                            <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold'}}>Close</Text>
                        </TouchableOpacity>
                    </View>
                } ListFooterComponentStyle={styles.footerText}
                onEndReached={this._handleLoadMore}/>
        </BottomSheet>
    )
}


// stylesheet
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#F3F3F3',
        marginTop: Constants.statusBarHeight,
    },
    orderList: {
        marginTop: 20,
        width: '90%',
    },
    orderItem: {
        backgroundColor: '#D9D9D9',
        padding: 10,
        margin: 10,
        borderRadius: 5,
    },
    sellerBox: {
        padding: 5,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    sellerPic: {
        width: 50,
        height: 50,
        borderRadius: 50 / 2,
        overflow: 'hidden',
    },
    sellerName: {
        paddingLeft: 10,
        fontSize: 18,
        fontWeight: 'bold',
    },
    itemBox: {
        padding: 5,
        flexDirection: 'row',
    },
    itemDetails: {
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        paddingLeft: 5,
    },
    itemPic: {
        width: 70,
        height: 70,
        borderRadius: 10,
    },
    itemTitle: {

    },
    text: {
        color: '#727272'
    },
    closeButton: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#727272',
        borderRadius: 10,
        padding: 12,
        marginTop: 20,
        margin: 10,
        width: '70%',
    },
    footerText: {
        textAlign: 'center',
        fontSize: 20,
    },
})