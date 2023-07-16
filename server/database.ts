import {connect} from 'mongoose';

export const startConnection = async () => {

    try {
        
        const db = await connect(`${process.env.DB_ROUTE}`)
        console.log("Name db: ", db.connection.name);
    } catch (error) {
        console.error(error);
    }
};

 