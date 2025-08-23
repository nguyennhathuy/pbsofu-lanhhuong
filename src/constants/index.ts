import type { ModuleSidebar } from '../types';
import { IoHome } from "react-icons/io5";
import { FaFileExport } from "react-icons/fa";
import { TbPackageImport } from "react-icons/tb";
import { FaClipboardCheck } from "react-icons/fa";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { FaCameraRetro } from "react-icons/fa";
import { FaHandshake } from "react-icons/fa";
import { FaChartPie } from "react-icons/fa";




export const MODULE_LIST: ModuleSidebar[] = [
    {
        name: 'Tồn kho',
        icon: IoHome
    },
    {
        name: 'Nhập kho',
        icon: TbPackageImport
    },
    {
        name: 'Xuất kho',
        icon: FaFileExport
    },
    {
        name: 'Kiểm kê',
        icon: FaClipboardCheck
    },
    {
        name: 'Lệnh sản xuất',
        icon: MdOutlineProductionQuantityLimits
    },
    {
        name: 'Nhà cung cấp',
        icon: FaHandshake
    },
    {
        name: 'Báo cáo hiệu suất sản xuất',
        icon: FaChartPie
    },
    {
        name: 'Báo cáo nguồn lực',
        icon: FaChartPie
    },
    
    {
        name: '5S',
        icon: FaCameraRetro
    }
];