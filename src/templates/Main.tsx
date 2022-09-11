import React, { ReactNode } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { Navbar } from '../navigation/Navbar';
import { AppConfig } from '../utils/AppConfig';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="overflow-hidden fixed top-0 left-0 top-0 bottom-0 antialiased w-full px-3 md:px-0">
    {props.meta}

    <div className="mx-auto z-10">
      <Image
        className="fixed w-screen h-screen z-10"
        src="/logo_sauvageonnes.png"
        layout="responsive"
        height="1360"
        width="6147"
      />
    </div>
    <div
      className="z-0 mx-auto max-w-max"
      style={{ transform: 'translateY(-125px)', zIndex: -1 }}
    >
      <div className="absolute decoration-8 font-mono -top-1/4 flex flex-col align-center justify-center left-0 right-0 font-extrabold text-center text-4xl text-white overline h-full z-10">
        <h2
          style={{
            margin: 'auto',
            maxWidth: 400,
            transform: 'translateY(125px) rotate(-25deg)',
          }}
        >
          {AppConfig.title}
        </h2>
      </div>
      <Image
        src="/assets/images/sign.svg"
        layout="intrinsic"
        width="1280"
        height="900"
      />
      <div className=" border-b border-gray">
        <div>
          <Navbar>
            <li className="mr-6">
              <Link href="/">Youtube</Link>
            </li>
          </Navbar>

          <div className="text-2xl w-full text-center text-white underline">
            {AppConfig.description}
          </div>
        </div>
      </div>

      <div className="text-xl py-5">{props.children}</div>

      <div className="border-t border-gray-300 text-center py-8 text-sm">
        © Copyright {new Date().getFullYear()} {AppConfig.title}. Powered with{' '}
        <span role="img" aria-label="Love">
          ♥
        </span>{' '}
        by{' '}
        <span role="img" aria-label="Love">
          🍻
        </span>{' '}
      </div>
    </div>
  </div>
);

export { Main };
