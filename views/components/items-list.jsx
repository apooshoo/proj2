var React = require('react');

            // .sort(function(a, b){
        //     let variable = 'amount';
        //     return a[variable] - b[variable];
        //     // return b.amount - a.amount; //descending
        // })
let counter = 0;
class ItemsList extends React.Component {
    render() {
        let counter = 0;
        let itemsList = this.props.itemsList.map(item =>{
            counter += 1;
            let created_at_date = item.created_at.toISOString().substring(0, 10);
            // console.log("created date", created_at_date)

            let updated_at_date = item.updated_at.toISOString().substring(0, 10);
            // console.log("updated date", updated_at_date);

            let due_date_date = item.due_date.toISOString().replace(/T[\S\s]+/,'');
            // console.log(due_date_date)
            let recurringState = "On";
            if (item.recurring === false){
                recurringState = "Off";
            }
            let recurringDisplay = "Recurring: " + recurringState;



            return (
                <form className="col-lg-6 col-sm-12 col-12">
                    <div className="card my-2">
                        <a href={"/items/single/"+item.id}>
                            <div className="card-header form-group bg-light">
                                <label className="control-label" htmlFor="name-input">Item:</label>
                                <input type="text" className="form-control" name="name" id="name-input" defaultValue={item.name}/>
                            </div>
                        </a>
                        <div className="card-body">
                            <div className="form-group">
                                <label htmlFor="item-input">Amount:</label>
                                <input type="text" className="form-control" name="amount" id="item-input" defaultValue={item.amount}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="item-input">Creditor:</label>
                                <input type="text" className="form-control" name="creditor" id="item-input" defaultValue={item.creditor}/>
                            </div>
                            <div className="checkbox">
                              <label>
                                <input type="checkbox" name="recurring" className={"recurring "+recurringState} id={"recurringCheckbox"+counter} data-toggle="toggle"/>
                                {recurringDisplay}
                              </label>
                            </div>
                            <div className="form-group">
                                <label htmlFor="due_date-input">Due Date:</label>
                                <input type="date" className="form-control" name="due_date" id="due_date-input" defaultValue={due_date_date}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="created_at-input">Date Created:</label>
                                <input type="text" className="form-control" name="created_at" id="created_at-input" defaultValue={created_at_date} disabled/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="updated_at-input">Last Updated</label>
                                <input type="text" className="form-control" name="updated_at" id="updated_at-input" defaultValue={updated_at_date} disabled/>
                            </div>



                                <button className="btn btn-primary col-3" type="submit" formMethod="POST" formAction={"/items/"+item.id+"?_method=PUT"}>Edit</button>
                                <button className="btn btn-danger col-3" type="submit" formMethod="POST" formAction={"/items/"+item.id+"?_method=DELETE"}>Delete</button>
                                <button className="btn btn-success col-3 offset-3" type="submit" formMethod="POST" formAction={"/items/pay/"+item.id+"?_method=PUT"}>Pay</button>

                        </div>
                    </div>
                </form>
            );
        });

        return (
            <div className="d-flex flex-wrap show-all-wrapper">
                {itemsList}
            </div>
        );



    }
}

module.exports = ItemsList;
// for (let i=1; i <= counter; i++){
//     let checkBtn = getElementById("recurringCheckbox" + i);
//     if(checkBtn.className.includes("On")){
//         checkBtn.checked = true;
//     } else {
//         checkBtn.checked = false;
//     }
// }