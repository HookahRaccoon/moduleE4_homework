const person = {

    city1: "Moscow",
    city2: "Kanash",
    city3: "Kugesi",
     
    }
     
    
    const student = Object.create(person);
    
    student.ownCity1 = "Piter";
    student.ownCity2 = "Cheboksary";
    student.ownCity3 = "Kazan";

    for (let key in student) {

        if (student.hasOwnProperty(key)) {
    
            console.log(key, student[key]);
        }   
    }