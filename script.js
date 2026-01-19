const uploadBtn = document.getElementById("uploadBtn");
const fileInput = document.getElementById("fileInput");
const fileList = document.getElementById("fileList");

uploadBtn.addEventListener("click", () => {
  fileList.innerHTML = "";

  const files = fileInput.files;

  if (files.length === 0) {
    alert("Please select a file to upload.");
    return;
  }

  for (let i = 0; i < files.length; i++) {
    const li = document.createElement("li");
    li.textContent = files[i].name;
    fileList.appendChild(li);
  }

  fileInput.value = "";
});

document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Thank you for contacting AGA KHAN BAUG.");
  this.reset();
});