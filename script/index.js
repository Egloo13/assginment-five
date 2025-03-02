
 // main function of the document
    document.querySelectorAll (".btn").forEach(button => {
    button.addEventListener("click", function() {
        const clickNumber = document.getElementById("click-number").innerText;
        const fullBalance = parseInt(clickNumber);
        const addBalance = document.getElementById("add-conferm").innerText;
        const moreBalance = parseInt(addBalance);
        const historyBox = document.getElementById("history-box");

        
        if (fullBalance > 0) {
            alert("Bord updeted successfully.");
            document.getElementById("click-number").innerText = fullBalance - 1;
            document.getElementById("add-conferm").innerText = moreBalance + 1;
            this.disabled = true;
            this.style.backgroundColor = "gray";

            const showText = this.closest(".for-histoy");
            const textTitle = showText.querySelector("h3").innerText;
            const AllHistory = document.createElement("div");
            AllHistory.classList.add("history-entry", "p-2", "bg-gray-100", "rounded-lg", "mb-2", "shadow");
            AllHistory.innerHTML = `
                <p class="font-medium text-blue-600">✅ Completed Task: "${textTitle}"</p>
                <small class="text-gray-500">🕒 ${new Date().toLocaleString()}</small>`;
            historyBox.appendChild(AllHistory);

            if (fullBalance - 1 === 0) {
                setTimeout(() => {
                    alert("Congratulations! All tasks are completed!");
                }, 500);
            }
        } 
        else {
            alert("Balance cannot be negative.");
        }
    });
    });

//  for clearing the history
    document.getElementById("clean-history").addEventListener("click", function() {
        document.getElementById("history-box").innerHTML = "";
    });

//  for navigating to tne blog page
    document.getElementById("blog-page").addEventListener("click", function() {
        window.location.href = "blog.html";
    });

//  randomize the background color 
    document.getElementById("random-color").addEventListener("click", function() {
        const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
        document.body.style.backgroundColor = randomColor;
    });

    
//   displaying the current date
     window.onload = function() {
        const currentDate = new Date();
        const dayName = currentDate.toLocaleDateString("en-GB", { weekday: 'short' }); 
        const day = currentDate.getDate(); 
        const month = currentDate.toLocaleDateString("en-GB", { month: 'short' }); 
        const year = currentDate.getFullYear(); 
        const formattedDate = `${dayName}, ${day} ${month} ${year}`;
        document.getElementById("current-date").innerText = formattedDate;
    };
    



    
    











