import React from 'react';
import GoalList from './components/GoalList/GoalList';
import NewGoal from './components/NewGoal/Newgoal';
import './App.css';
const App=()=>{
  const courseGoals=[
    {id:'cg1',text:'Dev'},
    {id:'cg2',text:'Divya'},
    {id:'cg3',text:'Raj'}
  ];
  return(
    <div className='user'>
      <h2>Users</h2>
      <NewGoal />
      <GoalList goals={courseGoals}/>
    </div>
  );
};
export default App;
