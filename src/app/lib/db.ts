// intialize the lowdb instance and make it available to the rest of the app
import { JSONFilePreset } from 'lowdb/node'
import defaultDb from './defaultDb.json'

interface Database {
    users: Record<any, any>[]
}

// Read or create db.json
const defaultData: Database = defaultDb
const db = await JSONFilePreset('db.json', defaultData)

export default db