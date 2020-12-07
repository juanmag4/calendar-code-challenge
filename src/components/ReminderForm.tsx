import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import TimePicker from 'react-time-picker';
import { useForm } from "react-hook-form";
import { getDays } from '../utils.ts';
import { ADD_REMINDER } from '../actions/types';

export const ReminderForm = () => {
  const history = useHistory();
  const [hour, onHourChange] = useState<any>('10:00');
  const dispatch = useDispatch();
  const { selected } = useSelector(({ reminder }: any) => reminder);
  const { city, color, day, reminder, time, id } = selected;
  const { register, handleSubmit } = useForm({
    defaultValues: {
      city, color, day, reminder, time
    }
  });

  useEffect(() => {
    onHourChange(time);
  }, [selected]);

  const onSubmit = (data: any) => {
    const formData = { ...data };
    formData['time'] = hour;
    formData['id'] = id;
    dispatch({ type: ADD_REMINDER, payload: { reminder: formData } });
    history.push('/');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <select name="day" ref={register}>
        {getDays().map((num: number) =>
          <option key={num} value={num}>{num}</option>
        )}
      </select>
      <br />
      <br />
      <TimePicker value={hour} onChange={onHourChange} />
      <div className="form-group">
        <label>Reminder</label>
        <input type="text" className="form-control" maxLength={30} ref={register} name="reminder" />
      </div>
      <div className="form-group">
        <label>City</label>
        <input type="text" className="form-control" ref={register} name="city" />
      </div>
      <select name="color" ref={register}>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="green">Green</option>
      </select>
      <br />
      <br />
      <div className="d-flex justify-content-between">
        <Link to="/" className="btn btn-secondary">Cancel</Link>
        <button type="submit" className="btn btn-primary">Submit</button>
      </div>
    </form>
  );
};
