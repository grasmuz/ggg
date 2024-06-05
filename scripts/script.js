function showCodeStep() {
    var phoneNumber = document.getElementById('phone_number').value;
    var iin = document.getElementById('iin').value;

    if (phoneNumber && iin) {
        document.getElementById('step1').style.display = 'none';
        document.getElementById('step2').style.display = 'block';
    } else {
        alert('Пожалуйста, введите номер телефона и ИИН.');
    }
}

document.getElementById('submitButton').addEventListener('click', function(event) {
    event.preventDefault();
    showCodeStep();
});

document.getElementById('myForm').addEventListener('submit', function(event) {
    var code = document.getElementById('code').value;
    if (!/^\d{4}$/.test(code)) {
        alert('Пожалуйста, введите 4-значный код.');
        event.preventDefault();
    } else if (code === '1234') {
        window.location.href = 'department.html';
        event.preventDefault();
    } else {
        alert('Неправильный код. Попробуйте еще раз.');
        event.preventDefault();
    }
});