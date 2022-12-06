function solution(id) {
    //id는 최소 3글자 이상
    //절반 마스킹, 홀수면 (길이 - 1) / 2 만큼
    //중간 지점 마스킹, 홀수면 한 칸 앞
    let maskingSize;
    let frontSize;
    let backSize;
    if(id.length % 2 === 0) {
        maskingSize = id.length / 2
        frontSize = (maskingSize - 1) / 2
        backSize = (maskingSize + 1) / 2
    } else {
        maskingSize = (id.length - 1) / 2
        frontSize = backSize = maskingSize / 2
    }
    const frontList = id.split('').slice(0,frontSize)
    const maskingList = id.split('').slice(frontSize,id.length-frontSize-1).fill("*")
    const backList = id.split('').slice(id.length-frontSize-1, id.length)
    
    return console.log(frontList.concat(maskingList).concat(backList).join(""))
}

solution('hcmsjfb2e5')
solution('k9t0nio7e')
solution('da2ssb3v')
solution('k0r6k9')