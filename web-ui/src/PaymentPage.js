import './App.css';
import PaymentReport from '../src/paymentReport.json';
import clsx from 'clsx'; 


function PaymentPage() {
  const data = PaymentReport;
 

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
                <p class="text-small">
                    The <strong>Payment Activity Report</strong> provides account activity summary for revenues, expenses, transfers, and tax. Sellers can select custom time period, 
                    and download the report in PDF format if needed. Sellers can also download detailed transaction report in .
                    CSV format for revenues, expense, transfers, and tax.
                </p>
                {data?.report_list?.map((step, index) => {
                  return <div className="div-list">
                    <div className="circle-1">
                      <p className="alpha-text-1">{String.fromCharCode(index + 65)}</p>
                    </div>
                    <div className='list-item'>
                        <p className="text-small-list"><strong>{step.key}</strong> {(step.value).split(step.key).pop()}</p>
                    </div>
                  </div>
                })}
            </div>
      
            <div >
          
        </div>
        </div>
        <div className="child-content">
          <div className={clsx("text-small-01","text-small-color")}>
            {data.hub_info}
          </div>
        </div>
        
      </div>
    </div>

  );
}

export default PaymentPage;
