import { useState } from "react";

export function Form({ onSubmit }) {
  const [username, setUsername] = useState("");

  return (
    <div className="form">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit(username);
        }}
      >
        <input
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          type="text"
          placeholder="Username"
        />
        <input type="submit" />
      </form>
    </div>
  );
}
