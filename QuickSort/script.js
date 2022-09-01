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


//Quick Sort partition function
async function partition(l, r, delay=700){
    var blocks = document.querySelectorAll(".block");

    //Get and store pivot element (right-most of the range)
    var pivot = Number(blocks[r].childNodes[0].innerHTML);
    var i = l-1; //initial value of -1 as l = 0.

    blocks[r].style.backgroundColor = "red";
    document.getElementsByClassName("range")[0].innerText = `[Left: ${l}, Right: ${r}]`;

    //From the left to the second-to-last element in the array, do the following:
    //If we find a block with value < pivot, swap it with the blocks[i] value. Values < pivot will be orange.
    //Otherwise that block is >= pivot and so we do not move it. Values >= pivot will be pink.
    //After going through from blocks l to r-1, swap pivot (at r) with i.
    //Return i as the new pivot (green block).
    for(var j = l; j <= r-1; j++){
        //Block to be compared is set to yellow.
        blocks[j].style.backgroundColor = "yellow";

        // To wait for 700 milliseconds
        await new Promise((resolve) =>
        setTimeout(() => {
            resolve();
        }, delay)
        );

        var value = Number(blocks[j].childNodes[0].innerHTML);

        if(value < pivot){
            i++;
            var temp1 = blocks[i].style.height; //get px height of block that's less than the pivot block.
            var temp2 = blocks[i].childNodes[0].innerText; //get value of block that's less than the pivot block.

            blocks[i].style.height = blocks[j].style.height;
            blocks[j].style.height = temp1;

            blocks[i].childNodes[0].innerText = blocks[j].childNodes[0].innerText;
            blocks[j].childNodes[0].innerText = temp2;
            blocks[i].style.backgroundColor = "orange";

            //To wait for 700 milliseconds
            await new Promise((resolve) =>
                setTimeout(() => {
                    resolve();
                }, delay)
            );
        } else {
            blocks[j].style.backgroundColor = "pink";
        }
    }

    //Now we swap the ith with pivot element
    i++;
    var temp1 = blocks[i].style.height;
    var temp2 = blocks[i].childNodes[0].innerText;

    blocks[i].style.height = blocks[r].style.height;
    blocks[r].style.height = temp1;

    blocks[i].childNodes[0].innerText = blocks[r].childNodes[0].innerText;
    blocks[r].childNodes[0].innerText = temp2;

    blocks[r].style.backgroundColor = "pink";
    blocks[i].style.backgroundColor = "green";

    //To wait 2100 milliseconds
    await new Promise((resolve) =>
        setTimeout(() => {
            resolve();
        }, delay * 3)
    );

    document.getElementsByClassName("range")[0].innerText = "";
    for(var k = 0; k < 20; k++){
        blocks[k].style.backgroundColor = "purple";
    }
    return i; //New pivot
}

//Main Quick Sort function
async function quickSort(l, r, delay=100) {
    if(l < r) {
        //Store pivot gained from partitioning
        var pivot_index = await partition(l, r);

        //Recursive call quick sort for left partition
        await quickSort(l, pivot_index-1);
        //Recursive call quick sort for right partition
        await quickSort(pivot_index + 1, r);
    }
}

// Call to start Quick Sort
quickSort(0, 19);