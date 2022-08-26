"use strict";
/// <reference path="stringUtils.ts" />
class Employee {
    constructor(name, code) {
        this.empName = StringUtility.ToCapital(name);
        this.empCode = code;
    }
    displayEmployee() {
        console.log("Employee Code: " + this.empCode + ", Employee Name: " + this.empName);
    }
}
