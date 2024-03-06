import { useState } from 'react';

// placeholder for character creation API call
const createCharacter = async (characterData) => {
  // simulates a network request/response
  console.log('Submitting character data:', characterData);
  return new Promise((resolve) => {
    setTimeout(() => resolve({ success: true, message: "Character created successfully!" }), 1000);
  });
};

function CharacterForm() {
  const [character, setCharacter] = useState({
    name: '',
    race: '',
    class: '',
    background: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCharacter((prevCharacter) => ({
      ...prevCharacter,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setMessage('');

    try {
      const response = await createCharacter(character);
      if (response.success) {
        setMessage(response.message);
        setCharacter({ name: '', race: '', class: '', background: '' });
      } else {
        setMessage("Failed to create character.");
      }
    } catch (error) {
      setMessage('An error occurred. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={character.name}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Race:
        <input
          type="text"
          name="race"
          value={character.race}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Class:
        <input
          type="text"
          name="class"
          value={character.class}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Background:
        <textarea
            name="background"
            value={character.background}
            onChange={handleChange}
            required
            />
      </label>
      <button type="submit" disabled={submitting}>
        Create Character
      </button>
      {message && <p>{message}</p>}
    </form>
  );
}

export default CharacterForm;
