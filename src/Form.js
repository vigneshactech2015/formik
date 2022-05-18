import React from 'react';
import { Formik } from 'formik';
import './form.css';

const validateForm=(values)=>{
console.log(validateForm,values);
const errors={};

if(values.email.length<5){
  errors.email="Please Provide a longer email";
}else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)){
  errors.email = 'Invalid email address';
}

if(values.password.length<8){
errors.password="Please provide a longer password";
}else if(values.password.length>12){
  errors.password="Please provide a shorter password";
}

return errors;
}

function Form() {
  return (
    <div>
    <Formik initialValues={{email:'',password:''}}
    validate={validateForm}
    onSubmit={(values)=>{
        console.log("onSubmit",values);
    }}>
    {(formik)=>(<form onSubmit={formik.handleSubmit}>
    <input type="email" id="email" name="email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder='Enter your email'/> {formik.errors.email&&formik.touched.email&&formik.errors.email}
     <input type="password" id="password" name="password" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder='Enter your password'/>
     {formik.errors.password&&formik.touched.password&&formik.errors.password}
     <br/>
     <button type="submit">Submit</button>
    </form>)}
    </Formik>
    </div>
  )
}

export default Form