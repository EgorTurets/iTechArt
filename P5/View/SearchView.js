import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'
import NotificationInfo from "./NotificationBoxView";

export default class Search extends Component {
    componentDidMount() {
        this.props.SearchInit();

        let elem = findDOMNode(this.refs.radioNotRent);
        elem.checked = 'checked';
    }

    render() {

        /*create pages list*/
        let pageCount = Math.ceil(this.props.resultsCount / 5);
        let pages = [];
        for (let i = 1; i <= pageCount; i++) {
            pages.push(<div key={`pageLink-${i}`} className={i === this.props.currentPage? "button button page-link active-page" : "button page-link"} onClick={this.props.PageChange}>
                {i}
            </div>)
        }

        let listOfNotices = this.props.searchResult.map((result) =>
            <li key={`notice-${result.id}`} className="notification-box">
                <NotificationInfo data={result}/>
            </li>);

        return(
            <div>
                <form className="form-inner-center search-form" onSubmit={this.props.Search}>
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
                    <div>
                        <div className="radio-button-box">
                            <input type="radio" name='isForRent'
                                   id="forRent"
                                   value={true}
                                   onClick={this.props.ForRentChange}/>
                            For Rent
                        </div>
                        <div className="radio-button-box">
                            <input type="radio" name='isForRent'
                                   id="notForRent"
                                   value={false}
                                   onClick={this.props.ForRentChange}
                                   ref="radioNotRent"/>
                            Housing needs
                        </div>
                    </div>
                    <input type="submit" className="button" value="Search"/>
                </form>
                <div>Results: </div>
                <ul>{listOfNotices}</ul>

                <div>{pages}</div>
            </div>
        )
    }
}