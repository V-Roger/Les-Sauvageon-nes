import React, { ReactNode } from 'react';

type INavbarProps = {
  children: ReactNode;
};

const Navbar = (props: INavbarProps) => (
  <ul className="navbar w-full flex flex-wrap align-center justify-evenly text-xl">
    {props.children}

    <style jsx>
      {`
        .navbar :global(a) {
          @apply text-gray-700;
        }

        .navbar :global(a:hover) {
          @apply no-underline text-gray-900;
        }
      `}
    </style>
  </ul>
);

export { Navbar };
