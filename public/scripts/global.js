//INDEX RELATED------------------------------------------------------
//-----theme music
const muteButton = document.querySelector('.mute-button');
window.addEventListener('DOMContentLoaded', (event) => {
    const theme = document.querySelector('.starwars-theme');

    muteButton.textContent = theme.muted ? '🔇' : '🔊';

    muteButton.addEventListener('click', () => {
        theme.muted = !theme.muted;
        muteButton.textContent = theme.muted ? '🔇' : '🔊';
    });
});

//-----info message: lightsaber sound
let messageWindow = document.querySelector(".flex-container-intro");
let messageShown = false;

const clickSoundLightsaber = new Audio('/resources/soundEffects/lightsaber_sound.mp3');

function showHideMessage() {
    // This function is used to either hide or display the message (later implemented by clicking a button)
    if (messageShown === true) {
        messageWindow.style.display = "none";
        messageShown = false;
    }
    else {
        messageWindow.style.display = "flex";
        messageShown = true;
    }
}

function soundLightsaber() {
    //ligthsaber sound on button click
    if (muteButton.textContent === '🔊') {
        clickSoundLightsaber.currentTime = 0;
        clickSoundLightsaber.play();
    }
}

//---------------------------------------------------------------------
// USER RELATED--------------------------------------------------
let deleteWindows = document.querySelectorAll(".flex-container-delete");
let deleteShown = false;

function showHideDelConfirmation(containerIndex, queryInvalid) {
    // This function is used to either hide or display the delete window (later implemented by clicking a button)
    let currentDeleteWindow = deleteWindows[parseInt(containerIndex)];
    document.querySelector(`#${queryInvalid}`).style.display = "none";
    if (deleteShown === true) {
        currentDeleteWindow.style.display = "none";
        deleteShown = false;
    }
    else {
        currentDeleteWindow.style.display = "flex";
        deleteShown = true;
    }
}

let editWindows = document.querySelectorAll(".flex-container-edit");
let editShown = false;

function showHideEditConfirmation(containerIndex, queryInvalid) {
    let currentEditWindow = editWindows[parseInt(containerIndex)];
    document.querySelector(`#${queryInvalid}`).style.display = "none";
    if (editShown === true) {
        currentEditWindow.style.display = "none";
        editShown = false;
    }
    else {
        currentEditWindow.style.display = "flex";
        editShown = true;
    }
}

function hideAlert() {
    document.querySelector('.flex-container-delete').style.display = "none";
}

//VALIDATION OF FORMS--------------------------------------------------

function containsOnlyLetters(str) {
    return /^[A-Za-z]+$/.test(str);         // [A-Za-z] is search pattern for letters
}

function checkLength8(str) {
    return str.length > 7;
}

function checkLength2(str) {   //Never used
    return str.length >= 2;
}

function containsSpecialCharacters(str) {
    return /^.*[!@#$%^&*(),.?":{}|<>].*[!@#$%^&*(),.?":{}|<>].*$/.test(str)
}


function validateInput(event) {
    // select all the fields of the form and check against the functions above

    let first_name = document.getElementById("create-first-name").value;
    let last_name = document.getElementById("create-last-name").value;
    let password = document.getElementById("create-password").value;
    let question_one_yes = !!document.querySelector('input[name="evilness-question-1"]:checked');
    let question_one_no = !!document.querySelector('input[name="evilness-question-2"]:checked');
    let question_two_yes = !!document.querySelector('input[name="evilness-question-3"]:checked');
    let question_two_no = !!document.querySelector('input[name="evilness-question-4"]:checked');
    let question_three_yes = !!document.querySelector('input[name="evilness-question-5"]:checked');
    let question_three_no = !!document.querySelector('input[name="evilness-question-6"]:checked');
    let question_four_yes = !!document.querySelector('input[name="evilness-question-7"]:checked');
    let question_four_no = !!document.querySelector('input[name="evilness-question-8"]:checked');
    let question_five_yes = !!document.querySelector('input[name="evilness-question-9"]:checked');
    let question_five_no = !!document.querySelector('input[name="evilness-question-10"]:checked');

    // flag to determine if the fields are correctly filled and if they are not, then a error message will pop up in the form
    let validated = true;

    if (validated) {
        validated = containsOnlyLetters(first_name);
        if (validated === false) {
            document.querySelector("#first-name-invalid").style.display = "inline";
        } else {
            validated = checkLength2(first_name);
            if (validated === false) {
                document.querySelector("#first-name-invalid").style.display = "inline";
            }
            else {
                document.querySelector("#first-name-invalid").style.display = "none";
            }
        }
    }

    if (validated) {
        validated = containsOnlyLetters(last_name);
        if (validated === false) {
            document.querySelector("#last-name-invalid").style.display = "inline";
        } else {
            validated = checkLength2(last_name);
            if (validated === false) {
                document.querySelector("#last-name-invalid").style.display = "inline";
            }
            else {
                document.querySelector("#last-name-invalid").style.display = "none";
            }
        }
    }

    if (validated) {
        validated = checkLength8(password);
        if (validated === false) {
            document.querySelector("#password-invalid").style.display = "inline";
        } else {
            validated = containsSpecialCharacters(password);
            if (validated === false) {
                document.querySelector("#password-invalid").style.display = "inline";
            } else {
                document.querySelector("#password-invalid").style.display = "none";
            }
        }
    }

    if (validated) {
        if ((!question_one_yes && !question_one_no) || (question_one_yes && question_one_no)) {
            document.querySelector('input[name="evilness-question-1"]').checked = false;
            document.querySelector('input[name="evilness-question-2"]').checked = false;
            document.querySelector("#question-1-invalid").style.display = "inline";
            validated = false;
        } else {
            document.querySelector("#question-1-invalid").style.display = "none";
        }
    }

    if (validated) {
        if ((!question_two_yes && !question_two_no) || (question_two_yes && question_two_no)) {
            document.querySelector('input[name="evilness-question-3"]').checked = false;
            document.querySelector('input[name="evilness-question-4"]').checked = false;
            document.querySelector("#question-3-invalid").style.display = "inline";
            validated = false;
        } else {
            document.querySelector("#question-3-invalid").style.display = "none";
        }
    }

    if (validated) {
        if ((!question_three_yes && !question_three_no) || (question_three_yes && question_three_no)) {
            document.querySelector('input[name="evilness-question-5"]').checked = false;
            document.querySelector('input[name="evilness-question-6"]').checked = false;
            document.querySelector("#question-5-invalid").style.display = "inline";
            validated = false;
        } else {
            document.querySelector("#question-5-invalid").style.display = "none";
        }
    }

    if (validated) {
        if ((!question_four_yes && !question_four_no) || (question_four_yes && question_four_no)) {
            document.querySelector('input[name="evilness-question-7"]').checked = false;
            document.querySelector('input[name="evilness-question-8"]').checked = false;
            document.querySelector("#question-7-invalid").style.display = "inline";
            validated = false;
        } else {
            document.querySelector("#question-7-invalid").style.display = "none";
        }
    }

    if (validated) {
        if ((!question_five_yes && !question_five_no) || (question_five_yes && question_five_no)) {
            document.querySelector('input[name="evilness-question-9"]').checked = false;
            document.querySelector('input[name="evilness-question-10"]').checked = false;
            document.querySelector("#question-9-invalid").style.display = "inline";
            validated = false;
        } else {
            document.querySelector("#question-9-invalid").style.display = "none";
        }
    }

    // Prevent form submission if not validated
    if (!validated) {
        document.querySelector('.flex-container-delete').style.display = 'flex'
        event.preventDefault();
    }
}

function validateInputEdit(event) {
    // select all the fields of the form and check against the functions above

    let first_name = document.getElementById("edit-first-name").value;
    let last_name = document.getElementById("edit-last-name").value;
    let password = document.getElementById("edit-password").value;

    // flag to determine if the fields are correctly filled and if they are not, then a error message will pop up in the form
    let validated = true;

    if (validated) {
        validated = containsOnlyLetters(first_name);
        if (validated === false) {
            document.querySelector("#edit-first-name-invalid").style.display = "inline";
        } else {
            document.querySelector("#edit-first-name-invalid").style.display = "none";
        }
    }

    if (validated) {
        validated = containsOnlyLetters(last_name);
        if (validated === false) {
            document.querySelector("#edit-last-name-invalid").style.display = "inline";
        } else {
            document.querySelector("#edit-last-name-invalid").style.display = "none";
        }
    }

    if (validated) {
        validated = checkLength8(password);
        if (validated === false) {
            document.querySelector("#edit-password-invalid").style.display = "inline";
        } else {
            validated = containsSpecialCharacters(password);
            if (validated === false) {
                document.querySelector("#edit-password-invalid").style.display = "inline";
            } else {
                document.querySelector("#edit-password-invalid").style.display = "none";
            }
        }
    }

    // Prevent form submission if not validated
    if (!validated) {
        event.preventDefault();
    }
}

//PW validation to delete or edit

function checkPasswordForDeleteEdit(passwordDB, password) {
    return password === passwordDB;
}

function validatePasswordDelete(event, queryInvalid, queryPassword, passwordDB, goField, cancelField, checkField) {
    let passwordDelete = document.getElementById(queryPassword).value;
    let validated = true;

    if (validated) {
        validated = checkPasswordForDeleteEdit(passwordDB.toString(), passwordDelete.toString())
        if (validated === false) {
            document.querySelector(`#${queryInvalid}`).style.display = "inline";
        }
        else {
            document.querySelector(`#${cancelField}`).style.display = "none";
            document.querySelector(`#${checkField}`).style.display = "none";
            document.querySelector(`#${queryInvalid}`).style.display = "none";
            document.querySelector(`#${queryPassword}`).style.display = "none";
            document.querySelector(`#${goField}`).style.display = "inline";
        }
    }

    if (!validated) {
        event.preventDefault();
    }
}

function validatePasswordEdit(event, queryInvalid, queryPassword, passwordDB, goField, cancelField, checkField) {
    let passwordEdit = document.getElementById(queryPassword).value;
    let validated = true

    if (validated) {
        validated = checkPasswordForDeleteEdit(passwordDB.toString(), passwordEdit.toString())
        if (validated === false) {
            document.querySelector(`#${queryInvalid}`).style.display = "inline";
        }
        else {
            document.querySelector(`#${cancelField}`).style.display = "none";
            document.querySelector(`#${checkField}`).style.display = "none";
            document.querySelector(`#${queryInvalid}`).style.display = "none";
            document.querySelector(`#${queryPassword}`).style.display = "none";
            document.querySelector(`#${goField}`).style.display = "inline";
        }
    }

    if (!validated) {
        event.preventDefault();
    }
}

function closeWindow(query) {
    document.getElementById(query).value = "";
    document.getElementById(query).value = "";
}