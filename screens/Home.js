
import { NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native';
import { icons, images, SIZES, COLORS, FONTS } from '../constants';
import { db } from '../firebase';

const Home = ({ navigation }) => {

    async function getProperties(propertiesRetrieved){

        const propertyList = [];

    const snapshot = await db.firestore()
    .collection('real_estate_listings')
    .orderBy('createdAt')
    .get()

    snapshot.forEach((doc) => {
        propertyList.push(doc.data());
    });
    propertiesRetrieved(propertyList);
    }

    

      // Dummy Data

      const initialCurrentLocation = {
        streetName: "Charlotte",
        gps: {
            latitude: 35.2030728,
            longitude: 80.9799136
        }
    }

    const categoryData = [
        {
            id: 1,
            name: "Houses",
            icon: icons.house,
        },
        {
            id: 2,
            name: "Condos",
            icon: icons.condo,
        },
        {
            id: 3,
            name: "Townhouses",
            icon: icons.townhouse,
        },
        {
            id: 4,
            name: "Multi Family Units",
            icon: icons.apartment,
        },

    ]

    // price rating
    const affordable = 1
    const fairPrice = 2
    const expensive = 3

    const restaurantData = [
        {
            id: 1,
            name: "123 Anywhere Street",
            rating: 4.8,
            categories: [1, 3],
            priceRating: affordable,
            photo: images.townhouse_1,
            duration: "$350,000",
            location: {
                latitude: 1.5347282806345879,
                longitude: 110.35632207358996,
            },
            courier: {
                avatar: images.avatar_2,
                name: "Jerry"
            },
            menu: [
                {
                    menuId: 1,
                    name: "Spacious interior",
                    photo: images.interior_1,
                    description: "3 bedroom 2.5 bath with 2 car garage",
                    calories: 200,
                    price: 10
                },
                {
                    menuId: 2,
                    name: "Spacious interior",
                    photo: images.interior_2,
                    description: "3 bedroom 2.5 bath with 2 car garage",
                    calories: 250,
                    price: 15
                },
                {
                    menuId: 3,
                    name: "Spacious interior",
                    photo: images.interior_3,
                    description: "3 bedroom 2.5 bath with 2 car garage",
                    calories: 194,
                    price: 8
                }
            ]
        },
        {
            id: 2,
            name: "780 N Graham",
            rating: 4.8,
            categories: [2, 4],
            priceRating: expensive,
            photo: images.condo_1,
            duration: "$375,000",
            location: {
                latitude: 1.556306570595712,
                longitude: 110.35504616746915,
            },
            courier: {
                avatar: images.avatar_2,
                name: "Jackson"
            },
            menu: [
                {
                    menuId: 4,
                    name: "Spacious interior",
                    photo: images.interior_4,
                    description: "3 bedroom 2.5 bath with 2 car garage",
                    calories: 250,
                    price: 15
                },
                {
                    menuId: 5,
                    name: "Spacious interior",
                    photo: images.interior_5,
                    description: "3 bedroom 2.5 bath with 2 car garage",
                    calories: 250,
                    price: 20
                },
                {
                    menuId: 6,
                    name: "Spacious interior",
                    photo: images.interior_6,
                    description: "3 bedroom 2.5 bath with 2 car garage",
                    calories: 100,
                    price: 10
                },
                {
                    menuId: 7,
                    name: "Spacious interior ",
                    photo: images.interior_7,
                    description: "3 bedroom 2.5 bath with 2 car garage",
                    calories: 100,
                    price: 10
                }
            ]
        },
        {
            id: 3,
            name: "216 Queens Ave",
            rating: 4.8,
            categories: [3],
            priceRating: expensive,
            photo: images.house_5,
            duration: "$1,850,000",
            location: {
                latitude: 1.5238753474714375,
                longitude: 110.34261833833622,
            },
            courier: {
                avatar: images.avatar_3,
                name: "James"
            },
            menu: [
                {
                    menuId: 8,
                    name: "Spacious interior",
                    photo: images.interior_8,
                    description: "3 bedroom 2.5 bath with 2 car garage",
                    calories: 100,
                    price: 20
                }
            ]
        },
        {
            id: 4,
            name: "920 Tryon Street",
            rating: 4.8,
            categories: [2, 3],
            priceRating: expensive,
            photo: images.house_3,
            duration: "$750,000",
            location: {
                latitude: 1.5578068150528928,
                longitude: 110.35482523764315,
            },
            courier: {
                avatar: images.avatar_4,
                name: "Ahmad"
            },
            menu: [
                {
                    menuId: 9,
                    name: "Spacious interior",
                    photo: images.interior_9,
                    description: "3 bedroom 2.5 bath with 2 car garage",
                    calories: 100,
                    price: 50
                }
            ]
        },
        {
            id: 5,
            name: "623 Statesville Corner",
            rating: 4.8,
            categories: [1, 2],
            priceRating: affordable,
            photo: images.house_2,
            duration: "$250,000",
            location: {
                latitude: 1.558050496260768,
                longitude: 110.34743759630511,
            },
            courier: {
                avatar: images.avatar_4,
                name: "Muthu"
            },
            menu: [
                {
                    menuId: 10,
                    name: "Spacious interior",
                    photo: images.interior_10,
                    description: "3 bedroom 2.5 bath with 2 car garage",
                    calories: 200,
                    price: 5
                },
                {
                    menuId: 11,
                    name: "Spacious interior",
                    photo: images.interior_11,
                    description: "3 bedroom 2.5 bath with 2 car garage",
                    calories: 300,
                    price: 8
                },
                {
                    menuId: 12,
                    name: "Spacious interior",
                    photo: images.interior_12,
                    description: "3 bedroom 2.5 bath with 2 car garage",
                    calories: 300,
                    price: 8
                },
                {
                    menuId: 13,
                    name: "Spacious interior",
                    photo: images.interior_13,
                    description: "3 bedroom 2.5 bath with 2 car garage",
                    calories: 300,
                    price: 8
                },

            ]
        },
        {

            id: 6,
            name: "856 Dilworth Ave",
            rating: 4.9,
            categories: [2, 4],
            priceRating: affordable,
            photo: images.house_4,
            duration: "$2,350,000",
            location: {
                latitude: 1.5573478487252896,
                longitude: 110.35568783282145,
            },
            courier: {
                avatar: images.avatar_1,
                name: "Jessie"
            },
            menu: [
                {
                    menuId: 12,
                    name: "Spacious interior",
                    photo: images.interior_14,
                    description: "3 bedroom 2.5 bath with 2 car garage",
                    calories: 100,
                    price: 2
                },
                {
                    menuId: 13,
                    name: "Spacious interior",
                    photo: images.interior_15,
                    description: "3 bedroom 2.5 bath with 2 car garage",
                    calories: 100,
                    price: 3
                },
                {
                    menuId: 14,
                    name: "Spacious interior",
                    photo: images.interior_16,
                    description: "3 bedroom 2.5 bath with 2 car garage",
                    calories: 300,
                    price: 20
                }
            ]

        }


    ]

    const [categories, setCategories] = useState(categoryData)
    const [selectedCategory, setSelectedCategory] = useState(null)
    const [restaurants, setRestaurants] = useState(restaurantData)
    const [currentLocation, setCurrentLocation] = useState(initialCurrentLocation)


    function onSelectCategory(category) {
        //filter restaurant
        let restaurantList = restaurantData.filter(a => a.categories.includes(category.id))

        setRestaurants(restaurantList)

        setSelectedCategory(category)
    }

    function getCategoryNameById(id) {
        let category = categories.filter(a => a.id == id)

        if (category.length > 0)
            return category[0].name

        return ""
    }



    function renderHeader() {
        return (
            <View style={{ flexDirection: 'row', height: 50 }}>
                <TouchableOpacity
                style={{
                    width: 50,
                    paddingLeft: SIZES.padding *2,
                    justifyContent: 'center'
                }}
                >
                    <Image
                     source={icons.nearby}
                     resizeMode="contain"
                     style={{
                         width: 30,
                         height: 30
                     }} 
                     />


                </TouchableOpacity>

                     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                         <View
                            style={{
                                width: '70%',
                                height: "100%",
                                backgroundColor: COLORS.lightGray3,
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: SIZES.radius
                            }}
                         >
                             <Text style={{ ...FONTS.h3 }}>{currentLocation.streetName}</Text>
                         </View>
                     </View>
                    
                            <TouchableOpacity
                                style={{
                                    width: 50,
                                    paddingRight: SIZES.padding *2,
                                    justifyContent: 'center'
                                }}
                            >
                                <Image 
                                    source={icons.basket}
                                    resizeMode="contain"
                                    style={{
                                        width: 30,
                                        height: 30
                                    }}
                                />

                            </TouchableOpacity>


            </View>
        )
    }

    function renderMainCategories() {

        const renderItem = ({item}) => {
            return (
                <TouchableOpacity
                style={{
                    padding: SIZES.padding,
                    paddingBottom: SIZES.padding *2,
                    backgroundColor: (selectedCategory?.id == item.id) ? COLORS.primary : COLORS.white,
                    borderRadius: SIZES.radius,
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: SIZES.padding,
                    ...styles.shadow
                }}
                onPress={() => onSelectCategory(item)}
                >
                    <View
                    style={{
                        width: 50,
                        height: 50,
                        borderRadius: 25,
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: (selectedCategory?.id == item.id) ? COLORS.white : COLORS.lightGray
                    }}>
                        <Image
                        source={item.icon}
                        resizeMode="contain"
                        style={{
                            width: 30,
                            height: 30
                        }} />

                    </View>
                    <Text
                    style={{
                        marginTop:SIZES.padding,
                        color: (selectedCategory?.id == item.id) ? COLORS.white : COLORS.black,
                        ...FONTS.body5
                    }}>
                        {item.name}
                    </Text>
                </TouchableOpacity>
            )
        }
        return (
            <View
            style={{
                padding: SIZES.padding *2
            }}>
                <Text 
                style={{
                    ...FONTS.h1
                }}>
                    For
                </Text>
                <Text
                style={{
                    ...FONTS.h1
                }}>
                    Sale
                </Text>

                <FlatList
                data={categories}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => `${item.id}`}
                renderItem={renderItem}
                contentContainerStyle={{
                    paddingVertical: SIZES.padding *2
                }} />

            </View>
        )
    }

        function renderRestaurantList() {
            const renderItem = ({item}) => (
                <TouchableOpacity
                style={{marginBottom: SIZES.padding * 2}}
                onPress={() => navigation.navigate("Listing", 
                {
                    item,
                    currentLocation
                })}
                >

                    {/*Image*/}
                    <View
                    style={{
                        marginBottom: SIZES.padding
                    }}
                    >
                        <Image
                            source={item.photo}
                            resizeMode="cover"
                            style={{
                                width: "100%",
                                height: 200,
                                borderRadius: SIZES.radius
                            }}
                        />
                        <View
                        style={{
                            position: 'absolute',
                            bottom: 0,
                            height: 50,
                            width: SIZES.width * 0.3,
                            backgroundColor: COLORS.white,
                            borderTopRightRadius: SIZES.radius,
                            alignItems: 'center',
                            justifyContent: 'center',
                            ...styles.shadow
                        }}
                        >
                            <Text
                            style={{
                                ...FONTS.h4
                            }}>
                                {item.duration}
                            </Text>

                        </View>
                    </View>

                    {/* Restaurant Info Section */}
                    <Text style={{...FONTS.body2}}>{item.name}</Text>

                    <View
                    style={{
                        marginTop: SIZES.padding,
                        flexDirection: 'row'
                    }}>
                        {/*Rating */}

                        <Image
                        source={icons.star}
                        style={{
                            height: 20,
                            width: 20,
                            tintColor: COLORS.primary,
                            marginRight: 10
                        }}
                        />
                        <Text style={{...FONTS.body3}}>{item.rating}</Text>

                        {/* Categories */}

                        <View
                        style={{
                            flexDirection: 'row',
                            marginLeft: 10
                        }}
                        >
                            {item.categories.map((categoryId) => {
                                return (
                                    <View
                                    style={{
                                        flexDirection: 'row',
                                    }}
                                    key={categoryId}
                                    >
                                        <Text style={{...FONTS.body3}}>{getCategoryNameById(categoryId)}</Text>
                                        <Text style={{...FONTS.h3, color: COLORS.darkGray}}> . </Text>
                                    </View>
                                )
                            })
                        }

                        {/* Price */}
                        {
                            [1, 2, 3].map((priceRating) => (
                                <Text
                                key={priceRating}
                                style={{
                                    ...FONTS.body3,
                                    color: (priceRating <= item.priceRating) ? COLORS.black : COLORS.darkgray
                                }}>$</Text>
                            ))
                        }

                        </View>

                    </View>

                </TouchableOpacity>
            )
            return (
                <FlatList
                data={restaurants}
                keyExtractor={item => `${item.id}`}
                renderItem={renderItem}
                contentContainerStyle={{
                    paddingHorizontal: SIZES.padding * 2,
                    paddingBottom: 30
                }} />
            )
        }

    return (
        <SafeAreaView style={styles.container}>
            {renderHeader()}
            {renderMainCategories()}
            {renderRestaurantList()}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
        backgroundColor: COLORS.lightGray4
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 1,
    }
})

export default Home;