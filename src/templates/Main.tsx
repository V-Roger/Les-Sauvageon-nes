import React, { ReactNode } from 'react';

import { AppConfig } from '../utils/AppConfig';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="absolute top-0 left-0 bottom-0 right-0 antialiased w-full">
    {props.meta}

    <div className="text-xl w-screen h-full min-h-screen pt-8">
      <div
        className="fixed top-0 w-screen h-full min-h-screen bg-cover z-0 opacity-20"
        style={{
          backgroundImage: 'url("/assets/images/pattern.svg")',
        }}
      />

      <div className="relative z-10">{props.children}</div>

      <div
        className="relative text-center py-8 text-sm z-10"
        style={{
          backgroundColor: 'rgba(88, 187, 71, 0.82)',
        }}
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
