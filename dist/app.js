import express from "express";
import cors from "cors";
// env configs
import envConfig from "./src/configs/env-config.js";
// routes
import customerRoute from "./src/routes/customer.js";
// cors
import { corsOptions, credentials } from "./src/configs/cors-configs.js";
const app = express();
app.use(credentials);
app.use(cors(corsOptions));
app.use(express.json());
// Routes
app.use("/api/customer", customerRoute);
app.listen(envConfig.PORT, () => {
    console.log(`Connected to PORT: ${envConfig.PORT}`);
});
//# sourceMappingURL=app.js.map