import cloud from "../../../images/cloud.png"

function Cloud(){
    return(
        <section className="cloud bg-primary my-2 py-2">
            <div className="container grid">
                <div className="text-center">
                    <h2 className="lg">Extreme Cloud Hosting</h2>
                    <p className="lead my-1">Cloud Hosting like you've never seen. Fast, Efficient and Scalable</p>
                    <button className="btn btn-dark">Read More</button>
                </div>
                <img src={cloud} alt="cloud"/>
            </div>
        </section>
    )
}

export default Cloud
