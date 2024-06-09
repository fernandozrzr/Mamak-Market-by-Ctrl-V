import React from "react";
import { SafeAreaView, View, ScrollView, Image, Text, TextInput, TouchableOpacity} from "react-native";

export default function AddListing() {
  return (
		<SafeAreaView 
			style={{
				flex: 1,
				backgroundColor: "#F3F3F3",
        
			}}
		>
      <View style={{
        marginTop: 50,
        marginLeft: 15,
        marginRight: 15}} 
      >
        <Image source={require('/assets/AddImageChecker.png')}
						resizeMode="cover"
						style={{
              width : 350,
							height: 140,
							aspectRatio: 16 / 6,
						}} 
        />
        <Text
          style={{
							marginTop: -90,
							marginLeft: 150,
          }}
        >Add Image</Text>
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
      <Text style={{fontWeight:"bold", marginLeft: 60}}>{"Expiry Date"} </Text>
      <View 
						style={{
             
							width: '70%',
             
							backgroundColor: "#D9D9D9",
              borderRadius: 10,
							marginBottom: 10,
							padding: 10,
              marginTop: 10,
							marginLeft: 60,
						}}
					>
          <View 
					  style={{
						  flexDirection:"row",
					  	flexWrap: 'wrap',						
					  }}
				  > 
            <TextInput placeholder="Today"/>
            <Image source={require('/assets/Date_range.png')}
						resizeMode="cover"
						style={{
              width : 25,
							height: 25,
							aspectRatio: 16 / 6,
              marginLeft: 60
						}} 
        /> 
          </View>        
          
      </View>
      <Text style={{fontWeight:"bold", marginLeft: 60}}>{"Price"} </Text>
      <View 
						style={{
             
							width: '70%',
              
							backgroundColor: "#D9D9D9",
              borderRadius: 10,
							marginBottom: 20,
							padding: 10,
              marginTop: 10,
							marginLeft: 60,
						}}
					>
          <TextInput
            placeholder="$0.00"
          />
      </View>
      <View 
					style={{
						flexDirection:"row",
						flexWrap: 'wrap',
						
					}}
				>
        <View 
					style={{           
						width: '40%',        
						backgroundColor: "#FFFFFF",
            borderRadius: 10,
						marginBottom: 20,
						padding: 10,
            marginTop: 10,
						marginLeft: 60,
					}}
				>
          <TextInput
            style={{textAlign: 'center',fontWeight:'Bold',fontSize: 15}}
           placeholder="Qty: 1"
         />
        </View>
        <View style={{       
							width: '11%',             
							backgroundColor: "#1fd655",
              borderRadius: 15,
							marginBottom: 20,
							padding: 10,
              marginTop: 10,
							marginLeft: 15,
						}}
				>
          <Image source={require('/assets/Add_ring.png')}
						resizeMode="cover"
						style={{
              width : 20,
							height: 20,
							aspectRatio: 16 / 6,
						}} 
        />

        </View>
        <View style={{       
							width: '11%',             
							backgroundColor: "#f01e2c",
              borderRadius: 15,
							marginBottom: 20,
							padding: 10,
              marginTop: 10,
							marginLeft: 15,
						}}
				>
          <Image source={require('/assets/Remove.png')}
						resizeMode="cover"
						style={{
              width : 20,
							height: 20,
							aspectRatio: 16 / 6,
						}} 
        />
        </View>
      </View>
      <View 
						style={{
             
							width: '70%',
             
							backgroundColor: "#0000FF",
              borderRadius: 10,
							marginBottom: 10,
							padding: 10,
              marginTop: 10,
							marginLeft: 60,
						}}
					>
          <TextInput style={{
            textAlign: 'center',
            fontWeight:"Bold",
            color:"#FFFFFF"
          }}
            placeholder="Upload"
          />
      </View>
      <View 
						style={{
             
							width: '70%',
             
							backgroundColor: "#f01e2c",
              borderRadius: 10,
							marginBottom: 10,
							padding: 10,
              marginTop: 20,
							marginLeft: 60,
						}}
					>
          <TextInput style={{
            textAlign: 'center',
            fontWeight:"Bold",
            color:"#FFFFFF"
          }}
            placeholder="Cancel"
          />
      </View>
      
      
      

    </SafeAreaView>
  )
}