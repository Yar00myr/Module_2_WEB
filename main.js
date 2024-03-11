document.addEventListener('DOMContentLoaded', function () {
    var emailLink = document.querySelector('#contact a[href^="mailto"]');
    emailLink.addEventListener('click', function (event) {
        event.preventDefault();
        var emailAddress = this.getAttribute('href').replace('mailto:', '');
        copyToClipboard(emailAddress);
        alert('Адресу електронної пошти скопійовано: ' + emailAddress);
    });
});

function copyToClipboard(text) {
    var tempInput = document.createElement('input');
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
}