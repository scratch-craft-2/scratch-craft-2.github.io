        const themeToggle = document.getElementById('theme-toggle');
        const body = document.body; 
        const themeText = document.getElementById('theme-text');
        console.log(localStorage.getItem("theme"))
        if (localStorage.getItem("theme") == "dark") {
                document.getElementById("theme-style-dark").setAttribute("href", "/static/css/darkmodeStyle.css");
                body.classList.remove('light-theme');
                body.classList.add('dark-theme');
                themeText.textContent = 'Тёмная тема';
                themeText.classList.remove('theme-text-light');
                themeText.classList.add('theme-text-dark');
                themeToggle.checked  = true;
            } else {
                document.getElementById("theme-style-dark").setAttribute("href", "");
                body.classList.remove('dark-theme');
                body.classList.add('light-theme');
                themeText.textContent = 'Светлая тема';
                themeText.classList.remove('theme-text-dark');
                themeText.classList.add('theme-text-light');
                themeToggle.checked  = false;
            }
        themeToggle.addEventListener('change', function() {
            if (this.checked) {
                document.getElementById("theme-style-dark").setAttribute("href", "/static/css/darkmodeStyle.css");
                body.classList.remove('light-theme');
                body.classList.add('dark-theme');
                themeText.textContent = 'Тёмная тема';
                themeText.classList.remove('theme-text-light');
                themeText.classList.add('theme-text-dark');
                localStorage.setItem('theme', 'dark');
            } else {
                document.getElementById("theme-style-dark").setAttribute("href", "");
                body.classList.remove('dark-theme');
                body.classList.add('light-theme');
                themeText.textContent = 'Светлая тема';
                themeText.classList.remove('theme-text-dark');
                themeText.classList.add('theme-text-light');
                localStorage.setItem('theme', 'light');
            }
        });
