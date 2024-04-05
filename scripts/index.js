const newPanelData = [
  {
    title: 'Men',
    items: ['Shoes', 'Accessories', 'Apparels'],
  },
  {
    title: 'Women',
    items: ['Shoes', 'Bags', 'Accessories', 'Apparels'],
  },
  {
    title: 'Kids',
    items: ['Shoes', 'Accessories'],
  },
]

const menPanelData = [
  {
    title: 'Shoes',
    items: [
      'Casual Shoes',
      'Chappal & Flipflop',
      'Formal Shoes',
      'Loafers & Moccassin',
      'Sandals & Floater',
      'Sports',
    ],
  },
  {
    title: 'Apparel',
    items: ['Joggers & Bottoms', 'Shorts', 'T-Shirt & Polos'],
  },
  {
    title: 'Collections',
    items: [
      'Online Exclusives',
      'Festive & Ethnic',
      'Party-Bling',
      '365 Closet',
      'Workwear',
      'Lifestyle',
    ],
  },
  {
    title: 'Brands',
    items: [
      'Puma',
      'Nike',
      'Adidas',
      'Abross',
      'Campus',
      'Bata',
      'Sparks',
      'Liberty',
      'Indus',
      'TRV',
      'Runner',
    ],
  },
]

const womenPanelData = [
  {
    title: 'Shoes',
    items: [
      'Ballerina',
      'Casual Shoes',
      'Chappal',
      'Flipflop',
      'Sandals',
      'Sports',
    ],
  },
  {
    title: 'Heel Type',
    items: ['Block', 'Cone', 'Kitten', 'Platform', 'Stilettos', 'Wedges'],
  },
  {
    title: 'Collections',
    items: [
      'Online Exclusives',
      'Festive & Ethnic',
      'Party-Bling',
      '365 Closet',
      'Workwear',
      'Lifestyle',
    ],
  },
  {
    title: 'Brands',
    items: [
      'Puma',
      'Nike',
      'Adidas',
      'Mochi',
      'Inc.5',
      'Bata',
      'Paragon',
      'Liberty',
      'Catwalk',
      'Clarks',
      'Indus',
    ],
  },
]

const kidsPanelData = [
  {
    title: 'Featured',
    items: ['New Arrivals', 'Best Seller'],
  },
  {
    title: 'Shoes',
    items: ['Boys', 'Girls', 'Infant', 'School'],
  },
  {
    title: 'Brands',
    items: [
      'Nike',
      'Puma',
      'Crocs',
      'Adidas',
      'Abross',
      'Campus',
      'Bata',
      'Sparks',
      'Liberty',
    ],
  },
]

const salePanelData = [
  {
    title: 'Men',
    items: ['Shoes', 'Accessories', 'Apparels'],
  },
  {
    title: 'Women',
    items: ['Shoes', 'Bags', 'Accessories', 'Apparels'],
  },
  {
    title: 'Kids',
    items: ['Shoes', 'Accessories'],
  },
]

const brandsPanelData = [
  {
    title: 'Casual Shoes',
    items: [
      'Nike',
      'Puma',
      'Adidas',
      'Liberty',
      'Fila',
      'Reebok',
      'crocs',
      'Skechers',
    ],
  },
  {
    title: 'Formal Shoes',
    items: ['Bata', 'Mochi', 'Clarks', 'timberland', 'Woodland'],
  },
  {
    title: 'Sport Shoes',
    items: ['Nike', 'Puma', 'Adidas', 'Sparx', 'Campas', 'Abros', 'Runner'],
  },
]

function showDropdown(elem) {
  switch (elem.id) {
    case 'new':
      showNewDropdownPanel(newPanelData)
      break

    case 'men':
      showNewDropdownPanel(menPanelData)
      break

    case 'women':
      showNewDropdownPanel(womenPanelData)
      break

    case 'kids':
      showNewDropdownPanel(kidsPanelData)
      break

    case 'sale':
      showNewDropdownPanel(salePanelData)
      break

    case 'brands':
      showNewDropdownPanel(brandsPanelData)
      break
  }
}

function showNewDropdownPanel(panelData) {
  const dropdown = document.querySelector('.open-dropdown')

  while (dropdown.firstChild) {
    dropdown.removeChild(dropdown.firstChild)
  }

  for (let column of panelData) {
    const dropdownList = document.createElement('div')
    dropdownList.classList.add('dropdown-list')

    const dropdownListTitle = document.createElement('h3')
    dropdownListTitle.classList.add('dropdown-list-title')

    const dropdownListItems = document.createElement('div')
    dropdownListItems.classList.add('dropdown-list-items')

    dropdownListTitle.textContent = column.title

    for (let item of column.items) {
      const dropdownListItem = document.createElement('span')
      dropdownListItem.classList.add('dropdown-list-item')

      dropdownListItem.textContent = item

      dropdownListItems.appendChild(dropdownListItem)
    }

    dropdownList.appendChild(dropdownListTitle)
    dropdownList.appendChild(dropdownListItems)

    dropdown.appendChild(dropdownList)
  }

  dropdown.style.display = 'flex'
  dropdown.style.padding = '3rem 0'
}

function visibleDropdown() {
  const dropdown = document.querySelector('.open-dropdown')

  dropdown.style.display = 'flex'
  dropdown.style.padding = '3rem 0'
}

function hideDropdown() {
  const dropdown = document.querySelector('.open-dropdown')

  dropdown.style.display = 'none'
}
