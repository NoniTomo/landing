export const openMenu = ({ id_element, id_rotateElement }: Menu) => {
  const element = document.getElementById(id_element)
  if (element) element.style.display = 'block'
  if (id_rotateElement) {
    const rotateElement = document.getElementById(id_rotateElement)
    if (rotateElement) rotateElement.style.rotate = '180deg'
  }
}

export const closeMenu = ({ id_element, id_rotateElement }: Menu) => {
  const element = document.getElementById(id_element)
  if (element) element.style.display = 'none'
  if (id_rotateElement) {
    const rotateElement = document.getElementById(id_rotateElement)
    if (rotateElement) rotateElement.style.rotate = '0deg'
  }
}

document.querySelector('#opportunities-button')?.addEventListener('mouseover', () => {
  openMenu({ id_element: 'opportunities-menu', id_rotateElement: 'opportunities-caret' })
})

document.querySelector('#header-link-opportunities-menu')?.addEventListener('mouseleave', () => {
  closeMenu({ id_element: 'opportunities-menu', id_rotateElement: 'opportunities-caret' })
})

document.querySelector('#how-it-works-button')?.addEventListener('mouseover', () => {
  openMenu({ id_element: 'how-it-works-menu', id_rotateElement: 'how-it-works-caret' })
})

document.querySelector('#header-link-how-it-works-menu')?.addEventListener('mouseleave', () => {
  closeMenu({ id_element: 'how-it-works-menu', id_rotateElement: 'how-it-works-caret' })
})

let open = false
document.querySelector('#header-burger-button')?.addEventListener('click', () => {
  open = !open
  open ? openMenu({ id_element: 'id-header-nav' }) : closeMenu({ id_element: 'id-header-nav' })
})

document
  .getElementById('back-to-top')
  ?.addEventListener('click', () =>
    document.getElementsByClassName('section')[0].scrollIntoView({ block: 'start', behavior: 'smooth' })
  )
