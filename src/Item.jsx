export default function Item(props) {
    const { id, date, dist, workouts, setWorkouts } = props;
    const del = (e) => {
      let index = workouts.findIndex((workout) => workout.id === e.target.closest('.item').id);
      let t = [...workouts];
      t.splice(index, 1);
      setWorkouts(t);
    }
  
    return (
      <li className="item" id={id}>
        <span>{date} </span>
        <span>{dist}</span>
        <button className="btn_del" onClick={del}>&#10008;</button>
      </li>
    );
  }