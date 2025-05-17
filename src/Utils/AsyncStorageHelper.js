import AsyncStorage from "@react-native-async-storage/async-storage"

const USERID = 'userId'

export const saveUserId = async (userid) => {
    return await AsyncStorage.setItem(USERID, `${userid}` ? userid : '')
}
export const getUserId = async () => {
    return await AsyncStorage.getItem(USERID)
}