import React from 'react';
import CustomTable from '../../common/CustomTable';
import { CheckListWrapper } from '../SideNav.styled';
import { data, columns } from '../../config/tableData'

const CheckList = (props) => {
    return (
        <CheckListWrapper>
            <h1>Check List</h1>
            <CustomTable data={data} columns={columns} sortable minRows={5} showPageSizeOptions={false} />
        </CheckListWrapper>
    );
};
export default CheckList;