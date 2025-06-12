// --- Library ---
const React = {
  createElement: (tag, props, ...children) => {
    const el = {
      tag,
      props,
      children,
    };
    console.log(el);
    return el;
  },
};
// --- Application ---
const App = () => {
  return (
    <div draggable>
      <h2>Hello React!</h2>
      <p>I am a paragraph</p>
      <input type="text" />
    </div>
  );
};

console.log(<App />);
