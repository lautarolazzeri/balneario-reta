'use client'
import Link from 'next/link';
import React from 'react';
import { slide as Menu } from 'react-burger-menu';

function Sidebar() {
  return (
    <div className='hmb-bg'>
      <Menu>
        <Link href="./">
          <p className='menu-item inicioitem'>
            Inicio
          </p>
        </Link>
        <Link href="/alojamientos">
          <p className='menu-item inicioitem'>
            Alojamientos
          </p>
        </Link>
        <Link href="/turismo">
          <p className='menu-item'>
            Turismo
          </p>
        </Link>
        <Link href="/sobre-balneario-reta">
          <p className='menu-item'>
            Información
          </p>
        </Link>
        <Link href="/servicios">
          <p className='menu-item'>
            Servicios
          </p>
        </Link>
        <Link href="/">
          <p className='menu-item'>
            Imágenes de Reta
          </p>
        </Link>
        <Link href="#">
          <p className='menu-item'>
            Contacto
          </p>
        </Link>
      </Menu>
    </div>
  );
};

export default Sidebar;