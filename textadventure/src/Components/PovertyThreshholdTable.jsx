import React from 'react';

export default function PovertyThreshholdTable() {

    const threshholds = [
        {num: 1, guideline: "$12,880"},
        {num: 2, guideline: "$17,420"},
        {num: 3, guideline: "$21,960"},
        {num: 4, guideline: "$26,500"},
        {num: 5, guideline: "$31,040"},
        {num: 6, guideline: "$35,580"},
        {num: 7, guideline: "$40,120"},
        {num: 8, guideline: "$44,660"},
    ]

    const renderRow = (threshold, index) => {
        return (
            <tr key={index}>
              <td>{threshold.num}</td>
              <td>{threshold.guideline}</td>
            </tr>
        )
    }

    return (

        <div>
            <h4 style={{textAlign: 'center', fontWeight: 'bold'}}>Poverty Guidelines for the 48 Contigous States and the District of Columbia</h4>
            <table className="table table-bordered">
                <thead className="thead-light">
                    <tr className="table-header">
                        <th>Persons in Family/Household</th>
                        <th>Poverty Guideline</th>
                    </tr>
                </thead>
                <tbody>
                    {threshholds.map(renderRow)}
                </tbody>
            </table>
        </div>

        // <TableContainer component={Paper}>
        //     <Table aria-label="simple table">
        //         <TableHead>
        //             <TableRow>
        //                 <TableCell align="left"> Persons in family/household </TableCell>
        //                 <TableCell> Poverty Guideline </TableCell>
        //             </TableRow>
        //         </TableHead>
        //         <TableBody>
        //             <TableRow>
        //                 <TableCell>1</TableCell>
        //                 <TableCell>$12,880</TableCell>
        //             </TableRow>
        //             <TableRow>
        //                 <TableCell>2</TableCell>
        //                 <TableCell>$17420</TableCell>
        //             </TableRow>
        //         </TableBody>
        //     </Table>
        // </TableContainer>
    );
}