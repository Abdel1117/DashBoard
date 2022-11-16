import React from 'react'
import { useState } from 'react';
import { FcBusinessman, FcBusiness, FcPieChart, FcBullish, FcBearish } from "react-icons/fc";
import DataGraph from '../../compenants/DataGraph';
export default function Home() {
  const [isDown, setIsDown] = useState(false);

  return (
    <section className='grid grid-cols-1 lg:grid-cols-3 grid-rows-auto gap-4 w-100'>

      <div className='flex justify-evenly flex-wrap'>


        <div className='border bg-white rounded p-4 shadow-lg w-100 h-auto mb-4'>
          <div className='flex items-center justify-between '>
            <h2 className='text-xl'>Clients</h2>
            <FcBusinessman size={"25px"} />
          </div>
          <p className='text-xl lg:text-3xl my-5'>35 478</p>
          <p>+5,8% Depuis le dernier mois</p>
        </div>

        <div className='border bg-white rounded p-4 shadow-lg w-100 h-auto mb-4'>
          <div className='flex items-center justify-between '>
            <h2 className='text-xl'>Commande</h2>
            <FcBusiness size={"25px"} />
          </div>
          <p className='text-xl lg:text-3xl my-5'>5,547</p>
          <p>+5,8% Depuis le dernier mois</p>
        </div>



        <div className='border bg-white rounded p-4 shadow-lg w-100 h-auto'>
          <div className='flex items-center justify-between '>
            <h2 className='text-xl'>Revenue </h2>
            <FcPieChart size={"25px"} />
          </div>
          <p className='text-xl lg:text-3xl my-5'>5,547€</p>
          <p>+5,8% Depuis le dernier mois</p>
        </div>

        <div className='border bg-white rounded p-4 shadow-lg w-100 h-auto'>
          <div className='flex items-center justify-between '>
            <h2 className='text-xl'>Expantion </h2>
            {
              isDown ?
                <FcBearish size={"25px"} />
                :
                <FcBullish size={"25px"} />
            }
          </div>
          <p className='text-xl lg:text-3xl my-5'> +30,47%</p>
          <p>+5,8% Depuis le dernier mois</p>
        </div>

      </div>
      <div className='border bg-white shadow-lg lg:col-start-2 lg:col-end-4 h-[450px]'>
        <DataGraph />
      </div>
    </section >
  )
}
