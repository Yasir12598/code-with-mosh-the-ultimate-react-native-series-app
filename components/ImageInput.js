import React from 'react'
import {
    View,
    StyleSheet,
    Image,
    TouchableOpacity,
    Alert,
} from 'react-native';
import Colors from '../config/Colors';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function ImageInput({ imageUri, onChangeImage }) {

    const getImage = async () => {
        const options = { mediaType: 'photo' }
        const result = await launchImageLibrary(options);
        if (!result.didCancel) {
            onChangeImage(result.assets[0].uri)
        }
        
    }

    const handlePress = () => {
        if (!imageUri) getImage();
       else Alert.alert(
        'Delete', 
        "Are you sure you want to delete this image?",
        [
            {text:'Yes', onPress:()=>onChangeImage(null)},
            {text:'No'}
        ]

        )
}

    return (
        <TouchableOpacity
            style={styles.container}
            onPress={() => handlePress()}
        >
            {!imageUri &&
                <MaterialCommunityIcons name='camera' size={40} color={Colors.medium} />
            }

            {imageUri &&
                <Image
                    source={{ uri: imageUri }}
                    style={{
                        width: '100%',
                        height: '100%',
                    }}
                />
            }
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.light,
        borderRadius: 15,
        overflow: 'hidden'
    }
});