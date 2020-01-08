import React from 'react';
import {render} from 'react-dom';
import { createHashHistory } from 'history'

export class App extends React.Component {
    
    constructor(props){
        super(props);
        

        this.state={
            firstName: null ,
            lastName: null ,
            email: null ,
            password: null ,

          formErrors : {
                firstNameError : " ",
                lastNameError : " ",
                emailError : " ",
                passwordError : " ",
          }
        };
    }


 handleSubmit = (e)=> {
        e.preventDefault();

        if(formValid(this.state.formErrors)){
            console.log(`
            -------SUBMITTTING-----
            First Name : ${this.state.firstName}
            Last Name : ${this.state.lastName}
            Email : ${this.state.email}
           Password: ${this.state.password}
            `) ;
            window.alert("Form is submitted.");
            window.location.reload();
        
           
            
        }
        else {
            window.alert("Invalid Form")
        }
}



handleChange = (e)=> {
    e.preventDefault();

    const {name,value} = e.target ;
    let formErrors = this.state.formErrors ;



    // console.log("Name : " , name);
    // console.log("Value : " , value);
    



    switch(name){
        case 'firstName' :
            formErrors.firstNameError = value.length < 3 ? "minimum 3 characaters required" : "";
            break;
            
        case 'lastName' :
            formErrors.lastNameError = value.length < 3 ? "minimum 3 characaters required" : "";
            break;
            
        case 'email' :
            formErrors.emailError = emailRegex.test(value)  && value.length > 0 ? "" : "Invalid Email";
            break;
            
        case 'password' :
            formErrors.passwordError = value.length < 6 ? "minimum 6 characaters required" : "";
            break;

            default: 
            break;
    }
    this.setState({formErrors, [name]: value});


}

    render() {
        return (
            <div className ="container">

                
                
<form className ="form-horizontal" onSubmit={this.handleSubmit} noValidate method="post">  
<fieldset>


<legend>Create Account</legend>


<div className ="form-group">
  <label className ="col-md-4 control-label" htmlFor="firstName">First Name</label>  
  <div className ="col-md-4">
  <input 
  id="firstName" 
  name="firstName" 
  type="text" 
  placeholder="First Name" 
 // className ="form-control input-md" 
 className={this.state.formErrors.firstNameError.length >1 ? "form-control input-md is-invalid" : "form-control input-md"}
  formNoValidate
  onChange={this.handleChange}
  />
{this.state.formErrors.firstNameError.length > 0 ? ( 
    <div className="text-danger">
        <span className="errorMessage">{this.state.formErrors.firstNameError}</span>
    </div>
) :

( 
    <div className="text-success">
        <span className="errorMessage">Looks Good !!</span>
    </div>
)

}
  </div>
</div>


<div className ="form-group">
  <label className ="col-md-4 control-label" htmlFor="lastName">Last Name </label>  
  <div className ="col-md-4">
  <input 
  id="lastName" 
  name="lastName" 
  type="text" 
  placeholder="Last Name" 
  className={this.state.formErrors.lastNameError.length >1 ? "form-control input-md is-invalid" : "form-control input-md"}
  formNoValidate
  onChange={this.handleChange}
  />


{this.state.formErrors.lastNameError.length > 0 ? ( 
    <div className="text-danger">
        <span className="errorMessage">{this.state.formErrors.lastNameError}</span>
    </div>
) :

( 
    <div className="text-success">
        <span className="errorMessage">Looks Good !!</span>
    </div>
)

}
  </div>
</div>


<div className ="form-group">
  <label className ="col-md-4 control-label" htmlFor="email">Email</label>  
  <div className ="col-md-6">
  <input 
    id="email"
    name="email"
    type="email"
    placeholder="Email" 
    className={this.state.formErrors.emailError.length >1 ? "form-control input-md is-invalid" : "form-control input-md"}
    formNoValidate
    onChange={this.handleChange}
    />

{this.state.formErrors.emailError.length > 0 ? ( 
    <div className="text-danger">
        <span className="errorMessage">{this.state.formErrors.emailError}</span>
    </div>
) :

( 
    <div className="text-success">
        <span className="errorMessage">Looks Good !!</span>
    </div>
)

}
  </div>
</div>


<div className ="form-group">
  <label className ="col-md-4 control-label" htmlFor="password">Password</label>  
  <div className ="col-md-6">
  <input
    id="password"
    name="password" 
    type="password"
    placeholder="Password" 
    className={this.state.formErrors.passwordError.length >1 ? "form-control input-md is-invalid" : "form-control input-md"}
    formNoValidate
    onChange={this.handleChange}
    />

{this.state.formErrors.passwordError.length > 0 ? ( 
    <div className="text-danger">
        <span className="errorMessage">{this.state.formErrors.passwordError}</span>
    </div>
) :

( 
    <div className="text-success">
        <span className="errorMessage">Looks Good !!</span>
    </div>
)

}





  </div>
</div>



<div className="form-group">
  <label className="col-md-4 control-label" htmlFor="submit"></label>
  <div className="col-md-4">
    <button id="submit" name="submit" className="btn btn-primary">Submit</button>
  </div>
</div>


</fieldset>
</form>


            </div>
        );
    }
}



//Main logic for form validation
// ------START-----------------------------
const formValid = (formErrors)=>{
    let valid= true;

    Object.values(formErrors).forEach(val =>{ val.length>0  && (valid = false);
    });
    return valid ;
}

//--------- END ----------


//Regular Expression for E-mail Validation
const emailRegex =RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) ;


render(<App/>, window.document.getElementById('app'));