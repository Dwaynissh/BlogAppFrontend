import { RouterProvider } from "react-router-dom";
import { MainRouter } from "./Router/MainRouter";
import { ContextProvider } from "./Provider/ContextProvider";

const App = () => {
  return (
    <div>
      <ContextProvider>
        <RouterProvider router={MainRouter} />
      </ContextProvider>
    </div>
  );
};

export default App;
