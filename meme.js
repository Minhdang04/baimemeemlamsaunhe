document.getElementById('button').addEventListener("click", button)
function button() {
    let color = document.getElementById('color').value;
    if (color == ''){
        alert('Bạn chưa nhập thông tin')
    }
    else {
        document.body.style.backgroundColor = color
}
}
function myfunction() {
    let d = document.getElementById("colors");
    let text = d.options[d.selectedIndex].value;
    document.body.style.backgroundColor=text;
    }