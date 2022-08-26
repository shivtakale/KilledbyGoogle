let cl = console.log;


let data = document.getElementById('googleCard')
let searchBox = document.getElementById('search')
let selectType = document.getElementById('all')
let count = Array.from(document.querySelectorAll('.count'))


// countDrop()

// let typeArr = []
// database.forEach(Object => {
// if (Object.type === "hardware"){
// typeArr.push(Object)
// }
// })
// cl(typeArr)

// let typeArr1 = []
// database.forEach(Object => {
// if (Object.type === "app"){
// typeArr1.push(Object)
// }
// })
// cl(typeArr1)

// let typeArr2 = []
// database.forEach(Object => {
// if (Object.type === "service"){
// typeArr2.push(Object)
// }
// })
// cl(typeArr2)

// let TotalType = [typeArr.length + typeArr1.length + typeArr2.length]
// cl(typeArr.length + typeArr1.length + typeArr2.length);
// cl(TotalType);



function templating(arr){
    let result = '';
    arr.forEach(ele => {
         result += `
         <div class="col-md-3 mb-5">
         <div class="card">
             <div class="card-body">
                 <div class="h-card">
                     <h2 class="card-h1 ${hardColor(ele.type)}">${ele.type}</h2>
                 </div>
                     <h2 class="card-h2 mb-5 mt-4">${ele.name}</h2>
                     <h2 class="date">${ele.dateOpen} to ${ele.dateClose}</h2>
                     <p class="infor">${ele.description}</p>
                     <a href="${ele.link}"target="_blank"><button class="btn btn-info" value="detail" type="detail">Details</button></a>
             </div>
         </div>
     </div>`
    })
    data.innerHTML = result;
}
templating(database)



function onkeyup(e){
    let searchCard = e.target.value;
    let filterDb = database.filter((db) => db.name.toLocaleLowerCase().includes(searchCard))
    templating(filterDb)
    cl(filterDb,"triger")
}

function hardColor(color){
    if(color == 'hardware'){
        return 'blue'
    }else if(color == 'app'){
        return 'orange'
    }else if(color == 'service'){
        return 'green'
    }
}

// function onChangeType(item){
//    let selectItem = item.target.value;
// //    let selectType = database.filter(e => e.type === selectItem)
// //    templating(selectType);
// if(selectItem !== 'type'){
//     let selectType = database.filter(e => e.type ==== Selection)
//     templating(selectType)
// }
// }

//callback function of change event for dropdown
function onchange(Event){
    let selecttypecontrol= Event.target.value
    //   console.log(Event.target)
      if(selecttypecontrol !== 'type') {
        let name = database.filter(a => a.type === selecttypecontrol)
        templating(name)
      }else{
        templating(database)
      }     
}




searchBox.addEventListener("keyup",onkeyup)
selectType.addEventListener('change',onchange)