import express from "express";
import cors from "cors";

// import accountsRoutes from "./routes/accounts.js";
// import settingsRoutes from "./routes/settings.js";

const app = express();

app.use(cors());
app.use(express.json());

// app.use("/api/accounts", accountsRoutes);
// app.use("/api/settings", settingsRoutes);

export default app;
