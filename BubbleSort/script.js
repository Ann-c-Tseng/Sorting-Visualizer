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


//Helper swap function for BubbleSort
async function swap(index1, index2){
    var blocks = document.querySelectorAll(".block");
    var temp = blocks[index1].childNodes[0].innerHTML;
    blocks[index1].childNodes[0].innerHTML = blocks[index2].childNodes[0].innerHTML;
    blocks[index1].style.height = `${blocks[index2].childNodes[0].innerHTML*3}px`;
    blocks[index1].style.backgroundColor = "yellow";
    // To wait for 700 milliseconds
    await new Promise((resolve) =>
        setTimeout(() => {
            resolve();
        }, 700)
    );

    blocks[index2].childNodes[0].innerHTML = temp; 
    blocks[index2].style.height = `${temp*3}px`;
    blocks[index2].style.backgroundColor = "pink";

    // To wait for 700 milliseconds
    await new Promise((resolve) =>
        setTimeout(() => {
            resolve();
        }, 700)
    );

    blocks[index1].style.backgroundColor = "purple";
    blocks[index2].style.backgroundColor = "purple";
}


//Main function of BubbleSort
async function bubbleSort(n){
    var blocks = document.querySelectorAll(".block");

    var i; 
    var j;

    for(i=0; i < n-1; i++){
        for(j=0; j < n-i-1; j++){
            if(Number(blocks[j].childNodes[0].innerHTML) > Number(blocks[j+1].childNodes[0].innerHTML)){
                document.getElementsByClassName("range")[0].innerText = `Element value floating to the right is: ${blocks[j].childNodes[0].innerHTML}`;
                await swap(j, j+1);
            }
        }
        blocks[j].style.backgroundColor = "green";
    }

    makePurpleAndComplete();
}

// Call to run Bubble Sort
bubbleSort(20);

//Function to make the sorted array purple and give completion message.
async function makePurpleAndComplete(){
    // To wait for 700 milliseconds
    await new Promise((resolve) =>
        setTimeout(() => {
            resolve();
        }, 700)
    );

    var blocks = document.querySelectorAll(".block");
    for(var k = 0; k <= 19; k++){
        blocks[k].style.backgroundColor = "purple";
    }

    document.getElementsByClassName("range")[0].innerText = `Bubble Sort is Now Complete`;
}