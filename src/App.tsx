import { RouterProvider } from "react-router-dom";
import { MainRouter } from "./Router/MainRouter";
import { Provider } from "react-redux";
import { store } from "./Redux/Store";
import { PersistGate } from "redux-persist/integration/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { persistStore } from "redux-persist";
import { ContextProvider } from "./Provider/ContextProvider";

let persistor = persistStore(store);

let client = new QueryClient();
const App = () => {
  return (
    <div>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <QueryClientProvider client={client}>
            <ContextProvider>
              <RouterProvider router={MainRouter} />
            </ContextProvider>
          </QueryClientProvider>
        </PersistGate>
      </Provider>
    </div>
  );
};

export default App;
