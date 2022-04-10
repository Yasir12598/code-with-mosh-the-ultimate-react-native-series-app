import React, {useState} from 'react';

import { AppForm, AppFormField, SubmitButton } from '../components/forms';
import * as Yup from 'yup';




const validationschema = Yup.object().shape({
    name: Yup.string().required().min(3).max(40).label("Name"),
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password")
});

function RegisterScreen(props) {
    const [hidePassword, setHidePassword]=useState(true);
    return (
        
        <AppForm 
            initialValues={{name:'', email:'',password:''}}
            onSubmit={values=> console.log(values)}
            validationSchema={validationschema}
        >
            <AppFormField
                name={"name"}
                autoCapitalize={'words'}
                autoCorrect={false}
                icon={'account'}
                keybordType={"default"}
                placeholder="Name"
            />
             <AppFormField
                name={"email"}
                autoCapitalize={'none'}
                autoCorrect={false}
                icon={'email'}
                keybordType={"email-address"}
                placeholder="Email"
            />
             <AppFormField
                name={"password"}
                autoCapitalize={'none'}
                autoCorrect={false}
                icon={'lock'}
                secureTextEntry={hidePassword? true: false}
                passwordEyeIcon={hidePassword ? 'eye-off' : 'eye'}
                passwordEyeOnpress={()=> setHidePassword(!hidePassword)}
                placeholder="Password"
                
            />

            <SubmitButton title={"Register"}/>
        </AppForm>
        
    );
}

export default RegisterScreen;