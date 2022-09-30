import React from "react";
import Prediction from "./Prediction";

const PredictionList = ({ predictions, setPredictions }) => {


    return (
        <div>
            {predictions.map((prediction) => (
                <Prediction prediction={prediction}
                    key={prediction.id}
                    setPredictions={setPredictions}
                    predictions={predictions}
                />
                //map through predictions and return a prediction component for each prediction with unique key
            ))}

        </div>
    );
}

export default PredictionList;

