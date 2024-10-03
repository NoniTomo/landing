import Chart from 'chart.js/auto'

const rawData = [
  2015, 2015, 2015, 2015, 2016, 2016, 2016, 2016, 2017, 2017, 2017, 2017, 2018, 2018, 2018, 2018, 2019,
  2019, 2019, 2019, 2020, 2020, 2020, 2020, 2021
]

const formattedLabels = rawData.map((year, index) => {
  const quarter = Math.floor(index % 4) + 1
  return `Q${quarter} ${year}`
})

const datas = [
  2000000, 1800000, 2300000, 2000000, 3500000, 3100000, 2800000, 3450000, 3200000, 3900000, 5492840,
  3200000, 4300000, 3500000, 4200000, 3600000, 3800000, 4700000, 4200000, 5600000, 3900000, 4300000,
  5700000, 5300000, 6161000
]

const ctx = (document.getElementById('chart') as HTMLCanvasElement)?.getContext('2d')

if (ctx) {
  const gradient = ctx.createLinearGradient(0, 0, 100, 500)
  gradient.addColorStop(0, 'rgba(59, 213, 195, 0.5)')
  gradient.addColorStop(1, 'rgba(236, 244, 253, 0.1)')

  const data = {
    labels: formattedLabels,
    datasets: [
      {
        label: 'chart',
        data: datas,
        backgroundColor: gradient,
        fill: true,
        borderColor: '#128c7e',
        tension: 0.4,
        pointRadius: 0,
        pointHoverRadius: 4,
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: '#f56b8d',
        pointHoverBorderWidth: 2
      }
    ]
  }

  new Chart(ctx, {
    type: 'line',
    data: data,

    options: {
      responsive: true,
      scales: {
        y: {
          ticks: {
            callback: function (val, index) {
              return typeof val === 'number' && index % 2 !== 0 ? `$${val / 1000000}M` : ''
            }
          }
        },
        x: {
          ticks: {
            callback: function (val, index) {
              return typeof val === 'number' && index % 4 === 0
                ? this.getLabelForValue(val).slice(-4)
                : ''
            }
          }
        }
      },
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          position: 'nearest',
          yAlign: 'bottom',
          backgroundColor: '#f56b8d',
          titleColor: 'white',
          titleAlign: 'center',
          displayColors: false,
          callbacks: {
            label: function (context) {
              if (context.parsed.y !== null) {
                const value = context.parsed.y
                return new Intl.NumberFormat('en-US', {
                  style: 'currency',
                  currency: 'USD',
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 0
                }).format(value)
              }
              return ''
            }
          }
        }
      },
      interaction: {
        intersect: false,
        mode: 'index'
      }
    }
  })
}
