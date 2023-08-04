class Slider {
  render() {
    let htmlSlider = "";
    SLIDER.forEach(({ id, img }) => {
      htmlSlider += `
      <div class="swiper-slide">
          <div class="swiper-item">
                <img src="${img}" /><span class="swiper-logo"></span>
        </div>
      </div>
      `;
    });
    const html = `
    <div class="exaple__wrapper">
        <div class="content__wrapper">
          <h1 class="title"><span>Пример </span>печати</h1>
          <p class="subtitle">Это может быть на тебе</p>
        </div>
    <div class="swiper exaples__swiper">
    <div class="swiper-wrapper">
    ${htmlSlider}
    </div>
    <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>
    </div>
    </div>
    `;

    ROOT_EXAPLES.innerHTML = html;
  }
}

const sliderPage = new Slider();
sliderPage.render();

class SliderAction{
  render(){
    let htmlSliderAction = ''
    SLIDERACTION.forEach(({id ,title ,subtitle ,button ,img})=>{
      htmlSliderAction +=`
      <div class="swiper-slide">
              <div class="action__wrapper">
                <div class="action__content">
                  <h1 class="action__title">${title}</h1>
                  <p class="action__subtitle">
                    ${subtitle}
                  </p>
                  <a class="action__link" href="#"
                    ><button class="action__btn">${button}</button></a
                  >
                </div>
                <div class="action__right">
                  <div class="action__right-img">
                    <img
                      class="action__right-img-item"
                      src="${img}"
                      alt="t-shirt"
                    />
                    <div class="action__right-item"></div>
                  </div>
                </div>
              </div>
            </div>
      `
    })
    const html = `
    <div class="content__wrapper action__main">
        <h1 class="title"><span>Акции </span>и предолжения</h1>
        <p class="subtitle">Успей урвать себе</p>
      </div>
      <div class="action">
        <svg
          class="action__bcg"
          xmlns="http://www.w3.org/2000/svg"
          height="629"
          viewBox="0 0 1440 629"
          fill="none"
        >
          <path d="M1447 0L-7 148V628.26L1447 480.26V0Z" fill="#FFC700" />
        </svg>
        <div class="swiper swiper__action">
          <div class="swiper-wrapper">
            <!-- Slides -->
            ${htmlSliderAction}
          </div>
          <!-- swiper button -->
          <div class="swiper-button-prev black"></div>
          <div class="swiper-button-next black"></div>
        </div>
      </div>
    `

    ROOT_ACTION.innerHTML = html;
  }
}

const slideAction = new SliderAction();
slideAction.render();