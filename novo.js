const collapseEl = document.getElementById('smartCollapse');
const wrapper = document.getElementById('dropdown-wrapper');
const bellEl = document.querySelector('.notification-active');

collapseEl.addEventListener('show.bs.collapse', () => {
  const rect = wrapper.getBoundingClientRect();
  const dropdown = collapseEl;

  const vw = window.innerWidth;

  dropdown.style.left = 'auto';
  dropdown.style.right = 'auto';

  // Checking the space if there is any in the left or right.
  const spaceRight = vw - rect.right;
  const spaceLeft = rect.left;

  if (spaceRight < 220 && spaceLeft > 220) {
    dropdown.style.right = '0';
  } else {
    dropdown.style.left = '0';
  }
});


document.addEventListener('DOMContentLoaded', () => {
  const searchWrapper = document.getElementById('searchWrapper');
  const searchField = document.getElementById('searchField');
  const searchIcon = document.getElementById('searchIcon');
  const closeBtn = document.getElementById('closeBtn');

  if (searchIcon) {
    searchIcon.addEventListener('click', () => {
      searchWrapper.classList.add('expanded');
      searchField.focus();
    });
  }

  if (searchField) {
    searchField.addEventListener('focus', () => {
      searchWrapper.classList.add('expanded');
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      searchWrapper.classList.remove('expanded');
      searchField.value = '';
    });
  }
});


// Notification badge js
// To toggle notification bell there is a  .notification-deactive class.   


