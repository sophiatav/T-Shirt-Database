let main

document.addEventListener("DOMContentLoaded", () => {
//There must be a div with the class name main in your index.html file. All components will be appended to this div
  main = document.querySelector(".main")
  
  //Replace the url in the fetch with the url your google docs csv url
fetch("https://docs.google.com/spreadsheets/d/e/2PACX-1vRn4GwlI6g7KIKA0e6BQXfuRZC2zj-IXPM5O7hmgg0SdIxSSHTXwQa3VtM3_K15_-WxChWd0sLCxSeQ/pub?gid=0&single=true&output=csv")
    .then(response => response.text())
    .then(csvData => {
      Papa.parse(csvData, {
        header: true, // Treat the first row as column headers
        skipEmptyLines: true, // Ignore empty rows
        complete: function(results) {
          results.data.forEach(row => {
            displayComponent(row);
          });
        }
      });
    });
});

function displayComponent(row){
  console.log(row)
  //your code here
  let component = document.createElement("div")
  component.classList.add("shirt-component")
  
  let name = document.createElement("p")
  name.textContent = row.name
  name.classList.add("name")

  let image = document.createElement("img")
  image.src = "images/" + row.image
  image.classList.add("shirt-image")

  let color = document.createElement("p")
  color.textContent = row.color
  color.classList.add("color")

  let size = document.createElement("p")
  size.textContent = row.size
  size.classList.add("size")

  component.addEventListener("click", function(){
    window.open(row.page)
  })

  component.append(name)
  main.append(component)
  
  component.append(image)
  component.append(color)
  component.append(size)






}
