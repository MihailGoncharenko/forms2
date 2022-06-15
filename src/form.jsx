import { useState } from 'react';

export default function Form(props) {
  let { workouts, setWorkouts } = props;
  let initData = { date: '', dist: '' };
  let [form, setForm] = useState(initData);
  let lastId = 0;
  const submit = (e) => {
    e.preventDefault();
    const regex = /\d{2}\.\d{2}\.\d{2}/;
    if (!regex.test(form.date)) {
      const inputDateEl = e.target.querySelector('.form_date');
      inputDateEl.classList.add('error');
      setTimeout(() => inputDateEl.classList.remove('error'), 500);
      return;
    };
    const add = {
      id: lastId,
      date: form.date,
      dist: +form.dist,
      lastId: lastId + 1,
    };
    let updated = false;
    let t = workouts.slice(0, workouts.length);
    t.forEach(item => {
      if (item.date === form.date) {
        item.dist += +form.dist;
        updated = true;
      }
    });
    if (!updated) {
      t.push(add);
    }
    setWorkouts(t);
    setForm(initData);
  }

  const input = (e) => {
    let { name, value } = e.target;
    setForm(prevForm => ({ ...prevForm, [name]: value }));
  }

  return (
    <form onSubmit={submit}>
      <label htmlFor="date">Дата (ДД.ММ.ГГ)
        <input type="text" id="date" name="date"
          value={form.date} onChange={input} required />
      </label>
      <label htmlFor="dist">Пройдено км
        <input type="number" id="dist" name="dist"
          value={form.dist} onChange={input} required />
      </label>
      <button type="submit">ok</button>
    </form>
  );
}