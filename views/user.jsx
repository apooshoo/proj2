var React = require("react");
var Layout = require("./layouts/layout");
var ItemsList = require("./components/items-list");

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

    return (
        <Layout cookies={cookies}>
            <div className="row mainwrapper">
                <div className="col col-lg-10 offset-lg-1 col-sm-12 col-12">
                    <div className="col-12 user-wrapper">
                        <p>Payday: {pay_day}</p>
                        <p>Next payday: {next_pay_day}</p>
                        <p>Days to next payday: {daysToPayday}</p>

                        <p>PIE CHART HERE</p>
                        <a href={"/"+cookies.userid+"/settings"}>Settings</a>
                    </div>



                </div>
            </div>
        </Layout>


    );
  }
}

module.exports = User;