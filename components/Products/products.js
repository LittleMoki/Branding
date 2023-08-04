class Products {
  render() {
    let htmlCatalog = "";
    CATALOG.forEach(({ id, title, subtitle, img}) => {
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
