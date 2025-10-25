const submitBtn = document.getElementById('submitInjury');
const uploadInput = document.getElementById('uploadInput');
const cameraInput = document.getElementById('cameraInput');
const preview = document.getElementById('preview');
const output = document.getElementById('output');

const modal = document.getElementById('photoModal');
const takePhotoBtn = document.getElementById('takePhotoBtn');
const uploadPhotoBtn = document.getElementById('uploadPhotoBtn');
const closeModal = document.getElementById('closeModal');

// Open modal
submitBtn.addEventListener('click', () => {
  modal.style.display = 'flex';
});

// Close modal
closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Take photo
takePhotoBtn.addEventListener('click', () => {
  modal.style.display = 'none';
  cameraInput.click();
});

// Upload image
uploadPhotoBtn.addEventListener('click', () => {
  modal.style.display = 'none';
  uploadInput.click();
});

// Handle image selection
function handleFile(event) {
  const file = event.target.files[0];
  if (file) {
    const imageURL = URL.createObjectURL(file);
    preview.src = imageURL;
    preview.style.display = "block"; // show the preview
    output.textContent = "Image loaded successfully!";
  }
}

uploadInput.addEventListener('change', handleFile);
cameraInput.addEventListener('change', handleFile);

// Optional: close modal when clicking outside of it
window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});


