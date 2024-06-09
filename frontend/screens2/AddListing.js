import React, { useState } from "react";
import { SafeAreaView, View, ScrollView, Image, Text, TextInput, TouchableOpacity} from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';



export default function AddListing() {
  const {open, setOpen} = useState(false)

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
        	<Image source={require('../assets/AddImageChecker.png')}
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
        flexDirection: 'row',
        alignItems: 'center',  // Ensure items are aligned in the center vertically
        flexWrap: 'nowrap',    // Ensure items do not wrap
        justifyContent: 'space-between',  // Distribute space between items
      }}
    > 
      <TextInput 
        placeholder="Today"
        style={{
          flex: 1,  // Take up as much space as possible
          paddingRight: 10,  // Add some right padding for space between the TextInput and the Image
        }}
      />
      
      <TouchableOpacity>
        <Image 
          source={require('../assets/Date_range.png')}
          resizeMode="cover"
          style={{
            width: 20,
            height: 20,
          }} 
        /> 
      </TouchableOpacity>
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
          <TextInput placeholder="$0.00"/>
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
					height: '55%',        
					backgroundColor: "#FFFFFF",
            		borderRadius: 10,
					marginBottom: 20,
					padding: 10,
            		marginTop: 10,
					marginLeft: 60,
				}}
			>
          		<Text
        			 style={{textAlign: 'center', fontWeight: "bold",fontSize: 15}}
        		>
					{'Qty: 1'}
				</Text>


        	</View>
			<TouchableOpacity
                    

                    style={{
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
              				width : 20,
							height: 20,
							aspectRatio: 5 / 4,
						}}></Image>
            </TouchableOpacity>
			<TouchableOpacity
                    

                    style={{
						width: 40,
						height: 40,
                        alignItems: "center",
                        backgroundColor: "#f01e2c",
                        borderRadius: 8,
                        paddingVertical: 12,
                        marginBottom: 26,
                        marginHorizontal: 18,
						marginTop: 10,
						marginLeft:1
                    }}>
                   <Image source={require('../assets/Remove.png')} resizeMode="cover"
						style={{
              				width : 20,
							height: 20,
							aspectRatio: 5 / 4,
						}}></Image>
            </TouchableOpacity>
	

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