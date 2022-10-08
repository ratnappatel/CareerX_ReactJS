function Greet(props)
{
    const message='Hi Everyone Welcome to React Component Family';
    return (
    <div>
     <h1>Hello {props.name}</h1>
     <h3>{message}</h3>
    </div>)

}

export default Greet;