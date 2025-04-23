
const collapseEl = document.getElementById('smartCollapse');
const wrapper = document.getElementById('dropdown-wrapper');

// Adjust alignment when collapse is shown
collapseEl.addEventListener('show.bs.collapse', () => {
  const rect = wrapper.getBoundingClientRect();
  const dropdown = collapseEl;

  // Get viewport width
  const vw = window.innerWidth;

  // Default styles
  dropdown.style.left = 'auto';
  dropdown.style.right = 'auto';

  // Check space on the right
  const spaceRight = vw - rect.right;
  const spaceLeft = rect.left;

  if (spaceRight < 220 && spaceLeft > 220) {
    // Not enough room on right, but enough on left → align left
    dropdown.style.right = '0';
  } else {
    // Align right (default)
    dropdown.style.left = '0';
  }
});



// const searchWrapper = document.getElementById('searchWrapper');
// const searchField = document.getElementById('searchField');
// const closeBtn = document.getElementById('closeBtn');
// const crossButton = document.getElementById('#cross-button');

// searchField.addEventListener('focus', () => {
//   searchWrapper.classList.add('expanded');
//   crossButton.classList.add('d-block');
// });

// closeBtn.addEventListener('click', () => {
//   searchWrapper.classList.remove('expanded');
//   searchField.value = '';
  
// });

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

