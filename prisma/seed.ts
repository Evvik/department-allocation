import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const employees = [
  {
    id: 1,
    name: 'Manager A',
    role: 2,
    referenceManager: null,
    departmentName: 'Research',
    departmentId: 0
  },
  {
    id: 2,
    name: 'Manager B',
    role: 2,
    referenceManager: 1,
    departmentName: 'Research',
    departmentId: 0
  },
  {
    id: 3,
    name: 'Manager C',
    role: 2,
    referenceManager: 2,
    departmentName: 'Research',
    departmentId: 0
  },
  {
    id: 4,
    name: 'Manager D',
    role: 2,
    referenceManager: 3,
    departmentName: 'Research',
    departmentId: 0
  },
  {
    id: 5,
    name: 'Tester',
    role: 1,
    referenceManager: 4,
    departmentName: 'Research',
    departmentId: 0
  },

  {
    id: 6,
    name: 'Manager A',
    role: 2,
    referenceManager: null,
    departmentName: 'Development',
    departmentId: 1,
  },
  {
    id: 7,
    name: 'Manager B',
    role: 2,
    referenceManager: 6,
    departmentName: 'Development',
    departmentId: 1,
  },
  {
    id: 8,
    name: 'Developer A',
    role: 0,
    referenceManager: 7,
    departmentName: 'Development',
    departmentId: 1,
  },
  {
    id: 9,
    name: 'Developer B',
    role: 0,
    referenceManager: 7,
    departmentName: 'Development',
    departmentId: 1,
  },
  {
    id: 10,
    name: 'Tester',
    role: 1,
    referenceManager: 7,
    departmentName: 'Development',
    departmentId: 1,
  },

  {
    id: 11,
    name: 'Manager',
    role: 2,
    referenceManager: null,
    departmentName: 'HR',
    departmentId: 2,
  },
  {
    id: 12,
    name: 'Developer',
    role: 0,
    referenceManager: 11,
    departmentName: 'HR',
    departmentId: 2,
  },
  {
    id: 13,
    name: 'Tester',
    role: 1,
    referenceManager: 11,
    departmentName: 'HR',
    departmentId: 2,
  },
  {
    id: 14,
    name: 'Developer',
    role: 0,
    referenceManager: 11,
    departmentName: 'HR',
    departmentId: 2,
  },
];

async function main() {
  for (let employee of employees) {
    await prisma.employee.create({ data: employee });
  }
}

main()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
