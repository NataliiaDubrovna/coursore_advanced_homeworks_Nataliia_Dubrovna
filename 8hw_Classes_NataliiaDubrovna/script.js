class Student {
    constructor(university ,course ,fullName, marks = [5, 4, 4, 5] , isActive = true){
        this.university = university,
        this.course = course,
        this.fullName = fullName,
        this.marks = marks,
        this.isActive = isActive
    }
    get getInfo() {
        return `Студент ${this.course}-го курсу ${this.university}, ${this.fullName}`
    }
    get getMarks(){
        return this.marks;
    }
    set setMarks(value){
        if(this.isActive){ 
            this.marks.push(value);
        }
        return this.marks; 
    }
    get getAverageMark(){
        if(!this.isActive){ 
            return this.marks;
        }
        else{
            return (this.marks.reduce((sum, el) => sum += el, 0)/this.marks.length);
        }
    }
    dismiss(){
        this.isActive = false;
        this.marksForRecover = [...this.marks]
        this.marks = null;
    }
    recover(){
        this.isActive = true;   
        this.marks = this.marksForRecover;
    }
}

// 1.У стдентів повинні бути наступні властивості: university, course, fullName, вони передаються при створенні студента(в конструктор).
const nataliia = new Student('LNU', 6 ,'Nataliia Dubrovna');
console.log("new Student('LNU', 6 ,'Nataliia Dubrovna') ==>", nataliia);

// 2.Створіть метод this.getInfo() -> "Студент 1го курсу Вищої Школи Психотерапії м.Одеса, Остап Родоманський Бендер", метод повертає сукупну інформацію про курс, учбовий заклад та імені студента.
console.log('nataliia.getInfo ==>',nataliia.getInfo)

// 3.Створіть геттер оцінок this.marks, який повертає масив оцінок студента [5, 4, 4, 5]
console.log('nataliia.getMarks ==>', nataliia.getMarks)

// 4.Створіть сеттер оцінок this.marks = 5, який дозволяє поставити оцінку студенту. Після того, як оцінка поставлена, геттер повинен повернути масив this.marks -> [5, 4, 4, 5, 5]
nataliia.setMarks = 1;
console.log('nataliia.setMarks = 1; nataliia.getMarks ==> ', nataliia.getMarks)

// 5.Створіть метод отримання середнього балу this.getAverageMark() -> 4.6
console.log('nataliia.getAverageMark', nataliia.getAverageMark)

// 6.Створіть метод this.dismiss, який "виключить" студента. Після виклику цього методу – ставити студенту оцінки та отримувати їх більше не можна. (Ніяких помилок, просто повертається завжди null замість масиву оцінок)
nataliia.dismiss();
console.log('nataliia.dismiss() ==> ',nataliia);


nataliia.setMarks = 1; //dont work
console.log('nataliia.setMarks = 1; nataliia.getMarks ==>',nataliia.getMarks) //dont work, return null
console.log('nataliia.getAverageMark ==>',nataliia.getAverageMark)// return null
console.log('nataliia.marks ==>',nataliia.marks)


// 7.Створіть метод this.recover, який дозволить поновити студента
nataliia.recover();
console.log('nataliia.recover() ==>',nataliia);


console.log('/------------- Advanced ------------/')

class BudgetStudent extends Student{
    constructor(university ,course ,fullName, isBudget, marks = [5, 4, 4, 5] , isActive = true){
        super(university ,course ,fullName, marks = [5, 4, 4, 5] , isActive = true)
        this.isBugget = isBudget,
        setInterval(this.getScholarship, 3000);
    }
    getScholarship = () => {
        if(this.isActive && (this.getAverageMark >= 4)){
            console.log('Ви отримали 1400 грн. стипендії!');  
        }else if(!this.isActive || this.getAverageMark < 4){
            console.log("Ви не отримали стипендію")
        }
    }
}

const bug = new BudgetStudent('LNU', 6 ,'Nataliia Dubrovna', true);
console.log("new BudgetStudent('LNU', 6 ,'Nataliia Dubrovna', true) ==>",bug);


