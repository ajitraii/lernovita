import Realm from 'realm'
import { UserScheme } from './Modal/UserSchema';



let realmInstance;
export const getRealmDb = async () => {
    try {
        if (realmInstance) return realmInstance
        realmInstance = await Realm.open({
            path: 'myRealmDb',
            schema: [UserScheme]
        })
        console.log('User DB has Created')
        return realmInstance
    } catch (error) {

        console.log('error', error)
    }
}