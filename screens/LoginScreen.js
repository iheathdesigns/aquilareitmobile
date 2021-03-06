import React, {useEffect, useState} from 'react'
import { View, StyleSheet, Image } from 'react-native'
import { Input, Button } from 'react-native-elements'
import { auth } from '../firebase'
import { images } from '../constants';


const LoginScreen = ({navigation}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const signIn = () => {
        auth.signInWithEmailAndPassword(email, password)
        
        .catch((error) => {
            
            var errorMessage = error.message
            alert(errorMessage)
        });
    }
    useEffect(() => {
        
        const unsubscribe = auth.onAuthStateChanged(function(user) {
            if (user) {
                navigation.replace('Home')
            } else {
                navigation.canGoBack()&&navigation.popToTop();
            }
        });
        return unsubscribe
    }, [])

    return (
        <View style={styles.container}>
            <Image 
            style={styles.fullLogo}
            source={images.fullLogo}/>
            <Input 
            placeholder='Enter your email'
            autoCapitalize='none'
            label='Email'
            leftIcon={{type: 'material', name: 'email'}}
            value={email}
            onChangeText={text => setEmail(text)}
            />
            <Input 
            placeholder='Enter your password'
            autoCapitalize='none'
            label='Password'
            leftIcon={{type: 'material', name: 'lock'}}
            value={password}
            onChangeText={text => setPassword(text)}
            secureTextEntry
            />
            <Button title='Sign in' style={styles.button} onPress={signIn} />
            <Button title='Register' style={styles.button} onPress={()=>navigation.navigate('Register')} />
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        width: 200,
        marginTop: 10
    },
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 10
    },
    fullLogo: {
        width: 200,
        height: 120,
        marginBottom: 10,
        marginTop: 50
    }
})

export default LoginScreen