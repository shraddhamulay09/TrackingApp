import logo from "./logo.svg";
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
    import "./App.css";
import Header from "./Header";
import PickupForm  from "./PickupForm";

function App() {
  return (
    <>

    <Header/>
    
    
      {/* <div className="App">
        <Header /> */}
        {/* <Slider /> */}
        {/* <SearchTrackId /> */}
        {/* <PickUpForm /> */}
        {/* <ContactUs /> */}
        {/* <AboutUs /> */}
        {/* <div id="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.2087897567008!2d73.85312881484273!3d18.519464687409695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c065144d8edf%3A0x3703b8095866c54b!2sShaniwar%20Wada!5e0!3m2!1sen!2sin!4v1658953936030!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div> */}
      {/* </div> */}
      {/* <Routes>
    <Route path="/" component={<App/>} />
    <Route path="/contactus" component={<ContactUs/>} />
    <Route path="/about" component={<AboutUs/>} />
    <Route path="/pickup" component={<PickUpForm/>} />
    </Routes> */}
    </>
  );
}

export default App;
