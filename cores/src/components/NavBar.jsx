import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav>
      <Link to="/amarelo" className='config' id='amarelo'>Amarelo</Link>
      <Link to="/azul" className='config' id='azul'>Azul</Link>
      <Link to="/branco" className='config' id='branco'>Branco</Link>
      <Link to="/cinza" className='config' id='cinza'>Cinza</Link>
      <Link to="/laranja" className='config' id='laranja'>Laranja</Link>
      <Link to="/marrom" className='config' id='marrom'>Marrom</Link>
      <Link to="/preto" className='config' id='preto'>Preto</Link>
      <Link to="/verde" className='config' id='verde'>Verde</Link>
      <Link to="/vermelho" className='config' id='vermelho'>Vermelho</Link>
      <Link to="/violeta" className='config' id='violeta'>Violeta</Link>
    </nav>
  )
}

export default Navbar