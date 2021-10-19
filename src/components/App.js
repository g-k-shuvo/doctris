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
import PublicRoute from "../routes/PublicRoute";
import ServiceDetails from "../pages/ServiceDetails";
import Appoinment from "../pages/Appoinment";
import Invoice from "../pages/Invoice";
import PrivateRoute from "../routes/PrivateRoute";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <PublicRoute exact path="/about" component={About} />
          <PublicRoute path="/doctors" component={Doctors} />
          <PublicRoute path="/contact" component={Contact} />
          <PrivateRoute path="/services/:id" component={ServiceDetails} />
          <PublicRoute path="/login" component={SignIn} />
          <PublicRoute path="/signup" component={SignUp} />
          <PrivateRoute path="/appoinment" component={Appoinment} />
          <PrivateRoute path="/invoice" component={Invoice} />

          <Route path="*" component={ErrorPage} />
        </Switch>
        <Footer />
      </AuthProvider>
    </Router>
  );
}

export default App;
