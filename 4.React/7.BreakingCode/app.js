const Box = (props) => {
    return(
        <div className='box'>
            <h1 className = {props.color} >{props.heading}</h1>
            <p>This is a test paragraph which is created by React. This       paragramph has no attribute and is contained inside a div which is also created by React.
            </p>
            <button onClick = {() => props.cnageColor(props.id,"red")}>Red</button>
            <button onClick = {() => props.cnageColor(props.id,"yellow")}>Yellow</button>
            <button onClick = {() => props.cnageColor(props.id,"blue")}>Blue</button>
            <button onClick = {() => props.cnageColor(props.id,"green")}>Green</button>
        </div>
    );
};

const Stats = (props) => {
    let boxes = props.boxes;
    let black_c = 0, r_c = 0, y_c = 0, b_c = 0, g_c = 0;
    boxes.forEach(box => {
        if(box.color == "black"){
            black_c++;
        }else if(box.color == "red"){
            r_c++;
        }else if(box.color == "yellow"){
            y_c++;
        }else if(box.color == "blue"){
            b_c++;
        }else if(box.color == "green"){
            g_c++;
        }
    }); 

    return(
        <div className='stats'>
            Total heading color count:
            <div>Black: {black_c}</div>
            <div>Red: {r_c}</div>
            <div>Yellow: {y_c}</div>
            <div>Blue: {b_c}</div>
            <div>Green: {g_c}</div>
        </div>
    );
};

class App extends React.Component {
    state =  {
        boxes: [
            {
                id: 1,
                heading: "First Heading",
                color: "black"
            },
            {
                id: 2,
                heading: "Second Heading",
                color: "black"
            },
            {
                id: 3,
                heading: "Third Heading",
                color: "black"
            },
            {
                id: 4,
                heading: "Fourth Heading",
                color: "black"
            },
            {
                id: 5,
                heading: "Fifth Heading",
                color: "black"
            },
            {
                id: 6,
                heading: "Sixth Heading",
                color: "black"
            },
            {
                id: 7,
                heading: "Seventh Heading",
                color: "black"
            },
        ]
    };

    cnageColor(id, color){
        let boxes = this.state.boxes;
        boxes[id - 1].color = color;
        this.setState({
            boxes:boxes
        });
    }
    render(){
        return(
            <div>
            <div className="row">
                {this.state.boxes.map (box => 
                    <div className='col'>
                        <Box
                            id = {box.id}
                            heading={box.heading}
                            color={box.color}
                            cnageColor = {this.cnageColor.bind(this)}
                        />
                    </div>
                )}
            </div>
            <div className='row'>
                <Stats boxes = {this.state.boxes}/>
            </div>
            </div>
        );
    };
};

ReactDOM.render(
    <App/>,
    document.getElementById('react-container')
);
