function uploadFile() {
    const fileInput = document.getElementById("fileInput");
    const formatSelect = document.getElementById("formatSelect");
    const status = document.getElementById("status");
    const downloadLink = document.getElementById("downloadLink");
    
    if (!fileInput.files.length) {
        alert("Please select a file to convert.");
        return;
    }
    
    let formData = new FormData();
    formData.append("image", fileInput.files[0]);
    formData.append("format", formatSelect.value);
    
    status.innerText = "Uploading and converting...";
    
    fetch("/convert_image/", {
        method: "POST",
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.download_url) {
            status.innerText = "Conversion successful!";
            downloadLink.href = data.download_url;
            downloadLink.innerText = "Download Converted File";
            downloadLink.style.display = "block";
        } else {
            status.innerText = "Conversion failed.";
        }
    })
    .catch(error => {
        status.innerText = "Error occurred.";
    });
}
