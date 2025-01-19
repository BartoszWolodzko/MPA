import { PrismaClient } from '@prisma/client';

let prisma;

export function getPrismaClient() {
  if (!prisma) {
    prisma = new PrismaClient();
    console.log('New PrismaClient instance created');
  } else {
    console.log('Reusing existing PrismaClient instance');
  }

  return prisma;
}