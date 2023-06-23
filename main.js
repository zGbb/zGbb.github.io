const urlInput = document.getElementById('url-input');
const fetchButton = document.getElementById('fetch-button');
const output = document.getElementById('output');

fetchButton.addEventListener('click', () => {
  const apiUrl = urlInput.value;
  fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Failed to fetch JSON: ${response.status} ${response.statusText}`);
      }
      return response.json();
    })
    .then(data => {
      output.textContent = JSON.stringify(data, null, 2);
    })
    .catch(error => {
      output.textContent = `Error fetching JSON: ${error}`;
    });
});

