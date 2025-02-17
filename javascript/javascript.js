document.getElementById('generate').addEventListener('click', generatePassword);

function generatePassword(e) {
    e.preventDefault();
    const length = parseInt(document.getElementById('length').value);
    const mix = document.getElementById('Mixed').checked;
    const password = document.getElementById('password');

    let chars = 'abcdefghijklmnopqrstuvwxyz';
    if (mix) chars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+';

    let pass = '';
    for (let i = 0; i < length; i++) {
        pass += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    password.textContent = pass;
}