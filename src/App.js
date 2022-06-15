import React from 'react';
import { useState } from 'react';
import Form from './form';
import List from './list';

export default function App() {
  const [workouts, setWorkouts] = useState([]);
  return (
    <div>
      <Form workouts={workouts} setWorkouts={setWorkouts} />
      <List workouts={workouts} setWorkouts={setWorkouts} />
    </div>
  );
}