import app from "./src/server";

const startServer = async () => {
  try {
    app.listen(5000, () => {
      console.log("Server is running on port 5000");
    });
  } catch (error) {
    console.error(error);
  }
};

startServer();
