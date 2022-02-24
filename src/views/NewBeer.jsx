import axios from "axios";
import { useState } from "react"
import { useNavigate } from "react-router-dom";

function NewBeer() {

    const [form, setForm] = useState({
        name: "",
        tagline: "",
        description: "",
        first_brewed: "",
        brewers_tips: "",
        attenuation_level: 0,
        contributed_by: "",
    })

    const handleForm = (e) => {
        e.persist();
        setForm((prev) => {
          return {
            ...prev,
            [e.target.name]: e.target.value,
          };
        });
      };
      
      const navigate = useNavigate()

      const handleSubmit = e => {
        e.preventDefault();
        axios
            .post(`https://ih-beers-api2.herokuapp.com/beers/new`, form)
            .then(() => {
                navigate('/beers')
            })
            .catch(error => {
                console.log(error)
            })

    }

    return (

        <>
        <form onSubmit={handleSubmit}>
        <label>Name</label>
          <input
            name="name"
            type="text"
            value={form.name}
            onChange={handleForm}
            placeholder="name"
          />
          <label>Tagline</label>
          <input
            name="tagline"
            type="text"
            value={form.tagline}
            onChange={handleForm}
            placeholder="image"
          />
          <label>Description</label>
          <input
            name="description"
            type="text"
            value={form.description}
            onChange={handleForm}
            placeholder="calories"
          />
          <label>First Brewed</label>
          <input
            name="first_brewed"
            type="text"
            value={form.first_brewed}
            onChange={handleForm}
            placeholder="calories"
          />
          <label>Brewers Tips</label>
          <input
            name="brewers_tips"
            type="text"
            value={form.brewers_tips}
            onChange={handleForm}
            placeholder="calories"
          />
          <label>Attenuation Level</label>
          <input
            name="attenuation_level"
            type="number"
            value={form.attenuation_level}
            onChange={handleForm}
            placeholder="calories"
          />
          <label>Contribueted By</label>
          <input
            name="contributed_by"
            type="text"
            value={form.contributed_by}
            onChange={handleForm}
            placeholder="calories"
          />
          <button type="submit">Add</button>
          </form>
        </>

    )
}

export default NewBeer