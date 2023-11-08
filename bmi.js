
function result(){
    weight = parseFloat(document.getElementById("inp").value);
    height = parseFloat(document.getElementById('inp2').value);
    answer = weight / (height * height);
    document.getElementById("inp3").value = answer.toFixed(2) + " BMI";
    final_answer = answer.toFixed(2);
    if (final_answer < 20){
         const result_box = document.getElementById("card");
         result_box.style.backgroundColor = "#EF0107";
         result_box.style.boxShadow = "none"
         

    }



    
}