let price = document.getElementById('price');
let total = document.getElementById('total');
let taxis = document.getElementById('taxis');
let ads = document.getElementById('ads');
let discound = document.getElementById('discound');
let count = document.getElementById('count');
let category = document.getElementById('category');
let submit = document.getElementById('submit');

    // console.log(price)







function getTotal()
{
     if(price.value != ''){
        let reslt = (+price.value + +taxis.value + +ads.value) 
        - +discound.value;
        total.innerHTML = reslt;
        total.style.background = 'green';
     }else{
        total.innerHTML = '';
        total.style.background = 'rgb(114, 5, 87)';
     }

    }

    let datapro;

    if(localStorage.product != null){
        datapro = JSON.parse(localStorage.product)
    }else{
        datapro = [];
    }
        
 

submit.onclick = function(){
    let newpro = {
        title:title.value,
        price:price.value,
        taxis:taxis.value,
        ads:ads.value,
        discound:discound.value,
        total:total.innerHTML,
        count:count.value,
        category:category.value,

    }
    if (newpro.count > 1){
        for(let i = 0; i < newpro.count;i++){
            datapro.push(newpro);
        }
      }else{
        datapro.push(newpro);
    } 
    datapro.push(newpro)
    localStorage.setItem('product' , JSON.stringify(datapro) )
    clearData()
    showData()
   
}
function clearData(){
    title.value = '';
    price.value = '';
    taxis.value = '';
    ads.value = '';
    discound.value = '';
    total.innerHTML = '';
    count.value = '';
    category.value = '';

}
function showData()
{
        let table = '';
     for(let i = 0; i < datapro.length;i++){
        table += `
        <tr>     
            <td>${i}</td>
            <td>${datapro[i].title}</td>
            <td>${datapro[i].price}</td>
            <td>${datapro[i].taxis}</td>
            <td>${datapro[i].ads}</td>
            <td>${datapro[i].discound}</td>
            <td>${datapro[i].total}</td>
            <td>${datapro[i].category}</td>
            <td><button id="update">update</button></td>
            <td><button onclick="deleteData( ${i} )" id="delete">delete</button></td>
            
        </tr>
        `
     }
           
        
           
        
    
        
     
 
    document.getElementById('tbody').innerHTML = table;
    let btnDelete = document.getElementById('deleteALL');
    if(datapro.length > 0){
        btnDelete.innerHTML = `
        <button onclick="deleteAll()">delete All</button>
        `
    }else{
        btnDelete.innerHTML = '';
    }
}
 
     
   

showData()

function deleteData(i)
{
    datapro.splice(i,1);
    localStorage.product = JSON.stringify(datapro);
    showData()
}







