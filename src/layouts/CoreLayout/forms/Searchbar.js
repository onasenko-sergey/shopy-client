import { reduxForm } from 'redux-form'
import SearchbarView from '../components/Header/Navbar/Searchbar'

export const validate = (values) => {
  const errors = {}
  return errors
}

const Searchbar = reduxForm({
  form: 'Searchbar',
  validate
})(SearchbarView)

export default Searchbar
