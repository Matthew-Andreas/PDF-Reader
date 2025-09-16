document.querySelector(".button").addEventListener("click", async () => {
    /*fetch('http://127.0.0.1:5000')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response}`);
            }
            return response.json();
        })
        .then(data => {
            console.log('Data from Flask:', data['message']);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
*/
    const pdfFileInput = document.getElementById("pdfFile");
    const pdfFile = pdfFileInput.files[0];

    if (!pdfFile) {
        console.error("No PDF Selected!");
        return;
    }

    const formData = new FormData();
    formData.append('pdfFile', pdfFile);

    try {
        const response = await fetch('http://127.0.0.1:5000/upload', {
            method: "POST",
            body: formData,
        });

        if (response.ok) {
            const result = await response.blob();
            console.log("PDF Successfully Uploaded! ", result);
        } else {
            console.error("ERROR: ", response.statusText);
        }
    } catch (error) {
        console.error("Network error: ", error);
    }
});