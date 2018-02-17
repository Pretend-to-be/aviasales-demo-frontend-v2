import React, { Component } from "react";

import "./App.css";

import Header from "./Header/";
import Footer from "./Footer/";
import PopCities from "./PopularCities/";
import LastMonthOffer from "./LastMonthOffer/";
import CheapestTickets from "./CheapTicketsOffer/";
import SignupOffer from "./SignupOffer/";
import SpecialOffer from "./TicketSpecialOffer/";
import CustomerHelp from "./CustomerHelp/";
import MobileApp from "./MobileApp/";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <PopCities />
        <LastMonthOffer />
        <CheapestTickets />
        <SignupOffer />
        <SpecialOffer />
        <CustomerHelp />
        <MobileApp />
        <Footer />
      </div>
    );
  }
}

export default App;
