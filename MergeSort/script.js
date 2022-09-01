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


//Merge Sort merge function
async function merge(l, mid, r){
    document.getElementsByClassName("range")[0].innerText = `[Left: ${l}, Right: ${r}]`;

    var blocks = document.querySelectorAll(".block");
    
    var arrayLsize = mid - l + 1;
    var arrayRsize = r - mid;

    //Create left and right arrays
    var L = new Array(arrayLsize);
    var R = new Array(arrayRsize);

    //Fill arrays
    for(var i = 0; i < arrayLsize; i++){
        L[i] = Number(blocks[l + i].childNodes[0].innerHTML);
        // console.log(`L[i] at ${i} is: ${L[i]}`);
    }
    for(var j = 0; j < arrayRsize; j++){
        R[j] = Number(blocks[mid + 1 + j].childNodes[0].innerHTML);
        // console.log(`R[j] at ${j} is: ${R[j]}`);
    }

    //Merge the array L & R back into an array[l...r]
    //Initial index of 1st subarray
    var i = 0;
    //Initial index of 2nd subarray
    var j = 0;
    //Initial index of merged subarray
    var k = l;

    while(i < arrayLsize && j < arrayRsize){
        if(L[i] <= R[j]){
            blocks[k].childNodes[0].innerHTML = L[i];
            blocks[k].style.height = `${L[i]*3}px`;
            blocks[k].style.backgroundColor = "yellow";
            i++;

            // To wait for 700 milliseconds
            await new Promise((resolve) =>
                setTimeout(() => {
                    resolve();
                }, 700)
            );
        } else {
            blocks[k].childNodes[0].innerHTML = R[j];
            blocks[k].style.height = `${R[j]*3}px`;
            blocks[k].style.backgroundColor = "yellow";
            j++;

            // To wait for 700 milliseconds
            await new Promise((resolve) =>
                setTimeout(() => {
                    resolve();
                }, 700)
            );
        }
        k++;
    }

    //Copy any remaining elements in L array
    while(i < arrayLsize){
        blocks[k].childNodes[0].innerHTML = L[i];
        blocks[k].style.height = `${L[i]*3}px`;
        blocks[k].style.backgroundColor = "yellow";
        i++;
        k++;

        // To wait for 700 milliseconds
        await new Promise((resolve) =>
            setTimeout(() => {
                resolve();
            }, 700)
        );
    }

    //Copy any remaining elements in R array
    while(j < arrayRsize){
        blocks[k].childNodes[0].innerHTHL = R[j];
        blocks[k].style.height = `${R[j]*3}px`;
        blocks[k].style.backgroundColor = "yellow";
        j++;
        k++;

        // To wait for 700 milliseconds
        await new Promise((resolve) =>
            setTimeout(() => {
                resolve();
            }, 700)
        );
    }

    for(var k = l; k <= r; k++){
        blocks[k].style.backgroundColor = "pink";
    }
}

//Main Merge Sort function
async function mergeSort(l, r){
    if(l>=r) {
        return;
    }

    var mid = l + parseInt((r-l)/2);
    
    //Recursive call mergesort for left half and right half of an array
    await mergeSort(l, mid);
    await mergeSort(mid+1, r);

    //Merge the arrays
    await merge(l, mid, r);

    //Turn the merged array back to purple
    await backToPurple();
}

// Call to start Merge Sort
mergeSort(0, 19);

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