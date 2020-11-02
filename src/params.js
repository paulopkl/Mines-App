import { Dimensions } from 'react-native';

const params = {
    blockSize: 30,
    borderSize: 5,
    fontSize: 15,
    headerRatio: 0.15, // Proporção do painel superior na tela
    difficultLevel: 0.1,
    // Pegar a Largura total da tela e dividir por 30
    getColumnsAmount() {
        return Math.floor(Dimensions.get('window').width / this.blockSize)
    },
    getRowsAmount() {
        // altura total * (1 - 0.15) = 0.85
        const boardHeight = Dimensions.get('window').height * (1 - this.headerRatio); // 0.85
        return Math.floor(boardHeight / this.blockSize); // (altura total * 0.85 / 30)
    }
}

export default params;