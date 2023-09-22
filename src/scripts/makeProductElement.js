export default async function makeProductElement(image ,title, price, discountPrice) {
  const newDiv = document.createElement('div')
  newDiv.classList.add('product')
  newDiv.innerHTML = `
    <img src="${image}"></img>
    <h4>${title}</h4>
    <p>${price}</p>
    <p>${price - discountPrice}</p>
  `
  return newDiv
} 