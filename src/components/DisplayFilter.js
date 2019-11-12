import React from 'react'

export default function DisplayFilter(props) {
    return (
        <div className="filters">
            <h4 className="title">Sizes:</h4>
            <div className="filters-available-size">
                <label>
                <input type="checkbox" value="XS" />
                <span className="checkmark">XS</span>
                </label>
                <label>
                <input type="checkbox" value="S" />
                <span className="checkmark">S</span>
                </label>
                <label>
                <input type="checkbox" value="M" />
                <span className="checkmark">M</span>
                </label>
                <label>
                <input type="checkbox" value="ML" />
                <span className="checkmark">ML</span>
                </label>
                <label>
                <input type="checkbox" value="L" />
                <span className="checkmark">L</span>
                </label>
                <label>
                <input type="checkbox" value="XL" />
                <span className="checkmark">XL</span>
                </label>
                <label>
                <input type="checkbox" value="XXL" />
                <span className="checkmark">XXL</span>
                </label>
            </div>
            <div className="star-button-container">
                <small>Leave a star on Github if this repository was useful :)</small>
                <span>
                <div className="widget">
                    <a className="btn">&#9733; Star</a>
                    <a className="social-count">940</a>
                </div>
                </span>
            </div>
        </div>
    )
}