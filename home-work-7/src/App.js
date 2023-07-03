import { Route, Routes } from "react-router-dom";
import "./App.css";
import DataPage from "./pages/DataPage/DataPage";
import MainPage from "./pages/MainPage/MainPage";
import DetailedPage from "./pages/DetailedPage/DetailedPage";
import MUI from "./components/MUI/MUI";
import { Navigate } from "react-router-dom/dist";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <Routes>
      <Route to="/" element={<Layout/>}/>
      <Route path="/main" element={<MainPage />} />
      <Route path="/dateis" >
        <Route index element={<DataPage />}/>
      <Route path=":id" element={<DetailedPage/>} /></Route>
      <Route path="/mui" element={<MUI/>}/>
      <Route path="/admin" element={<Navigate to="/main" replace={true} />}/>
    </Routes>
  );
}

export default App;
