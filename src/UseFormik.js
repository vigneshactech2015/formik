import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
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

    const formValidationSchema=yup.object({
        email:yup.string()
        .min(5,"Need a bigger email")
        .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,"pattern doesnot match")
        .required("Why not fill this email?"),
        password:yup.string()
        .min(8,"Please provide a longer password")
        .max(12,"Please provide a shorter password")
        .required("Why not fill this password?")
    })

function UseFormik() {
  
    const formik=useFormik({
        initialValues:{email:'',password:''},

        validationSchema:formValidationSchema,
        onSubmit:(values)=>{
        console.log("onSubmit",values);
    }
})
  
  
    return (
    <div>
    <form onSubmit={formik.handleSubmit}>
    <input type="email" id="email" name="email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder='Enter your email'/> {formik.errors.email&&formik.touched.email&&formik.errors.email}
     <input type="password" id="password" name="password" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder='Enter your password'/>
     {formik.errors.password&&formik.touched.password&&formik.errors.password}
     <br/>
     <button type="submit">Submit</button>
    </form>
    </div>
  )
  
}

export default UseFormik