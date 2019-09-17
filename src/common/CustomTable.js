import React from 'react';
import ReactTable from 'react-table';

const CustomTable = (props) => {
    return (
        <ReactTable
            data={props.data}
            columns={props.columns}
            {...props}
            previousText="< Back"
            nextText="Next >"
            defaultPageSize={10}
            resizable={true}
        />
    );
};
export default CustomTable;
