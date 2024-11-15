
import TelaInical from '../src/assets/components/dashboard/TelaInicial'
import React, { useState } from 'react';
import { CarrinhoProvider } from '../src/assets/components/context/CarrinhoContext';


const App = () => {

  return (
    <div>
      <CarrinhoProvider>
        <MeuCarrinho>
          <TelaInical />
        </MeuCarrinho>
      </CarrinhoProvider>
    </div>
  );
};

export default App;

