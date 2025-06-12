// --- Library ---
const React = {
    createElement: (...args) => {
        console.log(args);
    },
};
// --- Application ---
const App = (React.createElement("div", { darggable: true },
    React.createElement("h2", null, "Hello React!"),
    React.createElement("p", null, "I am a paragraph"),
    React.createElement("input", { type: "text" })));
