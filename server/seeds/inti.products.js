const fs = require('fs').promises;
const mongoose = require("mongoose");
const itemModal = require('../model/productmodel');
const { dbUrl } = require('../utilities');

async function dbConnection() {
    try {
        await mongoose.connect(dbUrl, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("✅ Successfully connected to DB");
    } catch (error) {
        console.error("❌ Database connection error:", error);
        process.exit(1);
    }
}

async function main() {
    try {
        await dbConnection();

        const data = await fs.readFile(__dirname + "/data.json", 'utf8');

        const parsedData = JSON.parse(data); 

        console.log("📂 File content:", parsedData);

        const result = await itemModal.insertMany(parsedData);
        console.log("✅ Inserted Documents:", result);
        return "🎉 Script execution completed."
    } catch (err) {
        console.error("❌ Error:", err);
        process.exit(1);
    }
}

main().then((msg) => {
    console.log(msg)
    process.exit(0); 
})
.catch(()=> "❌ Error");
