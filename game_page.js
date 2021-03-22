function send(){
    no1 = document.getElementById("no1").value;
    no2 = document.getElementById("no2").value;
    corrans = parseInt(no1) * parseInt(no2);
    console.log(corrans);
    row = "<h4>"+no1+" X "+no2+"</h4>"+"<br>Answer: <input type='text' id='answerbox'>"+"<br><br><button class='btn btn-info' onclick='check()'>Check</button>"
    document.getElementById("output").innerHTML = row;
    document.getElementById("no1").value = "";
    document.getElementById("no2").value = "";
}