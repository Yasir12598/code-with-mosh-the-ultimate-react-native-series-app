import React from 'react';
import {
    StyleSheet,
    View,
    SafeAreaView,
    FlatList,
} from 'react-native';
import Icon from '../components/Icon';

import ListItem from '../components/ListItem';
import ListItemSeparator from '../components/ListItemSeparator';
import Colors from '../config/Colors';

const menuItems = [
    {
        title: "My Listing",
        icon: {
            name: "format-list-bulleted",
            backgroundColor: Colors.primary,
        }
    },
    {
        title: "My Messages",
        icon: {
            name: "email",
            backgroundColor: Colors.secondary,

        },
        targetScreen:'Messages',
    }
]

function AccountScreen({navigation}) {
    return (
        <SafeAreaView style={styles.parentContainer}>

            <View style={styles.container}>
                <ListItem
                    title={"Muhammad yasir"}
                    subTitle={"m.yasir1100@gmail.com"}
                    image={require("../asserts/yasir.jpg")}
                    
                />
            </View>
            <View style={styles.container}>
                <FlatList
                    data={menuItems}
                    keyExtractor={(menuItems) => menuItems.title}
                    ItemSeparatorComponent={ListItemSeparator}
                    renderItem={({ item }) => (
                        <ListItem
                            title={item.title}
                            ImageComponent={
                                <Icon
                                    name={item.icon.name}
                                    backgroundColor={item.icon.backgroundColor}
                                />}
                                selectMessageOnpress={()=> navigation.navigate(item.targetScreen)}
                        />
                    )
                    }
                />
            </View>
            <View style={styles.container}>

            <ListItem
                ImageComponent={<Icon name={"logout"} backgroundColor={"#ffe66d"}/> }
                title={"Log Out"}
                />  
                </View>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container: {
        marginBottom:30,
        backgroundColor:Colors.white,
    },
    parentContainer:{
        backgroundColor: Colors.light,
        flex:1,
    }
})
export default AccountScreen;