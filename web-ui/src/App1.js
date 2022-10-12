import './Payment.css';
import PaymentData from '../src/PaymentJsonData.json';


function App1() {
    const data = PaymentData;
    const mainTitle = data.payment_title;
    const mainTableContent = data.mainTableContent;
    const mainTableHeader = data.mainTableHeading;
    const subThead = data.subTableHeader;
    const subTbody = data.subTables;
    const rightListItems = data.head_right.map((item) => item.type==="link" ? 
    <li> <a className="ahref" href={""}>{item.content}</a></li>  : <li>{item.content}</li>
  );

    const leftListItems = data.head_left.map((item)=>
    <li className = {item.encoded? "liReportNumber" :""}>{item.content}</li>
    );

    return (
        <div className="rightDiv">
          <p className="paymentActivity">{mainTitle}</p>
          <div>
            <ul className="right">{rightListItems}</ul>
            <ul className="left">{leftListItems}</ul>
          </div>
          <p className="accountSummary">{mainTableHeader}</p>
          <table>
            <tbody>
              {mainTableContent.map((row, index) => {
                return(<tr className={index%2===0 ? "trFirst" : ""} key={index}>
                  <td className="tdFirst">{row.Content}</td>
                  <td className="tdLast">{row.Amount}</td>
                </tr>)
                ;
              })}
            </tbody>
          </table>
          <div className="line"></div>
          <p className="transactionSummary">{data.subTableHeading}</p>
          {subTbody.map((item,index) => { 
            return <table>
            <thead>
              <tr>{mainTableContent[index].Content}</tr>
              <tr>
                {subThead.map((heading, index) => {
                  return <th className={index===0 ? "thFirst" : "th"}key={heading + index}>{heading}</th>
                })}
              </tr>
            </thead>
            <tbody>
              {item.subTableContent.map((row, index) => {
                return <tr key={index} className={index%2===0 ? "trFirst" : ""}>
                  <td className={(row.depth && row.depth===1)?"expenseSubTd":"td"}>{row.content}</td>
                  <td className="td">{row.Debits}</td>
                  <td className="td">{row.Credits}</td>
                  <td className="td">{row.Net}</td>
                  
                </tr>;
              })}
            </tbody>
          </table>
           })}
        </div>
    );
}

export default App1;