
let n = 0
const colors = ["primary", "success", "info", "warning", "danger"]
function randomTagColor(){
    if (n === 5) n = 0
    return colors[n++]
}

export {
    randomTagColor
}