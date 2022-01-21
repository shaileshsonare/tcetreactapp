{/* <Add x={5} y={6} /> */}

function Add(props){
    return (
        <>
            <h1>Add Component</h1>
            Value of x : {props.x}
            Value of y : {props.y}
            <br/>
            {props.x + props.y}
        </>
    );

}

export default Add;