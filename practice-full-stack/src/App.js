import React,{useState} from 'react';
import GoalList from './components/GoalList/GoalList';
import NewGoal from './components/NewGoal/Newgoal';
import './App.css';
const App=()=>{
  const [courseGoals,setCourseGoals]=useState([
    {id:'cg1',text:'Dev'},
    {id:'cg2',text:'Divya'},
    {id:'cg3',text:'Raj'}
  ]);
  const addNewGoalHandler=(newGoal)=>{
    setCourseGoals((prevCourseGoals)=>prevCourseGoals.concat(newGoal));
  };
  return(
    <div className='user'>
      <h2>Users</h2>
      <NewGoal onAddGoal={addNewGoalHandler}/>
      <GoalList goals={courseGoals}/>
    </div>
  );
};
export default App;
