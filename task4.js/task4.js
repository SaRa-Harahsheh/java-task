function saveData() {
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const gender = document.getElementById('gender').value;
    const birthDate = document.getElementById('birthDate').value;
    const description = document.getElementById('description').value;
    const major = document.getElementById('major').value;
    const programmingLanguages = Array.from(
        document.querySelectorAll('input[name="programmingLanguages"]:checked')
    )
        .map((el) => el.value)
        .join(', ');
    const siblingsNumber = document.getElementById('siblingsNumber').value;
    const siblingsDescription = document.getElementById('siblingsDescription').value;

    const image = document.getElementById('image').files[0];
    if (image) {
        const reader = new FileReader();
        reader.onload = function (e) {
        
            localStorage.setItem('image', e.target.result);
            displayData(); 
        };
        reader.readAsDataURL(image);
    } else {
        displayData(); 
    }

    localStorage.setItem('name', name);
    localStorage.setItem('age', age);
    localStorage.setItem('gender', gender);
    localStorage.setItem('birthDate', birthDate);
    localStorage.setItem('description', description);
    localStorage.setItem('major', major);
    localStorage.setItem('programmingLanguages', programmingLanguages);
    localStorage.setItem('siblingsNumber', siblingsNumber);
    localStorage.setItem('siblingsDescription', siblingsDescription);
}

function displayData() {
    document.getElementById('displayName').innerText = `Name: ${localStorage.getItem('name')}`;
    document.getElementById('displayAge').innerText = `Age: ${localStorage.getItem('age')}`;
    document.getElementById('displayGender').innerText = `Gender: ${localStorage.getItem('gender')}`;
    document.getElementById('displayBirthDate').innerText = `Birth Date: ${localStorage.getItem('birthDate')}`;
    document.getElementById('displayImage').src = localStorage.getItem('image') || ''; // عرض الصورة إذا كانت موجودة
    document.getElementById('displayDescription').innerText = `Description: ${localStorage.getItem('description')}`;
    document.getElementById('displayMajor').innerText = `Major & University: ${localStorage.getItem('major')}`;
    document.getElementById('displayProgrammingLanguages').innerText = `Programming Languages: ${localStorage.getItem('programmingLanguages')}`;
    document.getElementById('displaySiblingsNumber').innerText = `Siblings Number: ${localStorage.getItem('siblingsNumber')}`;
    document.getElementById('displaySiblingsDescription').innerText = `Siblings Description: ${localStorage.getItem('siblingsDescription')}`;

    document.getElementById('displayCard').style.display = 'block';
}

window.onload = displayData;