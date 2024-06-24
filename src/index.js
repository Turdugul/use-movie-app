import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
// function TestStar(params) {
//   const [movieRating, setMovieRating] = useState();
//   return (
//     <div>
//       <StarRating maxRating={5} color="blue" onSetRating={setMovieRating} />
//       <p>This movie was rated {movieRating} stars.</p>
//     </div>
//   );
// }
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
