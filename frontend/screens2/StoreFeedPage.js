import React, { useState } from "react";
import { SafeAreaView, View, ScrollView, Image, Text, TextInput, TouchableOpacity, ImageBackground } from "react-native";

export default function StoreFeedPage({ navigation }) {
    return (
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: "#FFFFFF",
            }}>
            <View
                style={{
                    flex: 1,
                    backgroundColor: "#DEC7B3",
                    paddingTop: 31,

                }}>
                <View
                    style={{
                        width: 130,
                        height: 130,
                        borderRadius: 130 / 2,
                        overflow: 'hidden',
                        alignSelf: "center",
                        marginTop: 20,
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
                <Text
                    style={{
                        color: "#000000",
                        fontSize: 20,
                        marginBottom: 5,
                        marginLeft: 113,
                        fontWeight: "bold"
                    }}>
                    {"Kai Hock Provision"}
                </Text>
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "#D9D9D9",
                        borderRadius: 15,
                        paddingVertical: 8,
                        marginBottom: 6,
                        marginHorizontal: 112,
                    }}>
                    <Image
                        source={require('../assets/FeedPageImage/messageIcon.jpg')}
                        resizeMode="cover"
                        style={{
                            height: 17,
                            width: 17,
                            marginRight: 11,
                        }}
                    />
                    <Text
                        style={{
                            color: "#000000",
                            fontSize: 20,
                            fontWeight: "bold"
                        }}>
                        {"Message"}
                    </Text>
                </View>
                <View
                    style={{
                    }}>
                    <View
                        style={{
                            backgroundColor: "#F3F3F3",
                            paddingTop: 11,
                            paddingBottom: 5,
                        }}>
                        <Text
                            style={{
                                color: "#000000",
                                fontSize: 20,
                                marginBottom: 6,
                                marginLeft: 173,
                                fontWeight: "bold"
                            }}>
                            {"Posts"}
                        </Text>
                        <View
                            style={{
                                height: 2,
                                backgroundColor: "#000000",
                                marginBottom: 2,
                                marginHorizontal: 117,
                            }}>
                        </View>

                    </View>
                </View>
                <ScrollView style={{ flex: 1 }}>
                    <View
                        style={{
                            backgroundColor: "#F3F3F3",
                            paddingVertical: 10,
                        }}>
                        <View
                            style={{
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
                                    {"Kai Hock Provision"}
                                </Text>
                                <Text
                                    style={{
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
                                marginLeft: 15,
                            }}
                        />
                        <View
                            style={{
                                flexDirection: "row",
                                justifyContent: "space-between",
                                alignItems: "center",
                                marginBottom: 6,
                                marginHorizontal: 15,
                            }}>
                            <Text
                                style={{
                                    color: "#000000",
                                    fontSize: 14,
                                }}>
                                {"569 Likes"}
                            </Text>
                            <Text
                                style={{
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
                        style={{
                            backgroundColor: "#F3F3F3",
                            paddingVertical: 10,
                        }}>
                        <View
                            style={{
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
                                    {"Kai Hock Provision"}
                                </Text>
                                <Text
                                    style={{
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
                                marginLeft: 15,
                            }}
                        />
                        <View
                            style={{
                                flexDirection: "row",
                                justifyContent: "space-between",
                                alignItems: "center",
                                marginBottom: 6,
                                marginHorizontal: 15,
                            }}>
                            <Text
                                style={{
                                    color: "#000000",
                                    fontSize: 14,
                                }}>
                                {"569 Likes"}
                            </Text>
                            <Text
                                style={{
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
                        style={{
                            backgroundColor: "#F3F3F3",
                            paddingVertical: 10,
                        }}>
                        <View
                            style={{
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
                                    {"Kai Hock Provision"}
                                </Text>
                                <Text
                                    style={{
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
                                marginLeft: 15,
                            }}
                        />
                        <View
                            style={{
                                flexDirection: "row",
                                justifyContent: "space-between",
                                alignItems: "center",
                                marginBottom: 6,
                                marginHorizontal: 15,
                            }}>
                            <Text
                                style={{
                                    color: "#000000",
                                    fontSize: 14,
                                }}>
                                {"569 Likes"}
                            </Text>
                            <Text
                                style={{
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
            </View>
        </SafeAreaView>

    )
}
