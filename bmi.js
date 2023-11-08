
function result(){
    weight = parseFloat(document.getElementById("inp").value);
    height = parseFloat(document.getElementById('inp2').value);
    answer = weight / (height * height);
    document.getElementById("inp3").value = answer.toFixed(2) + " BMI";

    

    
}