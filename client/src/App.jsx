import "./App.css";
import { Form } from "./components/form";
import { useState } from "react";
import { Home } from "./components/Home";

function App() {
  const [username, setUsername] = useState("");

  return (
    <div>
      {username ? (
        <Home username={username} />
      ) : (
        <Form onSubmit={setUsername} />
      )}
    </div>
  );
}

export default App;
