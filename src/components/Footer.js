import React from "react";
import { useHistory } from "react-router-dom";

//imperative routing, using router vs link
export default function Footer() {
  const history = useHistory();
  // Get the history object

  const goBack = () => {
    history.goBack();
    // imperatively redirect back
  };

  const goForward = () => {
    history.goForward();
    // imperatively redirect forward
  };

  return (
    <footer>
      <button onClick={goBack}>Back</button>
      <button onClick={goForward}>Forward</button>
    </footer>
  );
}
