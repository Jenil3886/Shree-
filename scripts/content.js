const contentClasses = [
  'home-content',
  'new-content',
  'men-content',
  'women-content',
  'kids-content',
  'sale-content',
  'brands-content',
]

function showContent(elem) {
  switch (elem.id) {
    case 'new':
      showContentByCategory('new-content')
      break

    case 'men':
      showContentByCategory('men-content')
      break

    case 'women':
      showContentByCategory('women-content')
      break

    case 'kids':
      showContentByCategory('kids-content')
      break

    case 'sale':
      showContentByCategory('sale-content')
      break

    case 'brands':
      showContentByCategory('brands-content')
      break
  }
}

function showContentByCategory(className) {
  for (let contentClass of contentClasses) {
    const element = document.querySelector(`.${contentClass}`)

    element.style.display = 'none'
  }

  const element = document.querySelector(`.${className}`)
  element.style.display = 'block'
}
