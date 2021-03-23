import { useState, useEffect } from "react";

const useForm = (schema) => {

    const formSchemaJson = require("./formSchema.json");

    /*const initialIn = {};
    formSchemaJson.forEach((element) => {
        initialIn[element.name] = "";
    });*/

    const [inputs, setInputs] = useState();
    const [errors, setErrors] = useState("");
    const [elements, setElements] = useState(null);

    useEffect(() => {
        setElements(formSchemaJson)
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        const { error } = validate();
        if(!error){
            console.log("Form submitted!", inputs);
        } else {
            console.log("Errors", error);
            setErrors(error);
        }
    };

    const handleInputChange = (event) => {
        console.log(event.target.name);
        //const temp = Object.assign({}, inputs, {[event.target.name]: event.target.value});
        //console.log(temp);
        setInputs({...inputs, [event.target.name]: event.target.value});
        console.log(inputs);
    };

    const validate = () => {
        return schema.validate(inputs);
    }

    return { handleSubmit, handleInputChange, errors, elements };
};

export default useForm;