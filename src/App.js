import "./App.css";
import warning from "./images/warning.svg";
import React, { useState } from "react";
import bg from "./images/bg.jpg";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <React.Fragment>
      <div className={`container ${darkMode ? "dark" : ""}`}>
        <div className="flex items-center max-w-sm p-6 mx-auto bg-white rounded-xl shadow-lg space-x-4 mt-12 h-24">
          <img className="w-12 h-12" src={warning} alt="" />
          <div className="h-12">
            <div className=" text-xl font-md text-black">Are You Sure?</div>
            <p className=" text-slate-600">You are about to delete a post</p>
          </div>
        </div>
        <div className="container mx-auto">
          <article>
            <h3>Aticle title</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A quidem,
              incidunt nesciunt delectus saepe nam tempora deleniti nisi
              dignissimos nobis ipsa illum et vel voluptatem vitae culpa
              suscipit laboriosam veritatis.
            </p>
          </article>
        </div>
        <div className="bg-slate-400 m-3 p-2 max-w-xs ">hello world</div>

        <div className="flex space-x-4 ml-3">
          <div>Item</div>
          <div>Item</div>
          <div>Item</div>
          <div>Item</div>
          <div>Item</div>
          <div>Item</div>
          <div>Item</div>
        </div>
        <div className="flex flex-col space-y-4 ml-3 mt-4">
          <div>Item</div>
          <div>Item</div>
          <div>Item</div>
          <div>Item</div>
          <div>Item</div>
          <div>Item</div>
          <div>Item</div>
        </div>
        <div className="space-y-4 my-5">
          <h2>typography</h2>
          <div className=" font-sans">Hello world</div>
          <div className=" font-serif">Hello world</div>
          <div className=" font-mono">Hello world</div>
          <div className=" font-Ubuntu">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            minima nihil dolores in laboriosam provident, inventore autem nisi
            dolorem eaque. Hic asperiores ullam quam ab aperiam tempora quisquam
            minus qui.
          </div>
        </div>
        <div className="space-y-5">
          <div className=" font-light">hello its awesome</div>
          <div className=" font-extralight">hello its awesome</div>
          <div className=" font-normal">hello its awesome</div>
          <div className=" font-medium">hello its awesome</div>
          <div className=" font-semibold">hello its awesome</div>
          <div className=" font-bold">hello its awesome</div>
          <div className=" font-extrabold">hello its awesome</div>
          <div className="">hello its awesome</div>
        </div>

        <div className="my-5">
          <div className="underline decoration-4 decoration-blue-500">
            Hello its very awesome
          </div>
          <div className="underline decoration-double">
            Hello its very awesome
          </div>
          <div className="underline decoration-dashed">
            Hello its very awesome
          </div>
          <div className="underline decoration-wavy underline-offset-4">
            Hello its very awesome
          </div>
        </div>
        <div>
          <div className=" capitalize">normal text</div>
        </div>
        <div className="flex items-end gap-3 justify-around">
          <div className="bg-orange-700 w-20 h-24">items</div>
          <div className="bg-orange-700 w-20 h-28">items</div>
          <div className="bg-orange-700 w-20 h-32">items</div>
          <div className="bg-orange-700 w-20 h-36">items</div>
          <div className="bg-orange-700 w-20 h-48">items</div>
          <div className="bg-orange-700 w-20 h-56">items</div>
          <div className="bg-orange-700 w-20 h-64">items</div>
        </div>
        <div className="w-screen h-screen bg-blue-300"></div>

        <div className=" relative w-1/2 h-24 bg-red-500">
          <p>Parent</p>
          <div className=" absolute bottom-0 right-0">Hello!!!</div>
        </div>
        <div className=" relative w-1/2 h-24 bg-red-500">
          <div className=" bg-red-900 absolut top-0 inset-x-0 h-12"></div>
        </div>
        <div className=" relative w-1/2 h-24 bg-red-500">
          <div className="bg-red-900 absolute inset-y-0 left-0 w-1/2"></div>
        </div>
        <div className=" relative w-1/2 h-24 bg-red-500">
          <div className="bg-red-900 absolute inset-x-0 bottom-0 h-1/2"></div>
        </div>
        <div className=" relative w-1/2 h-24 bg-red-500">
          <div className="bg-red-900 absolute inset-y-0 right-0 w-1/2"></div>
        </div>

        <div className=" bg-slate-400 w-screen h-96 p-6">
          <img className="h-24 w-24 float-right " src={warning} alt="" />
          <p className="text-left">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum
            voluptate aperiam nobis dolore amet possimus perferendis atque aut
            sed eum vitae doloribus nulla, natus suscipit dolores sunt. Cumque
            voluptate, ex omnis exercitationem provident reiciendis eius rem
            laborum alias animi. Voluptatem nobis laboriosam ducimus
            perspiciatis sint, accusamus labore quam placeat ex enim inventore!
            Numquam id, autem ratione excepturi commodi sint nulla?
          </p>
        </div>
        <div className=" bg-[url('./images/bg.jpg')] bg-cover bg-center  bg-no-repeat h-screen w-screen"></div>

        <div className="m-5 flex space-x-4">
          <h1>Intractivity</h1>
          <button className="bg-black rounded-lg py-3 px-5 text-white hover:bg-slate-500 active:bg-red-300">
            Submit
          </button>
          <button className="bg-black rounded-lg py-3 px-5 text-white focus:bg-slate-500">
            Submit
          </button>
          <button className="bg-black rounded-lg py-3 px-5 text-white active:bg-slate-500">
            Submit
          </button>
        </div>
        <a
          className=" group block bg-white shadow-lg rounded-lg my-6 mx-20 p-5 hover:bg-blue-300"
          href=""
        >
          <img className="h-20 w-20 float-right" src={warning} alt="" />
          <h2 className=" group-hover:text-white">Card title</h2>
          <p className="group-hover:text-white">Lorem ipsum dolor sit.</p>
        </a>

        <ul className="text-center">
          <li className=" first:bg-red-500 ">Items 1</li>
          <li className="even:bg-red-200 odd:bg-green-200">Items 2</li>
          <li className="even:bg-red-200 odd:bg-green-200">Items 3</li>
          <li className="even:bg-red-200 odd:bg-greed-200">Items 5</li>
          <li className="even:bg-red-200 odd:bg-green-200">Items 4</li>
        </ul>

        <div>
          columns
          <div className=" columns-5 gap-y-1">
            <img className="w-1/2 h-24 bg-black" src={warning} alt="" />
            <img className="w-1/2 h-24 bg-black" src={warning} alt="" />
            <img className="w-1/2 h-24 bg-black" src={warning} alt="" />
            <img className="w-1/2 h-24 bg-black" src={warning} alt="" />
            <img className="w-1/2 h-24 bg-black" src={warning} alt="" />
          </div>
        </div>
        <div>
          flexboxs
          <div className="flex flex-wrap justify-start gap-3 w-full h-96 bg-slate-400">
            <div className="bg-blue-300 p-10 border-2 shadow-lg border-blue-800 rounded-lg w-48 h-48">
              1
            </div>
            <div className="bg-blue-300 p-10 border-2 shadow-lg border-blue-800 rounded-lg w-48 h-48">
              2
            </div>
            <div className="bg-blue-300 p-10 border-2 shadow-lg border-blue-800 rounded-lg w-48 h-48">
              3
            </div>
          </div>
        </div>
        <div>
          grids
          <div className="grid grid-cols-3 gap-5">
            <div className="bg-blue-200 border-blue-600 border-2 col-span-2 row-span-2">
              Items
            </div>
            <div className="bg-blue-200 border-blue-600 border-2">Items</div>
            <div className="bg-blue-200 border-blue-600 border-2">Items</div>
            <div className="bg-blue-200 border-blue-600 border-2">Items</div>
            <div className="bg-blue-200 border-blue-600 border-2">Items</div>
          </div>
        </div>
        <div>
          transform and transition
          <button className="bg-blue-500 rounded px-4 py-2 m-5 hover:bg-blue-700 text-white">
            Submit
          </button>
          <button className="bg-blue-500 rounded px-4 py-2 m-5 hover:bg-blue-700 text-white transition-colors duration-500">
            Submit tramsition
          </button>
          transform
          <button className="bg-blue-500 rounded px-4 py-2 m-5 hover:bg-blue-700 text-white hover:rotate-12 transition-transform duration-500">
            Submit tramsition
          </button>
          <img
            src={bg}
            alt=""
            className="h-48 mx-auto shadow-xl rounded-lg my-10 hover:rotate-180 hover:skew-x-6 transition-transform duration-250 hover:scale-50"
          />
        </div>

        <div className="text-4xl">animations</div>

        <div>
          dark mode appliucationb
          <div className="container bg-white dark:bg-black px-6 py-8 m-10 border-black rounded-xl shadow-lg w-1/2 mx-auto ">
            <h1 className="text-black dark:text-white text-xl">Heading.</h1>
            <p className="text-slate-500 dark:text-slate-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              necessitatibus consectetur sapiente illum libero deleniti quos
              illo fugiat quisquam tempore, vel tenetur, optio fuga ratione enim
              repellat dolorum alias quis! Placeat sunt soluta aliquam magni
              beatae laudantium aperiam tempora praesentium!
            </p>
            <label className="relative inline-flex items-center cursor-pointer my-6">
              <input
                type="checkbox"
                value=""
                class="sr-only peer"
                onChange={() => setDarkMode(!darkMode)}
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                Toggle {darkMode ? "Dark" : "Light"} Mode
              </span>
            </label>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
