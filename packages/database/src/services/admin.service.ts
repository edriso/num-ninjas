import prisma from '../client.js';

export async function findAdminByEmail(email: string) {
  return prisma.admin.findUnique({ where: { email } });
}

export async function createAdmin(email: string, hashedPassword: string) {
  return prisma.admin.create({
    data: { email, password: hashedPassword },
  });
}

export async function getAllAdmins() {
  return prisma.admin.findMany({
    select: { id: true, email: true, createdAt: true },
    orderBy: { createdAt: 'asc' },
  });
}
