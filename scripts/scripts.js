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

  //Объявляем переменную welcоmeButtonModal и сохраняем в нее кнопку c классом header__buttons
  const registrationButtonModal = document.querySelector(".header__registration");
  const loginButtonModal = document.querySelector(".header__login");

  //объявляем переменную modalApplication и сохраняем в нее модальное окно, которое хотим увидеть
  const modalApplication = document.querySelector(".dialog");
  const registrationModal = document.querySelector(".registration");
  const loginModal = document.querySelector(".login");

  //Если есть такая кнопка и модальное окно
  if (registrationButtonModal && modalApplication) {
    console.log('Окно регитрации');
    //Для кнопки «Записаться на курс» добавляем обработчик события клика по этой кнопке:
    registrationButtonModal.addEventListener("click", () => {
      // удаляем атрибут hidden у модального окна modalApplication и модальное окно становится видимым
      modalApplication.removeAttribute("hidden");
      registrationModal.removeAttribute("hidden");

    });
  }
  if (loginButtonModal && modalApplication) {
    console.log('Окно войти');
    //Для кнопки «Записаться на курс» добавляем обработчик события клика по этой кнопке:
    loginButtonModal.addEventListener("click", () => {
      // удаляем атрибут hidden у модального окна modalApplication и модальное окно становится видимым
      modalApplication.removeAttribute("hidden");
      loginModal.removeAttribute("hidden");

    });
  }

  // добавляем обработчик события при клике вне области формы. Тогда каждый раз, когда пользователь кликает где-либо на фоне вокруг появившейся формы, будет вызываться функция,
  window.addEventListener("click", (event) => {
    // проверяем, был ли клик на фоне модального окна
    if (event.target === modalApplication) {
      //если условие выполняется, добавляем атрибут hidden у модального окна modalApplication и модальное окно становится невидимым
      modalApplication.setAttribute("hidden", true);
      registrationModal.setAttribute("hidden", true);
      loginModal.setAttribute("hidden", true);
    }
    //Объявляем переменную closeModalButton и сохраняем в нее кнопку c классом application__button
const closeModalButton = document.querySelector(".popup__close");
const closeButton = document.querySelector(".popup__end");
//Для кнопки «Закрыть» добавляем обработчик события клика по этой кнопке:
closeModalButton.addEventListener("click", () => {
// Добавляем атрибут hidden у модального окна modalApplication и модальное окно становится невидимым
    modalApplication.setAttribute("hidden", true);
});

closeButton.addEventListener("click", () => {
  // Добавляем атрибут hidden у модального окна modalApplication и модальное окно становится невидимым
      modalApplication.setAttribute("hidden", true);
  });

});
//3.4
const CardsContainer = document.querySelector(".treners");

//  проверяем существует ли элемент CardsContainer, если он существует то переходим далее
    if (CardsContainer) {
//далее создаем массив dataTitleTreners, который содержит строки с названиями книг.(здесь уже пишем те значения, которые надо подставить вместо слова Книга 1, Книга 2 и т.д)
        const dataTitleTreners = [
            "Modern divination",
            "История, которую нельзя рассказывать",
            "The bass rock",
            "Пятый мир",
        ];

//Объявляем переменную titleCards и сохраняем в нее все элементы на странице с классом treners__subtitle (где должны стоять имена тренеров)
        const titleCards =
        CardsContainer.querySelectorAll(".new__subtitle");

// Проходим по каждому элементу массива titleTreners с помощью цикла forEach. Внутри функции 2 переменные: item – текущий заголовок, а index — его индекс в массиве.
         titleCards.forEach((item, index) => {

//здесь обновляем значение текущего заголовка (textContent) на новое значение из массива dataTitleCards, используя индекс текущего заголовка.
            item.textContent = dataTitleTreners[index];
           });
    }

  });




