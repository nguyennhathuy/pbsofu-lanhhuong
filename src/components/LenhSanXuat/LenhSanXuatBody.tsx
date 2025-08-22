import NCCBodyTable from "../NCC/NCCBodyTable";
import { tableData, tableTitle } from "./LenhSanXuat.constant";
import LenhSanXuatBodyInfo from "./LenhSanXuatBodyInfo";



export default function LenhSanXuatBody({ sections, title, setEditUser, setIsOpen }: any) {
    return (
        <div className="flex-1 mt-[5px] mb-[5px] rounded-t-[10px] bg-white overflow-hidden">
            <NCCBodyTable 
                tableData={tableData}
                tableTitle={tableTitle}
                setEditUser={setEditUser}
                setIsOpen={setIsOpen}
            />
            {/* <LenhSanXuatBodyInfo
                title={title}
                sections={sections}
            /> */}
        </div>
    );
}