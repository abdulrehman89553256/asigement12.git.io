 alert("WELL COME ")
function print() {
    var no = document.getElementById("txtno").value

                


    console.log(document.getElementById('pResult'))
for (i = 1; i <= no; i += 1) {
        console.log(i)

        document.getElementById('pResult').innerHTML = document.getElementById('pResult').innerHTML + "<br>" + i
    }
}
function pTable() { 
    var no = document.getElementById("txtt").value

    for (i = 1; i <= 10; i++) {

        document.getElementById('pResult').innerHTML = document.getElementById('pResult').innerHTML + no + " X " + i + " = " + no * i + "<br>"
    }
}
function evenodd() {
    var no = document.getElementById("txtNO").value
    var rem = 0
    rem = no % 2
    //alert(rem)
    if (rem == 1) {
        alert("Number is odd")
    }
    else {
        alert("Number is even")

    }

}
function submit() {
    var studentName
    studentName = document.getElementById("txtName").value
    var fatherName = document.getElementById("txtfName").value
    alert("Student Name is" + studentName + "and father Name is" + fatherName)
}

function pcom() {
    var no = document.getElementById("txtp").value
    var rem = 1
    for (i = 2; i < no; i++) {
        console.log(i)
        rem = no % i
        if (rem == 0) { break }
    }
    if (rem == 0) {
        alert("Number Is Composite")
    }
    else {
        alert("Number Is Prime")
    }


}


function pchar() {
    var cName = document.getElementById("txtcountry").value
    //console.log(cName.length)
    // console.log(cName.charAt(3))
    //console.log(cName.slice(3))
    alert(cName.length)
    for (i = 0; i < cName.length; i++) {
        console.log(cName.slice(0, i + 1))
    }
}
var studentname=[]
studentname.push("asif")




console.log(studentname)
 studentname.push( "arsalan" ,"abdulrehman")
 console.log(studentname)
 studentname.unshift("abdulrehman")
 console.log(studentname)
 console.log(studentname.length)
 console.log(studentname[2])
 console.log(studentname[3])
function decimel(){
var rno = document.getElementById("txtttno").value
var result = 0

for (i = 0; i < rno.length; i++) {
    var cd = rno.charAt(i)
    var nd = rno.charAt(i + 1)

    if (cd == "M") {
        result += 1000
    }

    else if (cd == "D") {
        result += 500
    }

    else if (cd == "c") {
        if (nd == "D") {
            result += 400
            i++
        }
        else if (nd == "M") {
            result += 900
            i++
        }
        else {
            result += 100
        }
    }

    else if (cd == "L") {
        result += 50
    }
    else if (cd == "X") {
        if (nd == "L") {
            result += 40
            i++
        }
        else if (nd == "C") {
            result += 90
            i++
        }
        else {
            result += 10
        }
    }
    else if (cd == "I") {
        if (nd == "V"){
            result += 4
            i++
        }
        else if (nd == "X") {
            result += 9
            i++
        }
        else {
            result += 1
        }
    }
    else if (cd == "V") {
        result +=5
    }
}
var res = document.getElementById("result")
res.ilnnerHTML = result


}




    