const rootHtmlElement = document.getElementById('root');

const rootReactElement = ReactDOM.createRoot(rootHtmlElement);

const headingReactElement = React.createElement('h1', null, 'Hello JSX from React')
const secondHeadingReactElement = React.createElement('h2', null, 'JSX');

const headingReactSectionElement = React.createElement('header', null, headingReactElement, secondHeadingReactElement);

rootReactElement.render(headingReactSectionElement);
