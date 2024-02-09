
import imagenTimeless from '../pictures/Timeless11.png';
import imagenConserGPT from '../pictures/consergpt.jpg';
import react from '../pictures/react.png';
import vue from '../pictures/vue.png';
import spring from '../pictures/springboot.png';
import node from '../pictures/node.png';
import python from '../pictures/python.png';
import mixtral from '../pictures/mixtral.png';
import langchain from '../pictures/langchain.png';

const Project = () => {

    return(
      <div class="relative flex min-h-screen flex-col justify-items-start overflow-hidden bg-slate-100 py-6 sm:py-12">
        <div class="min-h-28" >
          <div class="max-w-screen-lg mx-auto py-4">
            <h2 class="font-bold text-center text-6xl text-slate-700 font-display">
              Porfolio
            </h2>
            <p class="text-center mt-4 font-medium text-slate-500">My Projects</p>
            <div class="flex gap-6 mt-20">
              
              <div class="bg-white w-1/3 shadow rounded-lg overflow-hidden">
                <img src={imagenTimeless} class="object-cover h-52 w-full" alt="" />
                <div class="p-6">
                  <span class="block text-slate-400 font-semibold text-sm">Last Actualization: LLAMADA A API </span>
                  <div class="font-bold text-lg pb-3 border-b border-slate-300">
                    <a href="https://play.tailwindcss.com/TGny89rOkl?layout=horizontal">Timeless 11</a>
                    <div className='flex justify-center'></div>
                    <button class="middle none center mr-3 rounded-lg border hover:bg-gray-500/10 border-gray-500 py-1 px-6 font-sans text-xs font-bold uppercase text-gray-500 transition-all hover:opacity-75 focus:ring focus:ring-gray-200 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" data-ripple-dark="true">
                    Code
                    </button>
                    <button class="middle none center mr-3 rounded-lg border hover:bg-emerald-500/10 border-emerald-500 py-1 px-6 font-sans text-xs font-bold uppercase text-emerald-500 transition-all hover:opacity-75 focus:ring focus:ring-emerald-200 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" data-ripple-dark="true">
                    Deployment
                    </button>  
                    </div>
                    <div>
                        <span>Descripcion de proyecto</span>
                    </div>
                  <div class="flex mt-4 gap-4 items-center ">
                    <span class="bg-blue-200 text-blue-600 py-1 px-3 rounded-full text-xs">Web</span>
                    <span class="bg-purple-200 text-purple-600 py-1 px-3 rounded-full text-xs">Active</span>                    
                  </div>
                  <div class="flex mt-4 gap-4 items-center ">
                  <div class="bg-green-200 text-green-600 py-1 px-3 rounded-full text-xs flex items-center">
                    <span>Vue</span>
                    <img src={vue} className='ml-1 h-4 w-4'/> 
                    </div>
                    <div class="bg-green-200 text-green-600 py-1 pl-2 pr-3 rounded-full text-xs flex items-center">
                    <span>Spring</span>
                    <img src={spring} className='ml-0.5 h-4 w-4'/> 
                    </div>
                    <div class="bg-green-200 text-green-600 py-1 pl-2 pr-3 rounded-full text-xs flex items-center">
                    <span>Node</span>
                    <img src={node} className='ml-0.5 h-4 w-4'/> 
                    </div>
                    </div>
                </div>
              </div>
      
              <div class="bg-white w-1/3 shadow rounded-lg overflow-hidden">
                <img src={imagenTimeless} class="object-cover h-52 w-full" alt="" />
                <div class="p-6">
                  <span class="block text-slate-400 font-semibold text-sm">Last Actualization: LLAMADA A API </span>
                  <div class="font-bold text-lg pb-3 border-b border-slate-300">
                    <a href="https://play.tailwindcss.com/TGny89rOkl?layout=horizontal">Timeless 11</a>
                    <div className='flex justify-center'></div>
                    <button class="middle none center mr-3 rounded-lg border hover:bg-gray-500/10 border-gray-500 py-1 px-6 font-sans text-xs font-bold uppercase text-gray-500 transition-all hover:opacity-75 focus:ring focus:ring-gray-200 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" data-ripple-dark="true">
                    Code
                    </button>
                    <button class="middle none center mr-3 rounded-lg border hover:bg-emerald-500/10 border-emerald-500 py-1 px-6 font-sans text-xs font-bold uppercase text-emerald-500 transition-all hover:opacity-75 focus:ring focus:ring-emerald-200 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" data-ripple-dark="true">
                    Deployment
                    </button>  
                    </div>
                  <div class="flex mt-4 gap-4 items-center ">
                    <span class="bg-blue-200 text-blue-600 py-1 px-3 rounded-full text-xs">Web</span>
                    <span class="bg-purple-200 text-purple-600 py-1 px-3 rounded-full text-xs">Active</span>                    
                  </div>
                  <div class="flex mt-4 gap-4 items-center ">
                  <div class="bg-green-200 text-green-600 py-1 px-3 rounded-full text-xs flex items-center">
                    <span>Vue</span>
                    <img src={vue} className='ml-1 h-4 w-4'/> 
                    </div>
                    <div class="bg-green-200 text-green-600 py-1 pl-2 pr-3 rounded-full text-xs flex items-center">
                    <span>Spring</span>
                    <img src={spring} className='ml-0.5 h-4 w-4'/> 
                    </div>
                    <div class="bg-green-200 text-green-600 py-1 pl-2 pr-3 rounded-full text-xs flex items-center">
                    <span>Node</span>
                    <img src={node} className='ml-0.5 h-4 w-4'/> 
                    </div>
                    </div>
                </div>
              </div>
      
              <div class="bg-white w-1/3 shadow rounded-lg overflow-hidden">
                <img src={imagenConserGPT} class="object-cover h-52 w-full" alt="" />
                <div class="p-6">
                  <span class="block text-slate-400 font-semibold text-sm">Last Actualization: LLAMADA A API </span>
                  <div class="font-bold text-lg pb-3 border-b border-slate-300">
                    <a href="https://play.tailwindcss.com/TGny89rOkl?layout=horizontal">ConserGPT</a>
                    <div className='flex justify-center'></div>
                    <button class="middle none center mr-3 rounded-lg border hover:bg-gray-500/10 border-gray-500 py-1 px-6 font-sans text-xs font-bold uppercase text-gray-500 transition-all hover:opacity-75 focus:ring focus:ring-gray-200 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" data-ripple-dark="true">
                    Code
                    </button>
                    <button class="middle none center mr-3 rounded-lg border hover:bg-emerald-500/10 border-emerald-500 py-1 px-6 font-sans text-xs font-bold uppercase text-emerald-500 transition-all hover:opacity-75 focus:ring focus:ring-emerald-200 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" data-ripple-dark="true">
                    Deployment
                    </button>  
                    </div>
                  <div class="flex mt-4 gap-4 items-center ">
                    <span class="bg-yellow-200 text-yellow-600 py-1 px-3 rounded-full text-xs">IA</span>
                    <span class="bg-purple-200 text-purple-600 py-1 px-3 rounded-full text-xs">Active</span>                    
                  </div>
                  <div class="flex mt-4 gap-4 items-center ">
                  <div class="bg-blue-200 text-blue-600 py-1 px-3 rounded-full text-xs flex items-center">
                    <span>Python</span>
                    <img src={python} className='ml-1 h-4 w-4'/> 
                    </div>
                    <div class="bg-orange-200 text-orange-600 py-1 pl-2 pr-3 rounded-full text-xs flex items-center">
                    <span>Mixtral</span>
                    <img src={mixtral} className='ml-1.5 h-4 w-4'/> 
                    </div>
                    <div class="bg-sky-200 text-sky-600 py-1 pl-2 pr-3 rounded-full text-xs flex items-center">
                    <span>LangChain</span>
                    <img src={langchain} className='ml-0.5 h-4 w-4'/> 
                    </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )


}
export default Project;