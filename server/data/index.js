import mongoose from "mongoose";

export const users = [{
    _id: '60bca46bc9e4a243e8cc458f', // Example ObjectId
    username: 'john_doe',
    email: 'john@example.com',
    password: 'password123',
    isAdmin: true,
    __v: 0,
  },
  {
    _id: '60bca46bc9e4a243e8cc4590', // Example ObjectId
    username: 'jane_doe',
    email: 'jane@example.com',
    password: 'password456',
    isAdmin: false,
    __v: 0,
  },
  {
    _id: '60bca46bc9e4a243e8cc4591', // Example ObjectId
    username: 'alice_smith',
    email: 'alice@example.com',
    password: 'password789',
    isAdmin: false,
    __v: 0,
  },
  {
    _id: '60bca46bc9e4a243e8cc4592', // Example ObjectId
    username: 'bob_jones',
    email: 'bob@example.com',
    password: 'passwordabc',
    isAdmin: false,
    __v: 0,
  },
  {
    _id: '60bca46bc9e4a243e8cc4593', // Example ObjectId
    username: 'emily_wilson',
    email: 'emily@example.com',
    password: 'passworddef',
    isAdmin: false,
    __v: 0,
  },
  {
    _id: '60bca46bc9e4a243e8cc4594', // Example ObjectId
    username: 'david_brown',
    email: 'david@example.com',
    password: 'passwordeg',
    isAdmin: false,
    __v: 0,
  },
  {
    _id: '60bca46bc9e4a243e8cc4595', // Example ObjectId
    username: 'sarah_clark',
    email: 'sarah@example.com',
    password: 'passwordhij',
    isAdmin: false,
    __v: 0,
  },
  {
    _id: '60bca46bc9e4a243e8cc4596', // Example ObjectId
    username: 'michael_jackson',
    email: 'michael@example.com',
    password: 'passwordklm',
    isAdmin: false,
    __v: 0,
  },];
  export const exampleExperiments = [
    {
      experimentName: 'Experiment 1',
      description: 'Description of Experiment 1',
      difficulty: 3,
      subjects: ['Physics', 'Chemistry'],
      mainImage: 'Experiment1.jpg',
      materialsList: [
        { name: 'Material 1', quantity: '10 units' },
        { name: 'Material 2', quantity: '5 units' },
      ],
      safetyPrecautions: 'Safety precautions for Experiment 1',
      instructions: [
        { stepNumber: 1, image: 'Step1.jpg', description: 'Step 1 description' },
        { stepNumber: 2, image: 'Step2.jpg', description: 'Step 2 description' },
      ],
      categories: ['Category 1', 'Category 2'],
      tags: ['Tag 1', 'Tag 2'],
      isAdmin: true,
      creator:  '60bca46bc9e4a243e8cc458f'
    },
    {
      experimentName: 'Experiment 2',
      description: 'Description of Experiment 2',
      difficulty: 4,
      subjects: ['Chemistry', 'Biology'],
      mainImage: 'Experiment2.jpg',
      materialsList: [
        { name: 'Material 3', quantity: '8 units' },
        { name: 'Material 4', quantity: '3 units' },
      ],
      safetyPrecautions: 'Safety precautions for Experiment 2',
      instructions: [
        { stepNumber: 1, image: 'Step1.jpg', description: 'Step 1 description' },
        { stepNumber: 2, image: 'Step2.jpg', description: 'Step 2 description' },
      ],
      categories: ['Category 2', 'Category 3'],
      tags: ['Tag 2', 'Tag 3'],
      isAdmin: false,
      creator:  '60bca46bc9e4a243e8cc458f'
    },
    
  ];