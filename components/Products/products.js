class Products {
  render() {
    let htmlCatalog = "";
    CATALOG.forEach(({ title, subtitle, img }) => {
      htmlCatalog += `
        <div class="card__wrapper">
          <div id="card__box" class="card__box">
            <h1 class="card__title">
              ${title}
            </h1>
            <p class="card__subtitle">
              ${subtitle}
            </p>
            <a href="#"
              ><button id="card__btn" class="card__btn">Подробней</button></a
            >
            <a href="#" class="card__img"
              ><img
                src="${img}"
                alt="rinting-machine"
            /></a>
          </div>
        </div>
      `;
    });
    const html = `
    <div class="content-text">
        <h1 class="content-title">Наши <span>услуги</span></h1>
        <p class="content-subtitle">Главной деятельностью масонств</p>
      </div>
    <div class="card">
    ${htmlCatalog}
    </div>
    `;

    ROOT_PRODUCTS.innerHTML = html;
  }
}

const productsPage = new Products();
productsPage.render();

class TopSels {
  render() {
    let htmlTopSels = "";
    let htmlTopSelsNavbar = "";
    MAINSELS_NAVBAR.forEach(({ breadCrumbs }) => {
      htmlTopSelsNavbar += `
      <ul class="top-sels__navbar">
          <li class="top-sels__item">
            <a href="#" class="top-sels__link">${breadCrumbs.first}</a>
          </li>
          <li class="top-sels__item">
            <a href="#" class="top-sels__link">${breadCrumbs.second}</a>
          </li>
          <li class="top-sels__item">
            <a href="#" class="top-sels__link">${breadCrumbs.third}</a>
          </li>
          <li class="top-sels__item">
            <a href="#" class="top-sels__link">${breadCrumbs.fourth}</a>
          </li>
          <li class="top-sels__item">
            <a href="#" class="top-sels__link">${breadCrumbs.fifth}</a>
          </li>
          <li class="top-sels__item">
            <a href="#" class="top-sels__link">${breadCrumbs.sixth}</a>
          </li>
          <li class="top-sels__item">
            <a href="#" class="top-sels__link">${breadCrumbs.seventh}</a>
          </li>
          <li class="top-sels__item">
            <a href="#" class="top-sels__link">${breadCrumbs.eighth}</a>
          </li>
        </ul>
      `;
    });
    MAINSELS.forEach(({ title, img, price }) => {
      htmlTopSels += `
          <div class="top-sels__cards">
            <div class="top-sels__card">
              <a class="top-sels__card-link" href="#"
                ><img
                  src="${img}"
                  alt="whiteT-shirt"
                  class="top-sels__card-img"
              /></a>
              <p class="top-sels__card-subtitle">${title}</p>
              <p class="top-sels__card-cost">${price}</p>
            </div>
            </div>
      `;
    });

    const html = `
    <div class="top-sels__wrapper">
        <h2 class="content-title">Топ про<span>даж</span></h2>
        <p class="content-subtitle">Выбирай всё что по душе</p>
        ${htmlTopSelsNavbar}
        <div class="top-sels__catalog">
        ${htmlTopSels}
        </div>
      </div>
    `;

    ROOT_TOPSELS.innerHTML = html;
  }
}

const newTopSelsPage = new TopSels();
newTopSelsPage.render();

class Catalog {
  render() {
    let htmlCatalog = "";
    CATALOGMAIN.forEach(({ img, title, subtitle }) => {
      htmlCatalog += `
        <div class="catalog__card">
          <div class="catalog__card-wrapper">
            <img src="${img}" alt="yellowT-shirt" class="catalog__card-img">
            <h1 class="catalog__card-title">${title}</h1>
            <p2 class="catalog__card-subtitle">${subtitle}</p2>
          </div>
        </div>
      `;
    });
    const html = `
      <div class="catalog__wrapper">
        <h2 class="content-title">Ката<span>лог</span></h2>
        <p class="content-subtitle">Выбирай всё что по душе</p>
        <div class="catalog__cards">
          ${htmlCatalog}
        </div>
      </div>
    `;

    ROOT_CATALOG.innerHTML = html;
    const productWrappers = document.querySelectorAll(".catalog__card-wrapper");

    productWrappers.forEach((productWrapper) => {
      productWrapper.addEventListener("mouseover", () => {
        productWrapper.style.backgroundColor = "#1C1C1C";
        productWrapper.style.transition = 'all .5s'
        productWrapper.style.transform = 'scale(1.2)'
      });
      
      productWrapper.addEventListener("mouseout", () => {
        productWrapper.style.backgroundColor = ""; 
        productWrapper.style.transform = 'scale(1)'
      });
    });
  }
}

const newPageCatalogMain = new Catalog();
newPageCatalogMain.render();
