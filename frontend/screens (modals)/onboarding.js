import React from 'react';
import { StyleSheet, SafeAreaView, Image, View, Text } from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Onboarding({navigation}) {
    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: '#DEC7B2',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <Text style={{
                fontWeight: 'bold',
                fontSize: 50,
                color: '#FFFFFF',
            }}>Hello</Text>
            <Text style={{
                fontWeight: 'bold',
                fontSize: 20,
                color: '#FFFFFF',
            }}>Welcome to Mamak Market</Text>
            <Text style={{
                fontWeight: 'bold',
                padding: 5,
            }}>Would you like to learn more about the app?</Text>
            <View style={{
                padding: 5,
                flexDirection: 'column',
            }}>
                <TouchableOpacity style={{
                    backgroundColor: 'green',
                    margin: 10,
                    paddingVertical: 5,
                    paddingHorizontal: 10,
                }}>
                    <Text style={{
                        textAlign: 'center',
                        fontSize: 15,
                        color: '#FFFFFF',
                    }}>Let's go!</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{
                    backgroundColor: 'red',
                    margin: 10,
                    paddingVertical: 5,
                    paddingHorizontal: 10,
                }} onPress={() => {navigation.navigate('loginUser')}}>
                    <Text style={{
                        textAlign: 'center',
                        fontSize: 15,
                        color: '#FFFFFF',
                    }}>No thanks</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}