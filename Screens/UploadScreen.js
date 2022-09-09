import React from 'react'
import {
    View,
    StyleSheet,
    Modal,
    Text,
} from 'react-native';

import LottieView from 'lottie-react-native';
import * as Progress from 'react-native-progress';
import Colors from '../config/Colors';

export default function UploadScreen({ onDone,progress = 0, visible = false }) {
    return (
        <Modal
            visible={visible}
        >
            <View style={styles.container}>
                {progress < 1 ? (
                    <Progress.Bar
                        progress={progress}
                        width={200}
                        color={Colors.primary}
                    />) : (
                    <LottieView 
                        source={require('../asserts/animations/done.json')}
                        autoPlay
                        loop={false}
                        onAnimationFinish={onDone}
                        style={{width:400, height:400}}
                   />
                )}

            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center'
    }
});