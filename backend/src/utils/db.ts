import { MongoClient } from 'mongodb';

const uri = 'your_mongodb_connection_string';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

export const connectToDatabase = async () => {
    try {
        await client.connect();
        console.log('Connected to database');
        return client.db('ecommerce');
    } catch (error) {
        console.error('Database connection error:', error);
        throw error;
    }
};

export const closeDatabaseConnection = async () => {
    try {
        await client.close();
        console.log('Database connection closed');
    } catch (error) {
        console.error('Error closing database connection:', error);
    }
};