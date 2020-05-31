var prev = 0;

function Change_servicesMenu(count)
{
    document.getElementById('content').innerHTML = document.getElementById(count).innerHTML;

    document.getElementsByClassName(count)[0].style.borderLeft = '3px solid #456c57';
    document.getElementsByClassName(count)[1].style.color = '#456c57';

    if (prev != 0 && prev != count) {
        document.getElementsByClassName(prev)[0].style.borderLeft = '';
        document.getElementsByClassName(prev)[1].style.color = '';   
    }

    prev = count;
}

function ChangePortfolioMenu(count, name, foto)
{
    document.getElementsByClassName(foto)[count].style.opacity = '100';
    for (i = 0; i < 5; i++) {
        if (i == count) {
            document.getElementsByClassName(foto)[count].style.display = 'block';
        }
        else if (document.getElementsByClassName(foto)[i].style.display = 'block')
            document.getElementsByClassName(foto)[i].style.display = 'none';
    }
    

    document.getElementsByClassName(name)[0].style.backgroundColor = '#456c57';
    document.getElementsByClassName(name)[0].style.color = 'white';
    document.getElementsByClassName(name)[0].style.fontSize = '15px';
    document.getElementsByClassName(name)[0].style.right = '10px';

    if (name != "room") {
        document.getElementsByClassName("room")[0].style.backgroundColor = 'white';
        document.getElementsByClassName("room")[0].style.color = '#60606e';
        document.getElementsByClassName("room")[0].style.fontSize = '14px';
        document.getElementsByClassName("room")[0].style.right = '0';
    }


    if (prev != 0 && prev != name && prev != "room") {
        document.getElementsByClassName(prev)[0].style.backgroundColor = '';
        document.getElementsByClassName(prev)[0].style.color = '';
        document.getElementsByClassName(prev)[0].style.fontSize = '';
        document.getElementsByClassName(prev)[0].style.right = '';
    }

    prev = name;
}
    
function showModalWin(name) {
 
    let darkLayer = document.createElement('div'); 
    darkLayer.id = 'shadow'; 
    document.body.appendChild(darkLayer);

    let modalWin = document.getElementById(name); 
    modalWin.style.display = 'block';

    let main = document.getElementById('main_content');
    main.style.position = 'fixed';
    main.style.left = '16%';

    darkLayer.onclick = function () {  
        darkLayer.parentNode.removeChild(darkLayer); 
        modalWin.style.display = 'none';
        main.style.position = ''; 
        return false;
    };
}
