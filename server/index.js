import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import multer from "multer";
import helmet from "helmet";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";
import { verifyToken } from "./middlewares/auth.js";
import { register } from "./controllers/auth.js";
import authRoutes from "./routes/auth.js";
import User from "./models/User.js";
import { exampleExperiments } from "./data/index.js";
import { users } from "./data/index.js";
import Experiment from "./models/Experiment.js";
import experimentRoutes from "./routes/experiment.js"
import { addExperiment } from "./controllers/experiments.js";

/* CONFIGURATIONS */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/assests", express.static(path.join(__dirname, "public/assests")));

/* FILE STORAGE */
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "public/assets");
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    },
  });
  const upload = multer({ storage });


/* ROUTES */
app.post("/auth/register", register);
app.post("/posts", verifyToken, upload.single("picture"), addExperiment);
app.use("/auth", authRoutes);
app.use("/experiments",experimentRoutes);

  const PORT = process.env.PORT || 6001;
mongoose
  .connect(process.env.MONGO_URL, {
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));

//  User.insertMany(users);
// Experiment.insertMany(exampleExperiments);

  })
  .catch((error) => console.log(`${error} did not connect`));