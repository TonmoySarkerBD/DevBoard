
function theme(themeID) {
    const button = document.getElementById(themeID);
    const colors = ['bg-slate-200', 'bg-gray-200', 'bg-zinc-200', 'bg-neutral-200', 'bg-stone-200', 'bg-red-200', 'bg-orange-200', 'bg-amber-200', 'bg-yellow-200', 'bg-lime-200', 'bg-green-200', 'bg-teal-200', 'bg-cyan-200', 'bg-blue-200', 'bg-indigo-200', 'bg-violet-200', 'bg-purple-200', 'bg-fuchsia-200', 'bg-pink-200', 'bg-rose-200'];
    button.addEventListener('click',
        function () {
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            const elements = document.querySelectorAll('.theme-bg');
            elements.forEach(element => {
                element.classList.remove(...colors);
                element.classList.add(randomColor);
            });
        });
}


function takeDate() {
    const format = {
        weekday: 'short',
        month: 'short',
        day: '2-digit',
        year: 'numeric'
    };

    const today = new Date();
    const formattedDate = today.toLocaleDateString('en-BD', format);
    document.getElementById('date').textContent = formattedDate;
}


function takeTime() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");
    const daynight = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    const currentTime = `${hours}:${minutes}:${seconds} ${daynight}`;
    return currentTime;
}

function taskAssigned() {
    const combtn = document.getElementsByClassName("com-btn");
    let numberOfBtn = 0;
    for (const item of combtn) {
        if (!item.hasAttribute("disabled")) {
            numberOfBtn++;
        }
    }
    const pending = document.getElementById("pending-task");
    pending.innerText = numberOfBtn;
}