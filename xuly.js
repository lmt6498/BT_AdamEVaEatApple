function Apple(){
    this.weight = 10;

    this.decrease = function () {
        this.weight--;
    }
    this.isEmpty = function () {
        if (this.weight === 0) {
            return true;
        } else if (this.weight > 0) {
            return false;
        }
    }
    this.setApple = function (weight){
        this.weight += weight;
        Show();
    }
    this.getWeight = function () {
        return this.weight;
    }
}

var Human = function (name, gender, weight){
    this.name = name;
    this.gender = gender;
    this.weight = weight;

    this.isMale = function (){
        if (this.gender == "Male"){
            return true;
        }else if (this.gender == "Female"){
            return false;
        }
    }
    this.getGender = function (){
        return this.gender;
    }

    this.setGender = function (newGender){
        this.gender = newGender;
    }

    this.checkApple = function (Apple){
        if (Apple.isEmpty === false){
            console.log("Apple:" +Apple.weight);
        }else{
            console.log("Hết táo rồi")
        }
    }

    this.eat = function (Apple){
        if (Apple.isEmpty() === false){
            Apple.decrease();
            this.weight++;
            console.log(this.name+ " vừa tăng lên "+this.weight+"kg")
            if (this.weight == 100){
                console.log(this.name +" nói: Tao béo lắm rồi đừng bắt tao ăn thêm nữa!")
            }
            if (this.weight == 110){
                console.log(this.name +" nói: Tao cầu xin mày, ăn thêm 2 quả nữa tao sẽ chết")
            }
            if (this.weight == 112){
                alert("Nhân vật của bạn đã chết vì ăn quá nhiều!")
            }
        }else{
            alert ("Hết táo rồi!");
        }
        Show();
    }

    this.say = function (){
        var speak = prompt();
        console.log(this.name + " nói: " +speak);
        Show();
    }

    this.getName = function () {
        return this.name
    }

    this.setName = function (String) {
        this.name = String;

    }

    this.getWeight = function () {
        return this.weight
    }

    this.setWeight = function (Int) {
        this.weight = Int;
    }

}
var Apple1 = new Apple();
var Adam = new Human("Adam", "Male", 80);

function Show (){
    let name = Adam.getName();
    let gender = Adam.getGender();
    let weight = Adam.getWeight();
    let appleWeight = Apple1.getWeight();

    document.getElementById("name").innerHTML = "Tên: "+name;
    document.getElementById("gender").innerHTML = "Giới tính: "+gender;
    document.getElementById("weight").innerHTML = "Cân nặng: "+weight;
    document.getElementById("appleWeight").innerHTML = "Khối lượng táo còn: " +appleWeight;


        }


Show();