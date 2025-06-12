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
    return (React.createElement("div", { draggable: true },
        React.createElement("h2", null, "Hello React!"),
        React.createElement("p", null, "I am a paragraph"),
        React.createElement("input", { type: "text" })));
};
console.log(React.createElement(App, null));
