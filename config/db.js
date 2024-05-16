import mongoose from 'mongoose'

//MongoDB Connection 
const dbConfig = async () => {
    try {

        mongoose.connect(process.env.MONGO_URL)
        const DBcon = mongoose.connection

        DBcon.on('connected', () => {
            console.log('Database connected')
        })

        DBcon.on('disconnected', () => {
            console.log('Database Disconnected')
        })

        DBcon.on('error', () => {
            console.log('Error Occured while connection Database')
        })
    } catch (err) {
        return err
    }
}

export default dbConfig