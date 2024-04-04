const menData = [
  {
    image: '../public/men/download.jpeg',
    title: 'My Title1',
    description: 'This is my title 1',
    buttonContent: 'Shop Flip-Flops',
  },
  {
    image: '../public/men/images (1).jpeg',
    title: 'My Title2',
    description: 'This is my title 2',
    buttonContent: 'Shop Flip-Flops',
  },
  {
    image: '../public/men/images (2).jpeg',
    title: 'My Title3',
    description: 'This is my title 3',
    buttonContent: 'Shop Flip-Flops',
  },
  {
    image: '../public/men/images (3).jpeg',
    title: 'My Title4',
    description: 'This is my title 4',
    buttonContent: 'Shop Flip-Flops',
  },
]

const womenData = [
  {
    image: '../public/women/download (1).jpeg',
    title: 'My Title1',
    description: 'This is my title 1',
    buttonContent: 'Shop Flip-Flops',
  },
  {
    image: '../public/women/images (1).jpeg',
    title: 'My Title2',
    description: 'This is my title 2',
    buttonContent: 'Shop Flip-Flops',
  },
  {
    image: '../public/women/images (3).jpeg',
    title: 'My Title3',
    description: 'This is my title 3',
    buttonContent: 'Shop Flip-Flops',
  },
  {
    image: '../public/women/images (5).jpeg',
    title: 'My Title4',
    description: 'This is my title 4',
    buttonContent: 'Shop Flip-Flops',
  },
]

const kidsData = []

function showDropdownCards(elem) {
  switch (elem.id) {
    case 'men-btn':
      showCategoryCards(elem.id, menData)
      break

    case 'women-btn':
      showCategoryCards(elem.id, womenData)
      break

    case 'kids-btn':
      showCategoryCards(elem.id, kidsData)
      break

    default:
      showCategoryCards(menData)
      break
  }
}

function showCategoryCards(elemId, data) {
  const columnBtnElems = document.getElementsByClassName('category-column-btn')

  Array.from(columnBtnElems).forEach((elem) => {
    if (elem.id !== elemId) {
      elem.style.color = '#212529'
      elem.style.borderBottom = '2px solid #878787'
    }
  })

  const columnBtnElem = document.getElementById(elemId)

  columnBtnElem.style.color = '#de0428'
  columnBtnElem.style.borderBottom = '2px solid #de0428'

  for (let i = 0; i < 4; i++) {
    const imageElem = document.getElementById(`card-img${i + 1}`)
    const titleElem = document.getElementById(`card-title${i + 1}`)
    const descriptionElem = document.getElementById(`card-description${i + 1}`)
    const buttonContentElem = document.getElementById(`card-button${i + 1}`)

    imageElem.src = data[i].image
    titleElem.innerText = data[i].title
    descriptionElem.innerText = data[i].description
    buttonContentElem.innerText = data[i].buttonContent
  }
}
