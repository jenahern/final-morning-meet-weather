import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { predictionApi } from "./rest/api2";
import NewPredictionForm from "./components/Form";
import Prediction from "./components/Prediction";
import PredictionsList from "./components/PredictionsList";
import Sidebar from "./components/Sidebar";
import Calendar2 from "./components/Calendar2";
import Weather from "./components/Weather";
// import "react-calendar/dist/Calendar.css";
import "./App.css";

export default function App() {
  //hook to hold prediction
  const [predictions, setPredictions] = useState([]);

  //hook to add new prediction
  const [newPredictions, setNewPrediction] = useState({
    name: "",
    comment: "",
  });

  const navigate = useNavigate();

  //useEffect - I need this to run when the page loads to keep predictions from the api
  useEffect(() => {
    const getPredictions = async () => {
      //async function to get predicitons from api
      const allPredictions = await predictionApi.get(); //get predictions from api and store in variable
      setPredictions(allPredictions); //update predictions state with predictions from api
      // const data = await weatherApi.post(newPrediction);
      console.log(allPredictions);
    };
    getPredictions(); //call function to get comments from api
  }, []); //empty array as second argument to prevent infinite loop

  return (
    <div className="container-md m-2 border shadow">
      <div className="row-md">
        <div className="col-md">
          <Calendar2 />
        </div>

        <div className="predictions/new">
          <Routes>
            <Route
              path="/"
              element={
                <NewPredictionForm
                  // onSubmit={updateNewPrediction}
                  newPredictions={newPredictions}
                  setNewPrediction={setNewPrediction}
                  predictions={predictions}
                  setPredictions={setPredictions}
                />
              }
            />
            <Route
              path="predictions"
              element={
                <PredictionsList
                  predictions={predictions}
                  setPredictions={setPredictions}
                />
              }
            />
            <Route path="predictions/today" element={<Weather />} />
          </Routes>
          <div className="my-2">
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
}
