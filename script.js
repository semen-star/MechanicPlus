document.addEventListener("DOMContentLoaded", function() {
    // Получаем все элементы с классом "photo" с атрибутом data-expandable
    const photos = document.querySelectorAll('.photo[data-expandable]');
    
    // Функция для раскрытия фотографии
    function expandPhoto(photo) {
        const expandedContent = document.createElement('div');
        expandedContent.classList.add('expanded-content');

        // Добавляем 3-4 фотографии и текст в раскрывающийся блок
        const images = [
            'photo1.jpg', 'photo2.jpg', 'photo3.jpg', 'photo4.jpg'
        ]; // Здесь можно использовать динамические изображения

        images.forEach(src => {
            const img = document.createElement('img');
            img.src = src;
            img.alt = 'Дополнительное фото';
            expandedContent.appendChild(img);
        });

        const text = document.createElement('p');
        text.textContent = 'Здесь будет дополнительная информация о технике.';
        expandedContent.appendChild(text);

        // Вставляем блок с контентом внутрь текущего блока photo
        photo.appendChild(expandedContent);

        // Добавляем класс для анимации и отображаем контент
        photo.classList.add('expanded');
    }

    // Функция для сворачивания фотографии
    function collapsePhoto(photo) {
        const expandedContent = photo.querySelector('.expanded-content');
        if (expandedContent) {
            photo.removeChild(expandedContent);
        }
        photo.classList.remove('expanded');
    }

    // Добавляем обработчик события клика на фотографию
    photos.forEach(photo => {
        photo.addEventListener('click', function() {
            if (photo.classList.contains('expanded')) {
                collapsePhoto(photo);
            } else {
                expandPhoto(photo);
            }
        });
    });

    // Плавное появление элементов при прокрутке
    function onScroll() {
        const rows = document.querySelectorAll('.row');
        const windowHeight = window.innerHeight;

        rows.forEach(row => {
            const rect = row.getBoundingClientRect();
            if (rect.top <= windowHeight && rect.bottom >= 0) {
                row.style.opacity = '1';
                row.style.transform = 'translateY(0)';
            }
        });
    }

    // Добавляем обработчик события прокрутки
    window.addEventListener('scroll', onScroll);
    // И сразу вызываем функцию для элементов, которые уже видны
    onScroll();
});
