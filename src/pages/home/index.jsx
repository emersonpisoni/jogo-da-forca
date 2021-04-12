import React from 'react';
import './index.css'

export const Home = () => {
    return (
        <div className='container'>
            <p>
                Jogo da forca
            </p>
            <div className='buttons'>
                <button>
                    Iniciar Jogo
            </button>
                <button>
                    Ranking
            </button>
            </div>
        </div>
    )
}
