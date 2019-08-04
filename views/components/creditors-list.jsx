var React = require('react');

class CreditorsList extends React.Component {
    render() {


        let creditorsList = this.props.creditorsList.map(creditor =>{
            return (
                <li className="list-group-item">{creditor.creditor}: {creditor.amount}</li>
            );
        })

        return (

            <div class="panel-group">
              <div class="panel panel-default">
                <div class="panel-heading">
                  <h4 class="panel-title">
                    <a data-toggle="collapse" href="#collapse1">Total amount owed to each creditor</a>
                  </h4>
                </div>
                <div id="collapse1" class="panel-collapse collapse">
                  <ul class="list-group text-center w-75">
                    {creditorsList}
                  </ul>
                  <div class="panel-footer">Footer</div>
                </div>
              </div>
            </div>

        );
    }
}

module.exports = CreditorsList;
// <div class="panel-group">
//   <div class="panel panel-default">
//     <div class="panel-heading">
//       <h4 class="panel-title">
//         <a data-toggle="collapse" href="#collapse1">Total amount owed to each creditor</a>
//       </h4>
//     </div>
//     <div id="collapse1" class="panel-collapse collapse">
//       <ul class="list-group">
//         <li class="list-group-item">One</li>
//         <li class="list-group-item">Two</li>
//         <li class="list-group-item">Three</li>
//       </ul>
//       <div class="panel-footer">Footer</div>
//     </div>
//   </div>
// </div>