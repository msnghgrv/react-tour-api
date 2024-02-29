import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tours-project";
function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const fetchTours = async (url) => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      console.log(tours);
      setLoading(false);
      setTours(tours);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  const removeTour = (id) => {
    const newTour = tours.filter((tour) => id !== tour.id);
    setTours(newTour);
  };
  useEffect(() => {
    fetchTours(url);
  }, []);
  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  if (tours.length === 0) {
    return (
      <main>
        <h1>No tour left</h1>
        <button className="btn" onClick={() => fetchTours(url)}>
          refresh
        </button>
      </main>
    );
  } else {
    return (
      <main>
        <Tours tours={tours} removeTour={removeTour} />
      </main>
    );
  }
}

export default App;
