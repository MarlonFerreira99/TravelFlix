import React, { useState } from 'react';
import PageRoot from '../../../components/PageRoot';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField'

function RegisterCategory () {
  const initialValues = {
    name: '',
    description: '',
    color: ''
  }
  const [categories, setCategories] = useState([]);
  const [values, setValues] = useState(initialValues);


  function setValue(fieldKey, fieldValue) {
    // fieldKey: nome, descricao, bla bla bla.....
    setValues({
      ...values,
      [fieldKey]: fieldValue // Ex -> nome: 'valor'
    });
  }

  function handleChange(infoLogs) {
    setValue(
      infoLogs.target.getAttribute('name'),
      infoLogs.target.value
      );
  }

  return (
    <PageRoot>
      <h1>Cadastro de Categoria: {values.name} </h1>

      <form  onSubmit= {function handleSubmit(infoEvents) {
        infoEvents.preventDefault();
        console.log('Você tentou enviar o form né?');
        setCategories([
          ...categories,
          values
        ]);

        setValues(initialValues);

      }}>

        <FormField
          label="Nome da Categoria"
          type="text"
          value= {values.name}
          name="name"
          onChange={handleChange}
        />

        <div>
          <label>
            Descrição:
            <textarea
              type="text"
              value={values.description}
              name="description"
              onChange={handleChange}
            />
          </label>
        </div>

        <FormField
          label="Cor"
          type="color"
          value= {values.color}
          name ="color"
          onChange={handleChange}
        />

        {/* <div>
          <label>
            Cor:
            <input
              type="color"
              value={values.color}
              name="color"
              onChange={handleChange}
            />
          </label>
        </div> */}
      

        <button>
          Cadastrar
        </button>
      </form>

      <ul>
        {categories.map((category, index) => {
          return (
            <li key= {`${category}${index}`}>
              {category.name}
            </li>
          );
        })}
      </ul>

      <Link to="/">
        Ir para home
      </Link>

    </PageRoot>
  )
}

export default RegisterCategory;