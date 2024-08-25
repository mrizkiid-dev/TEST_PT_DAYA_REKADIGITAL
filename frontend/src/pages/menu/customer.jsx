import { NavLink, Outlet } from "react-router-dom"
import PropTypes from 'prop-types';
import ROUTES from "../../utils/route";

function CustomerPage() {
    const TabLinks = ({path, title}) => {
        return (
            <NavLink to={path}>
                {
                    ({isActive}) => 
                        <div className={` flex-col w-full pb-4 ${isActive ? 'border-b-2 border-secondary' : '' }`}>
                            <p className={`overflow-ellipsis text-center font-bold leading-5 text-[14px] ${isActive ? '' : 'text-disable'}`}>{title}</p>
                        </div>
                }
            </NavLink>
        )
    }
    TabLinks.propTypes = {
        path: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired
    }


    return(
        <div className="flex flex-col px-6 pt-8 pb-6 w-full h-svh">

            <header className="flex flex-col gap-1 border-b border-border_color w-full">
                <h1 className="text-2xl leading-[36px] font-bold">Customer</h1>
                <div className="flex flex-row justify-between">
                    <p className="text-[14px] leading-[28px] text-disable overflow-ellipsis ">You can manage and organize your customer and other things here</p>
                    <nav className="">
                        <ol className="flex flex-row w-[600px] gap-1">
                            <li className="flex-1">
                                <TabLinks path={ROUTES.menu.customer.index} title="Customer"/>
                            </li>
                            <li className="flex-1">
                                <TabLinks path={ROUTES.menu.customer.promo} title="Promo"/>
                            </li>
                            <li className="flex-1">
                                <TabLinks path={ROUTES.menu.customer.voucher} title="Voucher"/>
                            </li>
                        </ol>
                    </nav>
                </div>
            </header>

            <div className="h-full pt-4">
                <Outlet />
            </div>

        </div>
    )
}

export default CustomerPage