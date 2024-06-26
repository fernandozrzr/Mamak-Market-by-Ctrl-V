import * as React from 'react';
import { Text, View, SafeAreaView, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';



export default function MarketPage({ navigation }) {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#DEC7B3",
      }}
    >
      <ScrollView
        style={{
          flex: 1,
          backgroundColor: "white",
        }}
        contentContainerStyle={{

          paddingBottom: 20, // Adjust as needed
        }}
      >
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: "#DEC7B3",
            height: 300,
          }}
        >
          <View
            style={{
              width: 140,
              height: 140,
              borderRadius: 140 / 2,
              overflow: 'hidden',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 50,
            }}
          >
            <Image
              source={require('../assets/ShopImage/QiongProvisionIcon.jpg')}
              style={{
                width: '100%',
                height: '100%',
                resizeMode: "cover",
              }}
            />
          </View>
          <Text
            style={{
              color: "#000000",
              fontSize: 24,
              textAlign: 'center',
              marginTop: 10,
              fontStyle: "bold",
            }}
          >Qiong Provisions </Text>
          <TouchableOpacity onPress={() => navigation.navigate('ChatScreen', ['s1', 'Qiong Provisions', require('../assets/ShopImage/QiongProvisionIcon.jpg')])}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#D9D9D9",
              borderRadius: 8,
              paddingVertical: 6,
              paddingHorizontal: 12,
              marginBottom: 20,
              marginHorizontal: 20,
              marginTop: 10,
              width: "40%",
              justifyContent: "center",
            }}>
            <AntDesign name="message1" size={24} color="black" />
            <View
              style={{
                width: 10,
              }}
            >

            </View>
            <Text style={{ fontSize: 20 }}>Message</Text>

          </View>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 20,
            marginBottom: 5,
            marginHorizontal: 47,
          }}
        >
          <Text
            style={{
              color: "black",
              fontSize: 20,
            }}
          >
            {"Listings"}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 10,
            marginHorizontal: 23,
          }}
        >
          <View
            style={{
              width: 159,
              height: 1,
              backgroundColor: "black",
            }}
          />
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "#D9D9D9",
            borderRadius: 8,
            paddingVertical: 6,
            paddingHorizontal: 12,
            marginBottom: 20,
            marginHorizontal: 20,
            marginTop: 20,
            width: "90%",
          }}
        >
          <View
            style={{
              width: 14,
              marginRight: 15,
            }}
          >
            <Image
              source={require('../assets/ShopImage/search-icon.png')}
              style={{
                width: 16,
                height: 16,
              }}
              resizeMode="cover"
            />
          </View>
          <TextInput
            style={{
              color: "#727272",
              fontSize: 15,
              flex: 1,
            }}
            placeholder="Search listings..."
            placeholderTextColor="#727272"
          />
        </View>
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
          onPress={() => navigation.navigate('ShopPageItem')}

        >
          <Text
            style={{
              color: "black",
              fontSize: 15,
              fontStyle: "bold",
            }}
          >Apple (5pcs)</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ textDecorationLine: 'line-through', fontSize: 15 }}>$2.00</Text>
            <Text style={{ marginLeft: 5, fontSize: 15, color: 'green' }}>$1.20</Text>
          </View>
        </TouchableOpacity>
        <View
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
        >
          <Text
            style={{
              color: "black",
              fontSize: 15,
              fontStyle: "bold",
            }}
          >Assorted Biscuits</Text>
          <Text
            style={{
              color: "black",
              fontSize: 15,
              fontStyle: "bold",
            }}
          >$4.50</Text>
        </View>
        <View
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
        >
          <Text
            style={{
              color: "black",
              fontSize: 15,
              fontStyle: "bold",
            }}
          >White Bread</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ textDecorationLine: 'line-through', fontSize: 15 }}>$2.30</Text>
            <Text style={{ marginLeft: 5, fontSize: 15, color: 'green' }}>$1.80</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 20,
            marginBottom: 5,
            marginHorizontal: 47,
          }}
        >
          <Text
            style={{
              color: "black",
              fontSize: 20,
            }}
          >
            {"Location"}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 10,
            marginHorizontal: 23,
          }}
        >
          <View
            style={{
              width: 159,
              height: 1,
              backgroundColor: "black",
            }}
          />
        </View>
        <View style={{
          flex: 1,
          justifyContent: 'center', // Center horizontally
          alignItems: 'center',
          marginTop: -40,
        }}>
          <View style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            height: 200,
            width: "90%",
            backgroundColor: "#D9D9D9",
            borderRadius: 8,
          }}>
            <Image
              source={require('../assets/map.png')}
              style={{
                width: "100%", // Adjust width as needed
                height: "100%", // Adjust height as needed
                borderRadius: 8,
              }}
            />
          </View>
        </View>


      </ScrollView>
    </SafeAreaView>
  );
}
