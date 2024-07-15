



/* home page script*/
function toggleDropdown() {
    var dropdown = document.getElementById("dropdownMenu");
    if (dropdown.style.display === "block") {
        dropdown.style.display = "none";
    } else {
        dropdown.style.display = "block";
    }
}

window.onclick = function (event) {
    if (!event.target.matches('.dropbtn') && !event.target.closest('.dropdown2')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.style.display === "block") {
                openDropdown.style.display = "none";
            }
        }
    }
}


    // JavaScript for toggling dropdowns
    document.getElementById('social-media-link').addEventListener('click', function (e) {
        e.preventDefault();
        document.getElementById('social-media-dropdown').classList.toggle('show');
    });

    document.getElementById('services-link').addEventListener('click', function (e) {
        e.preventDefault();
        document.getElementById('services-dropdown').classList.toggle('show');
    });

    // Close the dropdown if the user clicks outside of it
    window.onclick = function (e) {
        if (!e.target.matches('.hov')) {
            var dropdowns = document.getElementsByClassName('dropdown');
            for (var i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    }

    let selectedIdx = -1;

    function searchFunction() {
        let input = document.getElementById('searchInput').value.toLowerCase();
        let items = document.querySelectorAll('.result-item');
        let resultsContainer = document.getElementById('results');
        let obrContent = document.getElementById('obrContent');
        let langContent = document.getElementById('lang');
        let hasResults = false;

        selectedIdx = -1;

        items.forEach((item, index) => {
            if (item.textContent.toLowerCase().includes(input)) {
                item.style.display = '';
                hasResults = true;
            } else {
                item.style.display = 'none';
            }
            item.classList.remove('selected');
        });

        resultsContainer.style.display = hasResults ? 'block' : 'none';
        obrContent.style.display = hasResults ? 'none' : 'block';
        langContent.style.display = hasResults ? 'none' : 'block';
    }

    function navigateResults(event) {
        let items = document.querySelectorAll('.result-item');
        let visibleItems = Array.from(items).filter(item => item.style.display !== 'none');

        if (event.key === 'ArrowDown') {
            selectedIdx = (selectedIdx + 1) % visibleItems.length;
            updateSelection(visibleItems);
            displaySelectedItem(visibleItems[selectedIdx]);
            event.preventDefault();
        } else if (event.key === 'ArrowUp') {
            selectedIdx = (selectedIdx - 1 + visibleItems.length) % visibleItems.length;
            updateSelection(visibleItems);
            displaySelectedItem(visibleItems[selectedIdx]);
            event.preventDefault();
        } else if (event.key === 'Enter') {
            if (selectedIdx > -1 && visibleItems[selectedIdx]) {
                let url = visibleItems[selectedIdx].getAttribute('data-url');
                if (url) {
                    window.location.href = url;
                }
            }
        }
    }

    function updateSelection(visibleItems) {
        visibleItems.forEach((item, index) => {
            if (index === selectedIdx) {
                item.classList.add('selected');
            } else {
                item.classList.remove('selected');
            }
        });
    }

    function displaySelectedItem(item) {
        if (item) {
            document.getElementById('searchInput').value = item.textContent;
        }
    }

    document.querySelectorAll('.result-item').forEach((item, index) => {
        item.addEventListener('click', () => {
            selectedIdx = index;
            let url = item.getAttribute('data-url');
            if (url) {
                window.location.href = url;
            }
        });

        item.addEventListener('mouseover', () => {
            document.getElementById('searchInput').value = item.textContent;
        });

        item.addEventListener('mouseout', () => {
            if (selectedIdx === -1) {
                document.getElementById('searchInput').value = '';
            }
        });
    });

    document.getElementById('searchInput').addEventListener('focus', () => {
        let resultsContainer = document.getElementById('results');
        if (resultsContainer.querySelector('ul').childElementCount > 0) {
            resultsContainer.style.display = 'block';
        }
    });

    document.getElementById('searchInput').addEventListener('blur', () => {
        setTimeout(() => {
            document.getElementById('results').style.display = 'none';
            document.getElementById('obrContent').style.display = 'block';
            document.getElementById('lang').style.display = 'block';
        }, 100);
    });





/* digital marketing script*/

function toggleDropdown() {
    var dropdown = document.getElementById("mydropdownMenu");
    if (dropdown.style.display === "block") {
        dropdown.style.display = "none";
    } else {
        dropdown.style.display = "block";
    }
}
window.onclick = function (event) {
    if (!event.target.matches('.mydropbtn') && !event.target.closest('.mydropdown')) {
        var dropdowns = document.getElementsByClassName("mydropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.style.display === "block") {
                openDropdown.style.display = "none";
            }
        }
    }
}

// JavaScript for toggling dropdowns
document.getElementById('social-media-link').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('social-media-dropdown').classList.toggle('show');
});

document.getElementById('services-link').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('services-dropdown').classList.toggle('show');
});

// Close the dropdown if the user clicks outside of it
window.onclick = function (e) {
    if (!e.target.matches('.myhov')) {
        var dropdowns = document.getElementsByClassName('dropdown');
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

function readMore() {
    var expandInfo = document.getElementById("more-info-js");
    var mainHeadings = document.getElementById("main-headings-js");

    if (expandInfo.style.height === "350px") {
        expandInfo.style.height = "0";
        mainHeadings.style.transform = "scale(1)";
    } else {
        expandInfo.style.height = "350px";
        mainHeadings.style.transform = "scale(0.7)";
    }
} 


