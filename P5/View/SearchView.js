import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import NotificationInfo from "./NotificationBoxView";

export default class Search extends Component {
    componentDidMount() {
        this.props.SearchInit();
    }

    render() {

        /*create pages list*/
        let pageCount = Math.ceil(this.props.resultsCount / 5);
        let pages = [];
        for (let i = 1; i <= pageCount; i++) {
            pages.push(<div key={`pageLink-${i}`} className="button page-link" onClick={this.props.PageChange}>
                {i}
            </div>)
        }

        let listOfNotices = this.props.searchResult.map((result) =>
            <li key={`notice-${result.id}`} className="notification-box">
                <NotificationInfo data={result}/>
            </li>);

        return(
            <div>
                <form className="form-inner-center search-form">
                    <label>Min Metric: </label>
                    <input
                        id="minMetric"
                        type="number"
                        className="search-input"
                        value={this.props.searchParams.minMetric}
                        onChange={this.props.MinMetricUpdate}/>
                    <label>Max Metric: </label>
                    <input
                        id="maxMetric"
                        type="number"
                        className="search-input"
                        value={this.props.searchParams.maxMetric}
                        onChange={this.props.MaxMetricUpdate}/>

                    <label>Min Price: </label>
                    <input
                        id="minPrice"
                        type="number"
                        className="search-input"
                        value={this.props.searchParams.minPrice}
                        onChange={this.props.MinPriceUpdate}/>
                    <label>Max Price: </label>
                    <input
                        id="maxPrice"
                        type="number"
                        className="search-input"
                        value={this.props.searchParams.maxPrice}
                        onChange={this.props.MaxPriceUpdate}/>

                    <div className="button" onClick={this.props.Search}>Search</div>
                </form>
                <div>Results: </div>
                <ul>{listOfNotices}</ul>

                <div>{pages}</div>
            </div>
        )
    }
}