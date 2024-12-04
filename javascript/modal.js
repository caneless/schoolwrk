// JavaScript for expanding the image
const modal = document.getElementById('imageModal');
const expandedImg = document.getElementById('expandedImg');
const thumbnail = document.getElementById('thumbnail');
const closeBtn = document.querySelector('.close');

// Open modal and display image
thumbnail.onclick = function () {
  expandedImg.src = thumbnail.src; // Use the same image source as the thumbnail
  modal.style.display = 'block';
};

// Close the modal
closeBtn.onclick = function () {
  modal.style.display = 'none';
};

// Close modal if clicked outside the image
window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
};