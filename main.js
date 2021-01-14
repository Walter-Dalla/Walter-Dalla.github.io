const heights = [
    157,
    160,
    164,
    174,
    177,
    180,
    181,
    182,
    188,
    185,
]

rulers = [
    150,
    160,
    170,
    180,
    190
]
let counter = 0


function renderRouler(){
    rulers.forEach(rule => {
        const span = document.createElement('label')
        span.textContent = `${rule}cm-`
    
        span.style = `margin-bottom: ${rule*3-10}px;`
        span.className = 'rouler-cm'
        document.querySelector('.ruler').appendChild(span)
    })
    
}

async function renderCounter(){
    const span = document.createElement('span')
    span.textContent = `Contador = ${counter++}`
    const div = document.createElement('div')
    div.className = 'col-1 img-div ruler'
    div.style="padding: 1px;"
    div.appendChild(span)

    document.querySelector('.row').appendChild(div)
}

function renderImg(i){
    const img = document.createElement('img')
    img.src = `fotos/${heights[i]}.jpeg`
    
    img.style.width = "100%";
    img.style.height = `${heights[i]*3}px`;
    
    const div = document.createElement('div')
    div.className = 'col-1 img-div'
    div.style="padding: 1px;"
    div.appendChild(img)
    document.querySelector('.row').appendChild(div)
}

function deliteDivRender(){
    const myNode = document.querySelector(".row");
    myNode.innerHTML = '';
}

async function renderFotosArr(arr){
    deliteDivRender()
    
    renderCounter()
    renderRouler()
    for(i = 0; i < arr.length; i++){
        renderImg(i)
    }
}


var isSorted = function(arr){
    for(var i = 1; i < arr.length; i++){
        if (arr[i-1] > arr[i]) {
            return false;
        }
    }
    return true;
};

function shuffle(arr){
    var count = arr.length, temp, index;
    
    while(count > 0){
        index = Math.floor(Math.random() * count);
        count--;
        
        temp = arr[count];
        arr[count] = arr[index];
        arr[index] = temp;
    }
    
    return arr;
}

async function bogosort(arr){
    var sorted = false;
    while(!sorted){
        await sleep(1000)
        arr = shuffle(arr);
        
        renderFotosArr(arr)
        sorted = isSorted(arr);
    }
    return arr;
}

function sleep(ms){
    const promise = new Promise(resolve => {
        setTimeout(() => {
            resolve(100)
        }, ms)
    })
    return promise
}

//renderFotosArr(heights)
bogosort(heights)