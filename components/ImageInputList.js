import React, { useRef } from 'react'
import { View, StyleSheet, ScrollView } from 'react-native';
import ImageInput from './ImageInput';

export default function ImageInputList({ imageUris = [], onRemoveImage, onAddImage }) {
    const scrollView =useRef();
    return (
        <ScrollView
            ref={scrollView}
            horizontal
            onContentSizeChange={()=>scrollView.current.scrollToEnd()}
        >
        <View style={styles.container}>
            {imageUris.map((uri) =>(
                <View key={uri} style={{marginRight:10}}>
                <ImageInput
                    imageUri={uri}
                    onChangeImage={() => onRemoveImage(uri)}
                />
                </View>
            ))}
            <ImageInput onChangeImage={(uri)=> onAddImage(uri)}/>
        </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    }
});