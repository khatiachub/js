// task-1
let  user = {
    firstname: 'giorgi',
    lastname: 'smith',
    age: 25,
    studentstatus: 'active'
  };
   console.log(user.studentstatus);   

// task-2
let arrayName=[11,5,25,17,'lile','elene'];
for(let i=0; i<arrayName.length; i++){
    console.log(arrayName[i]);
}
let i=0;
while(i<arrayName.length){
    console.log(arrayName[i]);
    i++
}


// task-3
let numbers = [5, 6, 10, 25, 3, 7, 4, 100, 28, 36, 89];
for(let i=0; i<numbers.length; i++){
    if(numbers[i]>5){
         console.log(numbers[i]);
    }
}

//task4
let user = {
	name: 'giorgi',
	age:  20,
	studentstatus: 'active'
}
if(user.age<18&&user.studentstatus==='active'){
    console.log('hello');
}else if(user.name==='giorgi'){
    console.log('hello giorgi');
}else if(user.age<25||user.studentstatus==='active'){
    console.log('hello world');
}else{
    console.log('error');
}

//task5
let array = ['watermelon', 'pear', 10, 45, 50, 'apple', 'ananas'] ;
for(let item of array){
    if(typeof item ==='string'){
        console.log(item);
    }
}


//task6
let array = [ [2, -3, 5, 10], [25, -24, -11, 100] , [-6, -7, 10]];
for(let i=0; i<array.length; i++){
    for(let i=0; i<array[0].length; i++){
        if(array[0][i]>0){
            console.log(array[0][i]);
        }
    }
    for(let i=0; i<array[1].length; i++){
        if(array[1][i]>0){
            console.log(array[1][i]);
        }
    }
    for(i=0; i<array[2].length; i++){
        if(array[2][i]>0){
            console.log(array[2][i]);
        }
    }
    
}

//task-7
let array = [32, 10, 'hello', null, 'hello2', 50 ]
for(let i=0; i<array.length; i++){
    if(array[i]%5===0 && typeof array[i]==="number"){
        console.log(array[i]);
    }
}