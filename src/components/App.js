import "../styles/bootstrap.min.css";
import "../styles/App.css";
import Header from "./Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Footer from "./Footer";
import Doctors from "../pages/Doctors";
import Contact from "../pages/Contact";
import ErrorPage from "../pages/Error";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import AuthProvider from "../contexts/AuthProvider";
import Appoinment from "../pages/Appoinment";
import Invoice from "../pages/Invoice";
import PrivateRoute from "../routes/PrivateRoute";
import ServiceDetails from "../pages/ServiceDetails";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/doctors" component={Doctors} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/login" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />

          <PrivateRoute exact path="/services/:id">
            <ServiceDetails />
          </PrivateRoute>

          <PrivateRoute exact path="/appoinment">
            <Appoinment />
          </PrivateRoute>

          <PrivateRoute exact path="/invoice">
            <Invoice />
          </PrivateRoute>

          <Route path="*" component={ErrorPage} />
        </Switch>
        <Footer />
      </AuthProvider>
    </Router>
  );
}

export default App;
