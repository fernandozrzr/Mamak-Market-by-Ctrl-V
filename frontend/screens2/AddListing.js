import React, { useState } from "react";
import { StyleSheet, SafeAreaView, View, ScrollView, Image, Text, TextInput, TouchableOpacity, Platform } from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';
import * as ImagePicker from "expo-image-picker";

export default function AddListing({ navigation }) {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [text, setText] = useState('Select Date');
  const [count, setCount] = useState(1);
  const [image, setImage] = useState(null);

  const uploadImage = async () => {
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
        setImage(result.assets[0].uri);
      }
    } catch (error) {
      alert("Error uploading image: " + error.message);
    }
  };

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);

    let tempDate = new Date(currentDate);
    let fDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear();
    setText(fDate);
    console.log(fDate);
    setShow(false);
  };

  const countChange= () => {
	setCount(count+1);
  }

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F3F3F3" }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1, paddingBottom:100 }}>
        <View style={{ marginTop: 30, marginLeft: 40, marginRight: 15 }}>
          {image ? (
            <Image
              source={{ uri: image }}
              resizeMode="cover"
              style={{
                width: 350,
                height: 250,
                aspectRatio: 5 / 4,
              }}
            />
          ) : (
            <Image
              source={require('../assets/AddImageChecker.png')}
              resizeMode="cover"
              style={{
                width: 350,
                height: 250,
                aspectRatio: 5 / 4,
              }}
            />
          )}
          <TouchableOpacity onPress={uploadImage}>
            <Text style={{
              fontWeight: "bold",
              marginTop: -125,
              marginLeft: 125,
              color: 'black',
              backgroundColor: 'rgba(255, 255, 255, 0.5)',
              padding: 5,
              borderRadius: 5,
            }}>
              Add Image
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{
          width: '70%',
          height: '18%',
          backgroundColor: "#D9D9D9",
          borderRadius: 10,
          marginBottom: 20,
          padding: 10,
          marginTop: 40,
          marginLeft: 60,
        }}>
          <TextInput placeholder="Add description..." />
        </View>
        <Text style={{ fontWeight: "bold", marginLeft: 60 }}>{"Expiry Date"} </Text>
        <View style={{
          width: '70%',
          backgroundColor: "#D9D9D9",
          borderRadius: 10,
          marginBottom: 10,
          padding: 10,
          marginTop: 10,
          marginLeft: 60,
        }}>
          <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            flexWrap: 'nowrap',
            justifyContent: 'space-between',
          }}>
            <Text style={{
              flex: 1,
              paddingRight: 10,
            }}>{text} </Text>

            <TouchableOpacity onPress={() => showMode('date')}>
              <Image
                source={require('../assets/Date_range.png')}
                resizeMode="cover"
                style={{
                  width: 20,
                  height: 20,
                }}
              />
            </TouchableOpacity>
            {show && (<DateTimePicker
              testID='dateTimePicker'
              value={date}
              mode={mode}
              is24Hour={true}
              display='default'
              onChange={onChange}
              minimumDate={new Date()}
            />)}

          </View>
        </View>

        <Text style={{ fontWeight: "bold", marginLeft: 60 }}>{'Price'} </Text>

        <View style={{
          width: '70%',
          backgroundColor: "#D9D9D9",
          borderRadius: 10,
          marginBottom: 20,
          padding: 10,
          marginTop: 10,
          marginLeft: 60,
        }}>
          <TextInput placeholder="$0.00" />
        </View>

        <View style={{ flexDirection: "row", flexWrap: 'wrap' }}>
          <View style={{
            width: '40%',
            height: '55%',
            backgroundColor: "#FFFFFF",
            borderRadius: 10,
            marginBottom: 20,
            padding: 10,
            marginTop: 10,
            marginLeft: 60,
          }}>
            <Text style={{ textAlign: 'center', fontWeight: "bold", fontSize: 15 }}>
              {'Qty:'+count}
            </Text>
          </View>
          <TouchableOpacity onPress={() => setCount(count + 1)}style={{
            width: 40,
            height: 40,
            alignItems: "center",
            backgroundColor: "#1fd655",
            borderRadius: 8,
            paddingVertical: 12,
            marginBottom: 26,
            marginHorizontal: 18,
            marginTop: 10
          }}>
            <Image source={require('../assets/Add_ring.png')} resizeMode="cover"
              style={{
                width: 20,
                height: 20,
                aspectRatio: 5 / 4,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setCount(count - 1)} style={{
            width: 40,
            height: 40,
            alignItems: "center",
            backgroundColor: "#f01e2c",
            borderRadius: 8,
            paddingVertical: 12,
            marginBottom: 26,
            marginHorizontal: 18,
            marginTop: 10,
            marginLeft: 1
          }}>
            <Image source={require('../assets/Remove.png')} resizeMode="cover"
              style={{
                width: 20,
                height: 20,
                aspectRatio: 5 / 4,
              }}
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate('SellerProfile')}
          style={{
            alignItems: "center",
            backgroundColor: "#4112ff",
            width: '70%',
            borderRadius: 10,
            marginBottom: 10,
            padding: 10,
            marginTop: 10,
            marginLeft: 60,
          }}
        >
          <Text style={{ color: "#FFFFFF", fontSize: 20 }}>
            {"Upload"}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('SellerProfile')}
          style={{
            alignItems: "center",
            backgroundColor: "#f01e2c",
            width: '70%',
            borderRadius: 10,
            marginBottom: 10,
            padding: 10,
            marginTop: 10,
            marginLeft: 60,
          }}
        >
          <Text style={{ color: "#FFFFFF", fontSize: 20 }}>
            {"Cancel"}
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  )
}
