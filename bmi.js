function result(){
    weight = parseFloat(document.getElementById("inp").value);
    height = parseFloat(document.getElementById('inp2').value);
    output = (weight + height);
    alert(output + " KG");
}