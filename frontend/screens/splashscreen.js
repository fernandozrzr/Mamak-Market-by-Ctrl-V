import React from "react";
import { SafeAreaView, View, ScrollView, Text, } from "react-native";
export default (props) => {
	return (
		<SafeAreaView 
			style = {{
				flex: 1,
				backgroundColor: "#FFFFFF",
			}}>
			<ScrollView  
                style = {{
                    backgroundColor: "#DEC7B3",
                    paddingTop: 372,
                    paddingHorizontal: 79,
                }}>
                <Text 
                    style = {{
                        color: "#EA1B1B",
                        fontSize: 64,
                        fontWeight: "bold",
                        marginTop: -20,
                        marginLeft: 22,
                    }}>
                    {"妈妈店"}
                </Text>
                <Text 
                    style = {{
                        color: "#6256AA",
                        fontSize: 32,
                        marginTop: 30,
                        marginLeft: 14,
                    }}>
                    {"Mamak Market"}
                </Text>
                <View 
                    style = {{
                        height: 1,
                    }}>
                </View>
            </ScrollView>

		</SafeAreaView>
	)
}