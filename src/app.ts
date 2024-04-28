import express, { Application } from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import swaggerUi from "swagger-ui-express";
import YAML from "yamljs";
import userRoute from './user/route'
import boardRoute from './board/route'
import commentRoute from './comment/route'


dotenv.config();

const app: Application = express();
const port: number = 3060;

let corsOptions = {
  origin: "*",
  credential: true
};

const swaggerSpec = YAML.load(path.join(__dirname, "./swagger/openapi.yaml"));

app.use(express.json({ limit: "100mb" }));
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/user', userRoute);
app.use('/board', boardRoute);
app.use('/comment', commentRoute);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));


app.listen(port, function () {
  console.log(`App is listening on port ${port} !`);
});
