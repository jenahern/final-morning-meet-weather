import React, { useState, } from "react";
import { predictionApi } from "../rest/api2";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

const NewPredictionForm = ({predictions, setPredictions,  }) => {

    const [newPredictions, setNewPrediction] = useState({
        name: "", comment: ""
      });

      const navigate = useNavigate();

  //function to handle change in input
  const handleChange = (e) => {
    setNewPrediction({ ...newPredictions, [e.target.name]: e.target.value });
  };

  //method to handle submit while posting to api and updating state
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const data = await predictionApi.post(newPredictions);
    setPredictions(predictions.concat(newPredictions));
    //   newPredictions = {
    //     ...predictions,
    //     name: predictions.name,
    //     comment: predictions.comment,
    //   };
    // setPredictions([...predictions, data]);
    setNewPrediction({
      name: "",
      comment: " "     
    });
    navigate("predictions");  
    
    console.log(newPredictions.name,newPredictions.comment);
    
  };


  return (
    <div >
      <Card body className="date-card text-center mt-4">
        <h4 className="text-center mt-2">Today's Weather Prediction</h4>

        <form className="row m-2" onSubmit={handleSubmit}>
          <label>Student Name</label>
            <input className="col m-2"
              type="text"
              name="name"
              placeholder="Student Name"
              value={newPredictions.name}
              onChange={handleChange}
            />
    
            <label >Please Log Your Weather Data</label>
            <textarea className="col m-2" rows={5}
            name="comment"
            placeholder="What's today's weather like?"
             value={newPredictions.comment}
             onChange={handleChange} />
        
        
          <button className="m-2 btn btn-primary" type="submit">
            Submit
          </button>
        </form>
      </Card>
    </div>
  );
};
export default NewPredictionForm;
