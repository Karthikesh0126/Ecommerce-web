import mongoose from 'mongoose';


export const Connection = async (username, password) => {
    const URL = `mongodb+srv://${username}:${password}@ecommerce-web.yogur.mongodb.net/ecommerce-web?retryWrites=true&w=majority&appName=ecommerce-web`;
    try {
        await mongoose.connect(URL);
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting with the database', error.message);
    }
}

export default Connection;