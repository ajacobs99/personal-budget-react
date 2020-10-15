// import React, { Component } from 'react';
// import axios from 'axios'; 
// import Chart from 'chart.js'; 

// function HomePage() {
//     var dataSource = {
//         datasets: [
//             {
//                 data: [30, 350, 90], 
//                 backgroundColor: [
//                     '#ffcd56',
//                     '#fd6b19',
//                     '#36a2eb',
//                     '#b4f0be',
//                     '#963793',
//                     '#e0d11a',
//                     '#ffc0cb',

//                 ],
//             }
//         ],
//         labels: [
//             'Eat out',
//             'Rent',
//             'Groceries'
//         ]
//     };

//     function createChart() {
//         const ctx = document.getElementById("myChart").getContext("2d"); 
//         const myChart = new Chart(ctx, {
//             type: 'pie',
//             data: dataSource
//         }); 
//     }
    
//     function getBudget() // = () => setState(currentState)
//     {
//         axios.get('http://localhost:3000/budget')
//         .then(function (res) {
//             console.log(res.data); 
//             //this.setState({datasource}); 
//             // let i = 0; 
//             let labels=[]; 
//             let datasets = []; 
//             for (var i = 0; i < res.data.myBudget.length; i++) {
//                 datasets[0].data[i] = res.data.myBudget[i].budget; 
//                 labels[i] = res.data.myBudget[i].title; 
//             }
//             createChart(); 
//         }); 
//     }
//     getBudget(); 

//   return (
//     <div className="container center">

//     <div className="page-area">

//         <div className="text-box">
//             <h1 id="main">Stay on track</h1>
//             <p>
//                 Do you know where you are spending your money? If you really stop to track it down,
//                 you would get surprised! Proper budget management depends on real data... and this
//                 app will help you with that!
//             </p>
//         </div>

//         <div className="text-box">
//             <h1>Alerts</h1>
//             <p>
//                 What if your clothing budget ended? You will get an alert. The goal is to never go over the budget.
//             </p>
//         </div>

//         <div className="text-box">
//             <h1>Results</h1>
//             <p>
//                 People who stick to a financial plan, budgeting every expense, get out of debt faster!
//                 Also, they to live happier lives... since they expend without guilt or fear... 
//                 because they know it is all good and accounted for.
//             </p>
//         </div>

//         <div className="text-box">
//             <h1>Free</h1>
//             <p>
//                 This app is free!!! And you are the only one holding your data!
//             </p>
//         </div>

//         <div className="text-box">
//             <h1>Stay on track</h1>
//             <p>
//                 Do you know where you are spending your money? If you really stop to track it down,
//                 you would get surprised! Proper budget management depends on real data... and this
//                 app will help you with that!
//             </p>
//         </div>

//         <div className="text-box">
//             <h1>Alerts</h1>
//             <p>
//                 What if your clothing budget ended? You will get an alert. The goal is to never go over the budget.
//             </p>
//         </div>

//         <div className="text-box">
//             <h1>Results</h1>
//             <p>
//                 People who stick to a financial plan, budgeting every expense, get out of debt faster!
//                 Also, they to live happier lives... since they expend without guilt or fear... 
//                 because they know it is all good and accounted for.
//             </p>
//         </div>

//         <div className="text-box">
//             <h1>Chart</h1>
//             <p>
//                  <canvas id="myChart" width="400" height="400"></canvas>
//             </p>
//         </div>

//     </div>

// </div>
//   );
// }

// export default HomePage;
