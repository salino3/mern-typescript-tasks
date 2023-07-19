import React from 'react';
import { HomeScene } from '@/scenes';
import { GlobalContext, MyState, Tasks } from '@/core';
import './home.styles.scss';

export const Home: React.FC = () => {

 const {state} = React.useContext<MyState>(GlobalContext);
 const {tasks} = state;
 console.log("Tasks", tasks);

  return (
    <HomeScene>
      <p>The Home Component</p>
      <div>
        {tasks && tasks.length > 0 ? tasks.map((task: Tasks) => (
          <p key={task._id}>{task.title}</p>
        )) : "There aren't tasks.."
         }
      </div>
    </HomeScene>
  );
}
