import React, { useState } from "react";
import { SafeAreaView, View, Image, Text, TextInput, TouchableOpacity, Alert, ScrollView } from "react-native";
import * as ImagePicker from 'expo-image-picker';
import { useFeedsContext } from "../hooks/useFeedsContext";
import config from "../config"; // Import the configuration file

export default function PostCreation({ navigation }) {
  const [imageUri, setImageUri] = useState('');
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState(['', '', '', '']);
  const [error, setError] = useState(null);
  const [title, setTitle] = useState('');
  const { dispatch } = useFeedsContext();




  const handleSubmit = async () => {
    const feed = { description, image: imageUri };

    try {

      const response = await fetch(`${config.API_URL}/feed/`, { // Make sure this URL is correct
        method: 'POST',
        body: JSON.stringify({
          title: title,
          img: imageUri,
          content: description,
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        const json = await response.json();
        setError(json.error);
      } else {
        console.log(imageUri)
        const json = await response.json();
        setImageUri('');
        setDescription('');
        setTags(['', '', '', '']);
        setError(null);
        console.log("New Feed Added", json);
        navigation.navigate('SellerFeed');
        dispatch({ type: 'CREATE_FEED', payload: json });
      }
    } catch (error) {
      setError("Failed to upload feed. Please try again.");
      console.error("Error:", error);
    }
  };

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
        setImageUri(result.assets[0].uri.toString());
      }
    } catch (error) {
      alert("Error uploading image: " + error.message);
    }
  };

  const handleTagChange = (index, value) => {
    const newTags = [...tags];
    newTags[index] = value;
    setTags(newTags);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F3F3F3" }}>
      <ScrollView contentContainerStyle={{ paddingBottom: 120 }}>
        <View style={{ marginTop: 30, marginLeft: 40, marginRight: 15 }}>
          {imageUri ? (
            <Image
              source={{ uri: imageUri }}
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
              padding: 5,
              borderRadius: 5,
            }}>
              Add Image
            </Text>
          </TouchableOpacity>
        </View>
        <Text style={{ fontWeight: "bold", marginTop: 30, marginLeft: 60 }}>Title</Text>
        <View style={{ width: '70%', height: '5%', backgroundColor: "#D9D9D9", borderRadius: 10, marginBottom: 5, padding: 10, marginTop: 10, marginLeft: 60 }}>
          <TextInput
            value={title}
            onChangeText={setTitle}
            placeholder="Add title..."
          />
        </View>


        <Text style={{ fontWeight: "bold", marginTop: 30, marginLeft: 60 }}>Content</Text>
        <View style={{ width: '70%', height: '18%', backgroundColor: "#D9D9D9", borderRadius: 10, marginBottom: 10, padding: 10, marginTop: 10, marginLeft: 60 }}>
          <TextInput
            value={description}
            onChangeText={setDescription}
            placeholder="Add description..."
          />
        </View>
        <Text style={{ fontWeight: "bold", marginTop: 10, marginLeft: 60 }}>Tags</Text>
        <View style={{ backgroundColor: "#D9D9D9", borderRadius: 8, paddingVertical: 16, paddingHorizontal: 15, marginBottom: 28, marginHorizontal: 57, marginTop: 10 }}>
          <Text style={{ color: "#727272", fontSize: 15, marginBottom: 8 }}>
            Add tags...
          </Text>
          <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
            <TextInput
              value={tags[0]}
              onChangeText={(value) => handleTagChange(0, value)}
              style={{ width: 104, height: 32, backgroundColor: "#FFFFFF", borderRadius: 10 }}
              placeholder="Tag 1"
            />
            <TextInput
              value={tags[1]}
              onChangeText={(value) => handleTagChange(1, value)}
              style={{ width: 131, height: 32, backgroundColor: "#FFFFFF", borderRadius: 10 }}
              placeholder="Tag 2"
            />
          </View>
          <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
            <TextInput
              value={tags[2]}
              onChangeText={(value) => handleTagChange(2, value)}
              style={{ width: 131, height: 32, backgroundColor: "#FFFFFF", borderRadius: 10 }}
              placeholder="Tag 3"
            />
            <TextInput
              value={tags[3]}
              onChangeText={(value) => handleTagChange(3, value)}
              style={{ width: 104, height: 32, backgroundColor: "#FFFFFF", borderRadius: 10 }}
              placeholder="Tag 4"
            />
          </View>
        </View>

        <TouchableOpacity
          onPress={handleSubmit}
          style={{ alignItems: "center", backgroundColor: "#4112ff", width: '70%', borderRadius: 10, marginBottom: 10, padding: 10, marginTop: 10, marginLeft: 60 }}
        >
          <Text style={{ color: "#FFFFFF", fontSize: 20 }}>
            Upload
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('SellerFeed')}
          style={{ alignItems: "center", backgroundColor: "#f01e2c", width: '70%', borderRadius: 10, marginBottom: 10, padding: 10, marginTop: 10, marginLeft: 60 }}
        >
          <Text style={{ color: "#FFFFFF", fontSize: 20 }}>
            Cancel
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}