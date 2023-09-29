export default function makeProductElement (image, title, price, discountPrice) {
  const newDiv = document.createElement('div')
  const imgSrc = `../${image}`
  newDiv.classList.add('product')
  if (discountPrice === 0) {
    newDiv.innerHTML = `
    <div class="img__con">
      <Image src="${imgSrc}" alt="Product image"/>
    </div>
    <h4>${title}</h4>
    <p class="price__now">${price}</p>
    <a href="/shop-product?q=${title}" class="product__button">add to cart</a>
  `
  } else {
    newDiv.innerHTML = `
    <div class="img__con">
      <Image src="${imgSrc}" alt="Product image"/>
    </div>
    <h4>${title}</h4>
    <div class="product__price__con">
      <p class="price__before">${price}</p>
      <p class="price__now">${price - discountPrice}</p>
    </div>
    <p class="price__discount">${discountPrice}</p>
    <a href="/shop-product?q=${title}" class="product__button">add to cart</a>
  `
  }
  return newDiv
}
