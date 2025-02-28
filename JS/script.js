const button = document.getElementById('theme-button');
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