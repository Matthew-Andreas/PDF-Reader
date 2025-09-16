document.querySelector(".button").addEventListener("click", function () {
    fetch('http://127.0.0.1:5000')
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

})