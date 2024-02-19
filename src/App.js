import { Route, Routes, BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import CreateEmployee from "./pages/CreateEmployee/CreateEmployee";
import EmployeeList from "./pages/EmployeeList/EmployeeList";
import Error from "./pages/Error/Error";
import Footer from "./components/Footer/Footer";
import { Provider } from "react-redux";
import store from "./redux/store";

import "./styles/mains.css";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Header />
        <Routes>
          <Route exact path="/" element={<CreateEmployee />} />
          <Route exact path="/EmployeeList" element={<EmployeeList />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
