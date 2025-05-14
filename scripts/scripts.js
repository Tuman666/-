'use strict'

document.addEventListener("DOMContentLoaded", () => {
  console.log('Скрипт отработал корректно');
  // * 1. Начало. 
  // * 2. Получаем все элементы изображений с описанием.
  // * 3. Для каждого изображения (проверяем есть ли такие изображения): 
  // *   3.1. Добавляем обработчик наведения курсора на изображение: 
  // *   3.1.1. Да: 
  // *   3.1.1.1. Показываем текст при наведении.
  // *   3.1.2. Нет: продолжаем
  // *   3.2 Добавляем обработчик курсор уходит с изображения: 
  // *  3.3.1. Да: 
  // *  3.3.1.1. Скрываем элемент с описанием 
  // *  3.3.2. Нет: продолжаем 
  // *  4. Конец 



  const newsIcon = document.querySelectorAll('.news__icon');
  // newsIcon.addEventListener("mouseenter", () =>{
  //     console.log ('наведение мышки на изображение');
  // })
  //3.2 Появление описания изображения
  newsIcon.forEach((icon, index) => {
    const newsText = document.querySelectorAll('.news__description');
    icon.addEventListener('mouseover', () => {
      icon.style.opacity = 0.5;
      newsText[index].removeAttribute('hidden');
    });
    icon.addEventListener('mouseleave', () => {
      icon.style.opacity = 1;
      newsText[index].setAttribute('hidden', true);
    });
  });
  //3.3 Появление модальной формы регистрации и входа
  const registrationButtonModal = document.querySelector(".header__registration");
  const loginButtonModal = document.querySelector(".header__login");

  const modalApplication = document.querySelector(".dialog");
  const registrationModal = document.querySelector(".registration");
  const loginModal = document.querySelector(".login");

  if (registrationButtonModal && modalApplication) {
    console.log('Окно регитрации');
    registrationButtonModal.addEventListener("click", () => {
      modalApplication.removeAttribute("hidden");
      registrationModal.removeAttribute("hidden");

    });
  }
  if (loginButtonModal && modalApplication) {
    console.log('Окно войти');
    loginButtonModal.addEventListener("click", () => {
      modalApplication.removeAttribute("hidden");
      loginModal.removeAttribute("hidden");

    });
  }

  window.addEventListener("click", (event) => {
    if (event.target === modalApplication) {
      modalApplication.setAttribute("hidden", true);
      registrationModal.setAttribute("hidden", true);
      loginModal.setAttribute("hidden", true);
    }
    const closeModalButton = document.querySelector(".popup__close");
    const closeButton = document.querySelector(".popup__end");
    closeModalButton.addEventListener("click", () => {
      modalApplication.setAttribute("hidden", true);
    });

    closeButton.addEventListener("click", () => {
      modalApplication.setAttribute("hidden", true);
    });

  });
  //3.4.2	Формируем массив из частей определенных элементов название книги
  const CardsContainer = document.querySelector(".new");
  if (CardsContainer) {
    const dataTitleBook = [
      "Modern divination",
      "История, которую нельзя рассказывать",
      "The bass rock",
      "Пятый мир",
    ];
    const titleCards = CardsContainer.querySelectorAll(".new__name");
    titleCards.forEach((item, index) => {
      item.textContent = dataTitleBook[index];
    });
  }
  // 3.5. 
  const cardsBest = document.querySelector('.best');
  // Если такой элемент существует
  if (cardsBest) {
    //Объявляем переменную bestList и сохраняем в нее элемент с классом best__list, чтобы мы могли добавить новые элементы
    const bestList = cardsBest.querySelector('.best__card');
    //Создаем объект cardsBestData, которая содержит данные для четырёх карточек.
    const cardsBestData = {
      // каждая ссылка содержитicon (фото обложки), title (название книги), money (цена).
      best1: {
        icon: "images/gl.jpg",
        title: '– Гипотеза любви –',
        money: '350₽',
      },
      best2: {
        icon: "images/w.jpg",
        title: '– Маленькие женщины –',
        money: '350₽',
      },
      best3: {
        icon: "images/z.jpg",
        title: '– Серебряная клятва –',
        money: '350₽',
      },
      best4: {
        icon: "images/n.jpg",
        title: '– Лисья нора –',
        money: '350₽',
      }
    }
    //Создаем функцию createCard, которая будет добавлять карточку. Внутри функции 3 переменные: title (название книги), money (цена), icon (фото обложки).
    const createCard = (icon, title, money) => {
      // Создаем переменную  card, которая будет содержать HTML-код карточки и вставляем туда 3 переменные
      const card = `
  <li class="best__item">
  <img class="best__icon" src="${icon}" alt="Фото обложки" width="180" height="240">
      <p class="best__title">${title}</p>
      <p class="best__money">${money}</p>
  </li>
`;
      //  Возвращаем значение переменной card
      return card;
    }
    // Создаем цикл for и проходим по всем элементам объекта cardsBestData.
    for (const cardKey in cardsBestData) {
      //Получаем данные одной карточки из объекта cardsBestData 
      const card = cardsBestData[cardKey];
      //создаем переменную cardElement и вызываем функцию createLink, куда передаем название, цену (то, из чего будет состоять ваша карточка).
      const cardElement = createCard(card.icon, card.title, card.money);
      // с помощью метода insertAdjacentHTML добавляем созданный HTML-код в конец списка bestList.
      bestList.insertAdjacentHTML('beforeend', cardElement);
    }
  }

  // 3.6.1
  //Объявляем переменную cardsImages и сохраняем в нее элементы секции images
  const cardsImages = document.querySelector(".images");
  if (cardsImages) {
    const cardListImages = cardsImages.querySelector(".images__list");
    const apiUrl = "images.json";
    const createCard = (imageUrl, imageAlt, imageWidth) => {
      const image = `
            <li class="images__item">
                <img class="images__picture" src="${imageUrl}" alt="${imageAlt}" width="${imageWidth}">
            </li>
        `;
      return image;
    };

    // Загрузка данных с сервера
    fetch(apiUrl)
      .then((response) => response.json())
      .then((images) => {
        console.log(images); // Данные
        console.log(typeof images); // Тип полученных данных

        images.forEach((item) => {
          const cardElement = createCard(
            item.imageUrl,
            item.imageAlt,
            item.imageWidth
          );
          cardListImages.insertAdjacentHTML("beforeend", cardElement);
        });
      });
  }

  //3.6.2
  //Объявляем переменную preloader и сохраняем в нее блок с классом .preloader
  const preloader = document.querySelector(".preloader");
  //Объявляем переменную content и сохраняем в нее блок с классом .content
  const content = document.querySelector(".content");

  //проверяем существуют ли эти блоки
  if (preloader && content) {
    // функция, которая позволяет выполнять код через определенный промежуток времени.
    setTimeout(() => {
      // Скрываем предзагрузчик
      preloader.style.opacity = "0";
      preloader.style.visibility = "hidden";

      // и показываем контент
      content.style.display = "block";

      // Удаляем элемент предзагрузчика со страницы
      preloader.remove();
    }, 3000); // Задержка 3 секунды
  }


});




