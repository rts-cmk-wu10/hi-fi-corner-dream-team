export function makeProductElement(image ,title, price, discountPrice) {
  const newDiv = document.createElement('div')
  const imgSrc = `../${image}`
  newDiv.classList.add('product')
  newDiv.innerHTML = `
    <Image src="${imgSrc}" alt="Product image"/>
    <h4>${title}</h4>
    <p>${price}</p>
    <p>${price}</p>
  `
  return newDiv
} 