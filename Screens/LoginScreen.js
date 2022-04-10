import React,{useState} from 'react';
import {
    StyleSheet,
    Image,
    View,
} from 'react-native';

import * as Yup from 'yup';

import { AppForm, SubmitButton, AppFormField } from '../components/forms';

// import AppFormField from '../components/forms/AppFormField';
// import SubmitButton from '../components/forms/SubmitButton';
// import AppForm from '../components/forms/AppForm';

const validationschema = Yup.object().shape({
    email: Yup.string().required().email().label("* Email"),
    password: Yup.string().required().min(4).label("* Password")
});

function LoginScreen(props) {
    const [hidePassword,setHidePassword]=useState(true);
    return (
        <View >
            <Image
                style={styles.logo}
                source={require("../asserts/logo.png")}
            />
            <AppForm
                initialValues={{ email: '', password: '' }}
                onSubmit={values => console.log(values)}
                validationSchema={validationschema}
            >
                <AppFormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon={"email"}
                    name={"email"}
                    keybordType={"email-address"}
                    placeholder={"Email"}
                    textContentType="emailAddress" //only works in IOS to auto fill email from email chain

                />
                <AppFormField
                    autoCapitalize={"none"}
                    autoCorrect={false}
                    icon={"lock"}
                    name={"password"}
                    placeholder={"Password"}
                    secureTextEntry={hidePassword?true:false}
                    passwordEyeIcon={hidePassword ? 'eye-off' : 'eye'}
                    passwordEyeOnpress={()=>setHidePassword(!hidePassword)}
                    textContentType={"password"}
                    
                />

                <SubmitButton title={"Login"} />
            </AppForm>

        </View>
    );
}
const styles = StyleSheet.create({
    logo: {
        width: 80,
        height: 80,
        alignSelf: "center",
        marginTop: 50,
        marginBottom: 20,
    }
})
export default LoginScreen;