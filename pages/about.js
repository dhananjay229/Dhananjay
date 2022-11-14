import React from 'react'
import { useRef } from "react";
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { createClient } from "next-sanity";
import PortableText from "react-portable-text"
import Script from "next/script"
import { useEffect } from 'react';
import imageUrlBuilder from '@sanity/image-url'
import Link from 'next/link'
import NavBar from '../components/NavBar';



const onButtonClick = () => {
  // using Java Script method to get PDF file
  fetch('resume.pdf').then(response => {
    response.blob().then(blob => {
      // Creating new object of PDF file
      const fileURL = window.URL.createObjectURL(blob);
      // Setting various property values
      let alink = document.createElement('a');
      alink.href = fileURL;
      alink.download = 'resume.pdf';
      alink.click();
    })
  })
}

const About = ({ profile }) => {



  return (<><>

    <div>
      <Script src="./next.config.js"></Script>
      <Script src="./tailwind.config.js"></Script>

      <Head>
        <meta charset="utf-8" />
        <meta content="IE=edge,chrome=1" httpEquiv="X-UA-Compatible" />
        <meta content="width=device-width, initial-scale=1, shrink-to-fit=no" name="viewport" />

        <meta property="og:title" content="Data Science Portfolio" />
        <meta property="og:locale" content="en_US" />
        <link rel="canonical" href="//post" />
        <meta property="og:url" content="//post" />
        <meta name="description"
          content="Data Science,Portfolio,Design,Template,Portfolio Theme,Sanity.io,Nextjs portfolio" />

        <link rel="icon" type="image/png" href="/assets/img/dk-favicon.ico" />
        <meta name="theme-color" content="#5540af" />
        <meta property="og:site_name" content="Data Science Portfolio" />
        <meta property="og:image" content="//assets/img/social.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@tailwindmade" />
        <link crossOrigin="crossorigin" href="https://fonts.gstatic.com" rel="preconnect" />

        <link as="style"
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&family=Raleway:wght@400;500;600;700&display=swap"
          rel="preload" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&family=Raleway:wght@400;500;600;700&display=swap"
          rel="stylesheet" />
        <link href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css" rel="stylesheet" />
        <link crossOrigin="anonymous" href="/assets/styles/main.min.css" media="screen" rel="stylesheet" />
        <script defer src="https://unpkg.com/@alpine-collective/toolkit@1.0.0/dist/cdn.min.js"></script>
        <script defer src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"></script>
//         <script
//           type="text/javascript"
//           src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js">
//         </script>
//         <script type='text/javascript' src='https://cdn.jsdelivr.net/npm/emailjs-com@3/dist/email.min.js'></script>


         
       // <script src="https://www.google.com/recaptcha/api.js?&render=explicit" async defer></script>
//         <script src="https://unpkg.com/react-tabs/dist/react-tabs.production.min.js" />


      </Head>

      <NavBar profile={profile} />
      <div className="p-4 text-black ">
        <div className="max-w-9xl mx-auto flex flex-col items-center px-5 py-10 lg:flex-row">
         
          <div className="w-3/5 pr-1 lg:w-2/5 pb-10">
            <img src="assets/img/img-prl.jpg" className=" hidden object-cover object-center lg:inline-block rounded-2xl" alt="image" />
            <img src="assets/img/img-prl.jpg" className=" inline-block object-cover object-center lg:hidden rounded-2xl" alt="image" />
          </div>
          <div className="flex flex-col items-center pl-0 text-center lg:mb-100 lg:w-1/2 lg:flex-grow
              lg:items-start lg:pl-12 lg:pr-24 lg:text-left lg:pb-24">
            <h2 className="pb-4 text-2xl font-bold leading-tight lg:text-4xl">
              What&apos;s up, Dear Reader I&apos;m <span className="text-cyan-500">Dhananjay Kumar</span>
            </h2>
            <p className="text-md mb-8 ">
              I am currently working as Associate Technology at Techchefz Digital pvt.ltd.<br></br>
              I am lucky to work from home, while enjoying my family.<br></br>
              I work with various technologies and frameworks tools. All the skills and tools I use are self-taught
              and expanding my horizons. I love exploring new technologies and being a practitioner
              I am much interested in working with Data Science related application which excite me a lot.
              <br></br>
              You can find my work, thoughts, and ideas here.<br></br>
              Check out my portfolio to see iPython notebooks and Github repos for some of the projects I&apos;ve worked on.
            </p>
            <div className="flex ">
              <div className="mr-8">
                <button onClick={onButtonClick} className="bg-[#130F49] hover:bg-indigo-900 text-cyan-500 font-bold py-2 px-4 rounded inline-flex items-center">
                  <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" /></svg>
                  <span>Resume</span>
                </button>
              </div>
              <button className="bg-[#130F49] hover:bg-indigo-900 text-cyan-500 font-bold py-2 px-4 rounded inline-flex items-center">
                <svg className="fill-current text-cyan-500 w-4 h-4" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" >
                  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"
                    fill="cyan"></path>
                </svg>
                <a href="mailto:dhananjay45423@gmail.com" className="ml-2">Hire Me</a>
              </button>
            </div>

            <div className=" mt-10 flex flex-row items-center space-x-8">

              <a className="">
                <Link href="https://github.com/dhananjay229">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" viewBox="0 0 16 16"
                    className="bi bi-github text-[#130F49] dark:text-gray-50 hover:text-cyan-500" >
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                  </svg>
                </Link>
              </a>

              <a href="#" className="">
                <Link href="mailto:dhananjay45423@gmail.com">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" viewBox="0 0 16 16"
                    className="bi bi-envelope text-[#130F49] dark:text-gray-50 hover:text-cyan-500" >
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                  </svg>
                </Link>
              </a>
              <a href="#" className="">
                <Link href="https://www.linkedin.com/in/dhananjay45423/">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" viewBox="0 0 16 16"
                    className="bi bi-linkedin text-[#130F49] dark:text-gray-50 hover:text-cyan-500">
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                  </svg>
                </Link>
              </a>
              <a href="#" className="">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" viewBox="0 0 16 16"
                  className="bi bi-globe text-[#130F49] dark:text-gray-50 hover:text-cyan-500"  >
                  <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z" />
                </svg>
              </a>
            </div>

          </div>
        </div>
      </div>

      <div>
        <div className="px-8 text-gray-900 flex bg-grey-50">
          <div className="w-full max-w-screen-lg mx-auto my-8">
            <section className="my-2">
              <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
                Education
              </h2>
              <div className="py-16 md:py-20">
                <div className="flex flex-col">
                  <div className="">
                    <div className="component flex ">
                      <div className="w-full p-8 shadow-lg rounded-lg bg-white text-center relative">
                        <div className="absolute top-0 left-0 right-0 ">
                          <div className="inline-block bg-indigo-200 rounded-full p-8 transform -translate-y-1/2">

                            <div className="w-10 h-10">
                              <img src="assets/img/qualification.png" alt="image" />
                            </div>
                          </div>
                        </div>
                        <div className="mt-20 uppercase text-indigo-700 font-bold">Ramgarh Engineering College, Ramgarh</div>
                        <div className="mt-6 text-sm text-gray-600"> I completed my degree in Bachelor of Technology in Computer
                          Science and Engineering in Aug, 2021 with 8.01 CGPA.
                          <br></br>
                          I have strong knowledge in system subject like Operating System, Database, Computer Network, Algorithm
                          <br></br> and i have completed some online courses which help me to improve my Knowledge.

                        </div>

                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </section>
          </div>
        </div>
      </div>

      <section className="mt-10">
        <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
          Course & Certificate
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 mx-2 md:grid-cols-2 gap-6 max-w-6xl md:mx-auto my-20">

          <div className="bg-white card p-8 shadow rounded-md items-center space-x-4 hover:cursor-pointer hover:shadow-lg transition duration-200">
            <h6 className="uppercase text-indigo-700 font-bold">Python for Data Science</h6>
            <h4 className="mt-2 text-indigo-500 border-indigo-200">NPTEL(IIT Madras)</h4>
            <p className="text-sm text-gray-600 mb-2">This is the first certificate of my journey in Data Science
              . I have achieved it in December 2020. where I learned about python, EDA, and data visualization tools.</p>
            <a href="https://drive.google.com/file/d/1-YdBsAbriAPIF8_ujkatiOdieS3Hu9Ez/view?usp=sharing"
              className="text-indigo-700 border-indigo-200 hover:border-indigo-500 hover:text-indigo-500">See Credential</a>
            <a href="https://github.com/dhananjay229/Data-Science"
              className="pl-20 text-indigo-700 border-indigo-200 hover:border-indigo-500 hover:text-indigo-500">Github</a>
          </div>
          <div className="bg-white card p-8 shadow rounded-md items-center space-x-4 hover:cursor-pointer hover:shadow-lg transition duration-200">
            <h6 className="uppercase text-indigo-700 font-bold">Introduction to Machine Learning</h6>
            <h4 className="mt-2 text-indigo-500 border-indigo-200">NPTEL(IIT Madras)</h4>
            <p className="text-sm text-gray-600 mb-2">Learn how to build machine learning models in Python using popular machine learning
              libraries NumPy and scikit-learn. and  train supervised machine learning models for prediction.</p>
            <a href="https://drive.google.com/file/d/1jev8TlIW9s2Uq6uhlHm99tpRFoLBpCWr/view?usp=sharing"
              className="text-indigo-700 border-indigo-200 hover:border-indigo-500 hover:text-indigo-500" >See Credential</a>
            <a href="https://github.com/dhananjay229/Machine_Learning"
              className="pl-20 text-indigo-700 border-indigo-200 hover:border-indigo-500 hover:text-indigo-500">Github</a>

          </div>
          <div className="bg-white card p-8 shadow rounded-md items-center space-x-4 hover:cursor-pointer hover:shadow-lg transition duration-200">
            <h6 className="uppercase text-indigo-700 font-bold">Neural Network and Deep Learning</h6>
            <h4 className="mt-2 text-indigo-500 border-indigo-200">COURSERA</h4>
            <p className="text-sm text-gray-600 mb-2">I learned about the foundational concept of neural networks and deep learning.
              where I build and train neural network architectures such as Convolutional Neural Networks.</p>
            <a href="https://coursera.org/verify/DDZZLG7LKQ9Q"
              className="text-indigo-700 border-indigo-200 hover:border-indigo-500 hover:text-indigo-500">See Credential</a>
            <a href="https://github.com/dhananjay229/Facial_Expression_Recognition"
              className="pl-20 text-indigo-700 border-indigo-200 hover:border-indigo-500 hover:text-indigo-500">Github</a>
          </div>
          <div className="bg-white card p-8 shadow rounded-md items-center space-x-4 hover:cursor-pointer hover:shadow-lg transition duration-200">
            <h6 className="uppercase text-indigo-700 font-bold">Natural Language Processing Nanodegree</h6>
            <h4 className="mt-2 text-indigo-500 border-indigo-200">UDACITY</h4>
            <p className="text-sm text-gray-600 mb-2">Learn text processing fundamentals, including stemming and lemmatization. Explore machine
              learning methods in sentiment analysis. Build a speech tagging model.</p>
            <a href="https://graduation.udacity.com/confirm/PLK4N6KK"
              className="text-indigo-700 border-indigo-200 hover:border-indigo-500 hover:text-indigo-500">See Credential</a>
            <a href="https://github.com/dhananjay229/Natural_Language_Processing_UDACITY"
              className="pl-20 text-indigo-700 border-indigo-200 hover:border-indigo-500 hover:text-indigo-500">Github</a>
          </div>
        </div>
      </section>

    </div>

    <section className="">
      <h1 className={`text-4xl font-bold text-center  my-10 gradient-text text-gray-700`}>
        Reach out
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 mx-2 md:grid-cols-3 gap-6 max-w-6xl md:mx-auto my-20">
        <div className="card p-8 shadow rounded-md flex flex-row items-center space-x-4 hover:cursor-pointer hover:shadow-lg transition duration-200">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="text-cyan-500 h-4 w-4"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22 12C22 10.6868 21.7413 9.38647 21.2388 8.1731C20.7362 6.95996 19.9997 5.85742 19.0711 4.92896C18.1425 4.00024 17.0401 3.26367 15.8268 2.76123C14.6136 2.25854 13.3132 2 12 2V4C13.0506 4 14.0909 4.20703 15.0615 4.60889C16.0321 5.01099 16.914 5.60034 17.6569 6.34326C18.3997 7.08594 18.989 7.96802 19.391 8.93848C19.7931 9.90918 20 10.9495 20 12H22Z"
              fill="currentColor"
            />
            <path
              d="M2 10V5C2 4.44775 2.44772 4 3 4H8C8.55228 4 9 4.44775 9 5V9C9 9.55225 8.55228 10 8 10H6C6 14.4182 9.58173 18 14 18V16C14 15.4478 14.4477 15 15 15H19C19.5523 15 20 15.4478 20 16V21C20 21.5522 19.5523 22 19 22H14C7.37259 22 2 16.6274 2 10Z"
              fill="currentColor"
            />
            <path
              d="M17.5433 9.70386C17.8448 10.4319 18 11.2122 18 12H16.2C16.2 11.4485 16.0914 10.9023 15.8803 10.3928C15.6692 9.88306 15.3599 9.42017 14.9698 9.03027C14.5798 8.64014 14.1169 8.33081 13.6073 8.11963C13.0977 7.90869 12.5515 7.80005 12 7.80005V6C12.7879 6 13.5681 6.15527 14.2961 6.45679C15.024 6.7583 15.6855 7.2002 16.2426 7.75732C16.7998 8.31445 17.2418 8.97583 17.5433 9.70386Z"
              fill="currentColor"
            />
          </svg>
          <p className=" font-semibold text-violet-700 ">

            <a href="tel:+91 9625285470">+91 9625285470</a>

          </p>

          {/* </div> */}
        </div>
        <div className="card p-8 shadow rounded-md flex flex-row items-center space-x-4 hover:shadow-lg cursor-pointer transition duration-200">
          <svg
            width="24"
            height="24"
            className="text-cyan-500 h-4 w-4"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3.00977 5.83789C3.00977 5.28561 3.45748 4.83789 4.00977 4.83789H20C20.5523 4.83789 21 5.28561 21 5.83789V17.1621C21 18.2667 20.1046 19.1621 19 19.1621H5C3.89543 19.1621 3 18.2667 3 17.1621V6.16211C3 6.11449 3.00333 6.06765 3.00977 6.0218V5.83789ZM5 8.06165V17.1621H19V8.06199L14.1215 12.9405C12.9499 14.1121 11.0504 14.1121 9.87885 12.9405L5 8.06165ZM6.57232 6.80554H17.428L12.7073 11.5263C12.3168 11.9168 11.6836 11.9168 11.2931 11.5263L6.57232 6.80554Z"
              fill="currentColor"
            />
          </svg>
          <p className=" font-semibold text-violet-700 ">
            {/* dhananjay45423@gmail.com */}
            <a href="mailto:dhananjay45423@gmail.com">dhananjay45423@gmail.com</a>
          </p>
        </div>
        <div className="card p-8 shadow rounded-md flex flex-row items-center space-x-4 hover:shadow-lg cursor-pointer transition duration-200">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className="text-cyan-500 h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M16.2721 10.2721C16.2721 12.4813 14.4813 14.2721 12.2721 14.2721C10.063 14.2721 8.27214 12.4813 8.27214 10.2721C8.27214 8.06298 10.063 6.27212 12.2721 6.27212C14.4813 6.27212 16.2721 8.06298 16.2721 10.2721ZM14.2721 10.2721C14.2721 11.3767 13.3767 12.2721 12.2721 12.2721C11.1676 12.2721 10.2721 11.3767 10.2721 10.2721C10.2721 9.16755 11.1676 8.27212 12.2721 8.27212C13.3767 8.27212 14.2721 9.16755 14.2721 10.2721Z"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.79417 16.5183C2.19424 13.0909 2.05438 7.39409 5.48178 3.79417C8.90918 0.194243 14.6059 0.054383 18.2059 3.48178C21.8058 6.90918 21.9457 12.6059 18.5183 16.2059L12.3124 22.7241L5.79417 16.5183ZM17.0698 14.8268L12.243 19.8965L7.17324 15.0698C4.3733 12.404 4.26452 7.97318 6.93028 5.17324C9.59603 2.3733 14.0268 2.26452 16.8268 4.93028C19.6267 7.59603 19.7355 12.0268 17.0698 14.8268Z"
              fill="currentColor"
            />
          </svg>
          <p className=" font-semibold text-violet-700 ">
            Sector-127, NOIDA-201313, INDIA
          </p>
        </div>
      </div>
    </section>


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


export default About;

