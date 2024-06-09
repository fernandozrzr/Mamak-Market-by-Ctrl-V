import React, { useState } from "react";
import { SafeAreaView, View, ScrollView, Image, Text, TextInput, TouchableOpacity} from "react-native";
import { launchImageLibrary } from 'react-native-image-picker';
import * as ImagePicker from 'expo-image-picker';

export default function PostCreation({ navigation }) {
  const {open, setOpen} = useState(false);
  const [imageUri, setImageUri] = useState(null);

  const handleImagePicker = async () => {
    // Request media library permissions
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permission Denied', 'Permission to access media library is required!');
      return;
    }

    // Launch image library
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setImageUri(result.assets[0].uri);
    }
  };

  return (
	<SafeAreaView 
		style={{
			flex: 1,
			backgroundColor: "#F3F3F3",     
		}}
	>
     	<View style={{
       		marginTop: 30,
       		marginLeft: 15,
        	marginRight: 15}} 
      	>
        	<TouchableOpacity onPress={handleImagePicker}>
            <Image
                source={imageUri ? { uri: imageUri } : require('../assets/AddImageChecker.png')}
                resizeMode="cover"
                style={{
                width: 350,
                height: 140,
                aspectRatio: 16 / 6,
                }}
            />
            {!imageUri && (
                <Text
                style={{
                    marginTop: -90,
                    color: '#000000',
                    fontSize: 20,
                    alignSelf: "center"
                }}
                >
                Add Image
                </Text>
            )}
            </TouchableOpacity>
      	</View>
      	<View 
			style={{          
				width: '70%',
              	height: '18%',
				backgroundColor: "#D9D9D9",
             	borderRadius: 10,
				marginBottom: 20,
				padding: 10,
              	marginTop: 120,
				marginLeft: 60,
			}}
			>
          	<TextInput
            	placeholder="Add description..."
          	/>
     	</View>
         <View 
            style = {{
                backgroundColor: "#D9D9D9",
                borderRadius: 8,
                paddingVertical: 16,
                paddingHorizontal: 15,
                marginBottom: 28,
                marginHorizontal: 57,
                marginTop: 30,
            }}>
            <Text 
                style = {{
                    color: "#727272",
                    fontSize: 15,
                    marginBottom: 8,
                }}>
                {"Add tags..."}
            </Text>
            <View 
                style = {{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: 14,
                }}>
                <View 
                    style = {{
                        width: 104,
                        height: 32,
                        backgroundColor: "#FFFFFF",
                        borderRadius: 10,
                    }}>
                </View>
                <View 
                    style = {{
                        width: 131,
                        height: 32,
                        backgroundColor: "#FFFFFF",
                        borderRadius: 10,
                    }}>
                </View>
            </View>
            <View 
                style = {{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}>
                <View 
                    style = {{
                        width: 131,
                        height: 32,
                        backgroundColor: "#FFFFFF",
                        borderRadius: 10,
                    }}>
                </View>
                <View 
                    style = {{
                        width: 104,
                        height: 32,
                        backgroundColor: "#FFFFFF",
                        borderRadius: 10,
                    }}>
                </View>
            </View>
        </View>

      <TouchableOpacity
            onPress={() => navigation.navigate('SellerListing')}
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
            <Text
                style={{
                    color: "#FFFFFF",
                    fontSize: 20,
                }}
			>
                {"Upload"}
            </Text>
      </TouchableOpacity>
      <TouchableOpacity
            onPress={() => navigation.navigate('SellerListing')}
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
            <Text
                style={{
                    color: "#FFFFFF",
                    fontSize: 20,
                }}
			>
                {"Cancel"}
            </Text>
        </TouchableOpacity>
      
      
      

    </SafeAreaView>
  )
}