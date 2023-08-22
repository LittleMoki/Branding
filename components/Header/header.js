class Header {
  render() {
    let htmlHeader = "";
    NAVBAR.forEach(({ link, logo, lang }) => {
      htmlHeader += `
      <div class="header__top">
          <div class="header__top-search">
            <label>
              <img
                class="header__top-search-item"
                src="assets/images/header/header__top-right/lupa.png"
                alt=""
              />
              <input type="text"/ placeholder="Поиск">
            </label>
          </div>
          <a class="header__top-img" href="#">
            <img src="${logo}" alt="logo" />
          </a>
          <div class="header__top-right">
            <ul>
              <li><a id="langBtn" class="langBtn" href="#">${lang.firs}</a></li>
              <hr />
              <li><a id="langBtn" class="langBtn" href="#">${lang.second}</a></li>
            </ul>
            <a href="#"
              ><img
                src="assets/images/header/header__top-right/cart.svg"
                alt="cart"
            /></a>
            <a href="#"
              ><img
                src="assets/images/header/header__top-right/like.svg"
                alt="like"
            /></a>
          </div>
        </div>
        <div class="container">
          <ul class="navbar__container">
            <li class="navabar__item">
              <a href="#" class="navbar__link">${link.first}</a>
            </li>
            <li class="navabar__item">
              <a href="#" class="navbar__link">${link.second}</a>
            </li>
            <li class="navabar__item">
              <a href="#" class="navbar__link">${link.third}</a>
            </li>
            <li class="navabar__item">
              <a href="#" class="navbar__link">${link.fourth}</a>
            </li>
            <li class="navabar__item">
              <a href="#" class="navbar__link">${link.fifth}</a>
            </li>
            <li class="navabar__item">
              <a href="#" class="navbar__link">${link.sixth}</a>
            </li>
            <li class="navabar__item">
              <a href="#" class="navbar__link">${link.seventh}</a>
            </li>
          </ul>
        </div>
      `;
    });

    const html = `
    
      <div class="container">
      ${htmlHeader}
      </div>
    `;

    ROOT_HEADER.innerHTML = html;
  }
}

const headerPage = new Header();
headerPage.render();

class Main {
  render() {
    let htmlMain = "";
    MAIN.forEach(({ id, title, subtitle, button, img }) => {
      htmlMain += `
      <div class="content">
            <h1 class="content-item">
              ${title.first}<br>
              <span>${title.second}</span><br>
              ${title.third}
            </h1>
            <p class="content-item">
              ${subtitle}
            </p>
            <a class="content-item" href="#"><button>${button}</button></a>
          </div>
          <div class="content__right-img">
            <img
              class="content__line"
              src="assets/images/main/Group80.png"
              alt="line"
            />
            <div class="content__right-man-item">
              <img
                class="content__right-man"
                src="${img}"
                alt="man"
              />
            </div>
          </div>
      `;
    });
    const html = `
    <div class="container">
        <div class="main__container">
        ${htmlMain}
        </div>
        </div>
    `;

    ROOT_MAIN.innerHTML = html;
  }
}

const mainPage = new Main();
mainPage.render();
