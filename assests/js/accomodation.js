var nOfDays = 0;

//Form Validation
function validate() {
    var flag = true;
    var dateFlag = false;

    var firstName = document.getElementById('fname');
    var lastName = document.getElementById('lname');
    var number = document.getElementById('mobile');
    var roomType = document.getElementsByName('room-type');
    var roomNumber = document.getElementById("room-number");
    var checkIn = document.getElementById('check-in');
    var checkOut = document.getElementById('check-out');

    if (firstName.value == "") {
        firstName.style.border = '2px solid red';
        firstName.setAttribute("placeholder", "This can't be empty!!");

        flag = false;
    } else {
        firstName.style.border = 'revert';
        flag = true;
    }

    if (lastName.value == "") {
        lastName.style.border = '2px solid red';
        lastName.setAttribute("placeholder", "This can't be empty!!");

        flag = false;
    } else {
        lastName.style.border = 'revert';
        flag = true;
    }

    if (number.value.toString().length !== 10) {
        number.style.border = '2px solid red';
        number.setAttribute("value", "");
        number.setAttribute("placeholder", "Enter Correct Number");

        flag = false;
    } else {
        number.style.border = 'revert';
        flag = true;
    }

    if (roomNumber.value === "") {
        roomNumber.style.border = '2px solid red';
        roomNumber.setAttribute("placeholder", "Value can't be 0");

        flag = false;
    } else {
        roomNumber.style.border = 'revert';
        flag = true;
    }

    var date = new Date();
    var check_in = new Date(checkIn.value);

    if (checkIn.value == "" || check_in.getTime() - date.getTime() < 0) {
        checkIn.style.border = '2px solid red';

        flag = false;
    } else {
        checkIn.style.border = 'revert';
        flag = true;
        dateFlag = true;
    }

    var check_out = new Date(checkOut.value);
    if (checkOut.value == "" || check_out.getTime() - date.getTime() < 1) {
        checkOut.style.border = '2px solid red';

        flag = false;
    } else {
        checkOut.style.border = 'revert';

        if (dateFlag) {
            nOfDays = (check_out.getTime() - check_in.getTime()) / (3600 * 1000 * 24);
            console.log(nOfDays);
        }

        flag = true;
    }

    return flag;
}

function calculatePrice() {
    var suite = document.getElementById('suite');
    var single = document.getElementById('single');
    var double = document.getElementById('double');

    var roomNumber = document.getElementById("room-number");

    if (suite.checked) {
        var price = 14999 * roomNumber.value * nOfDays;
        document.getElementById('price').setAttribute("value", price);
    } else if (single.checked) {
        var price = 9999 * roomNumber.value * nOfDays;
        console.log(price);
        document.getElementById('price').setAttribute("value", price);
    } else {
        var price = 5999 * roomNumber.value * nOfDays;
        document.getElementById('price').setAttribute("value", price);
    }
}
