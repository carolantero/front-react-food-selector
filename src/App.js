import { useState } from 'react';

import hamburguer from './assets/hamburguer.png';


function FoodCard({ hamburguer, food_name, food_description, contador, more_food, less_food }) {
  return (
    <div className="card">
      <img src={hamburguer} alt={food_name} />
      <h1>{food_name}</h1>
      <p>
        {food_description}
      </p>

      <div className='select'>
        <button onClick={less_food} className='btn'>-</button>
        <span className='counter'>
          {contador}
        </span>
        <button onClick={more_food} className='btn'>+</button>
      </div>

    </div>
  )
}



function App() {

  const [contador, setContador] = useState(0);

  function contarMais() {
    setContador(contador + 1);
  }

  function contarMenos() {
    if (contador === 0) {
      return
    }

    const controlarContador = contador <= 0 ? contador === 0 : contador - 1;
    setContador(controlarContador);
  }



  return (
    <div className="App">
      <FoodCard hamburguer={hamburguer}
        food_name='Hamburguer'
        food_description='Arcu, sagittis, ut lectus congue dapibus semper odio a, lobortis.'
        contador={contador}
        more_food={contarMais}
        less_food={contarMenos}
      />
    </div>
  );
}

export default App;
