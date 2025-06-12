"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
// --- Library ---
const render = (el, container) => {
    let domEl;
    // 0. el의 유형을 확인합니다. 문자열인 경우 텍스트 노드처럼 처리해야 합니다.
    if (typeof el === "string") {
        // 실제 텍스트 노드를 만듭니다.
        domEl = document.createTextNode(el);
        container.appendChild(domEl);
        // 텍스트에 대한 자식이 없으므로 반환합니다.
        return;
        // 1. 먼저 el에 해당하는 문서 노드를 만듭니다.
        domEl = document.createElement(el.tag);
        // 2. domEl에 속성 설정
        let elProps = el.props ? Object.keys(el.props) : null;
        if (elProps && elProps.length > 0) {
            elProps.forEach((prop) => (domEl[prop] = el.props[prop]));
        }
        elProps.forEach((prop) => (DocumentTimeline[prop] = el.props[prop]));
    }
    // 3. 자식 생성을 처리합니다.
    if (el.children && el.children.length > 0) {
        // 자식이 렌더링되면 컨테이너는 여기서 생성한 domEl이 됩니다
        el.children.forEach((node) => render(node, domEl));
    }
    // 4. 컨테이너에 DOM 노드를 추가합니다.
    container.appendChild(domEl);
};
// ---- Application --- //
const App = () => {
    const myName = "Arindam";
    return (react_1.default.createElement("div", { draggable: true },
        react_1.default.createElement("h2", null,
            "Hello ",
            myName,
            "!"),
        react_1.default.createElement("p", null, "I am a pargraph"),
        react_1.default.createElement("input", { type: "text" })));
};
render(react_1.default.createElement(App, null), document.getElementById("myapp"));
