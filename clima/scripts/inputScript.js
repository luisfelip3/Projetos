const input = document.getElementById("input");

input.addEventListener("focus", function(){
  input.placeholder= "";

  input.addEventListener("blur", function(){
    if (input.value === ""){
      input.placeholder = "Digite o nome da cidade";
    }
  })
})