import React from 'react'
import { FcBusinessman, FcBusiness, FcPieChart,FcBullish, FcBearish } from "react-icons/fc";

export default function Home() {
  return (
    <section className='mx-1 grid grid-cols-2 gap-6 w-100'>
      <div className='grid grid-cols-2 gap-3'>

        <div className='border bg-white rounded p-4 shadow-lg w-100 h-auto flex flex-col justify-between'>
            

            <div className='flex items-center justify-between '>
              <h2 className='text-xl'>Clients</h2>
              <FcBusinessman  />
            </div>
               <p className='text-xl lg:text-3xl'>35 478</p>
               <p>+5,8 % Depuis le dernier mois</p>
            
        </div>
        <div className='border bg-white rounded p-4 shadow-lg w-100 h-auto'>
            <h2 className='text-xl'>Commande</h2>
            <FcBusiness />
               <p className=''>5,547</p>
               <p>+5,8 % Depuis le dernier mois</p>
        </div>
        <div className='border bg-white rounded p-4 shadow-lg w-100 h-auto'>
            <h2 className='text-xl'>Revenue </h2>
            <FcPieChart />
               <p className=''>5,547€</p>
               <p>+5,8 % Depuis le dernier mois</p>
        </div>
        <div className='border bg-white rounded p-4 shadow-lg w-100 h-auto'>
            <h2 className='text-xl'>Expantion </h2>
            <FcBullish />
            <FcBearish />
               <p className=''> +30,47%</p>
               <p>+5,8 % Depuis le dernier mois</p>
        </div>
      </div>

      <div className='border  bg-white p-1'>

      </div>
    </section>
  )
}
