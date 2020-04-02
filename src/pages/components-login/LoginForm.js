import { Button, Form } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import React from 'react';

const LoginForm = () => {
  return (
    <Form>
      <Form.Field>
        <label>Username</label>
        <input type="text" placeholder="Username" required />
      </Form.Field>
      <Form.Field>
        <label>Password</label>
        <input type="password" placeholder="Password" required />
      </Form.Field>
      {/* TODO: replace Link with a submit handler */}
      <Link to="/dashboard">
        <Button type="submit">Submit</Button>
      </Link>
    </Form>
  );
};

export default LoginForm;
