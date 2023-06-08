document.addEventListener("DOMContentLoaded", function(event) {
    const image = document.querySelector(".image");
    const boxes = document.querySelectorAll(".box");
    const resetButton = document.getElementById("resetButton");
  
    // Store the initial state of the first container
    const initialContainerHTML = document.querySelector(".container").innerHTML;

  // Adding event listeners to the draggable image
    image.addEventListener("dragstart", dragStart);
    image.addEventListener("dragend", dragEnd);

  // Adding event listeners to each box in the containers
    for (const box of boxes) {
      box.addEventListener("dragover", dragOver);
      box.addEventListener("dragenter", dragEnter);
      box.addEventListener("dragleave", dragLeave);
      box.addEventListener("drop", dragDrop);
    }
  
    //Adding an event listener to the reset button
    resetButton.addEventListener("click", resetContainers);
  
    // Function executed when drag starts on the image
    function dragStart(event) {
      event.target.classList.add("dragging");
    }
  
    //Function executed when drag ends on the image
    function dragEnd(event) {
      event.target.classList.remove("dragging");
    }
  
    //Function executed when dragging over a box
    function dragOver(event) {
      event.preventDefault();
    }
  
    //Function executed when dragging enters a box
    function dragEnter(event) {
      event.target.classList.add("dragover");
    }
  
    //Function executed when dragging leaves a box
    function dragLeave(event) {
      event.target.classList.remove("dragover");
    }

    //Function executed when dropping the image into a box
    function dragDrop(event) {
      event.target.classList.remove("dragover");
      event.target.appendChild(image);
    }
  
    function resetContainers() {
      // Clear the second container
      const secondContainer = document.querySelectorAll(".box:not(:first-child)");
      secondContainer.forEach((box) => {
        box.innerHTML = "";
      });
  
      // Reset the first container to its initial state
      document.querySelector(".container").innerHTML = initialContainerHTML;
    }
  });
  