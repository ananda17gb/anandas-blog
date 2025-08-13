import dotenv from "dotenv";
import app from "./app";
import routes from "./routes/index";

dotenv.config();

const startServer = async () => {
  const PORT = process.env.PORT || 1235;

  app.use("/api", routes);

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  })
}

startServer().catch((error) => {
  console.error("There is problem running the server", error);
  process.exit(1);
})
