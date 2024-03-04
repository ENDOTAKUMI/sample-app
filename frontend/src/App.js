import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [value, setValue] = useState([]);

  const API_URL = "http://localhost/api/example-list";

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(API_URL);
        setValue(res.data.content);
        return;
      } catch (e) {
        return e;
      }
    })();
  }, []);

  return (
    <div className="App">
      {value.map((content) => {
        return (
          <div key={content.id}>
            <h1>{content.name}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default App;
