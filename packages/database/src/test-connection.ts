import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()

async function main() {
  try {
    await prisma.$connect()
    console.log('Successfully connected to the database')

    // Test creating a user
    const user = await prisma.user.create({
      data: {
        email: 'test@example.com',
        name: 'Test User',
      },
    })
    console.log('Created user:', user)

    // Test reading users
    const users = await prisma.user.findMany()
    console.log('All users:', users)
  } catch (error) {
    console.error('Error connecting to the database:', error)
  } finally {
    await prisma.$disconnect()
  }
}

main()
