import React from 'react';
import {
    Text,

} from 'react-native';

import Styles from "../config/Styles";
function AppText({ children, style }) {
    return (
        <Text style={[Styles.text, style]}>{children}</Text>
    );
}


export default AppText;