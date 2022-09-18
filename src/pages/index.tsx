import React, { useState } from 'react';

import { GetStaticProps } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { IBlogGalleryProps } from '../blog/BlogGallery';
import { Meta } from '../layout/Meta';
import { Mailchimp } from '../mailchimp/Mailchimp';
import { Navbar } from '../navigation/Navbar';
import { IPaginationProps } from '../pagination/Pagination';
import { Main } from '../templates/Main';
import { AppConfig } from '../utils/AppConfig';
import { getAllPosts } from '../utils/Content';

const Index = () => {
  const [isLinkHovering, setIsLinkHovered] = useState('');

  return (
    <Main
      meta={
        <Meta title="Les sauvageon·nes" description={AppConfig.description} />
      }
    >
      <div
        className="w-screen max-h-screen bg-white bg-opacity-90"
        style={{ borderBottom: 'solid 8px #58bb47' }}
      >
        <Image
          className="fixed h-1/4 z-10"
          src="/assets/images/logo_sauvageonnes.png"
          layout="responsive"
          height="1360"
          width="6147"
        />
        <div className="z-0 mx-auto">
          <div
            style={{
              transform: 'translateY(-15%)',
              zIndex: -1,
            }}
            className="mx-auto w-screen xl:max-w-6xl flex flex-col align-center justify-center left-0 right-0 z-10"
          >
            <Image
              src="/assets/images/sign.svg"
              layout="responsive"
              width="800"
              height="600"
            />
            <h2
              className="absolute w-1/2 pt-8 font-extrabold text-center text-sm lg:text-4xl text-white overline decoration-4 lg:decoration-8 font-mono"
              style={{
                margin: 'auto',
                transform: 'translateX(50%) rotate(-20deg)',
              }}
            >
              {AppConfig.title}
            </h2>
          </div>
        </div>
      </div>

      <div className="max-w-xl xl:max-w-6xl mx-auto p-8">
        <div className="p-8 px-16 bg-white font-bold rounded shadow-lg">
          <div className="text-3xl text-center underline">
            {AppConfig.description}
          </div>
          <hr className="m-8" />
          <p>Elle a aussi pour but de proposer à la communauté :</p>
          <ul className="list-disc">
            <li>un lieu d&apos;accueil et de mixité sociale; </li>
            <li>des chantiers participatifs; </li>
            <li>des ateliers ouverts; </li>
            <li>
              toute autre forme de rencontres participant à la poursuite
              d&apos;un monde plus artistique, culturel, éducatif,
              environnemental et social;
            </li>
          </ul>
        </div>

        <div className="mt-8 text-3xl p-8 bg-white font-bold rounded shadow-lg">
          <Navbar>
            <li
              className="mt-8 lg:mt-0 mx-4 cursor-pointer"
              onMouseEnter={() => setIsLinkHovered('yt')}
              onMouseLeave={() => setIsLinkHovered('')}
            >
              <Link
                href="https://www.youtube.com/channel/UCxJjunWs6fuqBdycYavUUFQ"
                target="_blank"
              >
                {(isLinkHovering === 'yt' && (
                  <Image
                    src="/assets/images/yt_logo_rgb_light.png"
                    layout="intrinsic"
                    width="200"
                    height="45"
                  />
                )) || (
                  <Image
                    src="/assets/images/yt_logo_mono_light.png"
                    layout="intrinsic"
                    width="200"
                    height="45"
                  />
                )}
              </Link>
            </li>
            <li
              className="mt-8 lg:mt-0 mx-4 cursor-pointer"
              onMouseEnter={() => setIsLinkHovered('ig')}
              onMouseLeave={() => setIsLinkHovered('')}
            >
              <Link
                href="https://www.youtube.com/channel/UCxJjunWs6fuqBdycYavUUFQ"
                target="_blank"
              >
                {(isLinkHovering === 'ig' && (
                  <Image
                    src="/assets/images/Instagram_Glyph_Gradient_RGB.png"
                    layout="intrinsic"
                    width="45"
                    height="45"
                  />
                )) || (
                  <Image
                    src="/assets/images/glyph-logo_May2016.png"
                    layout="intrinsic"
                    width="45"
                    height="45"
                  />
                )}
              </Link>
            </li>
          </Navbar>
        </div>
        <div className="mt-8 text-3xl flex align-center justify-center p-8 bg-white font-bold rounded shadow-lg">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/videoseries?list=PLX2zmaDjaN93E18HEqI4e8y_aw6cm27vW"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <div className="mt-8 text-3xl flex align-center justify-center p-8 bg-white font-bold rounded shadow-lg">
          <Mailchimp />
        </div>
      </div>
      {/* <BlogGallery posts={props.posts} pagination={props.pagination} /> */}
    </Main>
  );
};

export const getStaticProps: GetStaticProps<IBlogGalleryProps> = async () => {
  const posts = getAllPosts(['title', 'date', 'slug']);
  const pagination: IPaginationProps = {};

  if (posts.length > AppConfig.pagination_size) {
    pagination.next = '/page2';
  }

  return {
    props: {
      posts: posts.slice(0, AppConfig.pagination_size),
      pagination,
    },
  };
};

export default Index;
