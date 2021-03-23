import useForm from "./customHooks";
import * as Joi from "joi";
import Element from "./components/Element";

function Form() {
  const schema = Joi.object({
    email: Joi.string().email({ tlds: { allow: false } }),
    password: Joi.string(),
    repeat_password: Joi.ref("password"),
  }).with("password", "repeat_password");

  const { handleSubmit, errors, elements } = useForm(schema);

  return (
    <div className="Form container">
      <h3>Formulario Parametrizable</h3>
      <form onSubmit={handleSubmit}>
        {elements
          ? elements.map((element, i) => <Element key={i} element={element} />)
          : null}

        <div>
          <p>{errors.toString()}</p>
        </div>

        <div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
