const rootHtmlElement = document.getElementById('root');

const rootReactElement = ReactDOM.createRoot(rootHtmlElement);

const headingReactElement = <h1>Hello JSX from React</h1>
const secondHeadingReactElement = <h2>Jsx is awesome</h2>;

const headingReactSectionElement =
    <header>
        <h1>Hello JSX from React</h1>
        <h2>Jsx is awesome</h2>
    </header>

rootReactElement.render(headingReactSectionElement);
