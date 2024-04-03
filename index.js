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

const womenPanelData = []

const kidsPanelData = []

const salePanelData = []

const brandsPanelData = []

function showDropdown(elem) {
    switch (elem.id) {
        case 'new-dropdown':
            showNewDropdownPanel(newPanelData)
            break

        case 'men-dropdown':
            showNewDropdownPanel(menPanelData)
            break

        case 'women-dropdown':
            showNewDropdownPanel(womenPanelData)
            break

        case 'kids-dropdown':
            showNewDropdownPanel(kidsPanelData)
            break

        case 'sale-dropdown':
            showNewDropdownPanel(salePanelData)
            break

        case 'brands-dropdown':
            showNewDropdownPanel(brandsPanelData)
            break
    }
}

function hideDropdown() {
    const dropdown = document.querySelector('.open-dropdown')

    while (dropdown.firstChild) {
        dropdown.removeChild(dropdown.firstChild)
    }

    dropdown.style.display = 'none'
}

function showNewDropdownPanel(panelData) {
    const dropdown = document.querySelector('.open-dropdown')

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
}
