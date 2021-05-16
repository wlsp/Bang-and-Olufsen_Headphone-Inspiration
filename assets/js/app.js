function showSection(IdBaseName, NumberOfButtons) {
    for (x = 1; x <= NumberOfButtons; x++) {
        CheckThisButton = IdBaseName + x;
        ThisSection = IdBaseName + x + 'Section';
        if (document.getElementById(CheckThisButton).checked) {
            document.getElementById(ThisSection).style.display = "block";
        }
        else {
            document.getElementById(ThisSection).style.display = "none";
        }
    }
    return false;
}

function validateForm() {
    if (isEmpty(document.getElementById('data_4').value.trim())) {
        span_Email.innerHTML ='The email address is a mandatory field.';
        return false;
    }
    if (!validateEmail(document.getElementById('data_4').value.trim())) {
        span_Email.innerHTML ='Email must be a valid email address.';
        return false;
    }
    if (isEmpty(document.getElementById('data_1').value.trim())) {
    span_FirstName.innerHTML = 'The "First name" field is a required field.';
        return false;
    }
    if (isEmpty(document.getElementById('data_2').value.trim())) {
        span_LastName.innerHTML = 'The "Last name" field is a required field.';
        return false;
    }
    return true;
}
function isEmpty(str) { return (str.length === 0 || !str.trim()); }
function validateEmail(email) {
    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,15}(?:\.[a-z]{2})?)$/i;
    return isEmpty(email) || re.test(email);
}

