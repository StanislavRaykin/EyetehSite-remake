document.getElementById("mailform").addEventListener("submit", function (e) {
    e.preventDefault();
    submitContactForm(this);
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("form").addEventListener("submit", function (ev) {
        ev.preventDefault();

        const token = document.querySelector('input[name="__RequestVerificationToken"]').value;
        submitContactForm(this, token);
    })
})

async function submitForm(form, antiForgeryToken) {
    const data = new FormData(form);
    const req = await fetch("api/Filtering/term", {
        method: form.method,
        body: JSON.stringify(),
        headers = {
            'RequestVerificationToken': antiForgeryToken
        }
    });
    
    const res = await req.text();
    console.log(res);
    document.getElementById("result").textContent = res;
}

async function submitContactForm(form) {
    try {
        // Fix 2: Add loading state
        document.querySelector('.loading').style.display = 'block';

        const formData = new FormData(form);
        const response = await fetch(form.action, {
            method: form.method,
            body: formData,
            // Fix 3: Add anti-forgery token
            headers: {
                'RequestVerificationToken': document.querySelector('input[name="__RequestVerificationToken"]').value
            }
        });

        if (!response.ok) throw new Error('Network response was not ok');

        const result = await response.json();

        // Fix 4: Update UI with result
        document.querySelector('.loading').style.display = 'none';
        const resultDiv = document.querySelector('#result .error-message, #result .sent-message') ||
            document.createElement('div');
        resultDiv.className = 'sent-message';
        resultDiv.textContent = result.message;
        resultDiv.style.display = 'flex';
        document.getElementById('result').appendChild(resultDiv);

    } catch (error) {
        document.querySelector('.loading').style.display = 'none';
        const errorDiv = document.querySelector('#result .error-message') ||
            document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.textContent = '';
        errorDiv.style.display = 'flex';
        document.getElementById('result').appendChild(errorDiv);
    }
}

let dialog = document.getElementById("confirm_dialog");

//const category = document.getElementById('category1');
//let ctgfield = document.getElementById('ctgfield');
//category.addEventListener('change', (e) => {
//    ctgfield.value = category.value;
//    category.parentElement.submit();
//});

function OpenDialog(dialogid) {
    let dialog = document.getElementById(`${dialogid}`);
    dialog.showModal();
}

document.querySelectorAll('.delete-btn').forEach(button => {
    button.addEventListener('click', function () {
        console.log("show urself")
        const taskId = this.getAttribute('data-fid');
        console.log();
        const tidfield = document.getElementById("tidf");

        tidfield.value = taskId;
        dialog.showModal();


    });
});


//the code below is for the owner's page

let selector = document.getElementById('Icategory');
let area = document.getElementById('description');

selector.addEventListener('change', () => {
    if (selector.value == "Portfolio item") {
        area.style.display = 'block';
    } else {
        area.style.display = 'none';
    }
});



document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('searchInput');
    const filesContainer = document.getElementById('filesContainer');
    const fileItems = filesContainer.querySelectorAll('.ds-link');

    // Function to perform search
    function performSearch() {
        const searchTerm = searchInput.value.toLowerCase();

        fileItems.forEach(item => {
            const fileName = item.getAttribute('data-searchable');

            const matchesSearch = searchTerm === '' || fileName.includes(searchTerm);

            if (matchesSearch) {
                item.style.display = 'flex';
            } else {
                item.style.display = 'none';
            }
        });
    }

    // Event listeners
    searchInput.addEventListener('input', performSearch);

});

