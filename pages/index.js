import Head from 'next/head'


function Home() {
  return (
    <div class="w-full font-montserrat text-text-900">
      <Head>
        <title>Sailia</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Roboto&display=swap" rel="stylesheet"></link>
        <script dangerouslySetInnerHTML={{ __html: `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-WT27B76');
<<<<<<< HEAD
          `,
          }}
        ></script>
      </Head>

      <noscript
        dangerouslySetInnerHTML={{
          __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WT27B76"
        height="0" width="0" style="display:none;visibility:hidden"></iframe>
        `,
        }}
      ></noscript>
      <main class=" w-full flex-1 overflow-y-auto">

=======
          `}}>
          
        </script>

        </Head>
      <Header /><noscript dangerouslySetInnerHTML={{ __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WT27B76"
height="0" width="0" style="display:none;visibility:hidden"></iframe>
`}}></noscript>
      <main class=" w-full flex-1 overflow-y-auto">
        
        <Hero />
        <USP />
        <SVP/>
        <ToPricing text='Stop Organising. Get Sailing'/>
>>>>>>> parent of 6a3bea6 (SSR)
      </main>

    </div>
  )
}


export default Home