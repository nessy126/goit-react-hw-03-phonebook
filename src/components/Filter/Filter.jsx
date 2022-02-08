const Filter = ({ filter, setFilter }) => {
  return (
    <label>
      Find contact by name<br></br>
      <input onChange={setFilter} value={filter} type="text" name="filter" />
    </label>
  )
}
 
export default Filter;