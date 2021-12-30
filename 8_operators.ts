// ==================== keyof

interface Person {
	name: string;
	age: number;
}

// Отдельный тип, состоящий из ключей данного interface
type PersonKeys = keyof Person; // 'name' | 'age'

const key: PersonKeys = 'name';

// ==================== Exclude and Pick

type User = {
	_id: number;
	name: string;
	email: string;
	createdAt: Date;
};

// Создание нового типа, но не включая некоторые поля (пример: '_id' и 'createdAt')
// Option 1 (Exclude)
type UserKeysNoMeta1 = Exclude<keyof User, '_id' | 'createdAt'>; // 'name' | 'email'
// Option 1 (Pick)
type UserKeysNoMeta2 = Pick<User, 'name' | 'email'>; // 'name' | 'email'

const user1: UserKeysNoMeta1 = 'name';
