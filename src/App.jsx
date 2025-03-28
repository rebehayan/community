import PageRouter from "./PageRouter";
import "./scss/style.scss";
import Header from "./components/Organisms/Header";
import Sidebar from "./components/Organisms/Sidebar";
import Footer from "./components/Organisms/Footer";

function App() {
  return (
    <>
      <Header />
      <Sidebar />
      <PageRouter />
      <Footer />
    </>
  );
}

export default App;
