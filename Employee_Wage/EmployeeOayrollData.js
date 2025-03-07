// UC 14
class EmployeePayrollData {
    // property
    id;
    name;
    salary;
    gender;
    startDate;

    // constructor
    constructor(...params) {
        this.id = params[0];
        this.name = params[1];
        this.salary = params[2];
        this.gender = params[3];
        this.startDate = params[4];
    }

    // getter and setter method
    get name() { return this._name; }
    set name(name) 
    { 
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{3,}$');
        if(nameRegex.test(name))
            this._name = name;
        else throw 'Name is Incorrect!';
    }

    get id() { return this._id; }
    set id(id) 
    { 
        if (id <= 0) {
            throw new Error("ID should be a positive number");
        }
        this._id = id;
    }

    get salary() { return this._salary; }
    set salary(salary) 
    { 
        if (salary <= 0) {
            throw new Error("Salary should be a positive number");
        }
        this._salary = salary;
    }

    get gender() { return this.gender; }
    set gender(gender)
    {
        if (gender !== "M" && gender !== "F") {
            throw new Error("Gender should be either Male or Female");
        }
        this.gender=gender;
    }

    get startDate() { return this.startDate; }
    set startDate(startDate)
    {
        let dateRegex = /^\d{4}-\d{2}-\d{2}$/;
        if (!date.match(dateRegex)) {
            throw new Error("Date should be in the format YYYY-MM-DD");
        }
        this.startDate=startDate;
    }

    // method
    toString()
    {
        const options = { year: 'numeric', month: 'long', day: 'numeric'};
        const empDate = !this.startDate ? "undefined" : this.startDate.toLocaleDateString("en-US", options);
        return "id=" + this.id + ", name=" + this.name + ", salary=" + this.salary + ", "+ "gender=" + this.gender + ", startDate=" + empDate;
    }
}

    let employeePayrollData = new EmployeePayrollData(1, "Mark", 3000000);
    console.log(employeePayrollData.toString()); 
    try
    {
        employeePayrollData.name = "john";
        console.log(employeePayrollData.toString());
    }
    catch(e)
    {
        console.error(e);
    }
    try
    {
        let newEmployeePayrollData = new EmployeePayrollData(1, "Terrisa", 3000000, "F", new Date());
        console.log(newEmployeePayrollData.toString());
    }
    catch(e)
    {
        console.error(e);
    }
    
    