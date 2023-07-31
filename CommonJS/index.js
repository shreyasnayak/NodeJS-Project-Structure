// Public library
const { PORT } = require("config")

// User defined utility calls (boilerplate code)
const WebHook = require("./utility/WebHook");
const DateManager = require("./utility/DateManager");
const { replaceSubString } = require("./utility/Utility");

// Read config file
const port = process.env.PORT || PORT;

// Catch uncaught exception
process.on("uncaughtException", async (err) => {
    console.error("Un Caught Exception : ", err);
});

  