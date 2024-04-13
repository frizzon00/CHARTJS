const ctx = document.getElementById('myChart');
const ctx2 = document.getElementById('myChart2');
const ctx3 = document.getElementById('myChart3');

new Chart(ctx, {
    type: 'radar',
    data: {
        labels: ['Velocidade', 'Finalização', 'Passe', 'Drible', 'Defesa', 'Fisico'],
        datasets: [{
            label: 'Cristiano Ronaldo no Fifa',
            data: [90, 93, 83, 90, 33, 88],
            borderWidth: 1,
            backgroundColor: 'rgba(255, 99, 132, 0.8)', 
        }]
    },
    options: {
        scales: {
            y: {
                display: false,
                beginAtZero: true
            }
        }
    }
});

new Chart(ctx2, {
type: 'bar',
data: {
    labels: ['2011', '2012', '2013', '2014', '2015', '2019'],
    datasets: [{
        label: 'Numero de gols do Messi no auge em cada ANO',
        data: [59, 91, 45, 58, 52, 59],
        borderWidth: 1,
        backgroundColor: 'rgba(54, 162, 235, 0.8)', 
    }]
},
options: {
    scales: {
        y: {
            beginAtZero: true,
            title: {
                display: true,
                text: 'Gols' 
            }
        },
        x: {
            title: {
                display: true,
                text: 'Ano' 
            }
        }
    }
}
});

new Chart(ctx3, {
type: 'line',
data: {
    labels: ['2004', '2005', '2006', '2007', '2008', '2009'],
    datasets: [{
        label: 'Gols Cristiano Ronaldo',
        data: [8, 9, 12, 23, 42, 26],
        borderColor: 'rgba(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.1)',
        borderWidth: 1,
        fill: true
    },
    {
        label: 'Gols Lionel Messi',
        data: [1, 8, 14, 31, 47, 38],
        borderColor: 'rgba(54, 162, 235)',
        backgroundColor: 'rgba(54, 162, 235, 0.1)',
        borderWidth: 1,
        fill: true
    }]
},
options: {
    plugins: {
        title: {
            display: true,
            text: 'Gols de Messi e Cristiano nos primeiros 6 anos de carreira'
        }
    },
    scales: {
        y: {
            beginAtZero: true,
            title: {
                display: true,
                text: 'Gols' 
            }
        },
        x: {
            title: {
                display: true,
                text: 'Ano' 
            }
        }
    }
}
});
