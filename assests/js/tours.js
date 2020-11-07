function readMore(tourType, moreType) {
    document.getElementById(tourType).style.display = 'revert';
    document.getElementById(moreType).style.display = 'none';
}

function validate() {
    var flag = true;

    var firstName = document.getElementById('fname');
    var lastName = document.getElementById('lname');
    var number = document.getElementById('mobile');
    var no_of_persons = document.getElementById('no-of-persons');
    var checkIn = document.getElementById('check-in');

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

    if (no_of_persons.value == "") {
        no_of_persons.style.border = '2px solid red';
        no_of_persons.setAttribute("value", "");
        no_of_persons.setAttribute("placeholder", "Value can't be 0");
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

    return false;
}
