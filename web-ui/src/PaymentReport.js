import './App.css';
import PaymentReport from '../src/paymentReport.json';
import PaymentData from '../src/PaymentJsonData.json';
import clsx from 'clsx'; 


function PaymentPage() {
  const data = PaymentReport;
  const paymentData = PaymentData;
  const mainTitle = paymentData.payment_title;
  const mainTableContent = paymentData.mainTableContent;
  const mainTableHeader = paymentData.mainTableHeading;
  const subThead = paymentData.subTableHeader;
  const subTbody = paymentData.subTables;
  const rightListItems = paymentData.head_right.map((item) => item.type === "link" ?
    <li> <a className="ahref" href={""}>{item.content}</a></li> : <li>{item.content}</li>
  );

  const leftListItems = paymentData.head_left.map((item) =>
    <li className={item.encoded ? "liReportNumber" : ""}>{item.content}</li>
  );

  return (
    <div className="App">
      <div className="hub-content">
        <div class="header">
          <p class="title_header"> Payment activity example report</p>
        </div>
        <div class="border-box">
          <div class="pdf">
            <p class="text-medium">Download PDF</p>
          </div>
          <div class="report-nav-bar">
             <div className={clsx("text-small","report-info")} dangerouslySetInnerHTML={{__html:data["report_info"]}}></div>
            {data?.report_list?.map((step, index) => {
              return <div className="div-list">
                <div className="circle-1">
                  <p className="alpha-text">{String.fromCharCode(index + 65)}</p>
                </div>
                <div className='list-item'>
                  <p className="text-small-list"><strong>{step.key}</strong> {(step.value).split(step.key).pop()}</p>
                </div>
              </div>
            })}
          </div>
          <div className="rightDiv">
            <p className="paymentActivity">{mainTitle}</p>
            <div>
              <ul className="right">{rightListItems}</ul>
              <ul className="left">{leftListItems}</ul>
            </div>
            <table>
              <thead>
                <tr className="accountSummary"><th>{mainTableHeader}</th></tr>
              </thead>
              <tbody>
                {mainTableContent.map((row, index) => {
                  return (<tr className={index % 2 === 0 ? "trFirst" : ""} key={index}>
                    <td className="tdFirst">{row.Content}</td>
                    <td className="tdLast">{row.Amount}</td>
                  </tr>)
                    ;
                })}
              </tbody>
            </table>
            <div className="line"></div>
            <p className="transactionSummary">{paymentData.subTableHeading}</p>
            {subTbody.map((item, index) => {
              return <table>
                <thead>
                  <tr>
                    <th className="thFirst">{mainTableContent[index].Content}</th>
                    {subThead.map((heading, index) => {
                      return <th className="th" key={heading + index}>{heading}</th>
                    })}
                  </tr>
                </thead>
                <tbody>
                  {item.subTableContent.map((row, index) => {
                    return <tr key={index} className={index % 2 === 0 ? "trFirst" : ""}>
                      <td className={(row.depth && row.depth === "1") ? "expenseSubTd" : "tdFirst"}>{row.content}</td>
                      <td className="td">{row.Debits}</td>
                      <td className="td">{row.Credits}</td>
                      <td className="td">{row.Net}</td>

                    </tr>;
                  })}
                </tbody>
              </table>
            })}
          </div>
          <div >

          </div>
        </div>
      </div>
    </div>

  );
}

export default PaymentPage;
