import './styles.css';
import Button from './Button';
import oceans from './oceans.json';


function Profile()
{
   const listItem = oceans.map((ocean)=> {
      return <div key={ocean.id} className={`${ocean.fishCheck === "true" ? "isAFish" : "profile"}`}>
         <h1>{ocean.name}</h1>
         <img className='img' src={ocean.image} alt={ocean.name}></img>
         <h3>Facts </h3>
         <ul>
            <li>{ocean.fact1}</li>
            <li>{ocean.fact2}</li>
            <li>{ocean.fact3}</li>
         </ul>
         <Button />
      </div>
   })
   return(
      {listItem}
   );
}

export default Profile;