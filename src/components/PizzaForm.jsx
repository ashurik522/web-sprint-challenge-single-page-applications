import React from "react";


const PizzaForm = (props) =>{

    const {
        values,
        submit,
        change,
        disabled,
        errors,
    } = props;
   
    const onSubmit = (e) => {
        e.preventDefault()
        submit()
    }

    const onChange = (e) => {
        const { name, value, checked, type } = e.target
        const valueToUse = type === "checkbox" ? checked : value;
        change(name, valueToUse)
    }

    return(
        <div className="order-form">
            <div className="order-img">
                <h1>Build your Pizza!!</h1>
            </div>
            <form id="pizza-form" onSubmit={onSubmit}>
                <label> Who wants the pizza!?&nbsp;
                    <input 
                        id="name-input" 
                        value={values.name}
                        type="text" 
                        name="name" 
                        onChange={onChange}/>
                    <div className='error'>{errors.name}</div>
                </label>
                <label> How big you want it?&nbsp;
                    <select 
                        id="size-dropdown" 
                        name="size" 
                        value={values.size}
                        onChange={onChange}
                        >
                        <option value="" >-Select a size-</option>
                        <option value="small">Small(6 slices)</option>
                        <option value="medium">Medium(8 slices)</option>
                        <option value="large">Large(10 slices)</option>
                    </select>
                    <div className='error'>{errors.size}</div>
                </label>
                <div className="topping-list">
                    <p>What do you want on it?</p>
                    <label>Pepperoni&nbsp;
                        <input 
                            name="pepperoni"
                            type="checkbox"
                            checked={values.pepperoni}
                            onChange={onChange}
                        />
                    </label>
                    <label>Sausage&nbsp;
                        <input 
                            name="sausage"
                            type="checkbox"
                            checked={values.sausage}
                            onChange={onChange}
                        />
                    </label>
                    <label>Peppers&nbsp;
                        <input 
                            name="peppers"
                            type="checkbox"
                            checked={values.peppers}
                            onChange={onChange}
                        />
                    </label>
                    <label>Onions&nbsp;
                        <input 
                            name="onions"
                            type="checkbox"
                            checked={values.onions}
                            onChange={onChange}
                        />
                    </label>
                </div>
                <label>Special Instructions&nbsp;
                    <input 
                        type="text" 
                        id="special-text" 
                        name="special" 
                        value={values.special}
                        onChange={onChange}/>
                </label>
                <button disabled={disabled} className="order-button">Add to Order!</button>
            </form>
        </div>
    )
}

export default PizzaForm;