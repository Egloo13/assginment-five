const clickNumber = document.getElementById("click-number").innerText;
const fullBalance = parseInt(clickNumber);
const addBalance = document.getElementById("add-conferm").innerText;
const moreBalance = parseInt(addBalance);
const btn = document.getElementById("btn-1");
if (fullBalance > 0) {
    alert("Bord load is correct");
    document.getElementById("click-number").innerText = fullBalance - 1;
    document.getElementById("add-conferm").innerText = moreBalance + 1;
    btn.disabled = true;
    btn.style.backgroundColor = "gray";
} else {
    alert("Balance cannot be negative.");
}
