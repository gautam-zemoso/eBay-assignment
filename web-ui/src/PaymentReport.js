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
            <div className={clsx("text-small","report-info")} dangerouslySetInnerHTML={{ __html: data["report_info"] }}></div>
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
                <tr className="accountSummary"><th className="accountSummarySub">{mainTableHeader}</th></tr>
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
                    <th className={index===0 ? "thFirst" : "thFirstSub"}>
                      <span className='circle-top-span-h1'>
                        {index === 0 &&
                          <span class="circle-2-h1">
                            <p class="alpha-text">A</p>
                          </span>
                        }
                        <span className={index===0 ?"content-span-h1":""}>{mainTableContent[index].Content}</span>
                      </span>
                    </th>
                    {subThead.map((heading, index1) => {
                      return <th className={index1===2 ?"thLast":"th"} key={heading + index1}>
                        {(index === 0 && index1!==2) ?
                        <span className='circle-top-span'>
                          
                            <span class="circle-2">
                              <p class="alpha-text">A</p>
                            </span>
                          <span className="content-span">{heading}</span></span> :
                          <p>{heading}</p>}
                      </th>
                    })}
                  </tr>
                </thead>
                <tbody>
                  {item.subTableContent.map((row, index) => {
                    return <tr key={index} className={index % 2 === 0 ? "trFirst" : ""}>
                      <td className={(row.depth && row.depth === "1") ? "expenseSubTd" : "tdFirst"}>{row.content}</td>
                      <td className={(row.Debits) === '--' ? "tdHyphenDebit" : "td"}>{row.Debits}</td>
                      <td className={(row.Credits) === '--' ? "tdHyphenCredit" : "td"}>{row.Credits}</td>
                      <td className={(row.Net) === '--' ? "tdHyphenNet" : "tdLast"}>{row.Net}</td>

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
