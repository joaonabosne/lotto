
const media = 'http://davidst.edumedia.ca/mad9014/nums.php';

document.addEventListener('DOMContentLoaded', init);
 

//Event Handlers

function init() {

    let send = document.getElementById('btnSend');

    let back = document.getElementById('btnBack');

    send.addEventListener('click', numbers);

    back.addEventListener('click', goBack);

}

function numbers() {

    let digits = document.getElementById('digits').value;

    let max = document.getElementById('max').value;

    let form = new FormData();

    form.append("digits", digits);

    form.append("max", max);

    let req = new Request(media, {

        method: 'POST',
        body: form,
        mode: 'cors'

    });

    fetch(req)

        .then (function(response){

            if (response.ok) {

                return response.json();

            } 

        })

        .then(function(jsonData){

            if (jsonData.code == 0) {

                let ul = document.querySelector('.num_list')

                let makeNew = new DocumentFragment();

                jsonData.numbers.forEach(function(num) {

                    let li = document.createElement('li');

                    li.textContent = num;

                    makeNew.appendChild(li);

                });

                ul.appendChild(makeNew);
                document.getElementById('home').classList.toggle('active');
                document.getElementById('list').classList.toggle('active');

            } 

        })

}

 

function goBack() {

    document.querySelector('.num_list').innerHTML = "";
    document.getElementById('list').classList.toggle('active');
    document.getElementById('home').classList.toggle('active');

}
