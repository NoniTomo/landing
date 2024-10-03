const INVEST_CARDS: InvestCard[] = [
  {
    id: 1,
    imageBackground: './images/cards/first.png',
    tags: ['House', 'Family Business', 'Family Business', 'Family Business']
  },
  {
    id: 2,
    imageBackground: './images/cards/second.png',
    tags: ['House', 'Family Business']
  },
  {
    id: 3,
    imageBackground: './images/cards/third.png',
    tags: ['House', 'Family Business']
  },
  {
    id: 4,
    imageBackground: './images/cards/fourth.png',
    tags: ['House', 'Family Business']
  },
  {
    id: 5,
    imageBackground: './images/cards/fifth.png',
    tags: ['House', 'Family Business']
  },
  {
    id: 6,
    imageBackground: './images/cards/sixth.png',
    tags: ['House', 'Family Business']
  }
]

function createCard(card: InvestCard): HTMLLIElement {
  const elementCard = document.createElement('li')
  elementCard.classList.add('card', 'offering__card')
  elementCard.id = `card-id-${card.id}`
  return elementCard
}

function createTags(card: InvestCard): HTMLDivElement {
  const elementTags = document.createElement('div')
  elementTags.classList.add('card__tags', 'row')
  card.tags.forEach((tag) => {
    const elementTag = document.createElement('div')
    elementTag.classList.add('card__tag')
    elementTag.textContent = tag
    elementTags.appendChild(elementTag)
  })
  return elementTags
}

function createBackgroundCard(card: InvestCard): HTMLDivElement {
  const elementBackgroundCard = document.createElement('div')
  elementBackgroundCard.classList.add('card__background')
  elementBackgroundCard.style.backgroundImage = `url(${card.imageBackground})`
  return elementBackgroundCard
}

const HTML_TEMPLATE_CARD_CONTENT = `
  <div class="card__content column">
    <div class="card__name column">
      <h2 class="card__title">Oxalis</h2>
      <p class="card__subtitle">Brooklyn, NY</p>
    </div>
    <p class="card__description">
      A recognized leader in language immersion & early education, opening second school.
    </p>
    <div class="progress-bar column">
      <div class="progress-bar__element">
        <div class="progress-bar__progress"></div>
      </div>
      <p class="progress-bar__description">
        <span class="progress-bar__description_first-word">$574,920</span> raised of $1,000,000
      </p>
    </div>
    <span class="card__divider"></span>
    <ul class="card__details column">
      <li class="card__details_item row">
        <p>Security Type</p>
        <p>Revenue Sharing Note</p>
      </li>
      <li class="card__details_item row">
        <p>Investment Multiple</p>
        <p>1.4x</p>
      </li>
      <li class="card__details_item row">
        <p>Maturity</p>
        <p>48 Months</p>
      </li>
      <li class="card__details_item row">
        <p>Min. Investment</p>
        <p>$100</p>
      </li>
    </ul>
  </div>
  <a href="/project-x" class="card__button button button_contained" aria-label="view project">
    VIEW PROJECT
  </a>
 `

INVEST_CARDS.forEach((card) => {
  const elementCard = createCard(card)
  const elementBackgroundCard = createBackgroundCard(card)
  const elementTags = createTags(card)
  elementBackgroundCard.append(elementTags)

  elementCard.addEventListener('mouseleave', () => {
    elementBackgroundCard.classList.remove('card__background_hidden')
  })
  elementCard.addEventListener('mouseover', () => {
    elementBackgroundCard.classList.add('card__background_hidden')
  })

  elementCard.prepend(elementBackgroundCard)
  elementCard.insertAdjacentHTML('beforeend', HTML_TEMPLATE_CARD_CONTENT)

  document.getElementById('offering-cards')?.appendChild(elementCard)
})
