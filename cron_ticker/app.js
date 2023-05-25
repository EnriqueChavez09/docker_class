const cron = require("node-cron");
const syncDB = require("./tasks/sync-db");

cron.schedule("* * * * * *", syncDB);

console.log("inicio");
