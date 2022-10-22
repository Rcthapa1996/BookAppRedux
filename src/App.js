import "./styles.css";

//Components
import Home from "./components/home";
import Login from "./components/loginSignUp";
import CardDetails from "./components/cartDetails";
import ContactUs from "./components/contactUs";
import UploadNewBook from "./components/uploadNewBooks";

export default function App() {
  return (
    <div className="App">
      <Home />
      {/* <Login /> */}
      {/* <CardDetails /> */}
       {/* <ContactUs /> */}
      {/* <UploadNewBook /> */}
    </div>
  );
}
