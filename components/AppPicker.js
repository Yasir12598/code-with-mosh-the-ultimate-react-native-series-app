import React, { useState } from 'react';

import {
    StyleSheet,
    View,
    TextInput,
    Modal,
    TouchableWithoutFeedback,
    Button,
} from 'react-native';


import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import AppText from '../components/AppText';
import defaultStyles from "../config/Styles"
function AppPicker({ icon, placeholder, ...otherProps }) {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <>
            <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
                <View style={styles.container}>
                    {icon && <MaterialCommunityIcons
                        style={styles.icon}
                        name={icon}
                        size={25}
                        color={defaultStyles.Colors.medium}
                    />}
                    <AppText style={[styles.text, { alignSelf: "center" }]}>{placeholder}</AppText>
                    <MaterialCommunityIcons

                        name={"chevron-down"}
                        size={25}
                        color={defaultStyles.Colors.medium}
                    />
                </View>
            </TouchableWithoutFeedback>
            <Modal visible={modalVisible} animationType={"fade"}>
                <Button title='close' onPress={() => setModalVisible(false)} />
            </Modal>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: defaultStyles.Colors.light,
        borderRadius: 25,
        flexDirection: 'row',
        width: "100%",
        padding: 5,
        marginVertical: 10,
    },
    icon: {
        margin: 10,
        // position:'absolute'
        alignSelf: 'center'
    },

    text: {
        flex: 1,
    }

})
export default AppPicker;