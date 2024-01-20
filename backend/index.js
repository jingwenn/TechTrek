import express from "express";
import { PORT, mongoDbURL } from "./config.js";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/userRoutes.js";
import itineraryRoutes from "./routes/itineraryRoutes.js";
import itineraryDestinationRoutes from "./routes/itineraryDestinationRoutes.js";
import destination from "./routes/destinationRoutes.js";
import countryRoutes from "./routes/countryRoutes.js";

const app = express();
app.use(
  cors({
    //
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());
app.use("/user", userRoutes);
app.use("/itinerary", itineraryRoutes);
app.use("/itineraryDestination", itineraryDestinationRoutes);
app.use("/destination", destination);
app.use("/country", countryRoutes);

app.get("/", (req, res) => {
  console.log(req);
  return res.status(234).send("Hello WOrld");
});

//Connection to db and port
mongoose
  .connect(mongoDbURL)
  .then(() => {
    console.log("App is connected to db");
    app.listen(PORT, () => {
      console.log(`App is Listening at ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
