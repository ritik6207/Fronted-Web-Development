const Box = (props) => {
    return(
        <div className='box'>
          <h1 id = 'abc'>{props.heading}</h1>
            <p>This is a test paragraph which is created by React. This  paragramph has no attribute and is contained inside a div which is also created by React.
            </p>
        </div>
    );
}

const App = () => {
    return(
        <div className="row">
            <div className="col">
                <Box heading = 'First Heading'/>
            </div>
            <div className="col">
                <Box heading = 'Second Heading'/>
            </div>
            <div className="col">
                <Box heading = 'Third Heading'/>
            </div>
            <div className="col">
                <Box heading = 'Fourth Heading'/>
            </div>
        </div>
    );
}


ReactDOM.render(
    <App/>,
    document.getElementById('react-container')
);
