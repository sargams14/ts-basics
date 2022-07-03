function addNumbers(a: number, b: number) {
    return a + b;
}

//module.exports = addNumbers; -> Not preferred with TS
export default addNumbers;

//Adding a default value to str2 allows us to make it optional
export const addStrings = (str1: string, str2: string = ""): string => {
    return `${str1} ${str2}`;
}

//'|' operator works like a union operator
export const format = (title: string, param: string | number): string => {
    return `${title} ${param}`;
}

export const printFormat = (title: string, param: string | number): void => {
    console.log(format(title, param));
}