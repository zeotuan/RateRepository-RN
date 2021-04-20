import AsyncStorage from '@react-native-async-storage/async-storage';

class AuthStorage {
    constructor(namespace='auth'){
        this.namespace = namespace;
    }

    async getAccessToken(){
        const rawAccessToken = await AsyncStorage.getItem(
            `${this.namespace}:AccessToken`
        )
    }

    async setAccessToken(AccessToken){
        await AsyncStorage.setItem(
            `${this.namespace}:AccessToken`,
            JSON.stringify(AccessToken)
        )
    }

    async removeAccessToken(){
        await AsyncStorage.removeItem(
            `${this.namespace}:AccessToken`
        ) 
    }
}

export default AuthStorage;