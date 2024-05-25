import { Form, redirect, useNavigation } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
const newsletterUrl = 'https://www.course-api.com/cocktails-newsletter';

export const action = async({request}) => {
const formData = await request.formData();
const data = Object.fromEntries(formData);

try{
const res = await axios.post(newsletterUrl, data);
toast.success(res.data.msg)
return redirect("/");
}catch(err){
toast.error(err?.res?.data?.msg);
return err;
}

}
const NewsLetter = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <Form  method="POST" className="form">
      <h4 style={{ textAlign: "center", marginBottom: "25px" }}>
        Our Newsletter
      </h4>
      <div className="form-row">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input type="text" className="form-input" name="name" id="name" required/>
      </div>
      <div className="form-row">
        <label htmlFor="lastName" className="form-label" >
          Last Name
        </label>
        <input type="text" className="form-input" name="lastName" id="lastName" required/>
      </div>
      <div className="form-row">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input type="text" className="form-input" name="email" id="email" defaultValue="test@test.com" required/>
      </div>
      <button type="submit" className="btn btn-block" style={{marginTop: "0.5rem"}} disabled={isSubmitting}>{isSubmitting ? "submitting" : "Submit"}</button>
    </Form>
  );
};

export default NewsLetter;
