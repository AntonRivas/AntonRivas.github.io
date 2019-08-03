
document.addEventListener('DOMContentLoaded', () => {

  //document.querySelector('.top-container').onclick = () => {
    //window.location.href = "index.html";
  //}

//creating the sidebar
  document.querySelector('.burger').onclick = () => {
    console.log("nearly opened!");
    document.querySelector("#mySidebar").style.width = "300px";
    document.querySelector('.super').style.marginRight = "300px";
    console.log("opened!");
  }

  document.querySelector('.close-btn').onclick = () => {
    document.querySelector("#mySidebar").style.width = "0";
    document.querySelector(".super").style.marginRight= "0";
        console.log("closed!");
  }

//creating the collapsible parts
  var coll = document.getElementsByClassName("collapsible");
  var i;

  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.maxHeight){
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  }
})
