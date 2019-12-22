
let inputRub = document.getElementById('rub'),
    inputUsd = document.getElementById('usd');

// the first way without promise

/*
inputRub.addEventListener('input', () => {
    let request = new XMLHttpRequest();

    request.open('GET', 'js/current.json');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send();
    
    request.addEventListener('readystatechange', function() {
        if (request.readyState === 4 && request.status == 200) {
            let data = JSON.parse(request.response);
            inputUsd.value = (inputRub.value / data.usd).toFixed(2);
        } else {
            inputUsd.value = "Что-то пошло не так!";
        }
    });

});
*/

// the second way with promise

function getData(url) {
    return new Promise(function(resolve, reject) {
        let request = new XMLHttpRequest();
        request.open('GET', url);
        request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

        request.addEventListener('load', function() {
            if (request.readyState === 4 && request.status == 200) {
                resolve(request.response);
            } else {
                let error = new Error(request.statusText);
                reject(error);
            }
        });   
        request.send();  
    });
}

inputRub.addEventListener('input', function() {
    getData('js/current.json')
        .then(function(response) {
            inputUsd.value = (inputRub.value / (JSON.parse(response)).usd).toFixed(2);
        })
        .catch(function(error){
            inputUsd.value = error;
        });
});


