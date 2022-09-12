import React, { useState } from 'react';

import MailchimpSubscribe from 'react-mailchimp-subscribe';

import { AppConfig } from '../utils/AppConfig';

// a basic form
const CustomForm = ({
  status,
  message,
  onSubmitted,
}: {
  status: 'error' | 'success' | 'sending' | null;
  message: string | Error | null;
  onSubmitted: ({ EMAIL, NAME }: { EMAIL: string; NAME: string }) => void;
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const submit = () =>
    onSubmitted({
      EMAIL: email,
      NAME: name,
    });

  return (
    <div className="mailchimp__form">
      <label
        htmlFor="email"
        className={`flex w-full border-4 border-b-2 p-4 rounded-lg ${
          status === 'error' &&
          String(message).charAt(0) === '0' &&
          'border-rose-500'
        }`}
      >
        email&nbsp;:&nbsp;
        <input
          className="flex-1"
          placeholder="michel@tractopel.le"
          type="email"
          id="email"
          onChange={(event) => setEmail(event.target.value)}
        />
      </label>
      <label
        htmlFor="name"
        className={`flex w-full border-4 border-t-2 p-4 rounded-lg ${
          status === 'error' &&
          String(message).charAt(0) === '1' &&
          'border-rose-500'
        }`}
      >
        nom&nbsp;:&nbsp;
        <input
          className="flex-1"
          placeholder="Michel du Tractopelle"
          type="name"
          id="name"
          onChange={(event) => setName(event.target.value)}
        />
      </label>
      <p className="w-full p-4 pb-0 text-sm text-gray-600">
        En m&apos;inscrivant à la newsletter, j&apos;accepte de recevoir des
        communications non commerciales de la part de l&apos;association.
      </p>
      <button
        onClick={submit}
        className={`w-full mt-8 bg-black text-white hover:bg-white hover:text-black transition-colors rounded-lg disabled:opacity-30 disabled:pointer-events-none`}
        disabled={status === 'sending'}
      >
        Allez hop !
      </button>
      {message && (
        <p className="text-base text-center mt-4">
          {(status === 'success' || status === 'error') && (
            <div dangerouslySetInnerHTML={{ __html: String(message) }} />
          )}
        </p>
      )}
    </div>
  );
};

const Mailchimp = () => (
  <div className="mailchimp flex flex-col justify-center align-center">
    <h4 className="mb-8">
      Restez en contact avec vos Sauvagon·nes préféré·e·s
    </h4>
    <hr className="mb-8" />
    <MailchimpSubscribe
      url={`https://les-sauvageonnes.us14.list-manage.com/subscribe/post?u=${AppConfig.mailchimp_u}&id=${AppConfig.mailchimp_id}`}
      render={({ subscribe, status, message }) => (
        <div>
          <CustomForm
            onSubmitted={(formData) => subscribe(formData)}
            status={status}
            message={message}
          />
        </div>
      )}
    />
  </div>
);

export { Mailchimp };
