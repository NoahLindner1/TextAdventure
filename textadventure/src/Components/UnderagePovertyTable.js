import React from 'react';

export default function UnderagePovertyTable() {

    const categories = [
        {name: "All children under 18", num: "10,466,000", percent: "14.4%"},
        {name: "White-only, Non-hispanic", num: "303,000", percent: "8.3%"},
        {name: "Black", num: "2,865,000", percent: "26.4%"},
        {name: "Hispanic", num: "3,888,000", percent: "20.9%"},
        {name: "Asian", num: "286,000", percent: "7.3%"},
    ]

    const renderRow = (category, index) => {
        return (
            <tr key={index}>
              <td>{category.name}</td>
              <td>{category.num}</td>
              <td>{category.percent}</td>
            </tr>
        )
    }

    return (

        <div>
            <h4 style={{textAlign: 'center', fontWeight: 'bold'}}>Children Under 18 Living in Poverty</h4>
            <table className="table table-bordered">
                <thead className="thead-light" >
                    <tr className="table-header">
                        <th>Category</th>
                        <th>Number (in thousands)</th>
                        <th>Percent</th>
                    </tr>
                </thead>
                <tbody>
                    {categories.map(renderRow)}
                </tbody>
            </table>
        </div>
    );
}