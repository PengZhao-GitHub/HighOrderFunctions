const companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2005 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// forEach
// filter
// map
// sort
// reduce

// forEach
// ********************************************
console.log("Use for to loop the elements in an Array");
for (let i = 0; i < companies.length; i++) {
    console.log(companies[i]);
}

console.log("Use forEach to loop the elements in an Array");
companies.forEach(function (company, index, companies) {
    console.log("Each element", company);
    console.log("Index of each element", index);
    console.log("Full Array", companies.length);
});


// filter
let canDrink = [];
for (let i = 0; i < ages.length; i++) {
    if (ages[i] >= 20) {
        canDrink.push(ages[i]);
    }
}
console.log(canDrink);

const canDrink2 = ages.filter(function (age, index, ages) {
    if (age >= 20) {
        return true;
    }
    console.log("Each element", age);
    console.log("index of each element", index);
    console.log("Full array", ages.length);
});
console.log(canDrink2);

const canDrink3 = ages.filter(age => age >= 20);
console.log(canDrink3);

// filter retail companies

retailCompanies = companies.filter(function (company) {
    if (company.category === 'Retail') {
        return true;
    }
});
console.log(retailCompanies);


retailCompanies = companies.filter(company => company.category === 'Retail');
console.log("short way", retailCompanies);

// Get 80's companies
const eithtiesCompanies = companies.filter(company => (company.start >= 1980 && company.end < 1990));
console.log(eithtiesCompanies);

const tenYearsCompanies = companies.filter(company => (company.end - company.start) >= 10);
console.log(tenYearsCompanies);


// map
// **********************************

// create array of company names
const companyNames = companies.map(function (company, index, companies) {
    console.log("element", company);
    console.log("index", index);
    console.log("Full Array", companies.length);
    return company.name;

});

console.log(companyNames);

testMap = companies.map(company => `${company.name} [${company.start} - ${company.end}]`);

console.log(testMap);

const agesSquare = ages.map(age => Math.sqrt(age));
console.log(agesSquare);

ageMap = ages
    .map(age => Math.sqrt(age))
    .map(age => age * 2);

console.log(ageMap);


// Sort
// *****************************

const sortCompanies = companies.sort(function(c1, c2){
    if(c1.start > c2.start) {
        return 1;
    } else {
        return -1;
    }

});

console.log(sortCompanies);

const sortCompanies2 = companies.sort((a, b) => (a.sart > b.start) ? 1 : -1);

console.log(sortCompanies2);

const sortAges = ages.sort((a,b) => b - a);
console.log(sortAges);

// Reduce
// ******************************

let ageSum = 0;
for(let i=0; i < ages.length; i++) {
    ageSum += ages[i];
}
console.log(ageSum);

const ageSum2 = ages.reduce(function(total, age){
    console.log("total", total);
    console.log("each element", age);
    return total + age;
}, 0); 

console.log(ageSum2);

const ageSum3 = ages.reduce(((total, age) => total + age), 0);
console.log(ageSum3);

// total years for all companies

const totalYears = companies.reduce((total, company) => total + (company.end - company.start), 100); //100 is the intial value for the total
console.log(totalYears);



// Combine Methods
// ++++++++++++++++++++++

const combined = ages
    .map(age => age *2)
    .filter(age => age >= 40)
    .sort((a,b) => a - b)
    .reduce((total, a) => total + a, 0);


console.log(combined); 

ages.forEach(a => a = a * 100); //Do not change the data
console.log(ages);

companies.forEach(company => company.end = company.end * 100); //change object data
console.log(companies);