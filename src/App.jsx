import React from "react";
import MedalForm from "./components/MedalForm";
import MedalList from "./components/MedalList";
import MedalListItem from "./components/MedalList";
import SortControls from "./components/SortControls";

const App = () => {
  const allStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <div style={allStyle}>
      <h1>2024 파리 올림픽</h1>
      <main
        style={{
          marginTop: "20px",
        }}
      >
        <MedalForm />
      </main>
      <section
        style={{
          marginTop: "60px",
        }}
      >
        <MedalList />
      </section>
    </div>
  );
};

export default App;
