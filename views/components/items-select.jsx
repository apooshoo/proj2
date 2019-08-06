var React = require('react');

class ItemsSelect extends React.Component {
    render() {

        let itemsList = this.props.itemsList.map(item =>{
            return (
                <option value={item.id}>{item.name}: {item.amount}</option>
            );
        })

        return (

            <form method="GET" action="/items/single/">
                <div className="form-group w-50 mx-auto">
                    <select className="form-control" name="id">
                        <option selected disabled>List of unpaid items</option>
                        {itemsList}
                    </select>
                    <button className="btn btn-dark mt-2" type="submit">Get item</button>
                </div>
            </form>

        );
    }
}

module.exports = ItemsSelect;