// import "./new.scss";
// import Sidebar from "../../components/sidebar/Sidebar";
// import Navbar from "../../components/navbar/Navbar";
// import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
// import { useState } from "react";
// import axios from "axios";

// const New = ({ inputs, title }) => {
//   const [file, setFile] = useState("");
//   const [info, setInfo] = useState({});

//   const handleChange = (e) => {
//     setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
//   };

//   const handleClick = async (e) => {
//     e.preventDefault();
//     const data = new FormData();
//     data.append("file", file);
//     data.append("upload_preset", "upload");
//     try {
      
      

      
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   return (
//     <div className="new">
//       <Sidebar />
//       <div className="newContainer">
//         <Navbar />
//         <div className="top">
//           <h1>{title}</h1>
//         </div>
//         <div className="bottom">
//           <div className="left">
//             <img
//               src={
//                 file
//                   ? URL.createObjectURL(file)
//                   : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
//               }
//               alt=""
//             />
//           </div>
//           <div className="right">
//             <form>
//               <div className="formInput">
//                 <label htmlFor="file">
//                   Image: <DriveFolderUploadOutlinedIcon className="icon" />
//                 </label>
//                 <input
//                   type="file"
//                   id="file"
//                   onChange={(e) => setFile(e.target.files[0])}
//                   style={{ display: "none" }}
//                 />
//               </div>

//               {inputs.map((input) => (
//                 <div className="formInput" key={input.id}>
//                   onChange={handleChange}
//                   <label>{input.label}</label>
//                   <input type={input.type} placeholder={input.placeholder} />
//                 </div>
//               ))}
//               <button onClick={handleClick}>Send</button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default New;
import { useState } from "react";
import { Link } from "react-router-dom";
//import "./register.scss";
import axios from "axios";
 import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { TextField } from "@mui/material";





const New = () => {
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
    
      <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
        </div>
        <div className="bottom">
         
          <div className="right">
            <form>
              <div className="formInput">
                
                <input
                  type="file"
                  id="file"
                  style={{ display: "none" }}
                />
              </div></form>
              <div className="B">
            <TextField
              type="text"
              placeholder="Username"
              name="username"
              onChange={handleChange}
              className="formInput"
            />
            <TextField
              type="text"
              placeholder="email"
              name="email"
              onChange={handleChange}
              className="formInput"

            />
            <TextField
              type="text"
              placeholder="country"
              name="country"
              onChange={handleChange}
              className="formInput"
            /><br/><br/>
            <TextField
              type="text"
              placeholder="city"
              name="city"
              onChange={handleChange}
              className="formInput"
            />
            <TextField
              type="text"
              placeholder="phone"
              name="phone"
              onChange={handleChange}
              className="formInput"
            />
           
            <TextField
             className="formInput"
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
            /><br/><br/>
            
            </div>
       <button  className="CB" onClick={handleClick}>Register</button>
       
       {/* {!err && <span>user enregistrer</span>} */}
      </div>
    </div>    </div>
    </div>

  );
};

export default New;


