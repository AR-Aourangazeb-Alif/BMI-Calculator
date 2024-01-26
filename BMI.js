// Module-16 task one
// const orangePricePerKG = 200;
// const applePricePerKG = 300;

// let needOrangeKG = Number(prompt('How Much Orange I need:'));
// let needAppleKG = Number(prompt('How Much Apple I need:'));

// let myMoney = Number(prompt('How Much Money DO You Have:'));

// let netPrice = needOrangeKG*orangePricePerKG + needAppleKG*applePricePerKG;

// let theChange = myMoney - netPrice;

// console.log(theChange);



// Module-16 task two 
// let mathematics = Number(prompt('Mathematics Score'));
// let biology = Number(prompt('Biology Score'));
// let chemistry = Number(prompt('Chemistry Score'));
// let physics = Number(prompt('Physics Score'));
// let bangla = Number(prompt('Bangla Score'));

// let averageScore = (mathematics + biology + chemistry + physics + bangla)/5;
// console.log(averageScore);





// Module-16 task three 
// let givenNumber = Number(prompt('Give me a number and I will divide it with 9 and give you a reminder :)'));

// let reminder = givenNumber % 9;
// console.log(reminder);





// Module-16 task four 
// var a = isNaN('11');
// console.log(a);
// var a = isNaN(2-10);
// console.log(a);




// Module - 17 practice 
// const price = 2000;

// if(price >= 5000){
//     // 10% discount 
//     let discountedPrice = price*0.9
//     console.log(discountedPrice);
// }else if(price >= 2500 && price < 5000){
//     let discountedPrice = price*0.95
//     console.log(discountedPrice);
// }else{
//     console.log(price);
// }



// BMI Calculator 
const height = Number(prompt('Height(in meter):'));
const weight = Number(prompt('Weight(in KG):'));

const BMI = weight / (height**2);
console.log('Your BMI is: ' + BMI);

const minPerfectWeight = 18.5*(height**2);
const maxPerfectWeight = 25*(height**2);



if (BMI < 16){
    console.log('At risk of Severe Thinness');
    console.log('Healthy BMI range: 18.5 - 25');
    console.log(`Healthy weight for the height: ${minPerfectWeight} kg - ${maxPerfectWeight} kg`);
}
else if (BMI >= 16 && BMI < 17){
    console.log('At risk of Moderate Thinness');
    console.log('Healthy BMI range: 18.5 - 25');
    console.log(`Healthy weight for the height: ${minPerfectWeight} kg - ${maxPerfectWeight} kg`);
}
else if (BMI >= 17 && BMI < 18.5){
    console.log('At risk of Mild Thinness');
    console.log('Healthy BMI range: 18.5 - 25');
    console.log(`Healthy weight for the height: ${minPerfectWeight} kg - ${maxPerfectWeight} kg`);
}
else if (BMI >= 18.5 && BMI < 25){
    console.log('Your BMI is Normal');
}
else if (BMI >= 25 && BMI < 30){
    console.log('At risk of Overweight');
    console.log('Healthy BMI range: 18.5 - 25');
    console.log(`Healthy weight for the height: ${minPerfectWeight} kg - ${maxPerfectWeight} kg`);
}
else{
    console.log('At risk of Obesity');
    console.log('Healthy BMI range: 18.5 - 25');
    console.log(`Healthy weight for the height: ${minPerfectWeight} kg - ${maxPerfectWeight} kg`);
}