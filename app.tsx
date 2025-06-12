// --- Library ---
const React = {
  createElement: (...args) => {
    console.log(args);
  },
};
// --- Application ---
const App = (
  <div darggable>
    <h2>Hello React!</h2>
    <p>I am a paragraph</p>
    <input type="text" />
  </div>
);
