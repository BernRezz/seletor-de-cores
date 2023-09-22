import React from 'react';
import './App.css'

class App extends React.Component {

  constructor(props) {

    super(props);

    this.state = {
      selectedColor: "branco",
    };

    this.btnStyleOn = {
      transition: "400ms",
      border: "turquoise 7px solid",
      padding: "15px"
    };

    this.btnStyleOff = {
      transition: "400ms",
      border: "",
      width: "4em",
      height: "4em"
    };

  }

  selectedColor = (cor, backgroundColor, mainBackgroundColor) => {
    this.setState({
      selectedColor: cor,
    });

    let body = document.getElementById('body')
    body.style.background = backgroundColor;

    let main = document.getElementById('navStyle')
    main.style.backgroundColor = mainBackgroundColor;

  };

  render() {
    return (
      <>
        <div className='main'>

          <div id='navStyle'>

            <div
              className='bolaCor'
              id='bolaBranco'
              style={this.state.selectedColor === 'branco' ? this.btnStyleOn : this.btnStyleOff}
              onClick={() => this.selectedColor('branco', "linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(231,231,231,1) 100%)", "gainsboro")}>
            </div>

            <div
              className='bolaCor'
              id='bolaPreto'
              style={this.state.selectedColor === 'preto' ? this.btnStyleOn : this.btnStyleOff}
              onClick={() => this.selectedColor('preto', "linear-gradient(90deg, rgba(33,33,33,1) 0%, rgba(0,0,0,1) 100%)", "rgb(30, 30, 30)")}>
            </div>

            <div
              className='bolaCor'
              id='bolaVermelho'
              style={this.state.selectedColor === 'vermelho' ? this.btnStyleOn : this.btnStyleOff}
              onClick={() => this.selectedColor('vermelho', "linear-gradient(90deg, #dc0d0d 0%, rgba(149,21,21,1) 100%)", "red")}>
            </div>

            <div
              className='bolaCor'
              id='bolaAmarelo'
              style={this.state.selectedColor === 'amarelo' ? this.btnStyleOn : this.btnStyleOff}
              onClick={() => this.selectedColor('amarelo', "linear-gradient(0deg, rgba(236,246,10,1) 0%, #ffc800 100%)", "yellow")}>
            </div>

            <div
              className='bolaCor'
              id='bolaVerde'
              style={this.state.selectedColor === 'verde' ? this.btnStyleOn : this.btnStyleOff}
              onClick={() => this.selectedColor('verde', "linear-gradient(90deg, rgba(15,237,90,1) 0%, rgba(39,245,32,1) 50%, #4ebc3b 100%)", "#20be1a")}>
            </div>

            <div
              className='bolaCor'
              id='bolaRoxo'
              style={this.state.selectedColor === 'roxo' ? this.btnStyleOn : this.btnStyleOff}
              onClick={() => this.selectedColor('roxo', "linear-gradient(90deg, rgba(124,58,180,1) 0%, rgba(161,16,179,1) 50%, rgba(182,73,117,1) 100%)", "#6f0877")}>
            </div>

            {/*onClick Params = nome do tema selecionado, cor do fundo, cor da barra de seleção*/}
          </div>
        </div>
      </>
    )
  }
}

export default App
