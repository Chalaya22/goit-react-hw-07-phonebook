import { createFilter } from 'redux/filterSlice';
import { useDispatch, useSelector } from 'react-redux';
import css from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter.Filter);

  const onFilter = event => {
    dispatch(createFilter(event.target.value));
  };

  return (
    <div className={css.filter}>
      <label htmlFor="filter">
        <p className={css.filterTitle}>Find contact by name 🔸🔸🔸🔸🔸🔸🔸</p>
        <input
          className={css.filterImput}
          type="text"
          name="filter"
          id="filter"
          value={filter}
          onChange={onFilter}
          placeholder="username: "
          required
        />
      </label>
    </div>
  );
};
export default Filter;
