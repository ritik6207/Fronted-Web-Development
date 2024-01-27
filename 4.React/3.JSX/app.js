
/*
Expression in JSX.
it is denoted of {yurWork}
*/

const name = 'Ritik';
const myAtrr = 'abc';
const box =(
    <div className='box'>
        <h1 id ={myAtrr}>This is {name}'s heading.</h1>
        <p>This is a test paragraph which is created by React. {45 + 23} This paragramph has no attribute and is contained inside a div which is also created by React.</p>
    </div>
);

ReactDOM.render(
    box,
    document.getElementById('react-container')
);