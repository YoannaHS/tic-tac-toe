
  var container = document.querySelector('.tictactoe');
  container.addEventListener('click', onCellClick);
  function onCelldasClick(event) {
    var target = event.target;
    var dataset = target.dataset;
    if (dataset && dataset.row) {
      console.log('pos', dataset.row, dataset.column);
    }
  }


// window.onload=function(){
//     var board=document.querySelector('.board-js');
// board.addEventListener('click',addX);
// };
// var centinel=false;
// function addX(event){
//     if(centinel)
//         event.target.textContent='X';
//     else
//         event.target.textContent='O';
//         centinel=!centinel;
// }
// board.addEventListener('click', reset);
// function reset() {
//     document.getElementById("board-js").reset();
// }
