import { PrismaClient, Prisma } from '@/src/generated/prisma';

import largeData from '@/src/mock/large/products.json';

const prisma = new PrismaClient();

const userData: Prisma.ProductCreateInput[] = largeData.map(({ id, ...data }) => data);

export async function main() {
  for (const u of userData) {
    await prisma.product.create({ data: u });
  }
}

main();
