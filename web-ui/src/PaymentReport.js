import './App.css';
import PaymentReport from '../src/paymentReport.json';
import clsx from 'clsx';
import { TEXT_CONSTANT } from './constants/constant';
import Payment from './Payment';

function PaymentPage() {
  const data = PaymentReport;

  return (
    <div className="App">
      <div className="hub-content">
        <div class="header">
          <p class="title-header">{TEXT_CONSTANT.PAYMENT_EXAMPLE_REPORT}</p>
        </div>
        <div class="border-box">
          <div class="pdf">
            <p class="text-medium">{TEXT_CONSTANT.DOWNLOAD_PDF}</p>
          </div>
          <div style={{display: 'flex'}}>
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
          {
            <div className="payment">
                <Payment />
            </div>
            }
            </div>
          <div >

          </div>
        </div>
      </div>
    </div>

  );
}

export default PaymentPage;
