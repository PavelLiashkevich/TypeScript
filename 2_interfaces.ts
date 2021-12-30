// Интерфейсы
// Интерфейс определяет свойства и методы, которые объект должен реализовать.
// Другими словами, интерфейс - это определение кастомного типа данных, но без реализации.
// Интерфейсы определяются с помощью ключевого слова interface.

interface Rect {
	readonly id: string;
	color?: string; // ? - необязательный параметр
	size: {
		width: number;
		height: number;
	};
}

const rect1: Rect = {
	id: 'admin',
	size: {
		width: 20,
		height: 30,
	},
	color: '#ccc',
};

const rect2: Rect = {
	id: 'admin2',
	size: {
		height: 10,
		width: 5,
	},
};
rect2.color = '#fff';

const rect3 = {} as Rect; // Указываем к какому типу относится объект

// Наследование интерфейсов

interface RectWithArea extends Rect {
	getArea: () => number; // указываем тип данных который должен быть возвращен
}
const rect4: RectWithArea = {
	id: 'amin3',
	size: {
		width: 20,
		height: 30,
	},
	getArea(): number {
		return this.size.width * this.size.height;
	},
};

// ====================

interface IClock {
	time: Date;
	setTime(date: Date): void;
}
class Clock implements IClock {
	time: Date = new Date();
	setTime(date: Date): void {
		this.time = date;
	}
}

// ====================

interface Styles {
	[key: string]: string;
}

const css: Styles = {
	border: '1px solid black',
	marginTop: '10px',
	borderRadius: '5px', // и т.д.
};
