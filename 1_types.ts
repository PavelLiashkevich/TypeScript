// Базовые Типы

// Boolean
const isFetching: boolean = true;
const isLoading: boolean = false;

// Number
const int: number = 42;
const float: number = 4.2;
const num: number = 3e10;

// String
const message: string = 'Hello TypeScript';

// Array
const numberArray: number[] = [1, 1, 2, 3, 5, 8, 13];
const numberArray2: Array<number> = [1, 1, 2, 3, 5, 8, 13];

const words: string[] = ['Hello', 'TypeScript'];

// Tuple - Кортежи - обеспечивают хранение множественных полей различных типов. Могут быт также переданы функциям в качестве параметров.
const contact: [string, number] = ['Jack', 1234567];

// Any - Произвольный тип
let variable: any = 42;
// ...
variable = 'New String';
variable = [];

// ===== Function
function sayMyName(name: string): void {
	// void - означает, что функция ничего не вернет
	console.log(name);
}
sayMyName('Tom');

// Never (функция либо возвращает нам ошибку и никогда не заканчивает свое выполнение, либо когда она постоянно что-то делает)
function throwError(message: string): never {
	throw new Error(message);
}
// Бесконечно запускающаяся функция
//function infinite(): never {
//	while (true) {

//	}
//}

// Type - специальная конструкция, которая позволяет нам создавать наши собственные типы
type Login = string;
const login: Login = 'admin';

type ID = string | number;
const id1: ID = 'admin';
const id2: ID = 12345;
// const id3: ID = true;

type SomeType = string | null | undefined;
