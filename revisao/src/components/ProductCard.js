import React from 'react';
import "../ProductCard.css";

const ProductCard = ({titulo, imagem, alt, descricao, preco, caracteristicas}) => {
    return(
        <div className="card">
            <h2 className='titulo'>{titulo}</h2>
            <img src={imagem} alt = {alt} className='imagem'/>
            <div className='descricao'>{descricao}</div>
            <div className='preco'>{preco}</div>
            <div className='caracteristicas'>{caracteristicas}</div>
        </div>
    )
}

export default ProductCard

/*Criar um componente React chamado ProductCard que 
exiba informações detalhadas de um produto, como imagem, 
nome, descrição, preço e uma lista de características. */