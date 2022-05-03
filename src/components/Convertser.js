// import React from 'react';

// const Convertser = () => {
//   return (
//     <div className="converter">
//       <div className="converter-content">
//         <h2>Currency Calculator</h2>
//         <div className="form-item">
//           <select name="select" onChange={firstFormChangeHandler} value={firstForm.select}>
//             <option value="UAH">UAH</option>
//             <option value="USD">USD</option>
//             <option value="EUR">EUR</option>
//           </select>
//           <input
//             onChange={firstFormChangeHandler}
//             name="input"
//             placeholder="From"
//             value={firstForm.input}
//             type="number"
//           />
//         </div>
//         <div className="form-item">
//           <select onChange={secondFormChangeHandler} name="select" value={secondForm.select}>
//             <option value="UAH">UAH</option>
//             <option value="USD">USD</option>
//             <option value="EUR">EUR</option>
//           </select>
//           <input
//             type="number"
//             onChange={secondFormChangeHandler}
//             name="input"
//             placeholder="To"
//             value={secondForm.input}
//           />
//         </div>
//         {firstForm.select === secondForm.select && (
//           <p className="error">Please choose different currencies</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Convertser;
