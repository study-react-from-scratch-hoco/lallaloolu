// import React, { useState } from "react";
// This will our main app file.

// ---- Library --- //
const React = {
  createElement: (tag, props, ...children) => {
    if (typeof tag === "function") {
      return tag(props, ...children);
    }
    const el = {
      tag,
      props,
      children,
    };
    return el;
  },
};

// ---- Library --- //
const render = (el, container) => {
  // Clear container first to prevent duplicates
  container.innerHTML = "";

  let domEl;
  // 0. Check the type of el
  //    if string we need to handle it like text node.
  if (typeof el === "string") {
    // create an actual Text Node
    domEl = document.createTextNode(el);
    container.appendChild(domEl);
    // No children for text node so we return.
    return;
  }
  // 1. First create the document node corresponding el
  domEl = document.createElement(el.tag);
  // 2. Set the props on domEl
  let elProps = el.props ? Object.keys(el.props) : null;
  if (elProps && elProps.length > 0) {
    elProps.forEach((prop) => {
      // Handle event listeners properly
      if (prop.startsWith("on") && typeof el.props[prop] === "function") {
        const eventType = prop.toLowerCase().substring(2);
        domEl.addEventListener(eventType, el.props[prop]);
      } else {
        domEl[prop] = el.props[prop];
      }
    });
  }
  // 3. Handle creating the Children.
  if (el.children && el.children.length > 0) {
    // When child is rendered, the container will be
    // the domEl we created here.
    el.children.forEach((node) => render(node, domEl));
  }
  // 4. append the DOM node to the container.
  container.appendChild(domEl);
};

// ---- Library --- //
// Global state management
let myAppState;
const useState = (initialState) => {
  // AppState를 initialState로 설정하기 전에 확인(reRender)
  myAppState = myAppState || initialState;
  console.log("useState가 값으로 초기화되었습니다:", myAppState);
  const setState = (newState) => {
    console.log("setState가 newState 값으로 호출되었습니다:", newState);
    myAppState = newState;
    // 상태가 변경되면 UI를 새롭게 렌더링합니다.
    reRender();
  };
  return [myAppState, setState];
};

// ---- Library --- //
const reRender = () => {
  console.log("reRender-ing :)");
  const container = document.getElementById("myapp");
  if (container) {
    render(<App />, container);
  }
};

// ---- Application --- //
const App = () => {
  const [value, setValue] = useState("Arindam");
  return (
    <div draggable>
      <h2>Hello {value}!</h2>
      <p>I am a paragraph</p>
      <input
        type="text"
        value={value}
        onInput={(e) => {
          console.log("Input changed:", e.target.value);
          setValue(e.target.value);
        }}
        placeholder="Type here..."
      />
    </div>
  );
};

render(<App />, document.getElementById("myapp"));
