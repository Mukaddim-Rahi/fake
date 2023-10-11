// Example usage in a React component
import React, { useState } from 'react';
// import { predictImage } from '../services/apiService';

function Dashboard() {
  const [inputData, setInputData] = useState([]); // Define your input data here
  const [predictions, setPredictions] = useState([]);

  // const handlePredict = async () => {
  //   try {
  //     const result = await predictImage(inputData);
  //     setPredictions(result);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  return (
    <div>
      {/* Your input UI here */}
      {/* <button onClick={handlePredict}>Predict</button>

      {predictions.length > 0 && (
        <div>
          <h2>Predictions:</h2>
          <ul>
            {predictions.map((prediction, index) => (
              <li key={index}>Class {index}: {prediction.toFixed(4)}</li>
            ))}
          </ul>
        </div>
      )} */}
    </div>
  );
}

export default Dashboard;
