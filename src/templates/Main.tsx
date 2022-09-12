import React, { ReactNode } from 'react';

import { AppConfig } from '../utils/AppConfig';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="absolute top-0 left-0 bottom-0 right-0 antialiased w-full ">
    {props.meta}

    <div
      className="text-xl w-screen min-h-screen bg-fixed bg-cover bg-bottom"
      style={{
        backgroundImage: 'url("/assets/images/sauvageonnes.jpg")',
      }}
    >
      <div>{props.children}</div>

      <div
        className="border-t-8 border-white text-center py-8 text-sm"
        style={{ background: '#58bb47' }}
      >
        © Copyright {new Date().getFullYear()} {AppConfig.site_name}. Powered
        with{' '}
        <span role="img" aria-label="Love">
          ♥
        </span>{' '}
        by{' '}
        <span role="img" aria-label="Beers">
          🍻
        </span>{' '}
      </div>
    </div>
  </div>
);

export { Main };
