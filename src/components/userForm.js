import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function UserForm() {
  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Label htmlFor="disabledTextInput">Enter the number to get the usernames</Form.Label>
        <Form.Control id="sinceNumberInput" placeholder="Username since" />
      </Form.Group>
      <Button type="submit">Buscar</Button>
    </Form>
  );
}

export default UserForm;