const path = require("path");

require("dotenv").config({ path: path.join(__dirname, "../.env.test") });

jest.setTimeout(1000000);
