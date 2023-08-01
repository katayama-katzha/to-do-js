import "./styles.css";
const onClickAdd = () => {
    const inputText = document.getElementById("add-text").value;
    document.getElementById("add-text").value = "";

    const li = document.createElement("li");
    li.className = "list-row";
    const p = document.createElement("p");
    p.innerText = inputText;

    li.appendChild(p);

    document.getElementById("incomplete-list").appendChild(li);
}

document.getElementById("add-button").addEventListener( "click",()=>onClickAdd() );