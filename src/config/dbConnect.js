//mongodb+srv://admin:<password>@mycluster.uhnjdgd.mongodb.net/?retryWrites=true&w=majority&appName=MyCluster

import mongoose, {mongo} from "mongoose";

async function dbConnect() {

    mongoose.connect(process.env.DB_CONNECTION_STRING);

    return mongoose.connection;
};

export default dbConnect;

