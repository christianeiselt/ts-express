import "dotenv/config";
import createServer from "server";

const startServer = () => {
  const app = createServer();
  const port: number = parseInt(<string>process.env.PORT) || 4000;

  app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`server running on port ${port}`);
  });
};

startServer();
