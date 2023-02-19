import {useState} from "react"
import InputField from "./form-fields/InputField"

function App() {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  })

  const formFields = [
    {
        id: 1,
        name: "username",
        type: "text",
        placeholder: "Username",
        label: "Username",
        errorMessage:"Username should be 3-16 characters and shouldn't include any special charactert!",
        require: true,
        pattern: "^[A-Za-z0-9]{3,16}$",
        autocomplete: "off"
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      label: "Email",
      errorMessage: "It should be valid email address!",
      require: true,
      autocomplete: "off"
  },
  {
    id: 3,
    name: "password",
    type: "password",
    placeholder: "Password",
    label: "Password",
    require: true,
    autocomplete: "off",
    errorMessage: "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
    pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$^&*]{8,20}$`
},
{
  id: 4,
  name: "confirmPassword",
  type: "text",
  placeholder: "Confirm password",
  label: "Confirm mpassword",
  require: true,
  autocomplete: "off",
  errorMessage: "Password Should be match!",
  pattern: values.password,
}
  ]

  const onChange = (e) =>{
    setValues({...values,[e.target.name]: e.target.value})
  }
  const handleSubmit=(e)=>{
    e.preventDefault()

  }
  return (
  <form onSubmit={handleSubmit}>
   {formFields.map((field)=>(
    <InputField key={field.id} {...field} value={values[field.name]} onChange={onChange}/>
   ))}
    <button class="button" role="button">Submit</button>
  </form>
  )
}

export default App
