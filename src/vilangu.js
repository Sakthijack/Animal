
function Vilangu(rolex) //(props) 
{
    return (
        <div className="mainimg">
            <div className="img">
            <img src={rolex.image}  alt={rolex.namee}/>
            <h1>{rolex.namee}</h1>
            <p>{rolex.desc}</p>
            </div>
        </div>
    )
}

export default Vilangu