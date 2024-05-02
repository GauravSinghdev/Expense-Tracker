const expenseForm = document.getElementById("expenseForm");

const expenseList = document.getElementById("expenseList");

let t_amount = 0;

expenseForm.addEventListener('submit', (e) =>{
    e.preventDefault(); //to prevent reload

    const description = document.getElementById("description").value;

    const category = document.getElementById("category").value;

    const amount = parseInt(document.getElementById("amount").value);

    if(description && category && !isNaN(amount))
    {
        const newRow = document.createElement('tr');

        newRow.innerHTML = `<td>${description}</td> 
                            <td>${category}</td>
                            <td>${amount}</td>`

        expenseList.appendChild(newRow);

        t_amount += amount;

        document.getElementById("t_exp").innerHTML = `The total expense till now is ${t_amount}.`;

        document.getElementById("description").value = "";
        document.getElementById("category").value = "";
        document.getElementById("amount").value = "";
    }

    else{
        alert("Please fill form properly");
    }

})