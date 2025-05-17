


const USER_TABLE = 'users'
const createTable = async (db) => {
    db.transcation(
        txn => {
            txn.executeSql(
                `CREATE TABLE IF NOT EXISTS ${USER_TABLE}(id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL, email TEXT, address TEXT)`, []
            )
        },
        err => {
            console.log('Table Creation error', err)
        }

    )
    console.log('table created successfully')
    // const query = `CREATE TABLE IF NOT EXISTS ${USER_TABLE}(
    //    id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, email TEXT, address TEXT
    // );`;
    // // const query = `CREATE TABLE IF NOT EXISTS ${USER_TABLE} ( id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, email TEXT, address TEXT)`

    // await db.executeSql(query);
    // console.log('User Table has Created')
}

const createNewTable = (db) => {
    db.transaction(function (txn) {
        txn.executeSql(
            "SELECT name FROM sqlite_master WHERE type='table' AND name='users'",
            [],
            function (tx, res) {
                console.log('item:', res.rows.length);
                if (res.rows.length == 0) {
                    txn.executeSql('DROP TABLE IF EXISTS table_user', []);
                    txn.executeSql(
                        'CREATE TABLE IF NOT EXISTS table_user(id INTEGER PRIMARY KEY AUTOINCREMENT, name VARCHAR(20), email VARCHAR(20), address VARCHAR(255))',
                        []
                    );
                }
            }
        );
    });
}

const insertUsers = async (db, name, email, address) => {
    const insertQuery = `INSERT OR REPLACE INTO ${USER_TABLE} (name, email, address) VALUES [?, ?, ?]`
    console.log('User inserted', db)
    await db.executeSql(insertQuery, [name, email, address])
    console.log('User inserted')
}

const getUsers = async (db) => {
    const searchQuery = `SELECT * FROM ${USER_TABLE}`
    const results = await db.executeSql(searchQuery)
    const data = []
    results.forEach(result => {
        for (let index = 0; index < result.rows.length; index++) {
            data.push(result.rows.item(index))
        }
    });
    return data
}


export { createTable, insertUsers, getUsers, createNewTable }