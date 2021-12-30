// Classes

class Typescript {
	version: string;

	constructor(version) {
		this.version = version;
	}

	info(name: string) {
		return `[${name}: TypeScript version is ${this.version}]`;
	}
}

// ====================

class Car {
	readonly model: string; // переопределить можем только внутри constructor
	readonly NumberOfWheels: number = 4;

	constructor(theModel: string) {
		this.model = theModel;
	}
}
// Идентичная запись
class Car1 {
	readonly NumberOfWheels: number = 4;

	constructor(readonly model: string) {}
}

// ==================== Модификаторы доступа

// Модификаторы доступа позволяют сокрыть состояние объекта от внешнего доступа и управлять доступом к этому состоянию.
// В TypeScript три модификатора: public, protected и private.

// protected
// Определяет поля и методы, которые из вне класса видны только в классах-наследниках.

// private
// К свойствам и методам нельзя будет обратиться извне при создании объекта данного класса.

class Animal {
	protected voice: string = ''; // Доступен для класса Animal и всех которые наследуются от Animal
	public color: string = 'black';

	// Свойства и методы доступны только в том классе, в котором были определены
	private Go() {
		console.log('Go');
	}
}

class Cat extends Animal {
	public setVoice(voice: string): void {
		this.voice = voice;
	}
}
const cat = new Cat();

// ==================== Абстрактные классы
// представляют классы, определенные с ключевым словом abstract.
// Во многом похожи на обычные классы за тем исключением, что мы не можем создать напрямую объект абстрактного класса,
// используя его конструктор.

abstract class Component {
	// От таких классов можно наследоваться, но они ни во что не компилируются
	abstract render(): void;
	abstract info(): string;
}

class AppComponent extends Component {
	render(): void {
		console.log('Component on render');
	}
	info(): string {
		return 'This is info';
	}
}
