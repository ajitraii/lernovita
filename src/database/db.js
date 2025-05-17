import { Alert } from 'react-native';
// import SQLite from 'react-native-sqlite-storage';

import { openDatabase } from 'react-native-sqlite-storage';

export const db = openDatabase({ name: 'UserDatabase.db' });

// export const getDBConnection = async () => {

//   return await SQLite.openDatabase(
//     {name: 'myApp.db', location: 'default'},
//     () => {
//         // Alert.alert('Success', 'DB Connected Successfully') 
//     },
//     (error) => {
//         Alert.alert('Error', error)
//     },
// );
// };