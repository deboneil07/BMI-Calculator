const reset_button = document.getElementById("reset");

function result() {
  weight = parseFloat(document.getElementById("inp").value);
  height = parseFloat(document.getElementById("inp2").value);
  

  if (weight && height) {
    answer = weight / (height * height);
    document.getElementById("inp3").value = answer.toFixed(2) + " BMI";
    final_answer = answer.toFixed(2);

    const result_box = document.getElementById("card");
    const result_button = document.getElementById("inp_click");
    result_box.style.backgroundColor = "#EF0107";
    result_box.style.boxShadow = "none";
    result_button.style.color = "#EF0107";
    result_button.style.borderColor = "#EF0107";
  } else {
    if (weight === 0 || height === 0) {
      document.getElementById("inp3").value = "Error.";
    }

    document.getElementById("inp3").value = "Error.";
  }


}

function reset(){
    document.getElementById("inp").value= "";
    document.getElementById("inp2").value = "";
}
