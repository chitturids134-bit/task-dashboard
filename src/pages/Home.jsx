import { useState, useEffect } from "react";

function Home() {
  const [advice, setAdvice] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.adviceslip.com/advice")
      .then(res => res.json())
      .then(data => {
        setAdvice(data.slip.advice);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching advice:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Random Advice</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <p className="text-lg text-blue-600">{advice}</p>
      )}
    </div>
  );
}

export default Home;
<h3>Feature branch update</h3>