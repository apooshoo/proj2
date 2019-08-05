var React = require("react");
var Layout = require("./layouts/layout");
var CreditorsList = require("./components/creditors-list");

var sha256 = require('js-sha256');
var SALT = 'bonk';


class User extends React.Component {
  render() {
    let cookies = this.props.cookies;
    let stats = this.props.stats

    let currentTz = new Date();
    let currentDate = new Date().toISOString().substring(0, 10);
    let pay_day = stats.pay_day.toISOString().substring(0, 10);
    let next_pay_day = stats.next_pay_day.toISOString().substring(0, 10);
    let daysBetween = (lateTz, earlyTz) => {
        return Math.round((lateTz - earlyTz)/86400000);
    };
    let daysToPayday = daysBetween(stats.next_pay_day, currentTz);

    let liquidAmt = stats.pay_amount - stats.save_amount - this.props.totalSpend.amount;
    let liquidPercentage = liquidAmt / stats.pay_amount * 100 + "%";

    let creditorsList = this.props.creditors;

    return (
        <Layout cookies={cookies}>
            <div className="row mainwrapper">
                <div className="col col-lg-10 offset-lg-1 col-sm-12 col-12">
                    <div className="col-12 user-wrapper">
                        <p>Payday: {pay_day}</p>
                        <p>Next payday: {next_pay_day}</p>
                        <p>Days to next payday: {daysToPayday}</p>
                        <p>Total Expenditure: {this.props.totalSpend.amount}</p>
                        <p>Liquid Amount: {liquidAmt} ({liquidPercentage})</p>
                        <p>PIE CHART HERE</p>
                        <form method="GET" action={"/"+cookies.userid+"/settings"}>
                            <button type="submit">Settings</button>
                        </form>
                        <form method="GET" action={"/items/history/"+cookies.userid}>
                            <button>Pay History</button>
                        </form>

                        <div id="piechart"></div>
                        <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>




                    </div>
                    <div className="col col-10 offset-1 collapsibles-list">
                        <CreditorsList creditorsList={creditorsList}></CreditorsList>
                    </div>

                </div>
            </div>
        </Layout>


    );
  }
}

module.exports = User;