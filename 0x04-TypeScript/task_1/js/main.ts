interface Teacher {
    fisrtName: string,
    lastName: string,
    fullTimeEmployee: boolean,
    yearOfExperience?: number,
    location: string,
    contract?: boolean
}

const techer3: Teacher ={
    fisrtName: "John",
    fullTimeEmployee:false,
    lastName: "Doe",
    location: "London",
    contract: false

}

console.log(techer3);
