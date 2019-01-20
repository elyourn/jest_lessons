import React from 'react';

const Table = ({ data }) => (
    <table className="table table-sm" data-test="guess-words">
        <thead className="thead-light">
            <tr>
                <th>
                    Guess
                </th>
                <th>
                    Matching Letters
                </th>
            </tr>
        </thead>
        <tbody>
            {data.map((item, index) => (
                <tr key={index} data-test="guess-word">
                    <td>
                        {item.guessedWord}
                    </td>
                    <td>
                        {item.lettersMatchCount}
                    </td>
                </tr>
            ))}
        </tbody>
    </table>
);

export default Table;
