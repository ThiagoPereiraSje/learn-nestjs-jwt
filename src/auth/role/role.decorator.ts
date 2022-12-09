import { SetMetadata } from '@nestjs/common';

export const Role = (role: string) => SetMetadata('role', role);

// Objetivos de um Decorator:
// Alterar o compportamento de uma variavel, função, método ou classe
// Trabalhar com metadados
