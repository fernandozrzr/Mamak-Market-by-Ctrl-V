// import React from "react";
// import { SafeAreaView, View, ScrollView, Text, Image, ImageBackground, TouchableOpacity, TextInput } from "react-native";
// import { useState } from "react";
// import axios from "axios";

// export default function SignUpUser({ navigation }) {
//     const [name, onChangeName] = useState("");
//     const [username, onChangeUsername] = useState("");
//     const [password, onChangePassword] = useState("");
//     const [usergroup, onChangeusergroup] = useState("");

//     function handleSubmit() {
//         const userData = {
//             name : name,
//             username,
//             password,
//             usergroup,
//         };
//         axios
//         .post('http://10.197.20.207:4000/api/profile/signup', userData)
//         .then(res => console.log(res.data))
//         .catch(e => console.log(e));
//     }
    

//     return (
//         <SafeAreaView
//             style={{
//                 flex: 1,
//                 backgroundColor: "#FFFFFF",
//             }}>
//             <ScrollView
//                 style={{
//                     flex: 1,
//                     backgroundColor: "#DEC7B2",
//                     paddingTop: 130,
//                     paddingBottom: 235,
//                 }}>
//                 <View
//                     style={{
//                         height: 156,
//                         // borderColor: "#5E27FD",
//                         // borderWidth: 1,
//                         marginBottom: 20,
//                         marginHorizontal: 117,
//                         justifyContent: 'center', // Align image and text in the center vertically
//                         alignItems: 'center', // Align image and text in the center horizontally
//                     }}>
//                     <Image
//                         source={require('../assets/AppIcon.jpg')}
//                         style={{
//                             width: 150, // Adjust width as needed
//                             height: 150, // Adjust height as needed
//                             marginBottom: 30,
//                         }}
//                         resizeMode="cover" // or any other resize mode you prefer
//                     />
//                 </View>
//                 <Text
//                     style={{
//                         color: "#EA1B1B",
//                         fontSize: 64,
//                         fontWeight: "bold",
//                         marginTop: -40,
//                         textAlign: 'center',
//                     }}>
//                     {"妈妈店"}
//                 </Text>
//                 <Text
//                     style={{
//                         color: "#6155AA",
//                         fontSize: 36,
//                         marginBottom: 31,
//                         textAlign: 'center',
//                     }}>
//                     {"Mamak Market"}
//                 </Text>
//                 <View
//                     style={{
//                         flexDirection: "row",
//                         justifyContent: "space-between",
//                         alignItems: "center",
//                         marginBottom: 5,
//                         marginHorizontal: 88,
//                         marginTop: -22,
//                     }}>
//                     <TouchableOpacity style={{
//                         backgroundColor: '#DEC7B2',
//                         alignItems: 'center',
//                         padding: 10,
//                         justifyContent: 'center',
//                         marginVertical: 10,
//                         }} >
//                         <Text style={{ color: 'red', fontSize: 20 }}>User</Text>
//                         <View
//                             style={{
//                                 width: 80,
//                                 height: 1,
//                                 backgroundColor: "#FF0000",
//                             }}>
//                         </View>
//                     </TouchableOpacity>
//                     {/* <Text 
//                         style = {{
//                             color: "#000000",
//                             fontSize: 20,
//                         }}>
//                         {"Seller"}
//                     </Text> */}
//                     <TouchableOpacity style={{
//                         backgroundColor: '#DEC7B2',
//                         alignItems: 'center',
//                         adding: 10,
//                         justifyContent: 'center',
//                         marginVertical: 10,
//                     }} onPress={() => navigation.navigate('signupBusinessOwner')}>
//                         <Text style={{ color: '#000000', fontSize: 20 }}>Seller</Text>
//                         <View
//                             style={{
//                                 width: 80,
//                                 height: 1,
//                                 backgroundColor: "#000000",
//                             }}>
//                         </View>
//                     </TouchableOpacity>
//                 </View>

//                 <View
//                     style={{
//                         height: 44,
//                         backgroundColor: "#F5F5F5",
//                         borderRadius: 8,
//                         paddingVertical: 14,
//                         paddingHorizontal: 12,
//                         marginBottom: 13,
//                         marginHorizontal: 18,
//                     }}>
//                     <TextInput
//                         placeholder="Name"
//                         value={name}
//                         onChangeText={(text) => onChangeName(text)}
//                     />

//                 </View>

//                 <View
//                     style={{
//                         height: 44,
//                         backgroundColor: "#F5F5F5",
//                         borderRadius: 8,
//                         paddingVertical: 14,
//                         paddingHorizontal: 12,
//                         marginBottom: 13,
//                         marginHorizontal: 18,
//                     }}>
//                     <TextInput
//                         placeholder="Username"
//                         value={username}
//                         onChangeText={(text) => onChangeUsername(text)}
//                     />
//                 </View>
//                 <View
//                     style={{
//                         backgroundColor: "#F5F5F5",
//                         borderRadius: 8,
//                         paddingVertical: 10,
//                         paddingHorizontal: 16,
//                         marginBottom: 20,
//                         marginHorizontal: 18,
//                     }}>
//                     <TextInput
//                         placeholder="Password"
//                         value={password}
//                         secureTextEntry={true}
//                         onChangeText={(text) => onChangePassword(text)}
//                     />
//                     {}
//                 </View>
//                 <TouchableOpacity onPress={() => handleSubmit()}
//                     style={{
//                         alignItems: "center",
//                         backgroundColor: "#4112FF",
//                         borderRadius: 8,
//                         paddingVertical: 11,
//                         marginHorizontal: 18,
//                     }}>
//                     <Text
//                         style={{
//                             color: "#F5F5F5",
//                             fontSize: 20,
//                         }}>
//                         {"Register"}
//                     </Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity onPress={() => navigation.navigate('loginUser')}>
//                     <Text style={{ color: '#4112FF', fontSize: 15, marginTop: 20, alignSelf: "center" }}>Back to Login</Text>
//                 </TouchableOpacity>
//             </ScrollView>
//         </SafeAreaView>
//     )
// }

// import React from "react";
// import { SafeAreaView, View, ScrollView, Text, Image, TouchableOpacity, TextInput } from "react-native";
// import { useState } from "react";
// import axios from "axios";

// export default function SignUpUser({ navigation }) {
//     const [name, onChangeName] = useState("");
//     const [username, onChangeUsername] = useState("");
//     const [password, onChangePassword] = useState("");
//     const [usergroup, onChangeUsergroup] = useState("User"); // Default to "User"

//     function handleSubmit() {
//         const userData = {
//             name,
//             username,
//             password,
//             usergroup,
//         };
//         axios
//             .post('http://10.197.20.207:4000/api/profile/signup', userData)
//             .then(res => console.log(res.data))
//             .catch(e => console.log(e));
//     }

//     return (
//         <SafeAreaView
//             style={{
//                 flex: 1,
//                 backgroundColor: "#FFFFFF",
//             }}>
//             <ScrollView
//                 style={{
//                     flex: 1,
//                     backgroundColor: "#DEC7B2",
//                     paddingTop: 130,
//                     paddingBottom: 235,
//                 }}>
//                 <View
//                     style={{
//                         height: 156,
//                         marginBottom: 20,
//                         marginHorizontal: 117,
//                         justifyContent: 'center',
//                         alignItems: 'center',
//                     }}>
//                     <Image
//                         source={require('../assets/AppIcon.jpg')}
//                         style={{
//                             width: 150,
//                             height: 150,
//                             marginBottom: 30,
//                         }}
//                         resizeMode="cover"
//                     />
//                 </View>
//                 <Text
//                     style={{
//                         color: "#EA1B1B",
//                         fontSize: 64,
//                         fontWeight: "bold",
//                         marginTop: -40,
//                         textAlign: 'center',
//                     }}>
//                     {"妈妈店"}
//                 </Text>
//                 <Text
//                     style={{
//                         color: "#6155AA",
//                         fontSize: 36,
//                         marginBottom: 31,
//                         textAlign: 'center',
//                     }}>
//                     {"Mamak Market"}
//                 </Text>
//                 <View
//                     style={{
//                         flexDirection: "row",
//                         justifyContent: "space-between",
//                         alignItems: "center",
//                         marginBottom: 5,
//                         marginHorizontal: 88,
//                         marginTop: -22,
//                     }}>
//                     <TouchableOpacity 
//                         style={{
//                             backgroundColor: usergroup === 'User' ? '#DEC7B2' : '#FFFFFF',
//                             alignItems: 'center',
//                             padding: 10,
//                             justifyContent: 'center',
//                             marginVertical: 10,
//                         }} 
//                         onPress={() => onChangeUsergroup('User')}>
//                         <Text style={{ 
//                             color: 'red', 
//                             fontSize: 20 
//                         }}>
//                             User
//                         </Text>
//                         {usergroup === 'User' && (
//                             <View
//                                 style={{
//                                     width: 80,
//                                     height: 1,
//                                     backgroundColor: "#FF0000",
//                                 }}>
//                             </View>
//                         )}
//                     </TouchableOpacity>
//                     <TouchableOpacity 
//                         style={{
//                             backgroundColor: usergroup === 'Seller' ? '#DEC7B2' : '#FFFFFF',
//                             alignItems: 'center',
//                             padding: 10,
//                             justifyContent: 'center',
//                             marginVertical: 10,
//                         }} 
//                         onPress={() => onChangeUsergroup('Seller')}>
//                         <Text style={{ color: '#000000', fontSize: 20 }}>Seller</Text>
//                         {usergroup === 'Seller' && (
//                             <View
//                                 style={{
//                                     width: 80,
//                                     height: 1,
//                                     backgroundColor: "#000000",
//                                 }}>
//                             </View>
//                         )}
//                     </TouchableOpacity>
//                 </View>

//                 <View
//                     style={{
//                         height: 44,
//                         backgroundColor: "#F5F5F5",
//                         borderRadius: 8,
//                         paddingVertical: 14,
//                         paddingHorizontal: 12,
//                         marginBottom: 13,
//                         marginHorizontal: 18,
//                     }}>
//                     <TextInput
//                         placeholder="Name"
//                         value={name}
//                         onChangeText={(text) => onChangeName(text)}
//                     />
//                 </View>

//                 <View
//                     style={{
//                         height: 44,
//                         backgroundColor: "#F5F5F5",
//                         borderRadius: 8,
//                         paddingVertical: 14,
//                         paddingHorizontal: 12,
//                         marginBottom: 13,
//                         marginHorizontal: 18,
//                     }}>
//                     <TextInput
//                         placeholder="Username"
//                         value={username}
//                         onChangeText={(text) => onChangeUsername(text)}
//                     />
//                 </View>
//                 <View
//                     style={{
//                         backgroundColor: "#F5F5F5",
//                         borderRadius: 8,
//                         paddingVertical: 10,
//                         paddingHorizontal: 16,
//                         marginBottom: 20,
//                         marginHorizontal: 18,
//                     }}>
//                     <TextInput
//                         placeholder="Password"
//                         value={password}
//                         secureTextEntry={true}
//                         onChangeText={(text) => onChangePassword(text)}
//                     />
//                 </View>
//                 <TouchableOpacity onPress={handleSubmit}
//                     style={{
//                         alignItems: "center",
//                         backgroundColor: "#4112FF",
//                         borderRadius: 8,
//                         paddingVertical: 11,
//                         marginHorizontal: 18,
//                     }}>
//                     <Text
//                         style={{
//                             color: "#F5F5F5",
//                             fontSize: 20,
//                         }}>
//                         {"Register"}
//                     </Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity onPress={() => navigation.navigate('loginUser')}>
//                     <Text style={{ color: '#4112FF', fontSize: 15, marginTop: 20, alignSelf: "center" }}>Back to Login</Text>
//                 </TouchableOpacity>
//             </ScrollView>
//         </SafeAreaView>
//     )
// }

import React from "react";
import { SafeAreaView, View, ScrollView, Text, Image, TouchableOpacity, TextInput ,Alert} from "react-native";
import { useState } from "react";
import axios from "axios";
import config from "../config"; // Import the configuration file

export default function SignUpUser({ navigation }) {
    const [name, onChangeName] = useState("");
    const [nameVerify, onChangeNameVerify] = useState(false);
    const [username, onChangeUsername] = useState("");
    const [usernameVerify, onChangeUsernameVerify] = useState(false);
    const [password, onChangePassword] = useState("");
    const [passwordVerify, onChangePasswordVerify] = useState(false);
    const [usergroup, onChangeUsergroup] = useState("User"); // Default to "User"
    const [usergroupVerify, onChangeUsergroupVerify] = useState(false);
    const [uen, onChangeuen] = useState("NIL");

    function handleSubmit() {
        // Check if all mandatory fields are filled
        if (!name || !username || !password || !usergroup || !uen) {
            Alert.alert("Error", "All fields must be filled");
            return;
        }
    
        // Check for additional conditions, such as password strength
        if (password.length < 8) {
            Alert.alert("Error", "Password must be at least 8 characters long");
            return;
        }
    
        const userData = {
            name,
            username,
            password,
            usergroup,
            uen,
        };
    
        axios
            .post(`${config.API_URL}/profile/signup`, userData)
            .then(res => {
                console.log(res.data);
                if (res.data.status === "ok") {
                    Alert.alert("Success", "Registered Successfully", [
                        {
                            text: "OK",
                            onPress: () => navigation.navigate('loginUser'),
                        },
                    ]);
                } else {
                    Alert.alert("Error", res.data.message || "Unexpected error");
                }
            })
            .catch(error => {
                console.log('Error:', error);
                if (error.response) {
                    if (error.response.status === 400) {
                        Alert.alert("Error", error.response.data.message || "All fields must be filled");
                    } else if (error.response.status === 409) {
                        Alert.alert("Error", error.response.data.message || "Username or name already in use");
                    } else {
                        Alert.alert("Error", "An unexpected error occurred");
                    }
                } else {
                    Alert.alert("Error", "An unexpected error occurred");
                }
            });
    }

    return (
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: "#FFFFFF",
            }}>
            <ScrollView
                style={{
                    flex: 1,
                    backgroundColor: "#DEC7B2",
                    paddingTop: 130,
                    paddingBottom: 235,
                }}>
                <View
                    style={{
                        height: 156,
                        marginBottom: 20,
                        marginHorizontal: 117,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                    <Image
                        source={require('../assets/AppIcon.jpg')}
                        style={{
                            width: 150,
                            height: 150,
                            marginBottom: 30,
                        }}
                        resizeMode="cover"
                    />
                </View>
                <Text
                    style={{
                        color: "#EA1B1B",
                        fontSize: 64,
                        fontWeight: "bold",
                        marginTop: -40,
                        textAlign: 'center',
                    }}>
                    {"妈妈店"}
                </Text>
                <Text
                    style={{
                        color: "#6155AA",
                        fontSize: 36,
                        marginBottom: 31,
                        textAlign: 'center',
                    }}>
                    {"Mamak Market"}
                </Text>
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginBottom: 5,
                        marginHorizontal: 88,
                        marginTop: -22,
                    }}>
                    <TouchableOpacity 
                        style={{
                            backgroundColor: usergroup === 'User',
                            alignItems: 'center',
                            padding: 10,
                            justifyContent: 'center',
                            marginVertical: 10,
                        }} 
                        onPress={() => onChangeUsergroup('User')}>
                        <Text style={{ 
                            color: usergroup === 'User'? 'red' : "#000000",
                            fontSize: 20 
                        }}>
                            User
                        </Text>
                        {usergroup === 'User' && (
                            <View
                                style={{
                                    width: 80,
                                    height: 1,
                                    backgroundColor: "#FF0000",
                                }}>
                            </View>
                        )}
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={{
                            backgroundColor: usergroup === 'Seller',
                            alignItems: 'center',
                            padding: 10,
                            justifyContent: 'center',
                            marginVertical: 10,
                        }} 
                        onPress={() => navigation.navigate('signupBusinessOwner')}>
                        <Text style={{ color: '#000000', fontSize: 20 }}>Seller</Text>
                        {usergroup === 'Seller' && (
                            <View
                                style={{
                                    width: 80,
                                    height: 2,
                                    backgroundColor: "#000000",
                                }}>
                            </View>
                        )}
                    </TouchableOpacity>

                    
                </View>

                <View
                    style={{
                        height: 44,
                        backgroundColor: "#F5F5F5",
                        borderRadius: 8,
                        paddingVertical: 14,
                        paddingHorizontal: 12,
                        marginBottom: 13,
                        marginHorizontal: 18,
                    }}>
                    <TextInput
                        placeholder="Name"
                        value={name}
                        onChangeText={(text) => onChangeName(text)}
                    />
                </View>

                <View
                    style={{
                        height: 44,
                        backgroundColor: "#F5F5F5",
                        borderRadius: 8,
                        paddingVertical: 14,
                        paddingHorizontal: 12,
                        marginBottom: 13,
                        marginHorizontal: 18,
                    }}>
                    <TextInput
                        placeholder="Username"
                        value={username}
                        onChangeText={(text) => onChangeUsername(text)}
                    />
                </View>
                <View
                    style={{
                        backgroundColor: "#F5F5F5",
                        borderRadius: 8,
                        paddingVertical: 10,
                        paddingHorizontal: 16,
                        marginBottom: 20,
                        marginHorizontal: 18,
                    }}>
                    <TextInput
                        placeholder="Password"
                        value={password}
                        secureTextEntry={true}
                        onChangeText={(text) => onChangePassword(text)}
                    />
                </View>
                <TouchableOpacity onPress={handleSubmit}
                    style={{
                        alignItems: "center",
                        backgroundColor: "#4112FF",
                        borderRadius: 8,
                        paddingVertical: 11,
                        marginHorizontal: 18,
                    }}>
                    <Text
                        style={{
                            color: "#F5F5F5",
                            fontSize: 20,
                        }}>
                        {"Register"}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('loginUser')}>
                    <Text style={{ color: '#4112FF', fontSize: 15, marginTop: 20, alignSelf: "center" }}>Back to Login</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    )
}
