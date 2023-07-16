// npm install express mongoose morgan cors dotenv
// npm install typescript ts-node-dev @types/express @types/morgan @types/cors -D
// npx tsc --init


import app  from "./app";
import dotenv from 'dotenv';
import { startConnection } from "./database";

dotenv.config();

startConnection();
app.listen(4000);
console.log(
    "Server running on port 4000"
 ); 











