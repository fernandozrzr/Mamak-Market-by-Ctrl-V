import React from "react";
import { SafeAreaView, View, ScrollView, Text, Image, ActivityIndicator } from "react-native";
import Animated, {SharedTransition, withSpring} from "react-native-reanimated";

export default (props) => {

    const customTransition = SharedTransition.custom((values) => {
        'worklet';
        return {
            height: withSpring(values.targetHeight),
            width: withSpring(values.targetWidth),
            paddingTop: withSpring('25%'),
            originX: withSpring(values.targetOriginX),
            originY: withSpring(values.targetOriginY),
        };
    })

    return (
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: "#FFFFFF",
            }}>
            <Animated.ScrollView
                style={{
                    backgroundColor: "#DEC7B3",
                    paddingTop: '50%',
                }}
                sharedTransitionTag='loginIcon'
                sharedTransitionStyle={customTransition}
                >
                <View
                    style={{
                        // borderColor: "#5E27FD",
                        // borderWidth: 1,
                        justifyContent: 'center', // Align image and text in the center vertically
                        alignItems: 'center', // Align image and text in the center horizontally
                    }}>
                    <Image
                        source={require('../assets/AppIcon2.png')}
                        style={{
                            flex: 1,
                            width: 250, // Adjust width as needed
                            height: 300, // Adjust height as needed
                            marginBottom: 10,
                        }}
                        resizeMode="cover" // or any other resize mode you prefer
                    />
                    <ActivityIndicator size='large' />
                </View>
                {/* <Text
                    style={{
                        color: "#EA1B1B",
                        fontSize: 64,
                        fontWeight: "bold",
                        marginTop: -20,
                        textAlign: 'center',
                    }}>
                    {"妈妈店"}
                </Text>
                <Text
                    style={{
                        color: "#6256AA",
                        fontSize: 32,
                        marginTop: 30,
                        textAlign: 'center',
                    }}>
                    {"Mamak Market"}
                </Text> */}
                <View
                    style={{
                        height: 1,
                    }}>
                </View>
            </Animated.ScrollView>

        </SafeAreaView>
    )
}