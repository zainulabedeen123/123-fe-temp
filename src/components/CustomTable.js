import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { RiArrowUpDownFill } from "react-icons/ri";

const CustomTable = ({ columns, data, withSelectAll }) => {
    const [selectedAll, setSelectedAll] = useState(false);
    const [selectedRows, setSelectedRows] = useState(new Array(data.length).fill(false));

    const handleSelectAll = () => {
        const newSelectedAll = !selectedAll;
        setSelectedAll(newSelectedAll);
        setSelectedRows(new Array(data.length).fill(newSelectedAll));
    };

    const handleSelectRow = (index) => {
        const newSelectedRows = [...selectedRows];
        newSelectedRows[index] = !newSelectedRows[index];
        setSelectedRows(newSelectedRows);

        if (newSelectedRows.every(Boolean)) {
            setSelectedAll(true);
        } else {
            setSelectedAll(false);
        }
    };

    return (
        <table className="w-full text-sm text-left">
            <thead className="text-xs bg-[#252d33]">
                <tr>
                    {withSelectAll && (
                        <th scope="col" className="px-6 py-2">
                            <label className="container">
                                <input
                                    type="checkbox"
                                    checked={selectedAll}
                                    onChange={handleSelectAll}
                                />
                                <span className="checkmark"></span>
                            </label>
                        </th>
                    )}
                    {columns.map((col, index) => (
                        <th key={index} scope="col" className="px-6 py-2">
                            <div className="flex items-center gap-2">
                                <span>{col.label}</span>
                                {col.sortable && <RiArrowUpDownFill className='inline-block' />}
                            </div>
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((row, rowIndex) => (
                    <tr key={rowIndex} className={`odd:bg-[#2d363d] even:bg-[#343e46]`}>
                        {withSelectAll && (
                            <td className="px-6 py-3 max-w-xs overflow-hidden text-ellipsis whitespace-nowrap text-wrap">
                                <label className="container">
                                    <input
                                        type="checkbox"
                                        checked={selectedRows[rowIndex]}
                                        onChange={() => handleSelectRow(rowIndex)}
                                    />
                                    <span className="checkmark"></span>
                                </label>
                            </td>
                        )}
                        {columns.map((col, colIndex) => (
                            <td key={colIndex} className="px-5 py-1 max-w-xs overflow-hidden text-ellipsis whitespace-nowrap text-wrap">
                                {col.render ? col.render(row[col.field], row, rowIndex) : row[col.field]}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

CustomTable.propTypes = {
    columns: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.string.isRequired,
        field: PropTypes.string.isRequired,
        sortable: PropTypes.bool,
        render: PropTypes.func
    })).isRequired,
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    withSelectAll: PropTypes.bool
};

CustomTable.defaultProps = {
    withSelectAll: true
};

export default CustomTable;
