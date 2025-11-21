import { Route, Switch } from "wouter";
import Homepage from "./pages/homepage/Homepage";
import LogInSignUp from "./pages/log_in/LogInSignUp";
import BudgetForm from "./pages/budget_form/BudgetForm";
import Details from "./pages/details/Details";
import Itinerary from "./pages/itinerary/Itinerary"
import FinalOffer from "./pages/final_offer/FinalOffer";

function App() {
  return (
    <>
      <Switch>
        <Route path="/" component={Homepage} />
        <Route path="/homepage" component={Homepage} />
        <Route path="/loginsignup" component={LogInSignUp} />
        <Route path="/budgetform" component={BudgetForm} />
        <Route path="/details" component={Details} />
        <Route path="/itinerary" component={Itinerary} />
        <Route path="/finaloffer" component={FinalOffer} />
      </Switch>
    </>
  );
}

export default App;
