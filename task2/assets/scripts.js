document.addEventListener('DOMContentLoaded', () => {
  const fileInput = document.getElementById('fileInput');
  const availableFields = document.getElementById('availableFields');
  const fieldsToDisplay = document.getElementById('fieldsToDisplay');
  const nextButton = document.querySelector('.btn-primary');
  let jsonData = {};

  fileInput.addEventListener('change', () => {
    const file = fileInput.files[0];
    const reader = new FileReader();

    reader.onload = (event) => {
      const fileData = event.target.result;
      const fileExtension = file.name.split('.').pop().toLowerCase();

      if (fileExtension === 'json') {
        try {
          jsonData = JSON.parse(fileData);
          displayAvailableFields(jsonData.products);
        } catch (error) {
          console.error('Error parsing JSON:', error);
        }
      } else if (fileExtension === 'csv') {
        // Handle CSV file upload and extract fields
        // Implement CSV parsing logic to extract fields from CSV file
        // Populate availableFields with the extracted fields
      } else {
        console.error('Invalid file type');
      }
    };

    reader.readAsText(file);
  });

  function displayAvailableFields(products) {
    const fields = getUniqueFields(products);

    for (const field in fields) {
      const option = document.createElement('div');
      option.textContent = field;
      option.classList.add('field');
      option.addEventListener('click', () => {
        toggleFieldSelection(option, field);
      });
      availableFields.appendChild(option);
    }
  }

  function getUniqueFields(products) {
    const fields = {};
    for (const productId in products) {
      const product = products[productId];
      for (const field in product) {
        fields[field] = true;
      }
    }
    return fields;
  }

  function toggleFieldSelection(option, field) {
    if (fieldsToDisplay.contains(option)) {
      fieldsToDisplay.removeChild(option);
    } else {
      const newOption = option.cloneNode(true);
      newOption.addEventListener('click', () => {
        removeFieldFromDisplay(newOption, field);
      });
      fieldsToDisplay.appendChild(newOption);
    }
  }

  function removeFieldFromDisplay(option, field) {
    fieldsToDisplay.removeChild(option);
  }

  nextButton.addEventListener('click', () => {
    const selectedFields = [...fieldsToDisplay.children].map(field => field.textContent);

    if (selectedFields.length === 0) {
      alert('Please select fields first.');
      return;
    }

    document.body.innerHTML = '';

    const heading = document.createElement('h2');
    heading.textContent = 'Selected Fields Data';
    document.body.appendChild(heading);

    const table = document.createElement('table');
    table.classList.add('table');
    const tableHeader = document.createElement('thead');
    const headerRow = document.createElement('tr');

    selectedFields.forEach(field => {
      const th = document.createElement('th');
      th.textContent = field;
      headerRow.appendChild(th);
    });

    tableHeader.appendChild(headerRow);
    table.appendChild(tableHeader);

    const tableBody = document.createElement('tbody');
    Object.keys(jsonData.products).forEach(productId => {
      const product = jsonData.products[productId];
      const row = document.createElement('tr');
      selectedFields.forEach(field => {
        const cell = document.createElement('td');
        cell.textContent = product[field] || '-';
        row.appendChild(cell);
      });
      tableBody.appendChild(row);
    });

    table.appendChild(tableBody);
    document.body.appendChild(table);
  });
});
