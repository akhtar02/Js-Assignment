
// function Student(name,roll){
//     this.name = name;
//     this.roll = roll;
// }

// Student.prototype.school = "saylani"


// var student1 = new Student("ghous",123)

// console.log(student1)






// var student1 = new Student("ghous",123);
// var student2 = new Student("basit",123);

// console.log(student1)
// console.log(student2)



// var student1 = {
//     name: "ghous",
//     roll: 123
// }




// var student2 = {
//     name: "basit",
//     roll: 321,
//     school: 'saylani'
// }

// for(var key in student2){
//     console.log(key,student2[key])
// }


// var student2 = {
//     name: "basit",
//     roll: 321,
//     school: 'saylani'
// }

// console.log(student2)

// console.log("constructor" in student2)

// console.log(student2.hasOwnProperty("constructor"))



function saveData() {
    var name = document.getElementById("name");
    var roll = document.getElementById("roll");

    var key = firebase.database().ref('student').push().key
    var student = {
        name: name.value,
        roll: roll.value,
        key: key
    }

    firebase.database().ref('student/' + key).set(student)
}


// function getFirebaseData(){
//    firebase.database().ref('student').on('child_added',function(data){
//        console.log(data.val())
//    })
// }


// getFirebaseData()



// function removeFirebaseData(){
//     firebase.database().ref('student').remove()
// }

// removeFirebaseData()



// function editFirebaseData(){
//     firebase.database().ref('student/-MEJHRGtxXzUJn5op-FN').set({
//         key: '-MEJHRGtxXzUJn5op-FN',
//         name: "basit",
//         roll: '123'
//     })
// }

// editFirebaseData()




