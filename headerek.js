const header = document.querySelector('header');

header.insertAdjacentHTML('beforeend', `
    <div id="header_blok_lewy"><img src="s6_add.jpg"><p>S6 Addon 2</p></div>
    <nav>
        <ul>
            <li><a href="index.html">Strona główna</a></li>
            <li><a href="pobierz.html">Pobierz</a></li>
        </ul>
        <ul>
            <li><a href="informacje.html">Informacje</a></li>
            <li><a href="galeria.html">Galeria</a></li>
        </ul>
    </nav>
`);
