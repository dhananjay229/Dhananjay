import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { createClient } from "next-sanity";
import Script from "next/script"
import { useEffect } from 'react';
import imageUrlBuilder from '@sanity/image-url'
import Link from 'next/link'
import NavBar from '../components/NavBar'
import { useState } from 'react';


const Projects = ({ project, profile }) => {
  const [navbar, setNavbar] = useState(false);
  const client = createClient({
    projectId: "ze1uahs4",
    dataset: "production",
    useCdn: false
  });
  const builder = imageUrlBuilder(client)
  useEffect(() => {
    console.log("thnks")
  }, [])


  return (<><>

    <Script src="assets/js/main.js"></Script>
    <Script src="frontend/tailwind.config.js"></Script>
    <Head>

      <meta charset="utf-8" />
      <meta content="IE=edge,chrome=1" http-equiv="X-UA-Compatible" />
      <meta content="width=device-width, initial-scale=1, shrink-to-fit=no" name="viewport" />
      <title>{project.title}</title>
      <meta property="og:title" content="Data Science Portfolio" />
      <meta property="og:locale" content="en_US" />
      <link rel="canonical" href="//" />
      <meta property="og:url" content="//" />
      <meta name="description" content="Data Science,Portfolio,Design,Template,Portfolio Theme,Sanity.io,Nextjs portfolio" />
      <link rel="icon" type="image\png" href="assets\img\dk-favicon.ico" />
      <meta name="theme-color" content="#5540af" />
      <meta property="og:site_name" content="Data Science Portfolio" />
      <meta property="og:image" content="assets\img\social.jpg" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@tailwindmade" />
      <link crossorigin="crossorigin" href="https://fonts.gstatic.com" rel="preconnect" />
      <link as="style" href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&family=Raleway:wght@400;500;600;700&display=swap" rel="preload" />
      <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&family=Raleway:wght@400;500;600;700&display=swap"
        rel="stylesheet" />
      <link href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css" rel="stylesheet" />
      <link crossorigin="anonymous" href="/assets/styles/main.min.css" media="screen" rel="stylesheet" />
      <script defer src="https://unpkg.com/@alpine-collective/toolkit@1.0.0/dist/cdn.min.js"></script>
      <script defer src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"></script>


    </Head>


    <NavBar profile={profile} />



    <div className="bg-gray-50" id="portfolio">
      <div className="container py-16 md:py-20">
        <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
          Check out my Portfolio
        </h2>
        <h3 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
          Here's what I have done with the past
        </h3>

        <div className="mx-auto grid w-full grid-cols-1 gap-8 pt-12 sm:w-3/4 md:gap-10 lg:w-full lg:grid-cols-2">

          {project.map((item) => {
            return <Link key={item.slug.current} href={"/project/" + item.slug.current} className="shadow">
              <div className="overflow-hidden  aspect-video bg-red-400 cursor-pointer rounded-xl relative group">
                <div className="rounded-xl z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/80 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-30 text-white flex items-end">
                  <div>
                    <div className="transform-gpu  p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
                      <div className="font-bold text-cyan-500">{item.title}</div>
                      <div className="opacity-60 text-sm text-cyan-300 ">{item.metadesc}

                      </div>
                    </div>
                  </div>
                </div>
                <img alt="" className="object-cover w-full aspect-square group-hover:scale-110 transition duration-300 ease-in-out"
                  style={{ "backgroundImage": `url(${builder.image(item.blogimage).width(200).url() || '/assets/img/post-01.png'})` }}
                />
              </div>
            </Link>
          })}

        </div>
      </div>
    </div>

    {/* <section className="py-8 px-4">
        <div className="flex flex-wrap -mx-4">
          <div className="md:w-1/2 px-4 mb-8 md:mb-0">
            <img className="rounded shadow-md" src="https://source.unsplash.com/random/1280x720"/>

            </div>
          <div className="md:w-1/2 px-4 mb-8 md:mb-0">
            <img className="rounded shadow-md" src="https://source.unsplash.com/random/1280x720"/>

            </div>
        </div>
    </section> */}

    {/* <div className="container py-16 md:py-20" id="portfolio">
        <div className="mx-auto grid w-full grid-cols-1 gap-8 pt-12 sm:w-3/4 md:gap-10 lg:w-full lg:grid-cols-2">
        <a href="/" className="mx-auto transform transition-all hover:scale-105 md:mx-0">
            <img src="/assets/img/portfolio-apple.jpeg" className="w-full shadow" alt="portfolio image" />
          </a>
          
        </div>
      </div> */}
      
    

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

export default Projects
export async function getServerSideProps(context) {
  const client = createClient({
    projectId: "ze1uahs4",
    dataset: "production",
    useCdn: false
  });
  const query = `*[_type == "project"]`;
  const project = await client.fetch(query);

  const profileQuery = `*[_type == "profile"][0]`;
  const profile = await client.fetch(profileQuery);

  return {
    props: {
      project,
      profile
    }
  }
}

