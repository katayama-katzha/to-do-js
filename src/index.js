import "./styles.css";

const onClickAdd = () => {
    // add-textに入力された文字列を取得
    const inputText = document.getElementById("add-text").value;
    // add-textの文字列を空欄にする
    document.getElementById("add-text").value = "";

    createIncompleteList(inputText);

};

// 未完了リストに追加する関数
const createIncompleteList = (text) =>{
    // class名がlist-rowのli要素を作成
    const li = document.createElement("li");
    li.className = "list-row";

    // 中の文字列がadd-textの文字列のpタグを作成
    const p = document.createElement("p");
    p.innerText = text;

    // 完了ボタンを作成
    const completeButton = document.createElement("button");
    completeButton.innerText = "完了";

    // 削除ボタンを作成
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "削除";

    // list-rowの中にp,buttonを追加
    li.appendChild(p);
    li.appendChild(completeButton);
    li.appendChild(deleteButton);

    // incompleteエリアにliを追加
    document.getElementById("incomplete-list").appendChild(li);

    // 完了ボタンを押した時の処理
    completeButton.addEventListener("click" , () => {
        // deleteFromIncompleteListを実行
        deleteFromIncompleteList(completeButton.parentNode);

        // 追加する要素「addTarget」を取得
        const addTarget = completeButton.parentNode;
        const text = addTarget.firstElementChild.innerText;

        // addTargetを初期化
        addTarget.textContent = null;

        // 中身を作成
        const p = document.createElement("p");
        p.innerText = text;
        const backButton = document.createElement("button");
        backButton.innerText = "戻す";

        // 戻すボタンを押した時の処理
        backButton.addEventListener("click",()=>{
            // 要素の親をdeleteTargetとして宣言
            const deleteTarget = backButton.parentNode;
            // deleteTargetをcomplete-listから削除
            document.getElementById("complete-list").removeChild(deleteTarget);

            // テキストを取得
            const text = backButton.parentNode.firstElementChild.innerText;
            createIncompleteList(text);
        });
        
        // 作成した中身をaddTargetに追加
        addTarget.appendChild(p);
        addTarget.appendChild(backButton);

        // addTargetを#complete-listにに追加
        document.getElementById("complete-list").appendChild(addTarget);

        
    });


    // 削除ボタンを押した時の処理
    deleteButton.addEventListener("click" , () => {
        // deleteFromIncompleteListを実行
        deleteFromIncompleteList(deleteButton.parentNode);
    });


    // 未完了リストから指定の要素を削除
    const deleteFromIncompleteList = (target) => {
        document.getElementById("incomplete-list").removeChild(target);
    };
};


document.getElementById("add-button").addEventListener( "click",()=>onClickAdd() );