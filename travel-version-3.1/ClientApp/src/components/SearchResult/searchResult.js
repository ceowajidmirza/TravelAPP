import React, { Component } from 'react';


export default class searchResult extends Component {
    state = {
        loading: true,
    };

    async componentDidMount() {
        const URL = "http://api.travelpayouts.com/v2/prices/latest?currency=usd&period_type=year&page=1&limit=30&show_to_affiliates=true&sorting=price&trip_class=0&token=b17a27cb284f1301cf8fa6ff30523d35";
        const response = await fetch(URL);
        const data = await response.json();
        console.log(data);
    }

    render() {
        return (
            <div>
                {this.state.loading ? <div>Loading....</div> : <div>price history....</div>}
            </div>
        );
    }
}
