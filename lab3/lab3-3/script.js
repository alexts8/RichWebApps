const scrollableList = document.querySelector('.scrollable-list');
const listItems = scrollableList.querySelectorAll('.list-item');

if (listItems.length <= 5) {
    scrollableList.style.overflowY = 'auto';
}
