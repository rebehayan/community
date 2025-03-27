import PageRouter from "./PageRouter";
import "./scss/style.scss";
import Header from "./components/Organisms/Header";
import Sidebar from "./components/Organisms/Sidebar";

function App() {
  return (
    <>
      <Header />
      <Sidebar />
      <PageRouter />
    </>
  );
}

export default App;
