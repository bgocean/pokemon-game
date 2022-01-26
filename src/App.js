import Header from "./components/Header";
import Footer from "./components/Footer";
import Layout from "./components/Layout";
import bg1IMG from "./assets/bg1.jpg";

const App = () => {
  return (
    <>
      <Header title="This is title" descr="This is description!" />
      <Layout title="This is Layout" descr="Some text.." urlBg={bg1IMG} />
      <Layout title="This is Layout" descr="Some text.." colorBg={"red"} />
      <Layout title="This is Layout" descr="Some text.." urlBg={bg1IMG} />
      <Footer />
    </>
  );
};

export default App;
