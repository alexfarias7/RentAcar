import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
	type: 'postgres',
	host: 'localhost',
	username: 'docker',
	password: 'user123456',
	database: 'rentacar',
	port: 5432,
	migrations: ['./src/database/migrations/*.ts'],
	entities: ['./src/modules/**/entities/*.ts'],
});

AppDataSource.initialize();
