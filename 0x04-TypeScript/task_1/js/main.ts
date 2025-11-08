interface Teacher{
    firstName: string;
    lastname: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
}

const teacher3: Teacher = {
    firstName: "John",
    lastname: "Doe",
    fullTimeEmployee: false,
    location: "London",
    contract: false
};

console.log(teacher3);
