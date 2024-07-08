// imports
import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import connectDB from "./config/db.js";
import testRoutes from "./routes/testRoutes.js";

//Dot ENV config
dotenv.config();

// mongodb connection
connectDB();

//rest object
const app = express();

//middlewares
app.use(express.json());

//routes
app.use("/api/v1/test", testRoutes);

//port
const PORT = process.env.PORT || 8080;

//listen
app.listen(PORT, () => {
    console.log(
        `Node Server Running In ${process.env.DEV_MODE} Mode on port no ${PORT}`
          .bgCyan.white
    );
});