import mongodb from "mongodb";
import app from "./server";

const MongoClient = mongodb.MongoClient;
const mongo_username = process.env["MONGO_USERNAME"];
const mongo_password = process.env["MONGO_PASSWORD"];

const uri = `mongodb+srv://${mongo_username}:${mongo_password}@reviews.hcu6ubm.mongodb.net/?retryWrites=true&w=majority`;

const port = 8000;

MongoClient.connect(uri, {
    maxPoolSize:50,
    wtimeoutMS:2500,
    useNewUrlParser:true
})
.catch(err => {
    console.log(err.stack);
    process.exit(1);
}).then(async client => {
    app.listen(port, () => {
        console.log(`listening in port ${port}`);
    })
});