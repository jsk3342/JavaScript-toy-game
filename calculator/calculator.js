//코드 구현 시작

let numOne = "";
    let operator = "";
    let numTwo = "";
    const $operator = document.querySelector("#operator");
    const $result = document.querySelector("#result");
    const onClickNumber = event => {
      if (operator) {
        if (!numTwo) {
          $result.value = "";
        }
        numTwo += event.target.textContent;
        $result.value += event.target.textContent;
      } else {
        numOne += event.target.textContent;
        $result.value += event.target.textContent;
      }
    };

    const onClickOperator = op => () => {
      if (numOne) {
        operator = op;
        $operator.value = op;
      } else {
        alert("숫자 입력하세요");
      }
    };
    document.querySelector("#num-0").addEventListener("click", onClickNumber);
    document
      .querySelector("#plus")
      .addEventListener("click", onClickOperator("+"));