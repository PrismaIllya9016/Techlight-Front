import React, {useState} from "react";

function Signup() {

const [formData, setFormData] = useState(
        {fullname: "",
        password:"",
        confirmPassword:"", 
        email: "",
        userType:"", 
        newsLetter:"",
        phone:"",
        address:""
    }
    )

  function handleChange(event){
    console.log("handle func")
    const {name,value,type,checked}= event.target
    setFormData(prevFormData =>{
        return{
            [name]: type==="checkbox"? checked: value
        }
    })
}

    console.log(formData)

    function handleSubmit(event){
        event.preventDefault()
        console.log("Handle submit func")
    }

  return (
    <div className="signup-container">
      <div className="form-body">
        <div className="row">
          <div className="form-holder">
            <div className="form-content">
              <div className="form-items">
                <h3>Register Today</h3>
                <p>Fill in the data below.</p>
                <form onSubmit={handleSubmit} className="requires-validation" >
                  <div className="col-md-12">
                    <input
                      className="form-control"
                      type="text"
                      name="fullname"
                      onChange={handleChange}
                      placeholder="Full Name"
                      value={formData.fullname}
                      required
                    />
                    <div className="valid-feedback">Username field is valid!</div>
                    <div className="invalid-feedback">
                      Username field cannot be blank!
                    </div>
                  </div>

                  <div className="col-md-12">
                    <input
                      className="form-control"
                      type="email"
                      name="email"
                      onChange={handleChange}
                      placeholder="E-mail Address"
                      value={formData.email}

                      required
                    />
                    <div className="valid-feedback">Email field is valid!</div>
                    <div className="invalid-feedback">
                      Email field cannot be blank!
                    </div>
                  </div>

                  <div className="col-md-12">
                    <input
                      className="form-control"
                      type="tel"
                      name="phone"
                      onChange={handleChange}
                      placeholder="Phone"
                      value={formData.phone}

                      required
                    />
                    
                    <small style={{color:"white"}}>Format: 123-456-7890</small>
                    <div className="valid-feedback">Email field is valid!</div>
                    <div className="invalid-feedback">
                      Email field cannot be blank!
                    </div>
                  </div>

                  <div className="col-md-12">
                    <select className="form-select mt-3" 
                    required
                    onChange={handleChange}
                    name="userType"
                    value={formData.userType}>
                      <option selected disabled value="">
                        user Type
                      </option>
                      <option value="admin">Admin</option>
                      <option value="client">Client</option>
                    </select>
                    <div className="valid-feedback">You selected a position!</div>
                    <div className="invalid-feedback">
                      Please select a type
                    </div>
                  </div>

                  <div className="col-md-12">
                    <input
                      className="form-control"
                      type="password"
                      name="password"
                      placeholder="Password"
                      onChange={handleChange}
                      value={formData.password}
                      required
                    />
                    <div className="valid-feedback">Password field is valid!</div>
                    <div className="invalid-feedback">
                      Password field cannot be blank!
                    </div>
                  </div>

                  <div className="col-md-12">
                    <input
                      className="form-control"
                      type="password"
                      name="confirmPassword"
                      placeholder="Confirm Password"
                      onChange={handleChange}
                      value={formData.confirmPassword}
                      required
                    />
                    <div className="valid-feedback">Password does not match</div>
                    <div className="invalid-feedback">
                      Password field cannot be blank!
                    </div>
                  </div>

                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="invalidCheck"
                      name="newsLetter"
                      onChange={handleChange}
                      
                    />
                    <label className="form-check-label">
                      I want to receive newsletters from this website
                    </label>

                    <div className="invalid-feedback">
                      Please confirm that the entered data are all correct!
                    </div>
                    
                  </div>

                  <div className="form-button mt-3">
                    <button id="submit" type="submit" className="btn btn-primary">
                      Register
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Signup };
