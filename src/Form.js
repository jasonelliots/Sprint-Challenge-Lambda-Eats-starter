import React from "react";
import {Link} from "react-router-dom"; 

export default function Form(props) {

  const {
    values,
    onInputChange,
    onSubmit,
    errors,
    onCheckboxChange,

    } = props;

  return (
    <div>
       <Link to="/">
            <h1>MAKE YO PIZZA</h1>
        </Link>

        <div className="lilDiv">
    <form onSubmit={onSubmit}>

    <div className='errors'>
          <div>{errors.name}</div>
         
     </div>
     
     <h2> Your name: </h2>
      <label>  
        <input
          value={values.name}
          onChange={onInputChange}
          name="name"
          type="text"
        />
      </label>
    <h2> Pizza size:</h2>
      <label>
          <select
            onChange={onInputChange}
            value={values.size}
            name='size'
          >
            <option value=''>- Select an option -</option>
            <option value='Small'>Small</option>
            <option value='Medium'>Medium</option>
            <option value='Large'>Large</option>
          </select>
        </label>

    <h2> Pick your toppings: </h2>
      <label> Pepperoni 
        <input
          checked={values.pepperoni}
          onChange={onCheckboxChange}
          name="pepperoni"
          type="checkbox"
        />
      </label>

      <label> Cheese 
        <input
          checked={values.cheese}
          onChange={onCheckboxChange}
          name="cheese"
          type="checkbox"
        />
      </label>

      <label> Peppers 
        <input
          checked={values.peppers}
          onChange={onCheckboxChange}
          name="peppers"
          type="checkbox"
        />
      </label>

      <label> Onions 
        <input
          checked={values.onions}
          onChange={onCheckboxChange}
          name="onions"
          type="checkbox"
        />
      </label>

    <h2>Special Instructions</h2>
      <label>  
        <input
          value={values.specialInstructions}
          onChange={onInputChange}
          name="specialInstructions"
          type="text"
        />
      </label>
        <br></br>
      <button> Add to Order! </button>
    </form>
    </div>
    </div>
  );
}
