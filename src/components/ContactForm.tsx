import React, { useState } from 'react';
import type { FormEvent } from 'react';

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    setErrorMessage('');

    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        e.currentTarget.reset();
      } else {
        setSubmitStatus('error');
        setErrorMessage(result.error || 'Ocurrió un error al enviar el mensaje.');
      }
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      setSubmitStatus('error');
      setErrorMessage('Error de conexión. Por favor, intenta de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col mt-10 w-full text-base tracking-normal text-white text-opacity-60 max-md:mt-10 ">
      <div className="flex gap-3.5 items-start w-full ">
        <input
          type="text"
          name="name"
          placeholder="Nombre y apellido"
          aria-label="Nombre y apellido"
          className="flex-1 shrink px-3.5 py-3 w-full rounded-md border border-solid bg-white bg-opacity-10 border-white border-opacity-20 min-w-[240px]"
          required
        />
      </div>
      <input
        type="email"
        name="email"
        placeholder="Email"
        aria-label="Email"
        className="px-3.5 py-3 mt-3.5 w-full whitespace-nowrap rounded-md border border-solid bg-white bg-opacity-10 border-white border-opacity-20"
        required
      />
      <input
        type="text"
        name="subject"
        placeholder="Asunto"
        aria-label="Asunto"
        className="px-3.5 py-3 mt-3.5 w-full whitespace-nowrap rounded-md border border-solid bg-white bg-opacity-10 border-white border-opacity-20"
        required
      />
      <textarea
        name="message"
        placeholder="Mensaje"
        aria-label="Mensaje"
        className="px-3.5 pt-3 pb-20 mt-3.5 w-full whitespace-nowrap rounded-md border border-solid bg-white bg-opacity-10 border-white border-opacity-20 min-h-[109px]"
        required
      ></textarea>
      <button
        type="submit"
        disabled={isSubmitting}
        className="px-6 py-3 mt-5 text-white bg-purple-600 rounded-md hover:bg-purple-700 transition-colors duration-300"
      >
        {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
      </button>
      {submitStatus === 'success' && (
        <p className="mt-3 text-green-500">Mensaje enviado con éxito!</p>
      )}
      {submitStatus === 'error' && (
        <p className="mt-3 text-red-500">{errorMessage}</p>
      )}
    </form>
  );
}