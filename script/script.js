// Task section
var taskLeft = 6;
var taskCount = 23;
var template = [
    "Fix The Mobile Button Issue",
    "Add The Dark Mode",
    "Optimize Home Page",
    "Improve Job Searching",
    "Integrate OpenAI API",
    "Add New Emoji 🤲"
];

function taskCompleted(index) {
    // Complete button
    var buttons = document.getElementsByClassName("completed");
    var button = buttons[index];
    
    // Time
    var time = new Date();
    
    var hours = time.getHours();
    var minutes = time.getMinutes();
    var seconds = time.getSeconds();
    var ampm = hours >= 12 ? "PM" : "AM";
    
    hours = hours % 12 || 12;

    if ( minutes < 10 ) {
        minutes = "0" + minutes;
    }
    if ( seconds < 10 ) {
        seconds = "0" + seconds;
    }

    var currentTime = hours + ":" + minutes + ":" + seconds + " " +  ampm;

    // Activity log
    var activityLog = document.getElementById("activityLog");
    var newLog = document.createElement("p");
    newLog.innerHTML = `You have complete ${template[index]} at ${currentTime}`;
    activityLog.appendChild(newLog);

    alert('Dashboard updated successfully');

    // Task update
    taskLeft = taskLeft - 1;
    if (taskLeft < 10) {
        document.getElementById("taskLeft").innerText = "0" + taskLeft;
    }
    else {
        document.getElementById("taskLeft").innerText = taskLeft;
    }

    taskCount = taskCount + 1;
    document.getElementById("taskCount").innerText = taskCount;

    button.disabled = true;
    button.classList.remove("bg-[#3752FD]");
    button.classList.add("bg-gray-400");

    if (taskLeft === 0) {
        alert("Congrats!!! You have completed all the current tasks");
    }

}

// Questions page
document.getElementById("questions").addEventListener("click",
    function () {
        window.location.href = "question.html"
    } 
);

// Theme section
 document.getElementById("themeBtn").addEventListener("click",
    function () {
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);

        document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
    }
 );


//  Current date
document.getElementById("date").textContent = new Date().toDateString();

//  Clear history
document.getElementById("clearHistory").addEventListener("click",
    function() {
        taskLeft = 6;
        document.getElementById("taskLeft").innerText = "06";

        taskCount = 23;
        document.getElementById("taskCount").innerText = "23";

        document.getElementById("activityLog").innerHTML = "";

        let buttons = document.getElementsByClassName("completed");
        for (let i = 0; i <buttons.length; i++) {
            buttons[i].disabled = false;
            buttons[i].classList.remove("bg-gray-400");
            buttons[i].classList.add("bg-[#3752FD]");
        }
    }
)