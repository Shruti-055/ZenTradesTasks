document.addEventListener('DOMContentLoaded', function () {
  // Retrieve data from the global object
  const revenueByLocationData = window.dashboardData.revenueByLocationData;
  const revenueByJobTypeData = window.dashboardData.revenueByJobTypeData;

  // Function to create revenue by job location chart
  function createRevenueByLocationChart() {
    const ctx = document.getElementById('revenueByLocationChart').getContext('2d');
    const labels = revenueByLocationData.map(item => item.location);
    const revenues = revenueByLocationData.map(item => item.revenue);

    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          label: 'Location',
          data: revenues,
          backgroundColor: 'rgba(54, 162, 235, 0.6)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        indexAxis: 'y', // Set y-axis as the primary axis
        scales: {
          x: {
            beginAtZero: true,
            suggestedMin: 0,
            suggestedMax: 10000,
            stepSize: 5000,
            title: {
              display: true,
              text: 'Revenue'
            }
          }
        }
      }
    });
  }

  // Function to create revenue by job type chart
  function createRevenueByJobTypeChart() {
    const ctx = document.getElementById('revenueByJobTypeChart').getContext('2d');
    const labels = revenueByJobTypeData.map(item => item.type);
    const revenues = revenueByJobTypeData.map(item => item.revenue);

    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          label: 'Type',
          data: revenues,
          backgroundColor: ['rgba(255, 99, 132, 0.6)', 'rgba(54, 162, 235, 0.6)'],
          borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)'],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        indexAxis: 'y', // Set y-axis as the primary axis
        scales: {
          x: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'Revenue'
            }
          }
        }
      }
    });
  }

  // Call functions to create charts
  createRevenueByLocationChart();
  createRevenueByJobTypeChart();
  const totalRevenue = revenueByJobTypeData.reduce((acc, item) => acc + item.revenue, 0);
  
  const totalRevenueCard = document.querySelector('#totalRevenueCard'); 
  if (totalRevenueCard) {
    totalRevenueCard.querySelector('.card-text').textContent = `$${totalRevenue}`;
  }
  
});
