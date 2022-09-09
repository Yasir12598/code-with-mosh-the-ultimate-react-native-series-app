import React, { useEffect, useState } from 'react';

import {
    StyleSheet,
    View,
    SafeAreaView,
    FlatList,
    Text,
    
} from 'react-native';

import Card from '../components/Card';
import listingsApi from '../api/listings';
import AppButton from '../components/AppButton';
import Colors from '../config/Colors';
import AppActivityIndicator from '../components/AppActivityIndicator';

// import {create} from 'apisauce';

// const apiClient = create({
//     baseURL:'http://192.168.18.90:9000/api'
// });

function ListingScreen({ navigation }) {
    const [listings, setListings] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] =  useState(false)
    // console.log('?????????????', apiClient);


    useEffect(() => {
        loadListing();
        // console.log('?????????????????', loadListing());
    }, []);

    const loadListing = async () => {
        setLoading(true);
        const response = await listingsApi.getListings();
        setLoading(false);
        // console.log('?????????????<><><><>', response);
        if (!response.ok) {
            return setError(true);
        }
        
        setError(false);
        setListings(response.data);
    }
   
    return (
        <SafeAreaView>
            {error == true && 
                <>
                    <Text>
                        Cannot retreive the listings
                    </Text>
                    <AppButton
                        buttonTitle={'Retry'}
                        buttonOnPress={() => loadListing()}
                    />
                </>
            
            }
            <AppActivityIndicator visiable={loading}/>
            <FlatList
                data={listings}
                keyExtractor={listings => listings.id.toString()}
                renderItem={({ item }) => {
                    // console.log('cheeeeeeeeeeek::::  ',item.images[0].url )
                    return (
                        <Card
                            imageUrl={item.images[0].url}
                            title={item.title}
                            subTitle={"$" + item.price}
                            onPress={() => navigation.navigate('ListingDetails', item)}
                        />
                    )
                }
                }
            />
        </SafeAreaView>
    );
}

export default ListingScreen;