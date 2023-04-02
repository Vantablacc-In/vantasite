// components/user/AddressForm.js

import React, {
  useContext,
  useState,
} from 'react';

import { UserContext } from '../../context/UserContext';
import { supabase } from '../../lib/supabase';

const AddressForm = ({ address, setAddress, editing, setEditing }) => {
  const { user } = useContext(UserContext);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setError(null);
      const { data, error } = editing
        ? await supabase
            .from('addresses')
            .update(address)
            .eq('id', address.id)
            .single()
        : await supabase
            .from('addresses')
            .insert([{ ...address, user_id: user.id }]);

      if (error) {
        throw error;
      }

      setAddress(data);
      setEditing(false);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddress({ ...address, [name]: value });
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Your form fields here */}
      {error && <div>{error}</div>}
      <button type="submit">Save Address</button>
    </form>
  );
};

export default AddressForm;
