const swiper = new Swiper('.swiper-container', {
    loop: false,
    pagination:false,
    autoplay:true,
    loopAddBlankSlides:false,
    loopAdditionalSlides:16,
    maxBackfaceHiddenSlides:12,
    slidesPerGroup:3,
    grid: {
        rows: 2,
      },
      on: {
        slideChangeTransitionEnd: function () {
            // Проверяем, если текущий индекс последний
            if (this.isEnd) {
                // Если слайды закончились, устанавливаем его обратно на первый
                this.slideTo(0, 0); // Переход к первому слайду без анимации
            }
        }
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
const initialCards = [
    {  
      name: "Subaru LEVORG VN5",
      link:
        "./images/photoWrapper.jpg",
        desription:"2021 • 1.8 л • 4WD • Бензин • Вариатор",
        price:"2 115 600 ₽"
    },
    {      name: "Mazda Mazda6 2.5 AT Touring",
      link:
      "./images/photoWrapper(1).jpg",
        desription:"2020 • 2.5 л • Передний • Бензин • Автомат",
        price:"2 802 400 ₽"
    },
    {  
      name: "Subaru LEVORG VN5",
      link:
        "./images/photoWrapper.jpg",
        desription:"2021 • 1.8 л • 4WD • Бензин • Вариатор",
        price:"2 115 600 ₽"
    },
    {      name: "Mazda Mazda6 2.5 AT Touring",
      link:
      "./images/photoWrapper(1).jpg",
        desription:"2020 • 2.5 л • Передний • Бензин • Автомат",
        price:"2 802 400 ₽"
    },
    {
      name: "Toyota CROWN AZSH21",
      link:
      "./images/photoWrapper(2).jpg",
        desription:"2019 • 2.5 л • 4WD • Гибрид •  Планетарная",
        price:"2 852 600 ₽"
    },
    {
  
      name: "Lexus RC F USC10",
      link:
      "./images/photoWrapper(3).jpg",
        desription:"2019 • 5.0 л • Задний • Бензин • Автомат",
        price:"5 965 600 ₽"
    },
    {
      name: "Mitsubishi ECLIPSE CROSS G...",
      link:
      "./images/photoWrapper(4).jpg",
        desription:"2019 • 1.5 л • Передний • Бензин • Вариатор",
        price:"2 005 200 ₽"
    },
    {
       
      name: "Subaru IMPREZA WRX VAG",
      link:
      "./images/photoWrapper(5).jpg",
        desription:"2018 • 2.0 л • 4WD • Бензин • Вариатор",
        price:"2 852 600 ₽"
    },
    {
        name: "Lexus RX200T AGL20W",
        link:
        "./images/photoWrapper(6).jpg",
          desription:"2017 • 2.0 л • Передний • Бензин • Автомат",
          price:"2 999 800 ₽"
      },
      {
         
        name: "Mitsubishi Outlander PHEV G...",
        link:
        "./images/photoWrapper(7).jpg",
          desription:"2013 • 3.0 л • 4WD • Бензин • Автомат",
          price:"2 366 200 ₽"
      },
    {
      name: "Toyota CROWN AZSH21",
      link:
      "./images/photoWrapper(2).jpg",
        desription:"2019 • 2.5 л • 4WD • Гибрид •  Планетарная",
        price:"2 852 600 ₽"
    },
    {
  
      name: "Lexus RC F USC10",
      link:
      "./images/photoWrapper(3).jpg",
        desription:"2019 • 5.0 л • Задний • Бензин • Автомат",
        price:"5 965 600 ₽"
    },
    {
      name: "Mitsubishi ECLIPSE CROSS G...",
      link:
      "./images/photoWrapper(4).jpg",
        desription:"2019 • 1.5 л • Передний • Бензин • Вариатор",
        price:"2 005 200 ₽"
    },
    {
       
      name: "Subaru IMPREZA WRX VAG",
      link:
      "./images/photoWrapper(5).jpg",
        desription:"2018 • 2.0 л • 4WD • Бензин • Вариатор",
        price:"2 852 600 ₽"
    },
    {
        name: "Lexus RX200T AGL20W",
        link:
        "./images/photoWrapper(6).jpg",
          desription:"2017 • 2.0 л • Передний • Бензин • Автомат",
          price:"2 999 800 ₽"
      },
      {
         
        name: "Mitsubishi Outlander PHEV G...",
        link:
        "./images/photoWrapper(7).jpg",
          desription:"2013 • 3.0 л • 4WD • Бензин • Автомат",
          price:"2 366 200 ₽"
      }
  ];
  
  const placesContainer = document.querySelector(".elements");
  const placeTemplate = document.querySelector("#cars-template").content;
  
  const placeInfo = initialCards.map(function (item) {
    return {
      name: item.name,
      link: item.link,
      desription: item.desription,
      price: item.price 
    };
  });
  
  const loadMoreButton = document.querySelector('.elements__button');
  const loadMoreButton2 = document.querySelector('.cars__button');
  
  // Количество карточек для первоначальной загрузки
  const initialRenderCount = 8;
  let displayedCardsCount = initialRenderCount; // Текущие отображаемые карточки
  
  function render(count) {
    const cardsToRender = placeInfo.slice(0, count);
    cardsToRender.forEach(renderCard);
  }
  
  function renderCard({ name, link, desription, price }) {
    const placeElement = placeTemplate
      .querySelector(".cars__block")
      .cloneNode(true);
    placeElement.querySelector(".cars__name").textContent = name;
    placeElement.querySelector(".cars__image").src = link;
    placeElement.querySelector('.cars__description').textContent = desription;
    placeElement.querySelector('.cars__price').textContent = price;
    
    placesContainer.prepend(placeElement);
  }
  
  // Изначально отобразить 8 карточек
  render(initialRenderCount);
  
  // Обработчик события для кнопки "Загрузить еще"
  loadMoreButton.addEventListener('click', () => {
    displayedCardsCount = displayedCardsCount + 8; // Увеличиваем количество отображаемых карточек на 8
    render(displayedCardsCount);
    
    // Если больше нет карточек для отображения, убрать кнопку
    if (displayedCardsCount >= placeInfo.length) {
      loadMoreButton.style.display = 'none';
    }
  });
  loadMoreButton2.addEventListener('click', () => {
    displayedCardsCount = displayedCardsCount + 8; // Увеличиваем количество отображаемых карточек на 8
    render(displayedCardsCount);
    
    // Если больше нет карточек для отображения, убрать кнопку
    if (displayedCardsCount >= placeInfo.length) {
      loadMoreButton.style.display = 'none';
    }
  });
  function formValidation()
  {
  var uid = document.registration.userid;
  var passid = document.registration.passid;
  var uname = document.registration.username;
  var uadd = document.registration.address;
  var ucountry = document.registration.country;
  var uzip = document.registration.zip;
  var uemail = document.registration.email;
  var umsex = document.registration.msex;
  var ufsex = document.registration.fsex;
  if(userid_validation(uid,5,12))
  {
  if(passid_validation(passid,7,12))
  {
  if(allLetter(uname))
  {
  if(alphanumeric(uadd))
  { 
  if(countryselect(ucountry))
  {
  if(allnumeric(uzip))
  {
  if(ValidateEmail(uemail))
  {
  if(validsex(umsex,ufsex))
  {
  }
  } 
  }
  } 
  }
  }
  }
  }
  return false;
  }
  function userid_validation(uid,mx,my)
{
var uid_len = uid.value.length;
if (uid_len == 0 || uid_len>= my || uid_len<mx)
{
  document.querySelector(".error").style.display = "block";
uid.focus();
return false;
}
return true;
}
function passid_validation(passid,mx,my)
{
var passid_len = passid.value.length;
if (passid_len !== 11)
{
  document.querySelector(".error-number").style.display = "block";
passid.focus();
return false;
}
return true;
}
function allLetter(uname)
{ 
var letters = /^[A-Za-z]+$/;
if(uname.value.match(letters))
{
return true;
}
else
{
document.querySelector(".error-text").style.display = "block";
uname.focus();
return false;
}
}
textWithEntities = 'Компания&nbsp;«AUTOCENTER»&nbsp;предлагает&nbsp;широкий&nbsp;выбор&nbsp;автомобилей&nbsp;от&nbsp;ведущих&nbsp;мировых производителей.&nbsp;Мы&nbsp;специализируемся&nbsp;на&nbsp;продаже&nbsp;новых&nbsp;и&nbsp;подержанных&nbsp;авто.&nbsp;Наша команда&nbsp;профессионалов&nbsp;поможет&nbsp;вам&nbsp;выбрать&nbsp;идеальный&nbsp;автомобиль,&nbsp;учитывая&nbsp;ваши потребности&nbsp;и&nbsp;бюджет.';

const decodedText = textWithEntities.replace(/&nbsp;/g, ' ');
console.log(decodedText);
