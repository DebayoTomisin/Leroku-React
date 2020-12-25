import React, {Component} from "react"
import './showcaseform.css'

class ShowcaseForm extends Component{
    constructor(props){
        super(props)
        this.state = {
            name: ' ',
            email: ' ',
            company: ' '
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange = (event) =>{
        const target = event.target
        const value = target.type === undefined ? console.log('done') : target.value;
        const name = target.name
        this.setState(
            {
                [name] : value
            }
        )
    }

    handleSubmit = (event) => {
        console.log('A name was submitted' + this.state.name)
        event.preventefault()
    }

    render(){
        return(
            <div className= "showcase-form card">
                <h2>Request a Demo</h2>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-control">
                        <input
                            name="name"
                            placeholder="Name"
                            onChange= {this.handleChange}
                            type="text"
                            required={true}
                        />
                    </div>
                    <div className="form-control">
                        <input
                            type="text"
                            name="company"
                            placeholder= "Company Name"
                            required = {true}
                            onChange= {this.handleChange}
                        />
                    </div>
                    <div className="form-control">
                        <input
                            type="email"
                            name="email"
                            required ={true}
                            placeholder="Email"
                        />
                    </div>
                    <input
                        type="submit"
                        value="Send"
                        className = "btn btn-primary"
                    />
                </form>
            </div>
                
        )
    }
}
export default ShowcaseForm

