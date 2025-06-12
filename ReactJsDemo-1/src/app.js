const rootHtmlElement = document.getElementById('root');

const rootReactElement = ReactDOM.createRoot(rootHtmlElement);

const headingReactElement = React.createElement('h1', null, 'Hello JSX from React')
const secondHeadingReactElement = React.createElement('h2', null, 'JSX');

const headingReactSectionElement = React.createElement('header', null, headingReactElement, secondHeadingReactElement);


function Main(props) {
    return React.createElement(
        'main',
        {},
        React.createElement('h3', {}, props.title),
        React.createElement(
            'li',
            {},
            'The Matrix',
        ),
        React.createElement(
            'li',
            {},
            'Man of steel',
        )
    );
}

const siteContent = React.createElement(
    'div',
    {},
    headingReactSectionElement,
    React.createElement(
        Main,
        {title: 'Best Movies'},
    )
);

const siteContentJSX = (
    <div>
        {headingReactSectionElement}
        <Main title='Best Movies' />
    </div>
)

rootReactElement.render(siteContentJSX);
