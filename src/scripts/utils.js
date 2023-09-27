export function titleChecker() {
  const productsHeading = document.querySelector('.product__section__title');
  const breadcrumbHeading = document.querySelector('.currentsite');
  
  // Create a new MutationObserver
  const observer = new MutationObserver((mutationsList, observer) => {
    for (const mutation of mutationsList) {
      if (mutation.type === 'childList' && mutation.target === productsHeading) {
        // Content of <h3> has changed
        breadcrumbHeading.textContent = productsHeading.textContent
      }
    }
  });

  // Configure the observer to watch for changes in the child nodes (content) of the <h3> element
  const config = { childList: true };

  // Start observing the <h3> element
  observer.observe(productsHeading, config);

  // To disconnect the observer when you no longer need it (e.g., when your page/component unmounts):
  // observer.disconnect();
}

export function gridLayoutChanger() {
  const gridButtonCells = document.querySelector('.fa-table-cells-large')
  const gridButtonLines = document.querySelector('.fa-list')
  const gridElement = document.querySelector('.grid__col4')

  gridButtonLines.addEventListener('click', () => {
    gridElement.style.gridTemplateColumns = '1fr'
  })

  gridButtonCells.addEventListener('click', () => {
    gridElement.style.gridTemplateColumns = 'repeat(auto-fill, minmax(300px, 1fr))'
  })
}