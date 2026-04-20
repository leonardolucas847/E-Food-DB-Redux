import { createGlobalStyle } from 'styled-components'

export const cores = {
  vermelho: '#e66767',
  branco: '#ffffff',
  amarelo: '#ffebd9',
  icon: '#ffb930',
  cinza: '#a0a1a1ff',
  fundo: '#fff8f2'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;

  }
    body{
    background-color: ${cores.fundo};
    }

    .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }
  `
