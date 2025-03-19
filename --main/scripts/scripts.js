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
            
    
});