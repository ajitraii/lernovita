import { Alert } from "react-native"
import { firebase } from '@react-native-firebase/analytics';
export const AppEvents = async (
    eventName, eventPayload
) => {
    try {

        await firebase.analytics().logEvent(eventName, eventPayload)
        Alert.alert('', 'Event Triggered')
    } catch (error) {
        console.log('analytic error', error)
    }
}