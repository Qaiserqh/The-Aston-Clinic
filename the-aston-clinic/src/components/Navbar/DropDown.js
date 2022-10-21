import Dropdown from 'react-bootstrap/Dropdown';

function DropDown() {

  function logout(){
    localStorage.removeItem('currentUser')
    window.location.href="/login"
  }
  const user = JSON.parse(localStorage.getItem('currentUser'))
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        {user.data.first_name}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Bookings</Dropdown.Item>
        <Dropdown.Item href="#/action-2" onClick={logout}>Logout</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DropDown;