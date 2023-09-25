import getDataFromApi from '../scripts/getData';
import { makeProductElement } from '../scripts/makeProductElement';
import parameterMaker from '../scripts/parameterMaker'

const ulManu = document.querySelectorAll('.ul__manufacturer li')
const numberP = document.querySelector('.sort__by__number__items');
const productGrid = document.querySelector('.grid__col4');

function makeElements(data) {
  productGrid.innerHTML = ''
  data.forEach((product) => {
  const newProduct = makeProductElement(
    product.pictures[0],
    product.title,
    product.price,
    product.discount
  );
  productGrid.appendChild(newProduct);
});
}

ulManu.forEach(ul => {
  ul.addEventListener('click', async (e) => {
    // Error but it does work
    parameterMaker('search', 'q', e.target.dataset.manufacturer)
    const data = await getDataFromApi(`products/${window.location.search}`);
    makeElements(data)
    // Puts a number on how many products on search list
    numberP.innerHTML = `${data.length} item(s)`;
  })
})