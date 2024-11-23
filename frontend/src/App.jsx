import { RouterProvider } from "react-router-dom";
import { router } from "./routes/routes";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <RouterProvider
        router={router}
        future={{
          v7_startTransition: true,
        }}
      />
      <Toaster position="top-right" reverseOrder={true} />
    </>
  );
}

export default App;
