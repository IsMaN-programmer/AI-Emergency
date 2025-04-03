function showSection(sectionId) {
    // Скрыть все разделы
    const sections = document.querySelectorAll('.content');
    sections.forEach(section => {
        section.style.display = 'none'; // Скрыть все секции
    });

    // Показать выбранный раздел
    const activeSection = document.getElementById(sectionId);
    activeSection.style.display = 'block';
}
