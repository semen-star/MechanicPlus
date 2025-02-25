document.addEventListener("DOMContentLoaded", () => {
    // Функция для отслеживания прокрутки страницы
    const revealElements = () => {
        const elements = document.querySelectorAll('.row');
        
        elements.forEach(element => {
            const rect = element.getBoundingClientRect();
            if (rect.top <= window.innerHeight && rect.bottom >= 0) {
                element.classList.add('visible');
            }
        });
    };

    // Отслеживаем прокрутку страницы
    window.addEventListener('scroll', revealElements);

    // Инициализация появления элементов при загрузке страницы
    revealElements();

    // Функция для разворачивания и сворачивания фотографий
    const toggleExpandedContent = (event) => {
        const photo = event.currentTarget;
        const expandedContent = photo.querySelector('.expanded-content');

        if (expandedContent) {
            expandedContent.style.display = expandedContent.style.display === 'block' ? 'none' : 'block';
            photo.classList.toggle('expanded');
        }
    };

    // Находим все фотографии, которые нужно раскрывать
    const photos = document.querySelectorAll('.photo');

    photos.forEach(photo => {
        photo.addEventListener('click', toggleExpandedContent);
    });
});
