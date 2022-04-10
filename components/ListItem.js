import React from 'react';

import {
    StyleSheet,
    View,
    Image,
    Text,
    TouchableHighlight,
    TouchableOpacity,
} from 'react-native';
import Colors from '../config/Colors';

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";


function ListItem({ image, title, subTitle, ImageComponent, style, onPress, selectMessageOnpress ,DeleteIconView}) {
    return (
       

        <TouchableHighlight
            onPress={selectMessageOnpress}
            underlayColor={Colors.light}
        >

            <View style={[styles.container, style]}>
                {ImageComponent}
                {image && <Image style={styles.image} source={image} />}
                <View style={styles.parentDeatailContainer}>
                    <View style={styles.detailContainer}>
                        <Text style={{ fontWeight: "bold", color:'black' }}>{title}</Text>
                        {subTitle && <Text>{subTitle}</Text>}
                    </View>
                    <TouchableOpacity style={styles.deleteIconContainer} onPress={onPress}>
                          
                      {DeleteIconView}      

                    </TouchableOpacity>
                </View>
            </View>
        </TouchableHighlight>
        
    );
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginLeft:5,
        marginTop:5,
        padding:10
        //  height:80


    },
    detailContainer: {
        marginLeft: 7,
        justifyContent: 'center',

    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
    },
    parentDeatailContainer: {
        flexDirection: 'row',
    },
    deleteIconContainer: {
        width: 50,
        height: 50,
        position: 'absolute',
        marginLeft: 230,
        flex: 1,
        marginVertical: 20,
        paddingHorizontal: 10,
        paddingVertical: 10,


    }
})
export default ListItem;