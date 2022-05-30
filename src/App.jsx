import React from "react";
import "./App.css"
import Header from "./components/NavBar";
import { useState, useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import HomePage from './components/Home'
import PizzaForm from "./components/PizzaForm";
import Cart from "./components/Cart";
import * as yup from 'yup'
import axios from 'axios'
import {useHistory} from 'react-router-dom'

const initialState = []

    
const initialFormValue = 
    {
        name: '',
        size: '',
        pepperoni: false,
        sausage: false,
        peppers: false,
        onions: false,
        special: '',
    }

const initialFormErros =
    {
        name: '',
        size: '',
    }
const initialDisabled = true

const App = () => {
  const [myState, setMyState] = useState(initialState)
  const [form, setForm] = useState(initialFormValue)
  const [disabled, setDisabled] = useState(initialDisabled)
  const [errors, setErrors] = useState(initialFormErros)

  const history = useHistory()

  const formSchema = yup.object().shape({
    name: yup.string().min(2, "name must be at least 2 characters"),
    size: yup.string().oneOf(["small", "medium", "large"], "Pick size!"),
    pepperoni: yup.boolean(),
    sausage: yup.boolean(),
    peppers: yup.boolean(),
    onions: yup.boolean(),
    special: yup.string()
})
  
const validateChange = (name, value) => {
    yup.reach(formSchema, name)
        .validate(value)
        .then(() =>{
            setErrors({...errors, [name]: ""})
        })
        .catch(err => {
            setErrors({...errors, [name]: err.errors[0]})
        })
  }
  
  const inputChange = (name, value) => {
    validateChange(name, value)
    setForm({...form, [name]: value})
  }
  
  const postNewPizza = newPizza =>{
    axios.post("https://reqres.in/api/orders", newPizza)
      .then(res => {
          setMyState([...myState, res.data ])
          history.push("/cart")

        })
      .catch(err => console.error(err))
      .finally(()=> setForm(initialFormValue))
    
  }

  const formSubmit = () => {
    const newPizza = {
      name: form.name.trim(),
      size: form.size,
      toppings: ["pepperoni", "sausage", "peppers", "onions"].filter(top=> !!form[top]),
      special: form.special.trim()
    }
    postNewPizza(newPizza)
  }

  
    useEffect(() => {
        formSchema.isValid(form)
            .then((enabled) => {
                setDisabled(!enabled)
            })
    }, [form])

  return (
   <div className="app-container">
     <header>
       <Header />
     </header>
     <main>
       <Switch>
         <Route exact path ="/">
          <HomePage />
         </Route>
         <Route exact path ="/pizza">
          <PizzaForm
            values={form}
            change={inputChange}
            submit={formSubmit}
            disabled={disabled}
            errors={errors}
          />
         </Route>
         <Route>
           {
             myState.map(pizza => {
               return (
                 <Cart key={pizza.id} myState={pizza} />
               )
             })
           }
         </Route>
       </Switch>
     </main>
   </div>
  );
};
export default App;
