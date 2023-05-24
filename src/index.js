import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/assets/styles/style.scss'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import store from './store/store';
import { Provider } from 'react-redux';
import { AuthProvider } from './context/AuthProvider';
// import Router from './routes'
import instance from './helpers/http';
import RoutingContainer from './containers/RoutingContainer';

instance.interceptors.request.use(request => {
  return request
}, error => {
  return Promise.reject(error)
})

instance.interceptors.response.use(response => {
  return response
}, error => {
  return error.response
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>

        <AuthProvider>
        {/* <Router /> */}
          <Routes>
            <Route path="/*" element={<RoutingContainer/>} />
          </Routes>
          </AuthProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
