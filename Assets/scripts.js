// Guardamos elementos del DOM en variables que podemos utilizar

//form
const pizzaForms = document.querySelector('#main_form');
//inputs
const topping_items = document.querySelector('#topping-items');
const pizzaSize = document.getElementById('pizzaSize');
//section
const list = document.querySelector('#lista');

//Nos suscribimos al evento submit de pizzaFrom (nuestro formulario)
pizzaForm.addEventListener('submit', function(event){
  // Previene el default del submit para que no se actualize la página
  event.preventDefault();

  //Preguntamos por el valor de los inputs (Dentro de la función que se ejecuta a raiz del evento de submit)
  const pizzaFlavor = pizza.value;
  const pizzaSize = pizzaSize.value;


  // let pizzaImg;
  // if(pizzaFlavor == 'pastor'){
  //   pizzaImg = 'pastor.jpeg';
  // }

  //Estamos inyectando código HTML a el elemento list (Solo funcionia usando backtips ``)
  list.innerHTML += `
    <div class="pizza-orden">
      <h3>Pidieron una pizza ${pizzaFlavor}</h3>
      <p>De tamaño ${sizeValue}</p>
      <p>Otra cosa</p>
      <img src="pizza.png">
      <input id="confirm-button" type="button" value="confirmar">
    </div>
  `
});
