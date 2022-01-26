import Head from 'next/head'
import Header from '../../components/header'
import Footer from '../../components/footer'

export default function Cookie() {
  return (
    <div class="font-montserrat">
      <Head>
        <title>Sailia</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Roboto&display=swap" rel="stylesheet"></link>
      </Head>
      <Header /><noscript dangerouslySetInnerHTML={{ __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WT27B76"
height="0" width="0" style="display:none;visibility:hidden"></iframe>
`}}></noscript>
      <main class="bg-white rounded-2xl mt-10 flex-1 overflow-y-auto p-5 max-w-7xl mx-auto">
      <div class="max-w-3xl mx-auto pt-10 xl:max-w-none xl:ml-0 xl:mr-[15.5rem] xl:pr-16">
   <header id="header" class="relative z-20">
      <div>
         <h1 class="inline-block text-3xl font-extrabold text-gray-900 tracking-tight">Brand</h1>
      </div>
      <p class="mt-2 text-lg text-gray-700">Tailwind CSS brand assets and usage guidelines.</p>
   </header>
   <div id="content" class="relative z-20 prose mt-8">
      <h2 class="group flex whitespace-pre-wrap -ml-4 pl-4" id="trademark-usage-agreement">
         <a href="#trademark-usage-agreement" class="absolute -ml-10 flex items-center opacity-0 border-0 group-hover:opacity-100" aria-label="Anchor">
            <div class="w-6 h-6 text-gray-400 ring-1 ring-gray-900/5 rounded-md shadow-sm flex items-center justify-center hover:ring-gray-900/10 hover:shadow hover:text-gray-700">
               <svg width="12" height="12" fill="none" aria-hidden="true">
                  <path d="M3.75 1v10M8.25 1v10M1 3.75h10M1 8.25h10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path>
               </svg>
            </div>
         </a>
         <span>Trademark Usage Agreement</span>
      </h2>
      <p>The Tailwind name and logos are trademarks of Tailwind Labs Inc.</p>
      <p>You may not use the Tailwind name or logos in any way that could mistakenly imply any official connection with or endorsement of Tailwind Labs Inc. Any use of the Tailwind name or logos in a manner that could cause customer confusion is not permitted.</p>
      <p>This includes naming a product or service in a way that emphasizes the Tailwind brand, like “Tailwind Themes” or “Tailwind Studio”, as well as in domain names like “tailwindkits.com”.</p>
      <p>Instead, you must use your own brand name in a way that clearly distinguishes it from Tailwind CSS.  Examples that are permitted include “ComponentStudio for Tailwind CSS” or “UtilityThemes: Templates for Tailwind CSS”.</p>
      <p>Additionally, you may not use our trademarks for t-shirts, stickers, or other merchandise without explicit written consent.</p>
      <hr />
      <h2 class="group flex whitespace-pre-wrap -ml-4 pl-4" id="assets">
         <a href="#assets" class="absolute -ml-10 flex items-center opacity-0 border-0 group-hover:opacity-100" aria-label="Anchor">
            <div class="w-6 h-6 text-gray-400 ring-1 ring-gray-900/5 rounded-md shadow-sm flex items-center justify-center hover:ring-gray-900/10 hover:shadow hover:text-gray-700">
               <svg width="12" height="12" fill="none" aria-hidden="true">
                  <path d="M3.75 1v10M8.25 1v10M1 3.75h10M1 8.25h10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path>
               </svg>
            </div>
         </a>
         <span>Assets</span>
      </h2>
      <p>These assets are provided for use in situations like articles and video tutorials. They should not be used in any way that could be confusing for customers or imply any affiliation with Tailwind Labs Inc.</p>
</div>

   <div class="fixed z-20 top-[7.8125rem] bottom-0 right-[max(0px,calc(50%-42rem))] w-[19.5rem] py-10 px-8 overflow-y-auto hidden xl:block">
      <h5 class="text-gray-900 font-semibold mb-4 text-sm leading-6">On this page</h5>
      <ul class="text-gray-700 text-sm leading-6">
         <li><a href="#trademark-usage-agreement" class="block py-1 font-medium font-medium text-sky-500">Trademark Usage Agreement</a></li>
         <li><a href="#assets" class="block py-1 font-medium hover:text-gray-900">Assets</a></li>
         <li class="ml-4">
            <a href="#mark" class="group flex items-start py-1 hover:text-gray-900">
               <svg width="3" height="24" viewBox="0 -9 3 24" class="mr-2 text-gray-400 overflow-visible group-hover:text-gray-600">
                  <path d="M0 0L3 3L0 6" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path>
               </svg>
               Mark
            </a>
         </li>
         <li class="ml-4">
            <a href="#logotype" class="group flex items-start py-1 hover:text-gray-900">
               <svg width="3" height="24" viewBox="0 -9 3 24" class="mr-2 text-gray-400 overflow-visible group-hover:text-gray-600">
                  <path d="M0 0L3 3L0 6" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path>
               </svg>
               Logotype
            </a>
         </li>
      </ul>
   </div>
</div>
      </main>
      <Footer />
    </div>
  )
}
