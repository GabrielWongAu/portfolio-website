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



