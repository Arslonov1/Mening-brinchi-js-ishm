var ARR = []

function addTask() {

    var TaskName = document.getElementById('TaskName').value
    var ball = document.getElementById('ball').value

    ARR.push({

        TaskName: TaskName,
        ball: ball
    })

    console.log(ARR);
    chizish()
}

function chizish() {

    var ch = ''
    for (var i of ARR) {

        ch = ch + `
            
            <h4> ${i.TaskName} ${i.ball}<h4>
            
            `

    }

    document.getElementById('display').innerHTML = ch
    document.getElementById('TaskName').value = ''
    document.getElementById('ball').value = ''



}

