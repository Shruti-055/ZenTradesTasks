// Fetch JSON data from the provided URL
fetch('https://s3.amazonaws.com/open-to-cors/assignment.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    // Extract products from the JSON data
    const products = Object.values(data.products);

    // Sort products by 'popularity' in descending order
    products.sort((a, b) => b.popularity - a.popularity);

    // Display Title and Price of products ordered by popularity
    const productBody = document.getElementById('productBody');
    products.forEach(product => {
      const row = document.createElement('tr');
      row.innerHTML = `<td>${product.title}</td><td>${product.price}</td>`;
      productBody.appendChild(row);
    });
  })
  .catch(error => {
    console.error('There was a problem fetching the data:', error);
  });
