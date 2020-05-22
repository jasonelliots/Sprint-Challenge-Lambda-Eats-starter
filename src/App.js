import React, { useState } from "react";
import axios from "axios";
import { Route } from "react-router-dom";

import Form from "./Form";
import Homepage from "./Homepage";
import formSchema from "./formSchema";
import * as yup from "yup";

import pizza from './pizza.jpg'

const initialFormValues = {
  name: "",
  size: "",
  pepperoni: "",
  cheese: "",
  peppers: "",
  onions: "",
  specialInstructions: "",
};

const initialFormErrors = {
  name: "",
  size: "",
  pepperoni: "",
  cheese: "",
  peppers: "",
  onions: "",
  specialInstructions: "",
};

const initialPizzas = [];

const App = () => {
  const [pizzas, setPizzas] = useState(initialPizzas);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);

  const postNewPizza = (newPizza) => {
    axios
      .post("https://reqres.in/api/pizzas", newPizza)
      .then((res) => {
        console.log(res);
        setPizzas([res.data, ...pizzas]);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setFormValues(initialFormValues);
      });
  };

  const onSubmit = (evt) => {
    evt.preventDefault();

    const newPizza = {
      name: formValues.name.trim(),
      size: formValues.size,
      pepperoni: formValues.pepperoni,
      cheese: formValues.cheese,
      peppers: formValues.peppers,
      onions: formValues.onions,
      specialInstructions: formValues.specialInstructions.trim(),
    };
    postNewPizza(newPizza);
  };

  const onInputChange = (evt) => {
    const name = evt.target.name;
    const value = evt.target.value;

    if(name === 'name'){ 
    yup
      .reach(formSchema, name)
      .validate(value)
      .then((valid) => {
        setFormErrors({
          ...formErrors,
          [name]: "",
        });
      })
      .catch((err) => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0],
        });
      });}

    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const onCheckboxChange = (evt) => {
    const { name } = evt.target;
    const { checked } = evt.target;

    setFormValues({
      ...formValues,
      [name]: checked,
    });
  };

  return (
    <div className='bigDiv'>


      <Route exact path="/">
        <Homepage />
      </Route>

      


      <Route path="/pizza">
        <Form
          values={formValues}
          onInputChange={onInputChange}
          onSubmit={onSubmit}
          errors={formErrors}
          onCheckboxChange={onCheckboxChange}
        />
      </Route>


      {pizzas.map((pizza, index) => {
        return (
          <div key={index}>
            <h2>{pizza.name}</h2>
            <h3>Size: {pizza.size} </h3>
            <h3>Toppings: </h3>
            <p>
              {pizza.cheese ? "cheese," : ""}
              {pizza.pepperoni ? "pepperoni," : ""}
              {pizza.peppers ? "peppers," : ""}
              {pizza.onions ? "onions," : ""}
            </p>
            <h3>Special Instructions: </h3>
            <p> {pizza.specialInstructions}</p>
          </div>
        );
      })}
  
    </div>
  );
};
export default App;
