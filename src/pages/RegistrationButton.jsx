import React from 'react';

export const RegistrationButton = () => {
  const openRegistrationForm = () => {
    const registrationUrl = '/register'; // URL сторінки реєстрації
    window.open(registrationUrl, '_blank'); // Відкриває нову вкладку
  };

  return (
    <button onClick={openRegistrationForm} style={styles.button}>
      Створити аккаунт
    </button>
  );
};

const styles = {
  button: {
    padding: '10px 20px',
    backgroundColor: '#1976d2',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
    fontSize: '16px',
    borderRadius: '5px',
  },
};
