import { useState } from "react";
import { Link } from "react-router-dom";
//import "./register.scss";
import axios from "axios";
import "./register.css";




const Register = () => {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    country: "",
    img: "test",
    city: "",
    phone: "",
    password: "",
    isAdmin: false
  });
  const [err, setErr] = useState(null);


  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  };

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:8800/api/auth/register", inputs);
    } catch (err) {
        console.log(err);
      setErr(err.response.data);
    }
  };

  //console.log(err)

  return (
    <div className="login">
      <div className="lContainer">
      <input
              type="text"
              placeholder="Username"
              name="username"
              onChange={handleChange}
              className="lInput"

            />
            <input
              type="text"
              placeholder="email"
              name="email"
              onChange={handleChange}
              className="lInput"

            />
            <input
              type="text"
              placeholder="country"
              name="country"
              onChange={handleChange}
              className="lInput"

            />
            <input
              type="text"
              placeholder="city"
              name="city"
              onChange={handleChange}
              className="lInput"

            />
            <input
              type="text"
              placeholder="phone"
              name="phone"
              onChange={handleChange}
              className="lInput"

            />
           
            <input
                      className="lInput"

              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
            />

       <Link className="lButton"  onClick={handleClick}>Register</Link>
       <Link to="/login" className="lButton1">
                  Login
        </Link>
       {/* {!err && <span>user enregistrer</span>} */}
      </div>
    </div>
  );
};

export default Register;

