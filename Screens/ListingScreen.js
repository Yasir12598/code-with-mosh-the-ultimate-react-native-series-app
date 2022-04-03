import React from 'react';

import {
    StyleSheet,
    View,
    SafeAreaView,
    FlatList,
} from 'react-native';

import Card from '../components/Card';

const listings = [
    {
        id: 1,
        title: "Red Jacket for sale",
        price: '100',
        image: require("../asserts/jacket2.jpg")
    },
    {
        id: 2,
        title: "Couch in Good condition",
        price: '199',
        image: require("../asserts/couch.jpg")
    }
]

function ListingScreen(props) {
    return (
        <SafeAreaView>
            <FlatList
                data={listings}
                keyExtractor={listings => listings.id.toString()}
                renderItem={({ item }) =>
                    <Card
                        image={item.image}
                        title={item.title}
                        subTitle={"$" + item.price}
                    />
                }
            />
        </SafeAreaView>
    );
}

export default ListingScreen;