function solution(path) {
    //하나씩 순회 하다가 맨앞에 / 가 없으면 추가한다.
    //.. 만나면 앞에 요소 하나 제거, ... 두개 제거 , . 가 중간에 올 수도 있다
    //앞에 / 박아서 하나의 스트링으로 만든다.
    // / 를 기준으로 뒤에 나오는 문자열을 잡는다. 없으면 / 삭제, ..면 앞에 삭제 ... 두개 삭제
    const pathArr = path.map(i => {
        if (i[0] !== "/") return '/' + i
        return i
    }).join('').split('/')
    const answer = [];
    pathArr.forEach(i => {
        if(i === "") return;
        if(i === ".") return;
        if(i === "..") return answer.pop()
        if(i === "...") {
            answer.pop();
            answer.pop();
            return
        }
        answer.push("/"+i)
    })
    console.log(answer.join(""))
}

solution(['/foo', 'bar', 'barz/asdf', 'quxx', '..' ])
solution(['/foo','bar','baz/./asdf'])
solution(['/foo','bar','baz','...','asdf'])
solution(['/foo','bar','...','.','ab'])