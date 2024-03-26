document.getElementByld('loginForm').addEventListener('submit'), function(event){
event.preventDefault();
var username =
document.getElementByld('username').value;
var password = 
document.getElementByld('password').value;
}
fetch('/login',{
    method: 'POST',
    body: JSON.stringify({username: username, password: password}),
    headers: {
        'Content-Type': 'application/json'
    }
})
.then(response => response.json())
.then(data => {
    if (data.success){
        window.location.href = 'application/json'
    } else {
        document.getElementByld('message').textContent = data.message;
    }
})
.catch(error => console.error('Error:',error));
document.getElementByld('message').textContent = 'Login functionality not yet implemented.';