/** Basic Andriod calculator mimic
 *@authors Tee-Marveel
 *Algorithm
 *-insert character, insert()
 *-evaluate expression, showResult()
 *-delete characters, deleteExpr()
 */


//storing a reference to our expression display
const expBox = document.querySelector("#expression");

//storing a reference to our results display
const resultBox = document.querySelector("#result");

//collecting all the number buttons into one array
const numberButtons = document.querySelectorAll(".num");

//collecting all the operators into one array
const operatorButtons = document.querySelectorAll(".operator-btn");

//insert character to display box
function insert(exp) {
    expBox.value += exp; //appending
}
//evaluate arithmetic expression
function showResults() {
    try {
        resultBox.value = eval(expBox.value);
        if (eval(expBox.value) === undefined) {
            resultBox.value = "";
        }
    } catch (err) {
        // console.log("Error below\n" + err);//error object has properties type and message
        throw new Error("You don do shit " + err.message); //display just error message
        resultBox.value = "Invalid Expression";
    }
}

//delete screen 
function deleteExp() {
    resultBox.value = "";
    // expBox.value = expBox.value.substring(0, expBox.value.length - 1);
    let expArr = expBox.value.split("");
    let poppedChar = expArr.pop();
    console.log(`You deleted ${poppedChar} from ${expBox.value} at ${Date()}`);
    let joinedExp = expArr.join("");
    expBox.value = joinedExp;
}
//loop through the number buttons and add event listener
numberButtons.forEach((num) => {
    num.addEventListener("click", function() {
        if (num.innerHTML === "=") {
            //(num.innerHTML === "=") ? showResults() : insert(num.innerHTML);
            showResults();
        } else {
            insert(num.innerHTML);
        }
    });
});

//loop through operator buttons and add event listener
operatorButtons.forEach((char) => {
    char.addEventListener("click", function() {
        if (char.innerHTML === "DEL") {
            deleteExp();
        } else {
            insert(char.innerHTML);
        }
    });
});