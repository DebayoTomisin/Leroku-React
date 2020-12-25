import cliimage  from "../../../images/cli.png"
import './cli.css'

function Cli(){
    return(
        <section className="cli">
            <div className="container grid">
                <img src={cliimage} alt="how to install package"/>
                <div className="card">
                    <h3>Easy to use, cross platform cli</h3>
                </div>
                <div className="card">
                    <h3>Deploy in Seconds</h3>
                </div>
            </div>            
        </section>
    )
}

export default Cli
