function tabs (tabheaderItemsSelect, tabheaderItemSelect, tabContentSelect, tabheaderItemActiveSelect) {
    const tabsParent = document.querySelector(tabheaderItemsSelect),
    tabs = document.querySelectorAll(tabheaderItemSelect),
    tabsContent = document.querySelectorAll(tabContentSelect)


 

  // Tabs
  function hideTabContent() {
    tabsContent.forEach((item) => {
      item.classList.add('hide')
      item.classList.remove('show', 'fade')
    })

    tabs.forEach((item) => {
      item.classList.remove(tabheaderItemActiveSelect)
    })
  }

  function showTabContent(i = 0) {
    tabsContent[i].classList.add('show', 'fade')
    tabsContent[i].classList.remove('hide')
    tabs[i].classList.add(tabheaderItemActiveSelect)
  }

  hideTabContent()
  showTabContent()

  tabsParent.addEventListener('click', (event) => {
    const target = event.target
    if (target && target.classList.contains(tabheaderItemSelect.slice(1))) {
      tabs.forEach((item, idx) => {
        if (target == item) {
          hideTabContent()
          showTabContent(idx)
        }
      })
    }
  })

}


export default tabs