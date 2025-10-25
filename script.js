const submitBtn = document.getElementById('submitInjury');
const uploadInput = document.getElementById('uploadInput');
const cameraInput = document.getElementById('cameraInput');
const preview = document.getElementById('preview');
const loading = document.getElementById('loading');
const modal = document.getElementById('photoModal');
const takePhotoBtn = document.getElementById('takePhotoBtn');
const uploadPhotoBtn = document.getElementById('uploadPhotoBtn');
const closeModal = document.getElementById('closeModal');
const resultsBox = document.getElementById('resultsBox');
const injuryEl = document.getElementById('injury');
const proceduresEl = document.getElementById('procedures');
const pricingEl = document.getElementById('pricing');

// Modal logic
submitBtn.addEventListener('click', () => modal.style.display = 'flex');
closeModal.addEventListener('click', () => modal.style.display = 'none');
takePhotoBtn.addEventListener('click', () => { modal.style.display = 'none'; cameraInput.click(); });
uploadPhotoBtn.addEventListener('click', () => { modal.style.display = 'none'; uploadInput.click(); });

function handleFile(event) {
  const file = event.target.files[0];
  if (!file) return;

  const imageURL = URL.createObjectURL(file);
  preview.src = imageURL;
  preview.style.display = "block";
  loading.style.display = "block";
  submitBtn.style.display = "none";

  const treatmentPlan = document.getElementById('treatmentPlan');
  treatmentPlan.classList.remove("show");

  setTimeout(() => {
    loading.style.display = "none";

    // Fill dummy results
    document.getElementById('injury').textContent = "Knee Scrape";
    document.getElementById('procedures').textContent = "Bandaid";
    document.getElementById('pricing').textContent = "$2";

    // Animate treatment plan
    treatmentPlan.classList.add("show");
  }, 2000);
}


uploadInput.addEventListener('change', handleFile);
cameraInput.addEventListener('change', handleFile);
window.addEventListener('click', e => { if (e.target === modal) modal.style.display = 'none'; });


