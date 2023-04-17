import css from './Filter.module.css';
import PropTypes from 'prop-types';
import {useDispatch} from 'react-redux';
import {useState} from 'react';
import {filterContact} from '../../redux/slices/contacts/contactSlice';

const Filter = () => {
  const dispatch = useDispatch()
  const [filter, setFilter] = useState('')

    return (
      <label className={css.label}>
        Find contacts by name
        <input
            onInput={(event) => dispatch(filterContact(event.target.value))}
            className={css.value}
            type="text"
            value={filter}
            onChange={(event) => setFilter(event.target.value)}
            name="name"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            />
      </label>
  );
};

Filter.propTypes = {
  filter: PropTypes.string,
}; 

export default Filter;