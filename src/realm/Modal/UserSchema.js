import Realm from 'realm'


export const UserScheme = {
    name: 'User',
    primaryKey: '_id',
    properties: {
        _id: 'int',
        name: 'string',
        email: 'string',
        address: 'string',
        isSynced: { type: 'bool', default: false }
    }
}