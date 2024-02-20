import express from "express";
import cors from "cors";
import "express-async-errors";
import { router } from "./routes";
import { ErrorHandler } from "./utils/error-handler";

const app = express();
const port = 3333;

app.use(express.json({ limit: "50mb" }));
app.use(express.json());
app.use(cors());
app.set("trust proxy", true);

app.use("/", router);
app.use(ErrorHandler);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
