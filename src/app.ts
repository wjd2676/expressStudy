import express, { Application } from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
// import swaggerUi from "swagger-ui-express";
// import YAML from "yamljs";

// import tokenRouter from "./token/route";
// import questionRouter from "./question/route";
// import languageRouter from "./language/route";
// import scoreDescriptionRouter from "./scoreDescription/route";

dotenv.config();

const app: Application = express();
const port: number = 3050;

let corsOptions = {
  origin: "*",
  credential: true
};

app.use(express.json({ limit: "100mb" }));
app.use(express.urlencoded({ limit: "100mb", extended: false }));
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// app.use("/api/token", tokenRouter);
// app.use("/api/question", questionRouter);
// app.use("/api/language", languageRouter);
// app.use("/api/scoreDescription", scoreDescriptionRouter);

app.listen(port, function () {
  console.log(`App is listening on port ${port} !`);
});

// const swaggerSpec = YAML.load(path.join(__dirname, "./swagger/openapi.yaml"));
// app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
