import Item from './Item';

export default function List(props) {
  let { workouts, setWorkouts } = props;
  return (
    <ul>
      <div>
      <div>
        <span>Дата (ДД.ММ.ГГ) </span>
        <span>Пройдено км </span>
        <span>Действия</span>
      </div>
      </div>
      <div>
        {workouts
          .sort((a, b) => b.date > a.date ? 1 : -1)
          .map((workout) => {
          return (
            <Item
              key={workout.id}
              id={workout.id}
              date={workout.date}
              dist={workout.dist}
              workouts={workouts}
              setWorkouts={setWorkouts}
            />
          );
        })}
      </div>
    </ul>
  );
}