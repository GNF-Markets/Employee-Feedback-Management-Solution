document.addEventListener('DOMContentLoaded', () => {
    const hrBtn = document.getElementById('hrBtn');
    const employeeBtn = document.getElementById('employeeBtn');
    const hrForm = document.getElementById('hrForm');
    const employeeForm = document.getElementById('employeeForm');
    const languageSelect = document.getElementById('languageSelect');
    const addLanguageBtn = document.getElementById('addLanguage');
    const selectedLanguages = document.getElementById('selectedLanguages');
    let languageCount = 0;

    // Initially, neither form is visible and no button is active
    hrForm.style.display = 'none';
    employeeForm.style.display = 'none';

    // HR button click handler
    hrBtn.addEventListener('click', () => {
        hrBtn.classList.add('active');
        employeeBtn.classList.remove('active');
        hrForm.style.display = 'block';
        employeeForm.style.display = 'none';
        console.log('HR button clicked');
    });

    // Employee button click handler
    employeeBtn.addEventListener('click', () => {
        employeeBtn.classList.add('active');
        hrBtn.classList.remove('active');
        hrForm.style.display = 'none';
        employeeForm.style.display = 'block';
    });

    // Language selection handling for Employee form
    addLanguageBtn.addEventListener('click', () => {
        const selectedLang = languageSelect.value;
        if (selectedLang && languageCount < 2) {
            const langTag = document.createElement('span');
            langTag.className = 'language-tag';
            langTag.innerHTML = `${selectedLang} <span class="delete-lang">×</span>`;
            
            langTag.querySelector('.delete-lang').addEventListener('click', () => {
                langTag.remove();
                languageCount--;
                languageSelect.disabled = false;
                addLanguageBtn.disabled = false;
            });

            selectedLanguages.appendChild(langTag);
            languageCount++;
            
            if (languageCount === 2) {
                languageSelect.disabled = true;
                addLanguageBtn.disabled = true;
            }
        }
    });

    // Prevent form submission for demo purposes
    hrForm.addEventListener('submit', (e) => e.preventDefault());
    employeeForm.addEventListener('submit', (e) => e.preventDefault());
});