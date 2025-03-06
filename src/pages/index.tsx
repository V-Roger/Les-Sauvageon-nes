import 'photoswipe/dist/photoswipe.css';
import React, { useState } from 'react';

import { GetStaticProps } from 'next';
import Image from 'next/image';
import { Gallery, Item } from 'react-photoswipe-gallery';

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
  const images = [
    {
      src: '/assets/images/servageon_8.jpeg',
      alt: 'Le servageon',
    },
    {
      src: '/assets/images/servageon_1.jpg',
      alt: 'Le servageon',
    },
    {
      src: '/assets/images/servageon_3.jpg',
      alt: 'Le servageon',
    },
  ];

  const images2 = [
    {
      src: '/assets/images/servageon_2.jpg',
      alt: 'Le servageon',
    },
    {
      src: '/assets/images/servageon_4.jpg',
      alt: 'Le servageon',
    },
    {
      src: '/assets/images/servageon_6.jpg',
      alt: 'Le servageon',
    },
  ];
  return (
    <Main
      meta={
        <Meta title="Les sauvageon·ne·s" description={AppConfig.description} />
      }
    >
      <div
        className="relative mx-auto mt-8 border-8 bg-white max-w-full xl:max-w-6xl bg-opacity-80 rounded-xl z-10"
        style={{
          minHeight: '240px',
          borderColor: '#056839',
          transform: 'rotate(-4.5deg)',
        }}
      >
        <Image
          className="z-10 object-contain bg-white"
          src="/assets/images/logo_sauvageonnes.png"
          fill={true}
          alt="Logo des Sauvageon·ne·s"
        />
        <div
          className="absolute -right-12 -bottom-72 -z-10"
          style={{
            transform: 'rotate(6deg)',
          }}
        >
          <Image
            src="/assets/images/sign.svg"
            width="360"
            height="360"
            alt="Panneau de signalisation"
          />
          <p
            className="w-1/2 bold-chaloops absolute top-1/2 left-1/2 -ml-24 -mt-12 text-center"
            style={{
              transform: 'rotate(-4.5deg)',
            }}
          >
            {AppConfig.title}
          </p>
        </div>
      </div>

      <div
        className="w-screen min-h-max mt-48 p-4 py-lg-8 px-lg-32"
        style={{ backgroundColor: 'rgba(88, 187, 71, 0.82)' }}
      >
        <Gallery>
          <div
            style={{
              display: 'grid',
              gridGap: 24,
            }}
            className="sm:grid-cols-1 md:grid-cols-3"
          >
            {images?.map(({ src, alt }) => (
              <Item
                original={src}
                thumbnail={src}
                width="1024"
                height="768"
                key=""
              >
                {({ ref, open }) => (
                  <img
                    style={{
                      cursor: 'pointer',
                      objectFit: 'cover',
                      width: '100%',
                      height: '100%',
                    }}
                    className="rounded-lg shadow-lg"
                    ref={ref as React.MutableRefObject<HTMLImageElement>}
                    onClick={open}
                    src={src}
                    alt={alt}
                  />
                )}
              </Item>
            ))}
          </div>
        </Gallery>
      </div>

      <div className="prose prose-lg-lg max-w-2xl xl:max-w-6xl mx-auto mt-32">
        <div className="relative text-center">
          <h1 className="relative inline-block mb-0 bold-chaloops bg-white rounded-full shadow-lg px-12 py-1">
            {AppConfig.tagline}
          </h1>
        </div>
      </div>

      <div className="relative z-0 w-11/12 w-lg-8/12 bg-white max-w-2xl xl:max-w-6xl mx-auto mt-12 rounded-lg shadow-lg overflow-hidden">
        <Image
          src="/assets/images/plan.png"
          fill={true}
          className="object-cover -z-10 opacity-20"
          alt="Plan du Serveageon"
        />
        <div className="p-4 p-lg-24 relative prose prose-lg-lg max-w-none flex flex-col content-center justify-center">
          <div>
            <h2>{AppConfig.description}</h2>
          </div>
          <div>
            <h3>Nous proposons&nbsp;:&nbsp;</h3>
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
        </div>
      </div>

      <div className="prose bg-white max-w-2xl xl:max-w-6xl mx-auto mt-24 pt-8 rounded-lg shadow-lg overflow-hidden">
        <h2 className="text-center mb-8"> Demandez le programme !👇</h2>
        <iframe
          src="https://framagenda.org/apps/calendar/embed/EwdKEkQNogbitNJy-XrpsNxbeRC3M8oCQ"
          className="w-full"
          height="600"
        />
      </div>

      <div className="prose prose-lg-lg max-w-2xl xl:max-w-6xl mx-auto mt-32">
        <div className="relative text-center">
          <h1 className="relative inline-block mb-0 bold-chaloops bg-white rounded-full shadow-lg px-12 py-1">
            Retrouvez-nous par ici 👇
          </h1>
        </div>
      </div>

      <div className="w-11/12 w-lg-8/12 max-w-2xl xl:max-w-6xl mx-auto my-8 p-4 p-lg-8">
        <Navbar>
          <li
            className="mt-8 grow lg:mt-0 mr-4 cursor-pointer flex align-center justify-center p-8"
            onMouseEnter={() => setIsLinkHovered('yt')}
            onMouseLeave={() => setIsLinkHovered('')}
          >
            <a
              href="https://www.youtube.com/@lessauvageonnes"
              target="_blank"
              rel="noopener noreferrer"
            >
              {(isLinkHovering === 'yt' && (
                <Image
                  src="/assets/images/yt_logo_rgb_light.png"
                  alt="Youtube des Sauvageon·ne·s"
                  width="200"
                  height="45"
                />
              )) || (
                <Image
                  src="/assets/images/yt_logo_mono_light.png"
                  alt="Youtube des Sauvageon·ne·s"
                  width="200"
                  height="45"
                />
              )}
            </a>
          </li>
          <li
            className="mt-8 grow lg:mt-0 mx-4 cursor-pointer flex align-center justify-center p-8"
            onMouseEnter={() => setIsLinkHovered('ha')}
            onMouseLeave={() => setIsLinkHovered('')}
          >
            <a
              href="https://www.helloasso.com/associations/les-sauvageon-nes"
              target="_blank"
              rel="noopener noreferrer"
            >
              {(isLinkHovering === 'ha' && (
                <Image
                  src="/assets/images/HelloAsso.svg"
                  alt="HelloAsso des Sauvageon·ne·s"
                  width="200"
                  height="45"
                />
              )) || (
                <Image
                  src="/assets/images/HelloAsso--dimmed.svg"
                  alt="HelloAsso des Sauvageon·ne·s"
                  width="200"
                  height="45"
                />
              )}
            </a>
          </li>
          <li
            className="mt-8 grow lg:mt-0 ml-4 cursor-pointer  flex align-center justify-center p-8"
            onMouseEnter={() => setIsLinkHovered('ig')}
            onMouseLeave={() => setIsLinkHovered('')}
          >
            <a
              href="https://www.instagram.com/les.sauvageon.nes/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {(isLinkHovering === 'ig' && (
                <Image
                  src="/assets/images/Instagram_Glyph_Gradient_RGB.png"
                  alt="Instagram des Sauvageon·ne·s"
                  width="45"
                  height="45"
                />
              )) || (
                <Image
                  src="/assets/images/glyph-logo_May2016.png"
                  alt="Instagram des Sauvageon·ne·s"
                  width="45"
                  height="45"
                />
              )}
            </a>
          </li>
        </Navbar>
      </div>

      <div
        className="w-screen min-h-max p-4 py-lg-8 px-lg-32 mt-lg-32"
        style={{ backgroundColor: 'rgba(236, 189, 25, 0.82)' }}
      >
        <Gallery>
          <div
            style={{
              display: 'grid',
              gridGap: 24,
            }}
            className="sm:grid-cols-1 md:grid-cols-3"
          >
            {images2?.map(({ src, alt }) => (
              <Item
                original={src}
                thumbnail={src}
                width="1024"
                height="768"
                key=""
              >
                {({ ref, open }) => (
                  <img
                    style={{
                      cursor: 'pointer',
                      objectFit: 'cover',
                      width: '100%',
                      height: '100%',
                    }}
                    className="rounded-lg shadow-lg"
                    ref={ref as React.MutableRefObject<HTMLImageElement>}
                    onClick={open}
                    src={src}
                    alt={alt}
                  />
                )}
              </Item>
            ))}
          </div>
        </Gallery>
      </div>

      <div className="prose prose-lg-lg max-w-2xl xl:max-w-6xl mx-auto mt-32">
        <div className="relative text-center">
          <h1 className="relative inline-block mb-0 bold-chaloops bg-white rounded-full shadow-lg px-12 py-1">
            Restons en contact par là 📬
          </h1>
        </div>
      </div>

      <div className="w-11/12 w-lg-8/12 bg-white max-w-2xl xl:max-w-6xl mx-auto my-8 rounded shadow-lg p-8">
        <Mailchimp />
      </div>
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
