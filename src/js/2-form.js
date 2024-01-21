document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.feedback-form');
  const localStorageKey = 'feedback-form-state';

  form.addEventListener('input', updateLocalStorage);
  form.addEventListener('submit', handleSubmit);

  const storedData = JSON.parse(localStorage.getItem(localStorageKey)) || {};
  form.email.value = storedData.email || '';
  form.message.value = storedData.message || '';

  function updateLocalStorage() {
    if (form.email.name === 'email' || form.message.name === 'message') {
      localStorage.setItem(
        localStorageKey,
        JSON.stringify({
          email: form.email.value.trim(),
          message: form.message.value.trim(),
        })
      );
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (areFieldsFilled()) {
      console.log(getFormData());
      clearLocalStorageAndForm();
    }
  }

  function areFieldsFilled() {
    return form.email.value.trim() !== '' && form.message.value.trim() !== '';
  }

  function getFormData() {
    return {
      email: form.email.value.trim(),
      message: form.message.value.trim(),
    };
  }

  function clearLocalStorageAndForm() {
    localStorage.removeItem('feedback-form-state');
    form.reset();
  }
});
