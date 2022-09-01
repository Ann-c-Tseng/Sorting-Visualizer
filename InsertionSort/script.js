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

// Main Insertion Sort Function
async function insertionSort(n){
    var blocks = document.querySelectorAll(".block");
    var key;
    var j;

    for(var i = 1; i < n; i++){
        key = blocks[i].childNodes[0].innerHTML;
        blocks[i].style.backgroundColor = "yellow";

        // To wait for 700 milliseconds
        await new Promise((resolve) =>
            setTimeout(() => {
                resolve();
            }, 700)
        );

        document.getElementsByClassName("range")[0].innerText = `Element selected is: ${key}`;
        blocks[i].style.backgroundColor = "purple";

        j = i - 1;

        //Move elements of arr[0...i-1] that are greater than or equal to key
        //to one position to the right of their prior spot to make room for the key.
        while(j >= 0 && Number(blocks[j].childNodes[0].innerHTML) >= Number(key)){

            blocks[j+1].childNodes[0].innerHTML = blocks[j].childNodes[0].innerHTML;
            blocks[j+1].style.height = `${blocks[j].childNodes[0].innerHTML*3}px`;
            j = j-1;

            // To wait for 700 milliseconds
            await new Promise((resolve) =>
                setTimeout(() => {
                    resolve();
                }, 700)
            );
        }

        // To wait for 700 milliseconds
        await new Promise((resolve) =>
            setTimeout(() => {
                resolve();
            }, 700)
        );

        blocks[j + 1].childNodes[0].innerHTML = key;
        blocks[j+1].style.height = `${key*3}px`;
        blocks[j+1].style.backgroundColor = "green";

        // To wait for 700 milliseconds
        await new Promise((resolve) =>
            setTimeout(() => {
                resolve();
            }, 700)
        );
        blocks[j+1].style.backgroundColor = "purple";
    }

    document.getElementsByClassName("range")[0].innerText = `Insertion Sort is Completed`;

}

// Call to Insertion Sort
insertionSort(20);

//Make sorted array all back to purple
//Make sorted array all back to purple
async function backToPurple(){
    // To wait for 1000 milliseconds
    await new Promise((resolve) =>
        setTimeout(() => {
            resolve();
        }, 1000)
    );

    var blocks = document.querySelectorAll(".block");
    for(var k = 0; k <= 19; k++){
        blocks[k].style.backgroundColor = "purple";
    }
}

backToPurple();