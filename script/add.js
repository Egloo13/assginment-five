
    
   document.querySelectorAll (".btn").forEach(button => {
    button.addEventListener("click", function() {
        const clickNumber = document.getElementById("click-number").innerText;
        const fullBalance = parseInt(clickNumber);
        const addBalance = document.getElementById("add-conferm").innerText;
        const moreBalance = parseInt(addBalance);
        const historyBox = document.getElementById("history-box");

        
        if (fullBalance > 0) {
            alert("Bord load is correct");
            document.getElementById("click-number").innerText = fullBalance - 1;
            document.getElementById("add-conferm").innerText = moreBalance + 1;
            this.disabled = true;
            this.style.backgroundColor = "gray";

            const showText = this.closest(".for-histoy"); 
            const textTitle = showText.querySelector("h3").innerText; 
            const p = document.createElement("p");
            p.innerText = `Completed the task of: "${textTitle}" at ${new Date().toLocaleString()}`; 
            historyBox.appendChild(p);
        } 
        else {
            alert("Balance cannot be negative.");
        }
    });
   });

//    for clearing the history
    document.getElementById("clean-history").addEventListener("click", function() {
        document.getElementById("history-box").innerHTML = "";
    });












