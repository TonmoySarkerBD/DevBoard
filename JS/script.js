// Theme Controller
theme('theme-button');

// Real Day and Date 
takeDate();

// Complete tasks Work
taskAssigned();


let pending = document.getElementById("pending-task");
let finishTask = document.getElementById("finished-task");
let disableBtns = 0;
document.addEventListener("click",
    function (event) {
        if (event.target.classList.contains("com-btn")) {
            alert("Board Updated Successfully");
            event.target.setAttribute("disabled", "true");
            pending.innerText = parseInt(pending.innerText) - 1;
            finishTask.innerText = parseInt(finishTask.innerText) + 1;
            disableBtns++;

            const title = event.target.parentNode.parentNode.children[1].innerText;
            const history = document.createElement("p");
            history.innerHTML = `You have completed the task ${title} at ${takeTime()}`;
            document.getElementById("activityLog").appendChild(history);
            document.getElementById("activityLog").lastElementChild.classList.add(
                "p-2", "bg-gray-100", "theme-bg", "rounded-lg", "m-2", "text-sm"
            );

            // All Task Complete 
            if (taskCounter() === 0) {
                alert("Congratulations!!! You have completed all the current tasks");

            }

        }


});


// History Clear 
clearHistory("clear-history" ,"activityLog");