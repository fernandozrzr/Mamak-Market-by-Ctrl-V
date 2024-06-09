import React, { useState } from "react";
import { SafeAreaView, View, ScrollView, Image, Text, TextInput, TouchableOpacity, ImageBackground } from "react-native";

export default function SellerFeed({ navigation }) {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#FFFFFF",
      }}>
        <View
            style={{
            backgroundColor: "#DEC7B3",
            paddingTop: 30,
            alignItems: "center",
            justifyContent: "center",
            height: 100,
            }}>
            <TouchableOpacity
                style={{
                    width: 164,
                    alignItems: "center",
                    backgroundColor: "#D9D9D9",
                    borderRadius: 15,
                    paddingVertical: 3,
                    paddingHorizontal: 16,
                    alignSelf: "center"
                }}
                onPress={() => navigation.navigate('postCreation')} // replace 'DesiredScreenName' with your target screen name
                >
                <Text style={{ color: "#000000", fontSize: 20 }}>
                    {"+  Add Post"}
                </Text>
            </TouchableOpacity>
        </View>
      <ScrollView
        style={{
        flex: 1,
        backgroundColor: "#F3F3F3", // You can change this as per your layout requirements
        }}>

        <View 
            style = {{
                backgroundColor: "#F3F3F3",
                paddingVertical: 10,
            }}>
                <View style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginBottom: 7,
                    marginHorizontal: 11,
                }}>
                    <View style={{
                    width: 75,
                    height: 75,
                    borderRadius: 75 / 2,
                    overflow: 'hidden',
                    }}>
                        <Image
                            source={require('../assets/FeedPageImage/Feed3ShopIcon.jpg')}
                            style={{
                            width: '100%',
                            height: '100%',
                            resizeMode: "cover",
                            }}
                        />
                    </View>
                    <View 
                        style={{
                            flex: 1,
                            marginLeft: 20,
                        }}>
                    <Text 
                        style={{
                        color: "#000000",
                        fontSize: 16,
                        marginBottom: 6,
                        fontWeight: "bold"
                        }}>
                        {"Qiu Ji Department Store"}
                    </Text>
                    <Text 
                        style={{
                        color: "#000000",
                        fontSize: 14,
                        width: 260,
                    }}>
                        {"Stock Clearance! Broccoli selling at 30% discount at Block 848, Yishun Street 81, Qiu Ji Department Store "}
                    </Text>
                    </View>
                </View>
                <Image
                    source={require('../assets/FeedPageImage/Feed3Shop.png')}
                    resizeMode="cover"
                    style={{
                    height: 150,
                    width: 362,
                    marginLeft: 15,
                    }}
                />
                <View style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginHorizontal: 15,
                    marginTop: 6,
                }}>
                    <Text 
                        style={{
                        color: "#000000",
                        fontSize: 14,
                        }}>
                    {"100 Likes"}
                    </Text>
                    <Text 
                        style={{
                        color: "#000000",
                        fontSize: 14,
                        }}>
                    {"30 minutes ago"}
                    </Text>
                </View>
                <View 
                    style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginLeft: 15,
                    marginTop: 6,
                }}>
                    <Image
                    source={require('../assets/FeedPageImage/likeIcon.jpg')}
                    resizeMode="cover"
                    style={{
                        height: 18,
                        width: 18,
                    }}
                    />
                    <Image
                    source={require('../assets/FeedPageImage/shareIcon.png')}
                    resizeMode="cover"
                    style={{
                        height: 18,
                        width: 18,
                        marginLeft: 15,
                    }}
                    />
                </View>

            </View>
            <View 
            style = {{
                backgroundColor: "#F3F3F3",
                paddingVertical: 10,
            }}>
            <View 
                style = {{
                    flexDirection: "row",
                    alignItems: "center",
                    marginBottom: 7,
                    marginHorizontal: 11,
                }}>
                <View
                    style={{
                        width: 75,
                        height: 75,
                        borderRadius: 75 / 2,
                        overflow: 'hidden',
                    }}
                >
                    <Image
                        source={require('../assets/FeedPageImage/Feed1ShopIcon.jpg')}
                        style={{
                            width: '100%',
                            height: '100%',
                            resizeMode: "cover",
                        }}
                    />
                </View>
                <View 
                    style = {{
                        flex: 1,
                        marginLeft: 20,
                    }}>
                    <Text 
                        style = {{
                            color: "#000000",
                            fontSize: 16,
                            marginBottom: 6,
                            fontWeight: "bold"
                        }}>
                        {"Kai Hock Provision"}
                    </Text>
                    <Text 
                        style = {{
                            color: "#000000",
                            fontSize: 14,
                            width: 260,
                        }}>
                        {"Newly open Mama Shop at Yishun Street 81 Block 846. "}
                    </Text>
                </View>
            </View>
            <Image
                source={require('../assets/FeedPageImage/Feed1Shop.jpg')}
                resizeMode="cover"
                style={{
                    height: 150,
                    width: 362,
                    marginLeft : 15,
                }}
            />
            <View 
                style = {{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: 6,
                    marginHorizontal: 15,
                }}>
                <Text 
                    style = {{
                        color: "#000000",
                        fontSize: 14,
                    }}>
                    {"569 Likes"}
                </Text>
                <Text 
                    style = {{
                        color: "#000000",
                        fontSize: 14,
                    }}>
                    {"1 hour ago"}
                </Text>
            </View>
            <View 
                style={{ 
                    flexDirection: 'row', 
                    alignItems: 'center' 
                }}>
                <Image
                    source={require('../assets/FeedPageImage/likeIcon.jpg')}
                    resizeMode="cover"
                    style={{
                    height: 18,
                    width: 18,
                    marginLeft: 15,
                    }}
                />
                <Image
                    source={require('../assets/FeedPageImage/shareIcon.png')}
                    resizeMode="cover"
                    style={{
                    height: 18,
                    width: 18,
                    marginLeft: 15,
                    }}
                />
                </View>
            </View>
            <View 
            style = {{
                backgroundColor: "#F3F3F3",
                paddingVertical: 10,
            }}>
            <View 
                style = {{
                    flexDirection: "row",
                    alignItems: "center",
                    marginBottom: 7,
                    marginHorizontal: 11,
                }}>
                <View
                    style={{
                        width: 75,
                        height: 75,
                        borderRadius: 75 / 2,
                        overflow: 'hidden',
                    }}
                >
                    <Image
                        source={require('../assets/FeedPageImage/Feed2ShopIcon.png')}
                        style={{
                            width: '100%',
                            height: '100%',
                            resizeMode: "cover",
                        }}
                    />
                </View>
                <View 
                    style = {{
                        flex: 1,
                        marginLeft: 20,
                    }}>
                    <Text 
                        style = {{
                            color: "#000000",
                            fontSize: 16,
                            marginBottom: 6,
                            fontWeight: "bold"
                        }}>
                        {"Home of Tans"}
                    </Text>
                    <Text 
                        style = {{
                            color: "#000000",
                            fontSize: 14,
                            width: 260,
                        }}>
                        {"Welcome to the Tans Mama Shop. We have been here for quite some time"}
                    </Text>
                </View>
            </View>
            <Image
                source={require('../assets/FeedPageImage/Feed2Shop.jpg')}
                resizeMode="cover"
                style={{
                    height: 150,
                    width: 362,
                    marginLeft : 15,
                }}
            />
            <View 
                style = {{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: 6,
                    marginHorizontal: 15,
                }}>
                <Text 
                    style = {{
                        color: "#000000",
                        fontSize: 14,
                    }}>
                    {"569 Likes"}
                </Text>
                <Text 
                    style = {{
                        color: "#000000",
                        fontSize: 14,
                    }}>
                    {"1 hour ago"}
                </Text>
            </View>
            <View 
                style={{ 
                    flexDirection: 'row', 
                    alignItems: 'center' 
                }}>
                <Image
                    source={require('../assets/FeedPageImage/likeIcon.jpg')}
                    resizeMode="cover"
                    style={{
                    height: 18,
                    width: 18,
                    marginLeft: 15,
                    }}
                />
                <Image
                    source={require('../assets/FeedPageImage/shareIcon.png')}
                    resizeMode="cover"
                    style={{
                    height: 18,
                    width: 18,
                    marginLeft: 15,
                    }}
                />
                </View>
            </View>
            <View 
            style = {{
                backgroundColor: "#F3F3F3",
                paddingVertical: 10,
            }}>
            <View 
                style = {{
                    flexDirection: "row",
                    alignItems: "center",
                    marginBottom: 7,
                    marginHorizontal: 11,
                }}>
                <View
                    style={{
                        width: 75,
                        height: 75,
                        borderRadius: 75 / 2,
                        overflow: 'hidden',
                    }}
                >
                    <Image
                        source={require('../assets/FeedPageImage/Feed1ShopIcon.jpg')}
                        style={{
                            width: '100%',
                            height: '100%',
                            resizeMode: "cover",
                        }}
                    />
                </View>
                <View 
                    style = {{
                        flex: 1,
                        marginLeft: 20,
                    }}>
                    <Text 
                        style = {{
                            color: "#000000",
                            fontSize: 16,
                            marginBottom: 6,
                            fontWeight: "bold"
                        }}>
                        {"Kai Hock Provision"}
                    </Text>
                    <Text 
                        style = {{
                            color: "#000000",
                            fontSize: 14,
                            width: 260,
                        }}>
                        {"Newly open Mama Shop at Yishun Street 81 Block 846. "}
                    </Text>
                </View>
            </View>
            <Image
                source={require('../assets/FeedPageImage/Feed1Shop.jpg')}
                resizeMode="cover"
                style={{
                    height: 150,
                    width: 362,
                    marginLeft : 15,
                }}
            />
            <View 
                style = {{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: 6,
                    marginHorizontal: 15,
                }}>
                <Text 
                    style = {{
                        color: "#000000",
                        fontSize: 14,
                    }}>
                    {"569 Likes"}
                </Text>
                <Text 
                    style = {{
                        color: "#000000",
                        fontSize: 14,
                    }}>
                    {"1 hour ago"}
                </Text>
            </View>
            <View 
                style={{ 
                    flexDirection: 'row', 
                    alignItems: 'center' 
                }}>
                <Image
                    source={require('../assets/FeedPageImage/likeIcon.jpg')}
                    resizeMode="cover"
                    style={{
                    height: 18,
                    width: 18,
                    marginLeft: 15,
                    }}
                />
                <Image
                    source={require('../assets/FeedPageImage/shareIcon.png')}
                    resizeMode="cover"
                    style={{
                    height: 18,
                    width: 18,
                    marginLeft: 15,
                    }}
                />
                </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
