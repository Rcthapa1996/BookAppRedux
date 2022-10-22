//Components
import NavBar from "./navBar";
import Body from "./body";
import Footer from "./footer";
import Modal from "./modal";

export default function Home() {
  return (
    <div style={{ border: "1px solid red" }}>
      {/* <h1>Home</h1> */}
      <NavBar />
      <Body />
      <Footer />
      {false && <Modal />}
    </div>
  );
}
