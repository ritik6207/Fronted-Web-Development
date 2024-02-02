// function Box() {
//     return(
//         <div className='box'>
//         <h1 id = 'abc'>This is heading.</h1>
//         <p>This is a test paragraph which is created by React. This paragramph has no attribute and is contained inside a div which is also created by React.</p>
//     </div>
//     );
// }

//Arraw function
const Box = () => {
    return(
        <div className='box'>
          <h1 id = 'abc'>This is heading.</h1>
            <p>This is a test paragraph which is created by React. This  paragramph has no attribute and is contained inside a div which is also created by React.</p>
        </div>
    );
}

const App = () => {
    return(
        <div className="row">
            <div className="col">
                <Box/>
            </div>
            <div className="col">
                <Box/>
            </div>
        </div>
    );
}


ReactDOM.render(
    <App/>,
    document.getElementById('react-container')
);

// function App() {
//     return(
//         <div className="row">
//             <div className="col">
//                 <Box/>
//             </div>
//             <div className="col">
//                 <Box/>
//             </div>
//         </div>
//     );
// }
