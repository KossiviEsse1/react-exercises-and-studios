import classes from './ChoresList.module.css';

export default function ChoresList () {
   const chores = ["Empty dishwasher", "Complete prep work", "Buy groceries"];

   return (
      <div className={classes.all}>
         <h3 className={classes.choresHeading}>Chores List</h3>
         <ul>
            <li className={classes.choresText}>{chores[0]}</li>
            <li className={classes.choresText}>{chores[1]}</li>
            <li className={classes.choresText}>{chores[2]}</li>
         </ul>
      </div>
   )
}