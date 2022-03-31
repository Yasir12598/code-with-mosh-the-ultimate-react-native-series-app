import React from 'react';
import {
    Text,

} from 'react-native';

import myStyles from "../config/Styles";
function AppText({ children, style }) {
    return (
        <Text style={[myStyles.text, style]}>{children}</Text>
    );
}


export default AppText;