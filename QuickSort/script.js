var container = document.getElementById("array");

//Make the array blocks
function makeArrayBlocks() {
  for(var i = 0; i < 20; i++) {
    //Get a value between 1 and 100 (inclusive)
    var value = Math.ceil(Math.random() * 100);

    //Make a div element for each array block
    var array_element = document.createElement("div");

    //Adding the class 'block' to div
    array_element.classList.add("block");

    //Adding height + transform style to div
    array_element.style.height = `${value * 3}px`;
    array_element.style.transform = `translate(${i*30}px)`;

    //Create label element that displays a block's size
    var array_element_label = document.createElement("label");
    array_element_label.classList.add("block_id");
    array_element_label.innerText = value;

    //Add the created elements to html file.
    array_element.appendChild(array_element_label);
    container.appendChild(array_element);
  }
}


//Make the indices for each block
var count_container = document.getElementById("count");
function makeIdx(){
    for(var i = 0; i < 20; i++){
        //Make another array element div again for each index
        var array_element2 = document.createElement("div");

        //Add the class 'block2' to div
        array_element2.classList.add("block2");

        //Add height + transform style to div
        array_element2.style.height = `${20}px`;
        array_element2.style.transform = `translate(${i*30}px)`;

        //Add the indices with a label element
        var array_element_label2 = document.createElement("label");
        array_element_label2.classList.add("block_id2");
        array_element_label2.innerText = i;

        //Add the created elements to html file
        array_element2.appendChild(array_element_label2);
        count_container.appendChild(array_element2);
    }
}

// Call to generate the array
makeArrayBlocks();

// Call to generate the indices
makeIdx();