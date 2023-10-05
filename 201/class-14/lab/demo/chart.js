// function to create a new chart
function renderChart() {
  // get our products from localstorage
  const products = JSON.parse(localStorage.getItem("products"));

  const ctx = document.getElementById("myChart");

  const labels = [];
  const views = [];
  const clicks = [];

  // loop through my products array and add in the label, views and clicks data to my arrays
  for (let i = 0; i < products.length; i++) {
    labels.push(products[i].name);
    views.push(products[i].views);
    clicks.push(products[i].clicks);
  }

  new Chart(ctx, {
    type: "bar",
    data: {
      labels: labels,
      datasets: [
        {
          label: "# of views",
          data: views,
          borderWidth: 1,
        },
        {
          type: "line",
          label: "# of clicks",
          data: clicks,
          borderWidth: 1,
        },
      ],
    },
  });
}

renderChart();
