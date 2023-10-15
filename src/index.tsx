import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";
import App from './App';
import reportWebVitals from './reportWebVitals';
import configureStore from './store/configureStore';
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
/>

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const store = configureStore()
const persistor = persistStore(store);

root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
