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
        if(this.isActive){ //if  isActive  true, we add mark
            this.marks.push(value);
        }
        return this.marks; //if  isActive false , just return null
    }
    get getAverageMark(){
        if(!this.isActive){ ///if student is dismissed  , return null
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
console.log(nataliia);

// 2.Створіть метод this.getInfo() -> "Студент 1го курсу Вищої Школи Психотерапії м.Одеса, Остап Родоманський Бендер", метод повертає сукупну інформацію про курс, учбовий заклад та імені студента.
console.log(nataliia.getInfo)


// 3.Створіть геттер оцінок this.marks, який повертає масив оцінок студента [5, 4, 4, 5]
console.log(nataliia.getMarks)

// 4.Створіть сеттер оцінок this.marks = 5, який дозволяє поставити оцінку студенту. Після того, як оцінка поставлена, геттер повинен повернути масив this.marks -> [5, 4, 4, 5, 5]
nataliia.setMarks = 1;
console.log(nataliia.getMarks)


// 5.Створіть метод отримання середнього балу this.getAverageMark() -> 4.6
console.log(nataliia.getAverageMark)


// 6.Створіть метод this.dismiss, який "виключить" студента. Після виклику цього методу – ставити студенту оцінки та отримувати їх більше не можна. (Ніяких помилок, просто повертається завжди null замість масиву оцінок)
nataliia.dismiss();
console.log(nataliia);

nataliia.setMarks = 1; //dont work
console.log(nataliia.getMarks) //dont work, return null

console.log(nataliia.getAverageMark)// return null



// 7.Створіть метод this.recover, який дозволить поновити студента
nataliia.recover();
console.log(nataliia);






