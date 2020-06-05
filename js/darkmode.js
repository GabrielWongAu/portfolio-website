//Script for dark mode-light mode toggle button

var checkbox = document.querySelector('input[name=theme]');

checkbox.addEventListener('change', function() {
    if(this.checked) {
        trans()
        document.documentElement.setAttribute('data-theme', 'light')
        window.localStorage.setItem('data-theme', 'light');
    } else {
        trans()
        document.documentElement.setAttribute('data-theme', 'dark')
        window.localStorage.setItem('data-theme', 'dark');
        }
    })

    let trans = () => {
        document.documentElement.classList.add('transition');
        window.setTimeout(() => {
        document.documentElement.classList.remove('transition')
    }, 1000)
}

//Script for storing state in local storage

const toggleSwitch = document.getElementById('switch');
const currentTheme = localStorage.getItem('data-theme');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    
    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}  

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('data-theme', 'dark');  
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('data-theme', 'light'); 
    }
} 

toggleSwitch.addEventListener('change', switchTheme, false);



