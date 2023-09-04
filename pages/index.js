import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { createClient } from "next-sanity";
import { useState } from 'react';
import Script from "next/script"
import { useEffect } from 'react';
import imageUrlBuilder from '@sanity/image-url'
import Link from 'next/link'
import NavBar from '../components/NavBar'

export default function Home({ blog,project }) {
  const [navbar, setNavbar] = useState(false);
  const client = createClient({
    projectId: "ze1uahs4",
    dataset: "production",
    useCdn: false
  });
  const builder = imageUrlBuilder(client)
  const profile = {
    title: "Dhananjay Kumar",
    name: "Dhananjay",

    fbLink: "https://facebook.com/",
    twitterLink: "https://twitter.com/",
    instagramLink: "https://instagram.com/",
  }


  return (
    <><>
      <Script src="assets/js/main.js"></Script>
      <Head>

        <meta charset="utf-8" />
        <meta content="IE=edge,chrome=1" httpEquiv="X-UA-Compatible" />
        <meta content="width=device-width, initial-scale=1, shrink-to-fit=no" name="viewport" />
        <title>{profile.title} - Software Geek</title>
        <meta property="og:title" content="Homepage | Data Science Portfolio" />
        <meta property="og:locale" content="en_US" />
        <link rel="canonical" href="//" />
        <meta property="og:url" content="//" />
        <meta name="description" content="Data Science,Dhananjay Portfolio,Sanity.io,Nextjs,ReactJs portfolio" />
        <link rel="icon" type="image\png" href="assets\img\dk-favicon.ico" />
        <meta name="theme-color" content="#5540af" />
        <meta property="og:site_name" content="Data Science Portfolio" />
        <meta property="og:image" content="assets\img\social.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@tailwindmade" />
        <link crossOrigin="crossorigin" href="https://fonts.gstatic.com" rel="preconnect" />
        <link as="style" href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&family=Raleway:wght@400;500;600;700&display=swap" rel="preload" />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&family=Raleway:wght@400;500;600;700&display=swap"
          rel="stylesheet" />
        <link href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css" rel="stylesheet" />
        <link crossOrigin="anonymous" href="/assets/styles/main.min.css" media="screen" rel="stylesheet" />
        <script defer src="https://unpkg.com/@alpine-collective/toolkit@1.0.0/dist/cdn.min.js"></script>
        <script defer src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"></script>


      </Head>
      <NavBar profile={profile} />

      <div className="relative bg-cover bg-center bg-no-repeat py-8" style={{ backgroundImage: "url(/assets/img/bg-image.jpg)" }}>
        <div
          className="absolute inset-0 z-20   bg-cover bg-center bg-no-repeat">


        </div>
        <div className="container relative z-30 pt-20 pb-12 sm:pt-48 sm:pb-50 lg:pt-50 lg:pb-48">

          <div className="flex flex-col items-center justify-center lg:flex-row">
            <div className="rounded-full border-8 border-cyan-500 shadow-xl">
              <img src="assets/img/img-bg.jpg" className="h-48 rounded-full sm:h-56" alt="author" />
            </div>
            <div className="pt-8 sm:pt-10 lg:pl-8 lg:pt-0">
              <h1 className="text-center font-header text-4xl text-white sm:text-left sm:text-5xl md:text-6xl">
                Hello I&apos;m <span className="text-cyan-500">Dhananjay Kumar</span>
              </h1>
              <div className="flex flex-col justify-center pt-3 sm:flex-row sm:pt-5 lg:justify-start">
                <div className="flex items-center justify-center pl-0 sm:justify-start md:pl-1">
                  <p className="font-body text-lg uppercase text-white">Let&apos;s connect</p>
                  <div className="hidden sm:block">
                    <i className="bx bx-chevron-right text-3xl text-cyan-500"></i>
                  </div>
                </div>
                <div className="flex items-center justify-center pt-5 pl-2 sm:justify-start sm:pt-0">
                  
                  <a href="#" className="mx-4">
            <Link href="https://www.linkedin.com/in/dhananjay45423/">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16"
                className="bi bi-linkedin text-cyan-500 dark:text-gray-50 hover:text-white">
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
              </svg>
            </Link>
          </a>
          <a href="#" className="mx-4">
            <Link href="mailto:dhananjay45423@gmail.com">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16"
                className="bi bi-envelope text-cyan-500 dark:text-gray-50 hover:text-white" >
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
              </svg>
            </Link>
          </a>
              <a className="mx-4">
            <Link href="https://github.com/dhananjay229">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16"
                className="bi bi-github text-cyan-500 hover:text-white" >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
              </svg>
            </Link>
          </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-grey-50" id="about">
        <div className="container flex flex-col items-center py-16 md:py-20 lg:flex-row">
          <div className="w-full text-center sm:w-3/4 lg:w-3/5 lg:text-left">
            <h2 className="font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
              Who am I?
            </h2>
            <h4 className="pt-6 font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
            Let&apos;s get acquainted! My name is Dhananjay Kumar
            </h4>
            <p className="pt-6 font-body leading-relaxed text-grey-20">
            My specialties include quickly learning new skills and programming languages,
            problem solving. So far I have worked on C++, Python(NumPy,Pandas,Matplotlib,Seaborn), MySql, 
            Scikit-Learn, Tensorflow, and Git/GitHub technologies. I enjoy adapting to new programming 
            languages and expanding my collection of tools for analyzing data. I&apos;m still enthusiastically 
            grabbing onto any other programming languages, frameworks, or principles
            related to Data Science and Machine learning that I can solve the complex Business problems.
            </p>
            <div className="flex flex-col justify-center pt-6 sm:flex-row lg:justify-start">
              <div className="flex items-center justify-center sm:justify-start">
                <p className="font-body text-lg font-semibold uppercase text-grey-20">
                  Connect with me
                </p>
                <div className="hidden sm:block">
                  <i className="bx bx-chevron-right text-2xl text-primary"></i>
                </div>
              </div>
              <div className="flex items-center justify-center pt-5 pl-2 sm:justify-start sm:pt-0">
              <a href="#" className="mx-4">
            <Link href="https://www.linkedin.com/in/dhananjay45423/">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16"
                className="bi bi-linkedin text-[#130F49] dark:text-gray-50 hover:text-cyan-500">
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
              </svg>
            </Link>
          </a>
          <a href="#" className="mx-4">
            <Link href="mailto:dhananjay45423@gmail.com">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16"
                className="bi bi-envelope text-[#130F49] dark:text-gray-50 hover:text-cyan-500" >
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
              </svg>
            </Link>
          </a>
              <a className="mx-4">
            <Link href="https://github.com/dhananjay229">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16"
                className="bi bi-github text-[#130F49] hover:text-cyan-500" >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
              </svg>
            </Link>
          </a>
          
          
              </div>
            </div>
          </div>
          <div className="w-full pl-0 pt-10 sm:w-3/4 lg:w-2/5 lg:pl-12 lg:pt-0">
            <div>
              <div className="flex items-end justify-between">
                <h4 className="font-body font-semibold uppercase text-black">
                  C/C++
                </h4>
                <h3 className="font-body text-3xl font-bold text-[#130F49]">70%</h3>
              </div>
              <div className="mt-2 h-3 w-full rounded-full bg-lila">
                <div className="h-3 rounded-full bg-cyan-500" style={{ "width": "70%" }}></div>
              </div>
            </div>
            <div className="pt-6">
              <div className="flex items-end justify-between">
                <h4 className="font-body font-semibold uppercase text-black">
                  My Sql
                </h4>
                <h3 className="font-body text-3xl font-bold text-[#130F49]">70%</h3>
              </div>
              <div className="mt-2 h-3 w-full rounded-full bg-lila">
                <div className="h-3 rounded-full bg-cyan-500" style={{ "width": "70%" }}></div>
              </div>
            </div>
            <div className="pt-6">
              <div className="flex items-end justify-between">
                <h4 className="font-body font-semibold uppercase text-black">Python</h4>
                <h3 className="font-body text-3xl font-bold text-[#130F49]">75%</h3>
              </div>
              <div className="mt-2 h-3 w-full rounded-full bg-lila">
                <div className="h-3 rounded-full bg-cyan-500" style={{ "width": "75%" }}></div>
              </div>
            </div>            
            <div className="pt-6">
              <div className="flex items-end justify-between">
                <h4 className="font-body font-semibold uppercase text-black">Machine Learning</h4>
                <h3 className="font-body text-3xl font-bold text-[#130F49]">75%</h3>
              </div>
              <div className="mt-2 h-3 w-full rounded-full bg-lila">
                <div className="h-3 rounded-full bg-cyan-500" style={{ "width": "75%" }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="container py-16 md:py-20" id="services">
        <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
          Here&apos;s what I&apos;m good at
        </h2>
        <h3 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
          These are the technology which I want to work
        </h3>

        <div className="grid grid-cols-1 gap-6 pt-10 sm:grid-cols-2 md:gap-10 md:pt-12 lg:grid-cols-3">
          <div className="group rounded px-8 py-12 shadow hover:bg-primary">
            <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
              <div className="hidden group-hover:block">
                <img src="/assets/img/icon-development-white.svg" alt="development icon" />
              </div>
              <div className="block group-hover:hidden">
                <img src="/assets/img/icon-development-black.svg" alt="development icon" />
              </div>
            </div>
            <div className="text-center">
              <h3 className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-cyan-500 lg:text-xl">
                WEB DEVELOPMENT
              </h3>
              <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">
                Html, Css, ReactJs, NextJs, Tailwind, Sanity.io.
              </p>
            </div>
          </div>
          <div className="group rounded px-8 py-12 shadow hover:bg-primary">
            <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
              <div className="hidden group-hover:block">
                <img src="/assets/img/ds-white.svg" alt="content marketing icon" className="text-white"/>
              </div>
              <div className="block group-hover:hidden">
                <img src="/assets/img/ds.svg" alt="content marketing icon" />
              </div>
            </div>
            <div className="text-center">
              <h3 className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-cyan-500 lg:text-xl">
                DATA SCIENCE
              </h3>
              <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">
                Python, NumPy, Pandas, Matplotlib, EDA
              </p>
            </div>
          </div>
          <div className="group rounded px-8 py-12 shadow hover:bg-primary">
            <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
              <div className="hidden group-hover:block">
                <img src="/assets/img/da-white.svg" alt="Mobile Application icon" />
              </div>
              <div className="block group-hover:hidden">
                <img src="/assets/img/da.svg" alt="Mobile Application icon" />
              </div>
            </div>
            <div className="text-center">
              <h3 className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-cyan-500 lg:text-xl">
                DATA ANALYSIS 
              </h3>
              <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">
                Power Bi, MySql, Excel
              </p>
            </div>
          </div>
          <div className="group rounded px-8 py-12 shadow hover:bg-primary">
            <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
              <div className="hidden group-hover:block">
                <img src="/assets/img/dv-white.svg" alt="Email Marketing icon" />
              </div>
              <div className="block group-hover:hidden">
                <img src="/assets/img/dv.svg" alt="Email Marketing icon" />
              </div>
            </div>
            <div className="text-center">
              <h3 className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-cyan-500 lg:text-xl">
                DATA VISUALIZATION
              </h3>
              <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">
                Pandas, Matplotlib, Ploty, Seaborn
              </p>
            </div>
          </div>
          <div className="group rounded px-8 py-12 shadow hover:bg-primary">
            <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
              <div className="hidden group-hover:block">
                <img src="/assets/img/ml1-white.svg" alt="Theme Design icon" />
              </div>
              <div className="block group-hover:hidden">
                <img src="/assets/img/ml1.svg" alt="Theme Design icon" />
              </div>
            </div>
            <div className="text-center">
              <h3 className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-cyan-500 lg:text-xl">
                MACHINE LEARNING 
              </h3>
              <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">
              Python, Scikit-Learn, Jupyter Notebook, Supervised and Unsupervised Algorithm
              </p>
            </div>
          </div>
          <div className="group rounded px-8 py-12 shadow hover:bg-primary">
            <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
              <div className="hidden group-hover:block">
                <img src="/assets/img/dl-white.svg" alt="Graphic Design icon" />
              </div>
              <div className="block group-hover:hidden">
                <img src="/assets/img/dl.svg" alt="Graphic Design icon" />
              </div>
            </div>
            <div className="text-center">
              <h3 className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-cyan-500 lg:text-xl">
                DEEP LEARNING
              </h3>
              <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">
                Python, Google Colab, Tensorflow, Pytorch, Neural Network, CNN 
              </p>
            </div>
          </div>
        </div>
      </div>

      
      <div className="bg-gray-50" id="portfolio">
      <div className="container py-16 md:py-20">
        <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
          Check out my Portfolio
        </h2>
        <h3 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
          Here&apos;s what I have done with the past
        </h3>

        <div className="mx-auto grid w-full grid-cols-1 gap-8 pt-12 sm:w-3/4 md:gap-10 lg:w-full lg:grid-cols-2">

          {project.map((item) => {
            return <Link key={item.slug.current} href={"/project/" + item.slug.current} className="shadow">
              <div className="overflow-hidden cursor-pointer rounded-xl relative group">
                <div className="rounded-xl z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer
                 absolute from-black/80 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-30 text-white flex items-end">
                  <div>
                    <div className=" p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 
                    translate-y-4 pb-10 transform transition duration-300 ease-in-out">
                      <div className="font-bold text-cyan-500">{item.title}</div>
                      <div className="opacity-60 text-sm text-cyan-300 ">{item.metadesc}</div>
                    </div>
                  </div>
                </div>
                <img alt="" className="object-cover w-full aspect-[16/9]"
                  style={{ "backgroundImage": `url(${builder.image(item.blogimage).url() || '/assets/img/post-01.png'})`,
                  backgroundRepeat: 'no-repeat',backgroundPosition: 'center', backgroundSize: 'cover' }}
                // src="https://images.unsplash.com/photo-1650790362847-3c1dd609d0c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80" 
                />
              </div>
            </Link>
          })}
        </div>
        <Link href={'/projects'}>
            <div className="pt-10 flex flex-row justify-center">
              <button
                className="px-10 mt-8 py-2 bg-[#130F49] text-cyan-500 font-light rounded-md text-lg flex flex-row items-center
                 hover:bg-indigo-900 hover:text-cyan-500 " >             
                <p >More Projects</p>                
              </button>
            </div>
          </Link>
      </div>
    </div>

      

      <div className="container py-10 md:py-10" id="work">
        <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
          My work experience
        </h2>
        <h3 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
          Here&apos;s what I did after graduation
        </h3>

        <div className="relative mx-auto mt-12 flex w-full flex-col lg:w-2/3">
          <span className="left-2/5 absolute inset-y-0 ml-10 hidden w-0.5 bg-grey-40 md:block"></span>

          <div className="mt-8 flex flex-col text-center md:flex-row md:text-left">
            <div className="md:w-2/5">
              <div className="flex justify-center md:justify-start">
                <span className="shrink-0">
                  <img src="/assets/img/logo-tcz.svg" className="h-auto w-32" alt="company logo" />
                </span>
                <div className="relative ml-3 hidden w-full md:block">
                  <span className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 transform bg-grey-70"></span>
                </div>
              </div>
            </div>
            <div className="md:w-3/5">
              <div className="relative flex md:pl-18">
                <span
                  className="absolute left-8 top-1 hidden h-4 w-4 rounded-full border-2 border-grey-40 bg-white md:block"></span>

                <div className="mt-1 flex">
                  <i className="bx bxs-right-arrow hidden text-primary md:block"></i>
                  <div className="md:-mt-1 md:pl-8">
                    <span className="block font-body font-bold text-grey-40">Jun 2022 - Present</span>
                    <span className="block pt-2 font-header text-xl font-bold uppercase text-primary">Associate Technology</span>
                    <div className="pt-2">
                      <span className="block font-body text-black">
                      I worked as a Drupal Developer. 
                      Responsible for end-to-end website development and timely delivery along with server deployments.
                      Designing and implementing new features to the system and collaborating with front-end developers
                       for functional and intuitive implementation for optimal performance.
                      
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>

      

      <div className="bg-grey-50" id="blog">
        <div className="container py-16 md:py-20">
          <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
            I also like to write
          </h2>
          <h4 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
            Check out my latest posts!
          </h4>
          <div className="mx-auto grid w-full grid-cols-1 gap-6 pt-12 sm:w-3/4 lg:w-full lg:grid-cols-3 xl:gap-10">

            {blog.map((item) => {
              return <Link key={item.slug.current} href={"/blog/" + item.slug.current} className="shadow">
                <div><div style={{ "backgroundImage": `url(${builder.image(item.blogimage).url() || '/assets/img/post-01.png'})`,
                backgroundRepeat: 'no-repeat',backgroundPosition: 'center', backgroundSize: 'cover'  }}
                  className="group relative h-72 bg-cover bg-center bg-no-repeat sm:h-84 lg:h-64 xl:h-72">
                  <span
                    className="absolute inset-0 block bg-gradient-to-b from-blog-gradient-from to-blog-gradient-to bg-cover bg-center bg-no-repeat
                     opacity-10 transition-opacity group-hover:opacity-50"></span>
                  <span
                    className="absolute right-0 bottom-0 mr-4 mb-4 block rounded-full  px-6 py-2 hover:bg-indigo-900
                    text-center font-body text-sm text-cyan-500 md:text-base cursor-pointer bg-[#130F49]">
                      Read More</span>
                </div>
                  <div className="bg-white py-6 px-5 xl:py-8">
                    <span className="block font-body text-lg font-semibold text-black"> {item.title}</span>
                    <span className="block pt-2 font-body text-grey-20">{item.metadesc}</span>
                  </div></div>
              </Link>
            })}
          </div>
          <Link href={'/blogs'}>
            <div className="  flex flex-row justify-center">
              <button
                className="px-10 mt-8 py-2 bg-[#130F49] text-cyan-500 font-light rounded-md text-lg flex flex-row items-center
                 hover:bg-indigo-900 hover:text-cyan-500 " >             
                <p >More Blogs</p>                
              </button>
            </div>
          </Link>
        </div>

      </div>

      

<div className="bg-[#130F49]">
      <div className="container flex flex-col justify-between py-6 sm:flex-row">
        <p className="text-center font-body text-white md:text-left">
          ©Designed & Built by Dhananjay Kumar
        </p>
        <div className="flex items-center justify-center pt-5 sm:justify-start sm:pt-0">
          <a className="mx-4">
            <Link href="https://github.com/dhananjay229">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16"
                className="bi bi-github text-white hover:text-cyan-500" >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
              </svg>
            </Link>
          </a>
          <a href="#" className="mx-4">
            <Link href="mailto:dhananjay45423@gmail.com">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16"
                className="bi bi-envelope text-white dark:text-gray-50 hover:text-cyan-500" >
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
              </svg>
            </Link>
          </a>
          <a href="#" className="mx-4">
                <Link href="https://www.linkedin.com/in/dhananjay45423/">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16"
                    className="bi bi-linkedin text-white dark:text-gray-50 hover:text-cyan-500">
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                  </svg>
                </Link>
              </a>
          
        </div>
      </div>
    </div>

      </></>

  )
}


export async function getServerSideProps(context) {
  const client = createClient({
    projectId: "ze1uahs4",
    dataset: "production",
    useCdn: false
  });
  const query = `*[_type == "blog"][0...3]`;
  const blog = await client.fetch(query);

  const projectquery = `*[_type == "project"][0...4]`;
  const project = await client.fetch(projectquery);

  const profileQuery = `*[_type == "profile"][0]`;
  const profile = await client.fetch(profileQuery);

  return {
    props: {
      blog,
      profile,
      project
    }
  }
}

