// Formik x React Native example
import React from 'react';
import { Button, TextInput, View, Text } from 'react-native';
import { Formik } from 'formik';
import { object, string, number, date, InferType } from 'yup';
let userSchema = object({
    firstName: string().required("Please Enter Your First Name"),
    lastName: string().required("Please Enter Your Last Name"),
    email: string().email("Please Enter Your Valid  Email"),
});

const LoginWithFormikandYup = props => (
    <Formik
        initialValues={{ email: '', firstName: '', lastName: '' }}
        onSubmit={values => console.log(values)}
        validationSchema={userSchema}
    >
        {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
            <View style={{ flex: 1, alignItems: 'center' }}>
                <TextInput
                    placeholder='Enter Email'
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}
                    style={{ borderWidth: 1, width: '90%', height: 50, justifyContent: 'center', marginTop: 40 }}
                />
                {errors.email && <Text style={{ color: 'red', alignSelf: 'center', width: '90%', marginTop: 10 }}>{errors.email}</Text>}

                <TextInput
                    placeholder='Enter your First Name'
                    onChangeText={handleChange('firstName')}
                    onBlur={handleBlur('firstName')}
                    value={values.firstName}
                    style={{ borderWidth: 1, width: '90%', height: 50, justifyContent: 'center', marginTop: 40 }}
                />
                {errors.firstName && <Text style={{ color: 'red', alignSelf: 'center', width: '90%', marginTop: 10 }}>{errors.firstName}</Text>}
                <TextInput
                    placeholder='Enter Your Last Name'
                    onChangeText={handleChange('lastName')}
                    onBlur={handleBlur('lastName')}
                    value={values.lastName}
                    style={{ borderWidth: 1, width: '90%', height: 50, justifyContent: 'center', marginTop: 40 }}
                />
                {errors.lastName && <Text style={{ color: 'red', alignSelf: 'center', width: '90%', marginTop: 10 }}>{errors.lastName}</Text>}

                <Button onPress={handleSubmit} title="Submit" />
            </View>
        )}
    </Formik>
);

export default LoginWithFormikandYup