import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoModule } from './todo/todo.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root', // Replace with your MySQL username
      password: 'root', // Replace with your MySQL password
      database: 'surendhar', // Replace with your database name
      autoLoadEntities: true,
    }),
    TodoModule,
  ],
  providers: [AppService],
  controllers: [AppController],
})
export class AppModule {}
