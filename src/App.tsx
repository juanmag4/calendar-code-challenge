import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { CalendarPage } from './pages/Calendar.page';
import { NewReminderPage } from './pages/NewReminder.page';

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Switch>
          <Route path="/reminder">
            <NewReminderPage />
          </Route>
          <Route path="/">
            <CalendarPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
